import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Salva Más De Cerca",
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
          light: "#fdfbf7",
          lightgray: "#e3dac9",
          gray: "#a89e95",
          darkgray: "#2b2b2b",
          dark: "#1a1714",
          secondary: "#c05621", // Anaranjado para títulos en modo claro
          tertiary: "#E7C8A0",
          highlight: "rgba(192, 86, 33, 0.15)",
          textHighlight: "#b3aa0288",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#1c1c1e",
          gray: "#8e8d8a",
          darkgray: "#d6d3d1",
          dark: "#e0eaf5",
          secondary: "#84add7", // Azul para títulos en modo oscuro
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