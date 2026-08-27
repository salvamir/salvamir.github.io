import type { ContentDetails } from "../../plugins/emitters/contentIndex"
import {
  SimulationNodeDatum,
  SimulationLinkDatum,
  Simulation,
  forceSimulation,
  forceManyBody,
  forceCenter,
  forceLink,
  forceCollide,
  forceRadial,
  zoomIdentity,
  select,
  drag,
  zoom,
} from "d3"
import {
  Text,
  Graphics,
  Application,
  Container,
  Circle,
} from "pixi.js"
import {
  Group as TweenGroup,
  Tween as Tweened,
} from "@tweenjs/tween.js"
import {
  registerEscapeHandler,
  removeAllChildren,
} from "./util"
import {
  FullSlug,
  SimpleSlug,
  resolveRelative,
  simplifySlug,
} from "../../util/path"
import { D3Config } from "../Graph"

type GraphicsInfo = {
  color: string
  gfx: Graphics
  alpha: number
  active: boolean
}

type NodeData = {
  id: SimpleSlug
  text: string
  tags: string[]
} & SimulationNodeDatum

type SimpleLinkData = {
  source: SimpleSlug
  target: SimpleSlug
}

type LinkData = {
  source: NodeData
  target: NodeData
} & SimulationLinkDatum<NodeData>

type LinkRenderData = GraphicsInfo & {
  simulationData: LinkData
}

type NodeRenderData = GraphicsInfo & {
  simulationData: NodeData
  label: Text
}

const localStorageKey = "graph-visited"

function getVisited(): Set<SimpleSlug> {
  return new Set(
    JSON.parse(
      localStorage.getItem(localStorageKey) ?? "[]",
    ),
  )
}

function addToVisited(slug: SimpleSlug) {
  const visited = getVisited()
  visited.add(slug)
  localStorage.setItem(
    localStorageKey,
    JSON.stringify([...visited]),
  )
}

type TweenNode = {
  update: (time: number) => void
  stop: () => void
}

