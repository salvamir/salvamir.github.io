import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

// SVGs Minimalistas
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
        <div class="footer-controls" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', padding: '1rem 0' }}>
          {/* 1. RSS */}
          <a href="/index.xml" aria-label="RSS Feed" title="RSS" style={{ color: 'inherit', background: 'none', display: 'inline-flex', alignItems: 'center' }}>
            <RssIcon/>
          </a>

          {/* 2. Email */}
          <a href="mailto:pez.arroz.tabla@proton.me" aria-label="Enviar Email" title="Email" style={{ color: 'inherit', background: 'none', display: 'inline-flex', alignItems: 'center' }}>
            <MailIcon/>
          </a>

          {/* 3. Modo Oscuro / Claro */}
          <button id="custom-darkmode-btn" aria-label="Cambiar modo" title="Cambiar modo" style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center' }}>
            <span class="icon-moon" style={{ display: 'inline-flex', alignItems: 'center' }}><MoonIcon/></span>
            <span class="icon-sun" style={{ display: 'none', alignItems: 'center' }}><SunIcon/></span>
          </button>

          {/* 4. Volver arriba */}
          <button id="custom-scrolltop-btn" aria-label="Volver arriba" title="Volver arriba" style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center' }}>
            <ArrowUpIcon/>
          </button>
        </div>
      </footer>
    )
  }

  // Alternar iconos según el tema guardado en html[saved-theme]
  Footer.css = style + `
    html[saved-theme="dark"] .icon-moon { display: none !important; }
    html[saved-theme="dark"] .icon-sun { display: inline-flex !important; }
    html[saved-theme="light"] .icon-moon { display: inline-flex !important; }
    html[saved-theme="light"] .icon-sun { display: none !important; }
  `
  
  // Scripts interactivos nativos de Quartz para SPA
  Footer.afterDOMLoaded = `
    document.addEventListener("nav", () => {
      // Toggle de Modo Oscuro
      const customThemeBtn = document.getElementById("custom-darkmode-btn");
      if (customThemeBtn) {
        customThemeBtn.addEventListener("click", () => {
          const html = document.documentElement;
          const currentTheme = html.getAttribute("saved-theme") || "light";
          const newTheme = currentTheme === "light" ? "dark" : "light";
          html.setAttribute("saved-theme", newTheme);
          localStorage.setItem("theme", newTheme);
          document.dispatchEvent(new CustomEvent("themechange", { detail: { theme: newTheme } }));
        });
      }

      // Scroll a la parte superior
      const scrollTopBtn = document.getElementById("custom-scrolltop-btn");
      if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }
    })
  `

  return Footer
}) satisfies QuartzComponentConstructor