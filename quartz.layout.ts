import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// 1. MUDAMOS EL BUSCADOR Y MODO OSCURO AL HEADER
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.Spacer(),
    Component.Search(),     /* Mudado aquí */
    Component.Darkmode(),   /* Mudado aquí */
    Component.DesktopOnly(Component.NavLinks()),
  ],
  afterBody: [],
  footer: Component.Footer(),
}

// 2. DEJAMOS LA IZQUIERDA Y DERECHA COMPLETAMENTE VACÍAS
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.Graph({
      localGraph: { fontSize: 0.45, nodeSize: 3.0, repulsion: 1.5, linkDistance: 100 },
      globalGraph: { fontSize: 0.6, nodeSize: 3.5, repulsion: 1.5, linkDistance: 100 },
    }),
  ],
  left: [],
  right: [], // ¡AHORA SÍ, VACÍO!
}

// 3. LO MISMO PARA LA LISTA DE PÁGINAS
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta()],
  left: [],
  right: [], // ¡VACÍO!
}