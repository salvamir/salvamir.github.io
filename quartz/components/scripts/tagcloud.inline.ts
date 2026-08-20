function buildMentimeterCloud() {
  const path = window.location.pathname.replace(/\/+$/, "")

  // Este script solamente actúa en /tags
  if (path !== "/tags") return

  // Evitar duplicarlo durante la navegación SPA de Quartz
  if (document.getElementById("mentimeter-cloud-container")) return

  const contentRoot =
    document.querySelector("#quartz-body .center") ??
    document.querySelector(".center") ??
    document.querySelector("main")

  if (!contentRoot) return

  /*
   * Quartz genera cada etiqueta como:
   *
   * <h2>
   *   <a class="tag-link">arbolito</a>
   * </h2>
   *
   * seguido de información sobre los artículos y un .page-listing.
   */

  const listings = Array.from(
    contentRoot.querySelectorAll(".page-listing"),
  )

  const tagsData: {
    name: string
    href: string
    count: number
    wrapper: HTMLElement
  }[] = []

  for (const listing of listings) {
    const wrapper = listing.parentElement as HTMLElement | null
    if (!wrapper) continue

    const tagLink = wrapper.querySelector(
      "h2 a.tag-link, h2 a.internal[href*='/tags/']",
    ) as HTMLAnchorElement | null

    if (!tagLink) continue

    const name = (tagLink.textContent ?? "")
      .replace(/^#/, "")
      .trim()

    if (!name) continue

    /*
     * Quartz muestra algo como:
     * "7 artículos con esta etiqueta."
     */
    const wrapperText = Array.from(wrapper.querySelectorAll("p"))
      .map((p) => p.textContent ?? "")
      .join(" ")

    const countMatch = wrapperText.match(/(\d+)\s+art[ií]culos?/i)

    let count = countMatch
      ? Number.parseInt(countMatch[1], 10)
      : 0

    /*
     * Fallback: si el texto del contador cambia,
     * contamos los elementos de la lista.
     */
    if (!count) {
      count = listing.querySelectorAll("li.section-li").length
    }

    if (!count) continue

    tagsData.push({
      name,
      href: tagLink.getAttribute("href") ?? tagLink.href,
      count,
      wrapper,
    })
  }

  if (!tagsData.length) return

  /*
   * Quitar duplicados por URL.
   */
  const uniqueTags = Array.from(
    new Map(tagsData.map((tag) => [tag.href, tag])).values(),
  )

  const counts = uniqueTags.map((tag) => tag.count)
  const minCount = Math.min(...counts)
  const maxCount = Math.max(...counts)

  /*
   * Crear la nube.
   */
  const cloud = document.createElement("div")
  cloud.id = "mentimeter-cloud-container"
  cloud.className = "mentimeter-cloud"
  cloud.setAttribute("aria-label", "Nube de etiquetas")

  for (const tag of uniqueTags) {
    const pill = document.createElement("a")

    pill.href = tag.href
    pill.className = "mentimeter-tag-pill"

    /*
     * Escala de tamaño con raíz cuadrada.
     *
     * Esto evita que un tag muy frecuente
     * domine completamente la nube.
     */
    let ratio = 0.5

    if (maxCount > minCount) {
      ratio = Math.sqrt(
        (tag.count - minCount) /
        (maxCount - minCount),
      )
    }

    const minSize = 1.0
    const maxSize = 2.4

    const fontSize =
      minSize + ratio * (maxSize - minSize)

    /*
     * Peso tipográfico según frecuencia.
     */
    const weightRatio =
      maxCount === minCount
        ? 0.5
        : (tag.count - minCount) /
          (maxCount - minCount)

    const fontWeight = Math.round(
      400 + weightRatio * 300,
    )

    pill.style.fontSize = `${fontSize.toFixed(2)}rem`
    pill.style.fontWeight = String(fontWeight)

    /*
     * Texto del tag.
     */
    const name = document.createElement("span")
    name.textContent = tag.name

    /*
     * Número de artículos.
     */
    const count = document.createElement("span")
    count.className = "mentimeter-tag-count"
    count.textContent = `(${tag.count})`
    count.setAttribute(
      "aria-label",
      `${tag.count} artículos`,
    )

    pill.appendChild(name)
    pill.appendChild(count)

    cloud.appendChild(pill)
  }

  /*
   * Insertamos la nube después del título "Índice de Etiquetas".
   */
  const title = contentRoot.querySelector("h1")

  if (title) {
    title.insertAdjacentElement("afterend", cloud)
  } else {
    contentRoot.prepend(cloud)
  }

  /*
   * Ahora ocultamos la representación original de Quartz.
   * El navegador ya tiene todo lo necesario para construir
   * la nube y no necesitamos mostrar la lista tradicional.
   */
  for (const tag of uniqueTags) {
    tag.wrapper.style.display = "none"
  }

  /*
   * Ocultar únicamente el texto:
   * "Se han encontrado X etiquetas en total."
   */
  const paragraphs = contentRoot.querySelectorAll("p")

  for (const paragraph of paragraphs) {
    const text =
      paragraph.textContent?.toLowerCase() ?? ""

    if (
      text.includes("se han encontrado") &&
      text.includes("etiqueta")
    ) {
      ;(paragraph as HTMLElement).style.display = "none"
    }
  }
}


/*
 * Quartz dispara "nav" cada vez que cambia de página
 * mediante su navegación SPA.
 */
document.addEventListener(
  "nav",
  buildMentimeterCloud,
)

buildMentimeterCloud()