import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(), // Tu título de sitio
    Component.Spacer(),    // Espacio para separar el título de los links
    Component.Links({      // Aquí agregamos tus botones
      links: {
        "🌿 Jardín": "/el-jardín/index",
        "📖 Bitácora": "/bitacora/index",
        "📨 Visitas": "/libro-de-visitas",
        "📅 Ahora": "/ahora",
        "🎧 Música": "/musica/index",
        "🌐 Links": "/links",
      },
    }),
  ],
  afterBody: [],
  footer: [],
  }),
}
// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.Graph({
      localGraph: {
        fontSize: 0.45,
        nodeSize: 3.0,
        repulsion: 1.5,
        linkDistance: 100,
      },
      globalGraph: {
        fontSize: 0.6,
        nodeSize: 3.5,
        repulsion: 1.5,
        linkDistance: 100,
      },
    }),
  ],
  left: [],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
