import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.Spacer(),
    Component.DesktopOnly(Component.NavLinks()),
  ],
  afterBody: [],
  footer: Component.Footer(),
}

// components for pages that display a single page
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
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
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta()],
  left: [],
  right: [
    Component.Search(),
    Component.Darkmode(),
  ],
}