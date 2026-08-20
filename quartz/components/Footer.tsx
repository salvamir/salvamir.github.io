import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

const RssIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
  </svg>
)

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
)

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
)

const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
)

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <footer class={`${displayClass ?? ""}`}>
        <div class="footer-controls">
          <a href="/index.xml" aria-label="RSS Feed" title="RSS">
            <RssIcon/>
          </a>

          <a href="mailto:pez.arroz.tabla@proton.me" aria-label="Enviar Email" title="Email">
            <MailIcon/>
          </a>

          <button id="custom-darkmode-btn" aria-label="Cambiar modo" title="Cambiar modo">
            <span class="icon-moon"><MoonIcon/></span>
            <span class="icon-sun"><SunIcon/></span>
          </button>

          <button id="custom-scrolltop-btn" aria-label="Volver arriba" title="Volver arriba">
            <ArrowUpIcon/>
          </button>
        </div>
      </footer>
    )
  }

  Footer.css = style + `
    .footer-controls {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      align-items: center;
      padding: 1rem 0;
    }

    .footer-controls a,
    .footer-controls button {
      background: transparent !important;
      border: none !important;
      color: inherit !important;
      cursor: pointer;
      padding: 0 !important;
      margin: 0 !important;
      display: inline-flex !important;
      align-items: center;
      justify-content: center;
      text-decoration: none !important;
      box-shadow: none !important;
      outline: none !important;
      -webkit-tap-highlight-color: transparent;
      opacity: 0.75;
      transition: opacity 0.15s ease;
    }

    .footer-controls a:hover,
    .footer-controls button:hover,
    .footer-controls a:focus,
    .footer-controls button:focus {
      opacity: 1 !important;
    }

    .footer-controls .icon-moon,
    .footer-controls .icon-sun {
      display: inline-flex;
      align-items: center;
    }

    html[saved-theme="dark"] .icon-moon { display: none !important; }
    html[saved-theme="dark"] .icon-sun { display: inline-flex !important; }
    html[saved-theme="light"] .icon-moon { display: inline-flex !important; }
    html[saved-theme="light"] .icon-sun { display: none !important; }
  `

  Footer.afterDOMLoaded = `
    document.addEventListener("nav", () => {
      // Lógica de botones nativos
      const customThemeBtn = document.getElementById("custom-darkmode-btn");
      if (customThemeBtn) {
        customThemeBtn.onclick = () => {
          const html = document.documentElement;
          const currentTheme = html.getAttribute("saved-theme") || "light";
          const newTheme = currentTheme === "light" ? "dark" : "light";
          html.setAttribute("saved-theme", newTheme);
          localStorage.setItem("theme", newTheme);
          document.dispatchEvent(new CustomEvent("themechange", { detail: { theme: newTheme } }));
        };
      }

      const scrollTopBtn = document.getElementById("custom-scrolltop-btn");
      if (scrollTopBtn) {
        scrollTopBtn.onclick = () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        };
      }

      // Lógica robusta del Mentimeter
      try {
        console.log("[Mentimeter] Iniciando escaneo...");
        
        const container = document.querySelector(".popover-hint") || document.querySelector(".center");
        if (!container) return;

        // Buscamos todas las listas de páginas. La página de tags tiene varias, una nota común no.
        const tagListings = container.querySelectorAll(".page-listing");
        console.log("[Mentimeter] Listas encontradas: ", tagListings.length);
        
        if (tagListings.length <= 1) return; // Si hay 1 o 0, no es el índice de etiquetas
        if (document.getElementById("mentimeter-cloud-container")) return; // Ya existe

        const tagsData = [];

        tagListings.forEach(listing => {
          const parentDiv = listing.parentElement;
          if (!parentDiv) return;
          
          const h2 = parentDiv.querySelector("h2");
          if (!h2) return;

          const tagName = h2.innerText.replace("#", "").trim();
          const tagCount = listing.querySelectorAll("li.section-li").length;
          
          let tagUrl = \`/tags/\${tagName}\`;
          const tagLinkNode = listing.querySelector("a.tag-link");
          if (tagLinkNode) {
             tagUrl = tagLinkNode.getAttribute("href");
          }

          if (tagName && tagCount > 0) {
             tagsData.push({ name: tagName, count: tagCount, href: tagUrl });
          }

          // Ocultamos el bloque original
          parentDiv.style.display = "none";
        });

        console.log("[Mentimeter] Etiquetas capturadas: ", tagsData);

        if (tagsData.length === 0) return;

        // Ocultar textos basura ("Se han encontrado X etiquetas...")
        const paragraphs = container.querySelectorAll("p");
        paragraphs.forEach(p => {
           if (p.innerText.toLowerCase().includes("etiqueta") || p.innerText.toLowerCase().includes("tag")) {
              p.style.display = "none";
           }
        });

        // Crear la nube
        const cloudContainer = document.createElement("div");
        cloudContainer.id = "mentimeter-cloud-container";
        cloudContainer.className = "mentimeter-cloud";
        cloudContainer.style.display = "flex";
        cloudContainer.style.flexWrap = "wrap";
        cloudContainer.style.gap = "1.2rem";
        cloudContainer.style.justifyContent = "center";
        cloudContainer.style.marginTop = "3rem";
        cloudContainer.style.alignItems = "center";

        const counts = tagsData.map(t => t.count);
        const minCount = Math.min(...counts);
        const maxCount = Math.max(...counts);

        tagsData.forEach(tag => {
          const pill = document.createElement("a");
          pill.href = tag.href;
          pill.className = "internal mentimeter-tag-pill";

          let fontSize = 1.1;
          if (maxCount > minCount) {
            const scale = (tag.count - minCount) / (maxCount - minCount);
            fontSize = 1.0 + scale * 1.6;
          }

          pill.style.fontSize = \`\${fontSize.toFixed(2)}rem\`;
          pill.style.fontWeight = tag.count > (maxCount / 2) ? "700" : "500";
          pill.style.textDecoration = "none";
          pill.style.transition = "transform 0.2s ease";
          
          pill.onmouseover = () => pill.style.transform = "scale(1.05)";
          pill.onmouseout = () => pill.style.transform = "scale(1)";

          pill.innerHTML = \`\${tag.name} <span style="opacity:0.6; font-size:0.7em; margin-left:2px;">(\${tag.count})</span>\`;
          cloudContainer.appendChild(pill);
        });

        // Insertar visualmente después del artículo principal
        const article = container.querySelector("article");
        if (article) {
           article.parentNode.insertBefore(cloudContainer, article.nextSibling);
        } else {
           container.prepend(cloudContainer);
        }
        
        console.log("[Mentimeter] ¡Nube insertada con éxito!");

      } catch (error) {
        console.error("[Mentimeter] Fallo en la matrix:", error);
      }
    });
  `

  return Footer
}) satisfies QuartzComponentConstructor