async function renderGraph(
  graph: HTMLElement,
  fullSlug: FullSlug,
  overrideConfig?: Partial<D3Config>,
) {
  const slug = simplifySlug(fullSlug)
  const visited = getVisited()

  removeAllChildren(graph)

  const config = {
    ...(JSON.parse(
      graph.dataset["cfg"]!,
    ) as D3Config),
    ...(overrideConfig ?? {}),
  }

  let {
    drag: enableDrag,
    zoom: enableZoom,
    depth,
    scale,
    repelForce,
    centerForce,
    linkDistance,
    fontSize,
    opacityScale,
    focusOnHover,
    enableRadial,
  } = config

  const data: Map<
    SimpleSlug,
    ContentDetails
  > = new Map(
    Object.entries<ContentDetails>(
      await fetchData,
    ).map(([k, v]) => [
      simplifySlug(k as FullSlug),
      v,
    ]),
  )

  /*
   * ============================================================
   * SOLO NOTAS
   * ============================================================
   *
   * Tags y archivos adjuntos quedan completamente fuera
   * del grafo.
   */

  const attachmentExtensions = new Set([
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".svg",
    ".ico",
    ".bmp",
    ".avif",

    ".pdf",

    ".mp3",
    ".wav",
    ".ogg",
    ".m4a",
    ".flac",

    ".mp4",
    ".webm",
    ".mov",
    ".avi",
    ".mkv",

    ".zip",
    ".rar",
    ".7z",
    ".tar",
    ".gz",

    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".ppt",
    ".pptx",

    ".csv",
  ])

  function isNote(id: SimpleSlug): boolean {
    const lower = id.toLowerCase()

    return ![
      ...attachmentExtensions,
    ].some((extension) =>
      lower.endsWith(extension),
    )
  }

  const validLinks = new Set(
    [...data.keys()].filter((id) =>
      isNote(id),
    ),
  )

  /*
   * ============================================================
   * LINKS
   * ============================================================
   */

  const links: SimpleLinkData[] = []

  for (const [
    source,
    details,
  ] of data.entries()) {
    if (!validLinks.has(source)) {
      continue
    }

    const outgoing = details.links ?? []

    for (const dest of outgoing) {
      if (
        validLinks.has(dest) &&
        isNote(dest)
      ) {
        links.push({
          source,
          target: dest,
        })
      }
    }
  }

  /*
   * ============================================================
   * VECINDARIO
   * ============================================================
   *
   * depth >= 0:
   *   muestra solamente las notas cercanas.
   *
   * depth < 0:
   *   muestra TODAS LAS NOTAS.
   */

  const neighbourhood =
    new Set<SimpleSlug>()

  const wl: (
    | SimpleSlug
    | "__SENTINEL"
  )[] = [
    slug,
    "__SENTINEL",
  ]

  if (depth >= 0) {
    while (
      depth >= 0 &&
      wl.length > 0
    ) {
      const cur = wl.shift()!

      if (cur === "__SENTINEL") {
        depth--
        wl.push("__SENTINEL")
      } else {
        if (!validLinks.has(cur)) {
          continue
        }

        neighbourhood.add(cur)

        const outgoing =
          links.filter(
            (l) => l.source === cur,
          )

        const incoming =
          links.filter(
            (l) => l.target === cur,
          )

        wl.push(
          ...outgoing.map(
            (l) => l.target,
          ),
          ...incoming.map(
            (l) => l.source,
          ),
        )
      }
    }
  } else {
    validLinks.forEach((id) =>
      neighbourhood.add(id),
    )
  }

  /*
   * ============================================================
   * NODOS
   * ============================================================
   */

  const nodes = [
    ...neighbourhood,
  ].map((url) => {
    const text =
      data.get(url)?.title ?? url

    return {
      id: url,
      text,
      tags:
        data.get(url)?.tags ?? [],
    }
  })

  const nodeMap = new Map(
    nodes.map((node) => [
      node.id,
      node,
    ]),
  )

  const graphData: {
    nodes: NodeData[]
    links: LinkData[]
  } = {
    nodes,

    links: links
      .filter(
        (l) =>
          neighbourhood.has(
            l.source,
          ) &&
          neighbourhood.has(
            l.target,
          ),
      )
      .map((l) => ({
        source:
          nodeMap.get(
            l.source,
          )!,
        target:
          nodeMap.get(
            l.target,
          )!,
      })),
  }

  const width =
    graph.offsetWidth

  const height = Math.max(
    graph.offsetHeight,
    250,
  )

  /*
   * ============================================================
   * SIMULATION
   * ============================================================
   */

  const simulation: Simulation<
    NodeData,
    LinkData
  > = forceSimulation<NodeData>(
    graphData.nodes,
  )
    .force(
      "charge",
      forceManyBody().strength(
        -100 * repelForce,
      ),
    )
    .force(
      "center",
      forceCenter().strength(
        centerForce,
      ),
    )
    .force(
      "link",
      forceLink(
        graphData.links,
      ).distance(
        linkDistance,
      ),
    )
    .force(
      "collide",
      forceCollide<NodeData>(
        (n) => nodeRadius(n),
      ).iterations(3),
    )

  const radius =
    (Math.min(
      width,
      height,
    ) /
      2) *
    0.8

  if (enableRadial) {
    simulation.force(
      "radial",
      forceRadial(
        radius,
      ).strength(0.2),
    )
  }

  /*
   * ============================================================
   * COLORES
   * ============================================================
   */

  const cssVars = [
    "--secondary",
    "--tertiary",
    "--gray",
    "--light",
    "--lightgray",
    "--dark",
    "--darkgray",
    "--bodyFont",
  ] as const

  const computedStyleMap =
    cssVars.reduce(
      (acc, key) => {
        acc[key] =
          getComputedStyle(
            document.documentElement,
          ).getPropertyValue(
            key,
          )

        return acc
      },
      {} as Record<
        (typeof cssVars)[number],
        string
      >,
    )

  const color = (
    d: NodeData,
  ) => {
    const isCurrent =
      d.id === slug

    if (isCurrent) {
      return computedStyleMap[
        "--secondary"
      ]
    } else if (
      visited.has(d.id)
    ) {
      return computedStyleMap[
        "--tertiary"
      ]
    } else {
      return computedStyleMap[
        "--gray"
      ]
    }
  }

  function nodeRadius(
    d: NodeData,
  ) {
    const numLinks =
      graphData.links.filter(
        (l) =>
          l.source.id ===
            d.id ||
          l.target.id ===
            d.id,
      ).length

    return 2 + Math.sqrt(
      numLinks,
    )
  }

  /*
   * ============================================================
   * HOVER
   * ============================================================
   */

  let hoveredNodeId:
    string | null = null

  let hoveredNeighbours:
    Set<string> = new Set()

  const linkRenderData:
    LinkRenderData[] = []

  const nodeRenderData:
    NodeRenderData[] = []

  function updateHoverInfo(
    newHoveredId:
      string | null,
  ) {
    hoveredNodeId =
      newHoveredId

    if (
      newHoveredId === null
    ) {
      hoveredNeighbours =
        new Set()

      for (const n of
        nodeRenderData) {
        n.active = false
      }

      for (const l of
        linkRenderData) {
        l.active = false
      }
    } else {
      hoveredNeighbours =
        new Set()

      for (const l of
        linkRenderData) {
        const linkData =
          l.simulationData

        if (
          linkData.source.id ===
            newHoveredId ||
          linkData.target.id ===
            newHoveredId
        ) {
          hoveredNeighbours.add(
            linkData.source.id,
          )

          hoveredNeighbours.add(
            linkData.target.id,
          )
        }

        l.active =
          linkData.source.id ===
            newHoveredId ||
          linkData.target.id ===
            newHoveredId
      }

      for (const n of
        nodeRenderData) {
        n.active =
          hoveredNeighbours.has(
            n.simulationData.id,
          )
      }
    }
  }

  let dragStartTime = 0
  let dragging = false

  const tweens = new Map<
    string,
    TweenNode
  >()

  /*
   * ============================================================
   * RENDER LINKS
   * ============================================================
   */

  function renderLinks() {
    tweens
      .get("link")
      ?.stop()

    const tweenGroup =
      new TweenGroup()

    for (const l of
      linkRenderData) {
      let alpha = 1

      if (hoveredNodeId) {
        alpha = l.active
          ? 1
          : 0.15
      }

      l.color = l.active
        ? computedStyleMap[
            "--gray"
          ]
        : computedStyleMap[
            "--lightgray"
          ]

      tweenGroup.add(
        new Tweened<LinkRenderData>(
          l,
        ).to(
          { alpha },
          200,
        ),
      )
    }

    tweenGroup
      .getAll()
      .forEach((tw) =>
        tw.start(),
      )

    tweens.set("link", {
      update:
        tweenGroup.update.bind(
          tweenGroup,
        ),

      stop() {
        tweenGroup
          .getAll()
          .forEach((tw) =>
            tw.stop(),
          )
      },
    })
  }

  /*
   * ============================================================
   * RENDER LABELS
   * ============================================================
   */

  function renderLabels() {
    tweens
      .get("label")
      ?.stop()

    const tweenGroup =
      new TweenGroup()

    const defaultScale =
      1 / scale

    const activeScale =
      defaultScale * 1.05

    for (const n of
      nodeRenderData) {
      const nodeId =
        n.simulationData.id

      if (
        hoveredNodeId ===
        nodeId
      ) {
        tweenGroup.add(
          new Tweened<Text>(
            n.label,
          ).to(
            {
              alpha: 1,
              scale: {
                x: activeScale,
                y: activeScale,
              },
            },
            100,
          ),
        )
      } else {
        tweenGroup.add(
          new Tweened<Text>(
            n.label,
          ).to(
            {
              alpha:
                n.label.alpha,
              scale: {
                x: defaultScale,
                y: defaultScale,
              },
            },
            100,
          ),
        )
      }
    }

    tweenGroup
      .getAll()
      .forEach((tw) =>
        tw.start(),
      )

    tweens.set("label", {
      update:
        tweenGroup.update.bind(
          tweenGroup,
        ),

      stop() {
        tweenGroup
          .getAll()
          .forEach((tw) =>
            tw.stop(),
          )
      },
    })
  }

  /*
   * ============================================================
   * RENDER NODES
   * ============================================================
   */

  function renderNodes() {
    tweens
      .get("hover")
      ?.stop()

    const tweenGroup =
      new TweenGroup()

    for (const n of
      nodeRenderData) {
      let alpha = 1

      if (
        hoveredNodeId !==
          null &&
        focusOnHover
      ) {
        alpha = n.active
          ? 1
          : 0.2
      }

      tweenGroup.add(
        new Tweened<Graphics>(
          n.gfx,
          tweenGroup,
        ).to(
          { alpha },
          200,
        ),
      )
    }

    tweenGroup
      .getAll()
      .forEach((tw) =>
        tw.start(),
      )

    tweens.set("hover", {
      update:
        tweenGroup.update.bind(
          tweenGroup,
        ),

      stop() {
        tweenGroup
          .getAll()
          .forEach((tw) =>
            tw.stop(),
          )
      },
    })
  }

  function renderPixiFromD3() {
    renderNodes()
    renderLinks()
    renderLabels()
  }

  tweens.forEach(
    (tween) => tween.stop(),
  )

  tweens.clear()

  /*
   * ============================================================
   * PIXI
   * ============================================================
   */

  const app =
    new Application()

  await app.init({
    width,
    height,
    antialias: true,
    autoStart: false,
    autoDensity: true,
    backgroundAlpha: 0,
    preference: "webgpu",
    resolution:
      window.devicePixelRatio,
    eventMode: "static",
  })

  graph.appendChild(
    app.canvas,
  )

  /*
   * Asegura que el canvas no bloquee
   * elementos externos del grafo global.
   */
  app.canvas.style.position =
    "relative"
  app.canvas.style.zIndex =
    "1"

  const stage =
    app.stage

  stage.interactive = false

  const labelsContainer =
    new Container<Text>({
      zIndex: 3,
      isRenderGroup: true,
    })

  const nodesContainer =
    new Container<Graphics>({
      zIndex: 2,
      isRenderGroup: true,
    })

  const linkContainer =
    new Container<Graphics>({
      zIndex: 1,
      isRenderGroup: true,
    })

  stage.addChild(
    nodesContainer,
    labelsContainer,
    linkContainer,
  )

  /*
   * ============================================================
   * CREAR NODOS
   * ============================================================
   */

  for (const n of
    graphData.nodes) {
    const nodeId = n.id

    const label =
      new Text({
        interactive: false,
        eventMode: "none",
        text: n.text,
        alpha: 0,
        anchor: {
          x: 0.5,
          y: 1.8,
        },
        style: {
          fontSize:
            fontSize * 12,
          fill:
            computedStyleMap[
              "--dark"
            ],
          fontFamily: `${computedStyleMap["--bodyFont"]}, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", emoji`,
        },
        resolution:
          window.devicePixelRatio *
          4,
      })

    label.scale.set(
      1 / scale,
    )

    let oldLabelOpacity = 0

    const gfx =
      new Graphics({
        interactive: true,
        label: nodeId,
        eventMode: "static",
        hitArea: new Circle(
          0,
          0,
          nodeRadius(n),
        ),
        cursor: "pointer",
      })
        .circle(
          0,
          0,
          nodeRadius(n),
        )
        .fill({
          color: color(n),
        })
        .on(
          "pointerover",
          (e) => {
            updateHoverInfo(
              e.target.label,
            )

            oldLabelOpacity =
              label.alpha

            if (!dragging) {
              renderPixiFromD3()
            }
          },
        )
        .on(
          "pointerleave",
          () => {
            updateHoverInfo(
              null,
            )

            label.alpha =
              oldLabelOpacity

            if (!dragging) {
              renderPixiFromD3()
            }
          },
        )

    nodesContainer.addChild(
      gfx,
    )

    labelsContainer.addChild(
      label,
    )

    const nodeRenderDatum:
      NodeRenderData = {
      simulationData: n,
      gfx,
      label,
      color: color(n),
      alpha: 1,
      active: false,
    }

    nodeRenderData.push(
      nodeRenderDatum,
    )
  }

  /*
   * ============================================================
   * CREAR LINKS
   * ============================================================
   */

  for (const l of
    graphData.links) {
    const gfx =
      new Graphics({
        interactive: false,
        eventMode: "none",
      })

    linkContainer.addChild(
      gfx,
    )

    const linkRenderDatum:
      LinkRenderData = {
      simulationData: l,
      gfx,
      color:
        computedStyleMap[
          "--lightgray"
        ],
      alpha: 1,
      active: false,
    }

    linkRenderData.push(
      linkRenderDatum,
    )
  }

  /*
   * ============================================================
   * DRAG
   * ============================================================
   */

  let currentTransform =
    zoomIdentity

  if (enableDrag) {
    select<
      HTMLCanvasElement,
      NodeData | undefined
    >(app.canvas).call(
      drag<
        HTMLCanvasElement,
        NodeData | undefined
      >()
        .container(
          () => app.canvas,
        )
        .subject(() =>
          graphData.nodes.find(
            (n) =>
              n.id ===
              hoveredNodeId,
          ),
        )
        .on(
          "start",
          function dragstarted(
            event,
          ) {
            if (
              !event.active
            ) {
              simulation
                .alphaTarget(
                  1,
                )
                .restart()
            }

            if (event.subject) {
              event.subject.fx =
                event.subject.x

              event.subject.fy =
                event.subject.y

              event.subject.__initialDragPos =
                {
                  x: event.subject.x,
                  y: event.subject.y,
                  fx: event.subject.fx,
                  fy: event.subject.fy,
                }
            }

            dragStartTime =
              Date.now()

            dragging = true
          },
        )
        .on(
          "drag",
          function dragged(
            event,
          ) {
            if (
              event.subject
            ) {
              const initPos =
                event.subject
                  .__initialDragPos

              event.subject.fx =
                initPos.x +
                (event.x -
                  initPos.x) /
                  currentTransform.k

              event.subject.fy =
                initPos.y +
                (event.y -
                  initPos.y) /
                  currentTransform.k
            }
          },
        )
        .on(
          "end",
          function dragended(
            event,
          ) {
            if (
              !event.active
            ) {
              simulation.alphaTarget(
                0,
              )
            }

            if (event.subject) {
              event.subject.fx =
                null

              event.subject.fy =
                null
            }

            dragging = false

            if (
              Date.now() -
                dragStartTime <
                500 &&
              event.subject
            ) {
              const node =
                graphData.nodes.find(
                  (n) =>
                    n.id ===
                    event.subject!.id,
                ) as NodeData

              const targ =
                resolveRelative(
                  fullSlug,
                  node.id,
                )

              window.spaNavigate(
                new URL(
                  targ,
                  window.location.toString(),
                ),
              )
            }
          },
        ),
    )
  } else {
    for (const node of
      nodeRenderData) {
      node.gfx.on(
        "click",
        () => {
          const targ =
            resolveRelative(
              fullSlug,
              node.simulationData
                .id,
            )

          window.spaNavigate(
            new URL(
              targ,
              window.location.toString(),
            ),
          )
        },
      )
    }
  }

  /*
   * ============================================================
   * ZOOM
   * ============================================================
   */

  if (enableZoom) {
    select<
      HTMLCanvasElement,
      NodeData
    >(app.canvas).call(
      zoom<
        HTMLCanvasElement,
        NodeData
      >()
        .extent([
          [0, 0],
          [width, height],
        ])
        .scaleExtent([
          0.4,
          5,
        ])
        .on(
          "zoom",
          ({ transform }) => {
            currentTransform =
              transform

            stage.scale.set(
              transform.k,
              transform.k,
            )

            stage.position.set(
              transform.x,
              transform.y,
            )

            const zoomScale =
              transform.k *
              opacityScale

            const scaleOpacity =
              Math.max(
                (zoomScale -
                  0.9) /
                  2.5,
                0,
              )

            const activeNodes =
              nodeRenderData
                .filter(
                  (n) =>
                    n.active,
                )
                .flatMap(
                  (n) =>
                    n.label,
                )

            for (const label of
              labelsContainer.children) {
              if (
                !activeNodes.includes(
                  label,
                )
              ) {
                label.alpha =
                  scaleOpacity
              }
            }
          },
        ),
    )
  }

  /*
   * ============================================================
   * ANIMATION
   * ============================================================
   */

  let stopAnimation = false

  function animate(
    time: number,
  ) {
    if (stopAnimation) {
      return
    }

    for (const n of
      nodeRenderData) {
      const { x, y } =
        n.simulationData

      if (
        x === undefined ||
        y === undefined
      ) {
        continue
      }

      n.gfx.position.set(
        x + width / 2,
        y + height / 2,
      )

      if (n.label) {
        n.label.position.set(
          x + width / 2,
          y + height / 2,
        )
      }
    }

    for (const l of
      linkRenderData) {
      const linkData =
        l.simulationData

      l.gfx.clear()

      l.gfx.moveTo(
        linkData.source.x! +
          width / 2,
        linkData.source.y! +
          height / 2,
      )

      l.gfx
        .lineTo(
          linkData.target.x! +
            width / 2,
          linkData.target.y! +
            height / 2,
        )
        .stroke({
          alpha: l.alpha,
          width: 1,
          color: l.color,
        })
    }

    tweens.forEach((t) =>
      t.update(time),
    )

    app.renderer.render(
      stage,
    )

    requestAnimationFrame(
      animate,
    )
  }

  requestAnimationFrame(
    animate,
  )

  return () => {
    stopAnimation = true
    simulation.stop()
    app.destroy()
  }
}

