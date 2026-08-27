import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// Componentes compartidos por todo el sitio
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),

  header: [
    Component.PageTitle(),
    Component.Spacer(),
    Component.DesktopOnly(Component.NavLinks()),
  ],

  afterBody: [
    Component.Darkmode(),
  ],

  footer: Component.Footer(),
}


// Layout de las notas individuales
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Search(),

    Component.ArticleTitle(),

    Component.ContentMeta(),

    // Las etiquetas siguen ocultas visualmente
    // porque no queremos mostrarlas al lado de las notas.
    // Component.TagList(),

    // =====================================================
    // GRAFO: SOLO EN NOTAS DENTRO DE /Plantas/
    // =====================================================
    Component.ConditionalRender({
      component: Component.Graph({
        localGraph: {
          drag: true,
          zoom: true,
          depth: 1,
          scale: 1.1,
          repelForce: 0.5,
          centerForce: 0.3,
          linkDistance: 30,
          fontSize: 0.45,
          opacityScale: 1,
          removeTags: [],
          showTags: true,
          focusOnHover: true,
          enableRadial: false,
        },

        globalGraph: {
          drag: true,
          zoom: true,
          depth: -1,
          scale: 0.9,
          repelForce: 0.5,
          centerForce: 0.3,
          linkDistance: 30,
          fontSize: 0.6,
          opacityScale: 1,
          removeTags: [],
          showTags: true,
          focusOnHover: true,
          enableRadial: true,
        },
      }),

      condition: (page) => {
        const slug = page.fileData.slug ?? ""

        return (
          slug.startsWith("Plantas/") ||
          slug.startsWith("plantas/")
        )
      },
    }),
  ],

  left: [],
  right: [],
}


// Layout de las páginas de listas
// (tags, carpetas, etc.)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Search(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],

  left: [],
  right: [],
}