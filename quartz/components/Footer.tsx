```tsx
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 5 5 12 12 19"></polyline>
  </svg>
)

const RssIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 11a9 9 0 0 1 9 9"></path>
    <path d="M4 4a16 16 0 0 1 16 16"></path>
    <circle cx="5" cy="19" r="1"></circle>
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
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

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
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

          {/* Página anterior */}
          <button id="custom-back-btn" aria-label="Página anterior" title="Página anterior">
            <ArrowLeftIcon/>
          </button>

          {/* RSS */}
          <a href="/index.xml" aria-label="RSS Feed" title="RSS">
            <RssIcon/>
          </a>

          {/* Email */}
          <a href="mailto:pez.arroz.tabla@proton.me" aria-label="Enviar Email" title="Email">
            <MailIcon/>
          </a>

          {/* Volver arriba */}
          <button id="custom-scrolltop-btn" aria-label="Volver arriba" title="Volver arriba">
            <ArrowUpIcon/>
          </button>

          {/* Toggle modo oscuro / claro */}
          <button id="custom-darkmode-btn" aria-label="Cambiar modo" title="Cambiar modo">
            <span class="icon-moon"><MoonIcon/></span>
            <span class="icon-sun"><SunIcon/></span>
          </button>

          {/* Página siguiente */}
          <button id="custom-forward-btn" aria-label="Página siguiente" title="Página siguiente">
            <ArrowRightIcon/>
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

      // Botón de modo claro/oscuro
      const customThemeBtn = document.getElementById("custom-darkmode-btn");

      if (customThemeBtn) {
        customThemeBtn.onclick = () => {
          const html = document.documentElement;
          const currentTheme = html.getAttribute("saved-theme") || "light";
          const newTheme = currentTheme === "light" ? "dark" : "light";

          html.setAttribute("saved-theme", newTheme);
          localStorage.setItem("theme", newTheme);

          document.dispatchEvent(
            new CustomEvent("themechange", {
              detail: { theme: newTheme },
            }),
          );
        };
      }

      // Botón volver arriba
      const scrollTopBtn = document.getElementById("custom-scrolltop-btn");

      if (scrollTopBtn) {
        scrollTopBtn.onclick = () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        };
      }

      // Página anterior
      const backBtn = document.getElementById("custom-back-btn");

      if (backBtn) {
        backBtn.onclick = () => {
          window.history.back();
        };
      }

      // Página siguiente
      const forwardBtn = document.getElementById("custom-forward-btn");

      if (forwardBtn) {
        forwardBtn.onclick = () => {
          window.history.forward();
        };
      }
    });
  `

  return Footer
}) satisfies QuartzComponentConstructor
```
