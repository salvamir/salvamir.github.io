import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    return (
      <footer class={`${displayClass ?? ""}`}>
        
        {/* Contenedor central para el botón de música */}
        <div class="footer-center-container">
          <button id="music-player-btn" aria-label="Reproducir música" title="Reproducir música">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
          </button>
        </div>

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
      
      // --- 1. REPRODUCTOR DE MÚSICA (YOUTUBE INVISIBLE) ---
      // Creamos el reproductor en el body principal para que la música NO se corte al cambiar de página
      let ytIframe = document.getElementById("yt-global-player");
      if (!ytIframe) {
        ytIframe = document.createElement("iframe");
        ytIframe.id = "yt-global-player";
        ytIframe.style.display = "none";
        ytIframe.setAttribute("allow", "autoplay");
        // Cargamos el link con la API activada (enablejsapi=1) y en bucle (loop=1)
        ytIframe.src = "https://www.youtube-nocookie.com/embed/ANkxRGvl1VY?enablejsapi=1&autoplay=0&loop=1&playlist=ANkxRGvl1VY";
        document.body.appendChild(ytIframe);
      }

      const musicBtn = document.getElementById("music-player-btn");
      if (musicBtn) {
        // Sincronizar el aspecto del botón si la música ya estaba sonando
        if (window.musicIsPlaying) {
          musicBtn.classList.add("playing");
        }

        musicBtn.addEventListener("click", () => {
          // Alternar estado
          window.musicIsPlaying = !window.musicIsPlaying;
          
          if (window.musicIsPlaying) {
            musicBtn.classList.add("playing");
            // Le manda el comando "play" al video invisible
            ytIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          } else {
            musicBtn.classList.remove("playing");
            // Le manda el comando "pause" al video invisible
            ytIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          }
        });
      }

      // --- 2. CONTROL DE SCRIPTS - IR ARRIBA ---
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

      // --- 3. CONTROL DE SCRIPTS - MODO OSCURO EN SCROLL (IZQUIERDA) ---
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