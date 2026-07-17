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
    locale: "en-US",
    baseUrl: "salva.thedev.id",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local", /* CORRECCIÓN: Le decimos que use las fuentes de la PC, no de Google */
      cdnCaching: true,
      typography: {
        header: "Times New Roman", /* CORRECCIÓN: Títulos */
        body: "Times New Roman",   /* CORRECCIÓN: Textos */
        code: "Courier New",       /* CORRECCIÓN: Letra clásica de sistema para bloques de código */
      },
      colors: {
        lightMode: {
          light: "#231d19",
          lightgray: "#3e352f",
          gray: "#a89e95",
          darkgray: "#d6d3d1",
          dark: "#ede9e6",
          secondary: "#eeddcc",
          tertiary: "#E7C8A0",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
        darkMode: {
          light: "#231d19",
          lightgray: "#3e352f",
          gray: "#a89e95",
          darkgray: "#d6d3d1",
          dark: "#ede9e6",
          secondary: "#eeddcc",
          tertiary: "#E7C8A0",
          highlight: "rgba(143, 159, 169, 0.15)",
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
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config