/*
 * ==============================================================
 * GRAPH CLEANUP
 * ==============================================================
 */

let localGraphCleanups:
  (() => void)[] = []

let globalGraphCleanups:
  (() => void)[] = []

function cleanupLocalGraphs() {
  for (const cleanup of
    localGraphCleanups) {
    cleanup()
  }

  localGraphCleanups = []
}

function cleanupGlobalGraphs() {
  for (const cleanup of
    globalGraphCleanups) {
    cleanup()
  }

  globalGraphCleanups = []
}

/*
 * ==============================================================
 * NAVIGATION
 * ==============================================================
 */

document.addEventListener(
  "nav",
  async (
    e: CustomEventMap["nav"],
  ) => {
    const slug =
      e.detail.url

    addToVisited(
      simplifySlug(slug),
    )

    /*
     * ==========================================================
     * LOCAL GRAPH
     * ==========================================================
     */

    async function renderLocalGraph() {
      cleanupLocalGraphs()

      const localGraphContainers =
        document.getElementsByClassName(
          "graph-container",
        )

      for (const container of
        localGraphContainers) {
        localGraphCleanups.push(
          await renderGraph(
            container as HTMLElement,
            slug,
          ),
        )
      }
    }

    await renderLocalGraph()

    const handleThemeChange =
      () => {
        void renderLocalGraph()
      }

    document.addEventListener(
      "themechange",
      handleThemeChange,
    )

    window.addCleanup(
      () => {
        document.removeEventListener(
          "themechange",
          handleThemeChange,
        )
      },
    )

    /*
     * ==========================================================
     * GLOBAL GRAPH
     * ==========================================================
     */

    const containers = [
      ...document.getElementsByClassName(
        "global-graph-outer",
      ),
    ] as HTMLElement[]

    async function renderGlobalGraph() {
      cleanupGlobalGraphs()

      const globalSlug =
        getFullSlug(window)

      for (const container of
        containers) {
        container.classList.add(
          "active",
        )

        /*
         * Mantiene el botón/contenedor
         * del grafo por encima del canvas.
         */
        container.style.zIndex =
          "1000"

        const sidebar =
          container.closest(
            ".sidebar",
          ) as HTMLElement

        if (sidebar) {
          sidebar.style.zIndex =
            "1001"
        }

        const graphContainer =
          container.querySelector(
            ".global-graph-container",
          ) as HTMLElement

        registerEscapeHandler(
          container,
          hideGlobalGraph,
        )

        if (
          graphContainer
        ) {
          try {
            /*
             * ==================================================
             * IMPORTANTE
             * ==================================================
             *
             * El grafo global SIEMPRE utiliza:
             *
             * depth: -1
             *
             * Por lo tanto muestra todas las notas,
             * independientemente de la configuración
             * del grafo local.
             *
             * También forzamos drag y zoom para asegurarnos
             * de que el grafo global pueda expandirse,
             * moverse y navegarse.
             */

            const cleanup =
              await renderGraph(
                graphContainer,
                globalSlug,
                {
                  depth: -1,
                  drag: true,
                  zoom: true,
                  focusOnHover: true,
                  enableRadial: true,
                },
              )

            globalGraphCleanups.push(
              cleanup,
            )
          } catch (error) {
            console.error(
              "Error rendering global graph:",
              error,
            )

            container.classList.remove(
              "active",
            )

            container.style.zIndex =
              ""

            if (sidebar) {
              sidebar.style.zIndex =
                ""
            }
          }
        }
      }
    }

    /*
     * ==========================================================
     * OCULTAR GRAFO GLOBAL
     * ==========================================================
     */

    function hideGlobalGraph() {
      cleanupGlobalGraphs()

      for (const container of
        containers) {
        container.classList.remove(
          "active",
        )

        container.style.zIndex =
          ""

        const sidebar =
          container.closest(
            ".sidebar",
          ) as HTMLElement

        if (sidebar) {
          sidebar.style.zIndex =
            ""
        }
      }
    }

    /*
     * ==========================================================
     * ATAJO CTRL/CMD + G
     * ==========================================================
     */

    async function shortcutHandler(
      e: HTMLElementEventMap["keydown"],
    ) {
      if (
        e.key === "g" &&
        (e.ctrlKey ||
          e.metaKey) &&
        !e.shiftKey
      ) {
        e.preventDefault()

        const anyGlobalGraphOpen =
          containers.some(
            (container) =>
              container.classList.contains(
                "active",
              ),
          )

        if (
          anyGlobalGraphOpen
        ) {
          hideGlobalGraph()
        } else {
          await renderGlobalGraph()
        }
      }
    }

    /*
     * ==========================================================
     * BOTÓN DEL GRAFO GLOBAL
     * ==========================================================
     */

    const containerIcons =
      document.getElementsByClassName(
        "global-graph-icon",
      )

    Array.from(
      containerIcons,
    ).forEach((icon) => {
      const clickHandler =
        () => {
          void renderGlobalGraph()
        }

      icon.addEventListener(
        "click",
        clickHandler,
      )

      window.addCleanup(
        () =>
          icon.removeEventListener(
            "click",
            clickHandler,
          ),
      )
    })

    document.addEventListener(
      "keydown",
      shortcutHandler,
    )

    window.addCleanup(() => {
      document.removeEventListener(
        "keydown",
        shortcutHandler,
      )

      cleanupLocalGraphs()
      cleanupGlobalGraphs()
    })
  },
)