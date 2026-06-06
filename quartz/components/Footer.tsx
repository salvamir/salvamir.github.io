import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    return (
      <footer class={`${displayClass ?? ""}`}>
        {/* Botón Back To Top (ID Unificado) */}
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
  
  Footer.afterDOMLoaded = `
    document.addEventListener("nav", () => {
      // 1. CONTROL DE SCRIPTS - IR ARRIBA
      const backToTop = document.getElementById("back-to-top")
      if (backToTop) {
        const handleScroll = () => {
          const scrollPosition = window.scrollY + window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          
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

      // 2. CONTROL DE SCRIPTS - MODO OSCURO EN SCROLL (IZQUIERDA)
      const darkBtn = document.getElementById("darkmode-toggle")
      if (darkBtn) {
        const checkDarkScroll = () => {
          if (window.scrollY > 300 || document.documentElement.scrollTop > 300) {
            darkBtn.classList.add("show-dark-scroll")
          } else {
            darkBtn.classList.remove("show-dark-scroll")
          }
        }
        
        window.addEventListener("scroll", checkDarkScroll)
        checkDarkScroll() // Evaluación inicial preventiva
        
        window.addCleanup(() => {
          window.removeEventListener("scroll", checkDarkScroll)
        })
      }
    })
  `
  return Footer
}) satisfies QuartzComponentConstructor