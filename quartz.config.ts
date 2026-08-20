import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Salvador",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "es-ES",
    baseUrl: "salvamir.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: "Times New Roman",
        body: "Times New Roman",
        code: "Courier New",
      },
      colors: {
        lightMode: {
          light: "#1a1714", // Fondo principal cálido oscuro
          lightgray: "#2e2a25", // Bordes y separadores
          gray: "#a89e95", // Texto secundario / metadatos
          darkgray: "#e3ded6", // Texto principal
          dark: "#E7C8A0", // Títulos
          secondary: "#b7966c", // Enlaces y acentos
          tertiary: "#E7C8A0", // Hover y acento secundario
          highlight: "rgba(183, 150, 108, 0.15)",
          textHighlight: "#b3aa0288",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#1c1c1e",
          gray: "#8e8d8a",
          darkgray: "#d6d3d1",
          dark: "#e0eaf5",
          secondary: "#84add7",
          tertiary: "#a3c2e1",
          highlight: "rgba(132, 173, 215, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config