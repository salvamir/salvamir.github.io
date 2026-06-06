import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// 1. ELIMINAMOS EL BUSCADOR Y EL MODO OSCURO DEL HEADER
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.Spacer(),
    Component.DesktopOnly(Component.NavLinks()), 
  ],
  afterBody: [
    Component.Darkmode(), // <-- LO VOLVEMOS A AGREGAR ACÁ PARA COLOCARLO EN EL FOOTER
  ],
  footer: Component.Footer(),
}

// 2. BUSCADOR EN EL CONTENIDO CENTRAL (OCULTO POR CSS SALVO EN PÁGINA ESPECÍFICA) Y TAGLIST COMENTADO
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Search(), // <-- Agregado en el cuerpo central
    Component.ArticleTitle(),
    Component.ContentMeta(),
    // Component.TagList(), <-- Comentado para eliminar las etiquetas visualmente al lado de las notas
    Component.Graph({
      localGraph: { fontSize: 0.45, nodeSize: 3.0, repulsion: 1.5, linkDistance: 100 },
      globalGraph: { fontSize: 0.6, nodeSize: 3.5, repulsion: 1.5, linkDistance: 100 },
    }),
  ],
  left: [],
  right: [], 
}

// 3. LO MISMO PARA LA LISTA DE PÁGINAS
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Search(), // <-- Agregado aquí también
    Component.ArticleTitle(), 
    Component.ContentMeta()
  ],
  left: [],
  right: [], 
}