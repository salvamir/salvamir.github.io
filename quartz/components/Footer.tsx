import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

// SVGs Minimalistas sin animaciones extrañas
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

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <footer class={`${displayClass ?? ""}`}>
        <div class="footer-controls" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <a href="https://salvamir.github.io/index.xml" aria-label="RSS Feed" title="RSS" style={{ color: 'inherit', background: 'none' }}>
            <RssIcon />
          </a>
          <a href="mailto:pez.arroz.tabla@proton.me" aria-label="Enviar Email" title="Email" style={{ color: 'inherit', background: 'none' }}>
            <MailIcon />
          </a>
          <button id="custom-darkmode-btn" aria-label="Cambiar modo" title="Cambiar modo" style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>
            <MoonIcon />
          </button>
        </div>
      </footer>
    )
  }

  Footer.css = style
  
  Footer.afterDOMLoaded = `
    document.addEventListener("nav", () => {
      // Modo oscuro nativo
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
    })
  `
  return Footer
}) satisfies QuartzComponentConstructor