import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          <a class="home-link" href="https://salvadorrr.carrd.co">🏠Casa</a> — Cultivado parcialmente a mano por Salva © {year}
        </p>
        
        {/* Botón minimalista Back To Top */}
        <button id="back-to-top" aria-label="Volver arriba">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </button>
      </footer>
    )
  }

  Footer.css = style
  
  // Script que controla cuándo aparece el botón y el efecto de subida
  Footer.afterDOMLoaded = `
    document.addEventListener("nav", () => {
      const backToTop = document.getElementById("back-to-top")
      if (backToTop) {
        const handleScroll = () => {
          const scrollPosition = window.scrollY + window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          
          // Muestra el botón solo si bajamos un poco Y estamos cerca del final
          if (window.scrollY > 200 && (documentHeight - scrollPosition) < 300) {
            backToTop.classList.add("visible")
          } else {
            backToTop.classList.remove("visible")
          }
        }
        
        window.addEventListener("scroll", handleScroll)
        
        backToTop.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" })
        })
        
        window.addCleanup(() => {
          window.removeEventListener("scroll", handleScroll)
        })
      }
    })
  `
  return Footer
}) satisfies QuartzComponentConstructor