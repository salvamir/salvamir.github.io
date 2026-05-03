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
        {/* Los párrafos con links y créditos fueron eliminados */}
        
        {/* Botón Back To Top (Se mantiene intacto) */}
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
    })
  `
  return Footer
}) satisfies QuartzComponentConstructor