import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

// SVGs Minimalistas (Estilo Feather Icons)
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
)

const MusicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-music">
    <path d="M9 18V5l12-2v13"></path>
    <circle cx="6" cy="18" r="3"></circle>
    <circle cx="18" cy="16" r="3"></circle>
  </svg>
)

const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up">
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
        {/* Controles Minimalistas: Música y Modo Oscuro juntos en el centro */}
        <div class="footer-controls">
          <button id="music-player-btn" aria-label="Reproducir música" title="Reproducir música">
            <MusicIcon />
          </button>

          <button id="custom-darkmode-btn" aria-label="Cambiar modo" title="Cambiar modo">
            <MoonIcon />
          </button>
        </div>

        {/* Botón Volver Arriba (Restaurado a su posición flotante original) */}
        <button id="back-to-top" aria-label="Volver arriba" title="Volver arriba">
          <ArrowUpIcon />
        </button>
      </footer>
    )
  }

  Footer.css = style
  
  Footer.afterDOMLoaded = `
    document.addEventListener("nav", () => {
      
      // --- 1. TRUCO DEL REPRODUCTOR INVISIBLE PERSISTENTE ---
      // Al agregarlo a document.documentElement (fuera del body), sobrevive a los cambios de página (SPA) de Quartz
      let ytPlayer = document.getElementById("yt-global-player");
      if (!ytPlayer) {
        ytPlayer = document.createElement("iframe");
        ytPlayer.id = "yt-global-player";
        ytPlayer.style.cssText = "position:fixed; width:1px; height:1px; top:-100px; left:-100px; opacity:0; pointer-events:none; border:none; overflow:hidden;";
        ytPlayer.setAttribute("allow", "autoplay");
        ytPlayer.src = "https://www.youtube-nocookie.com/embed/ANkxRGvl1VY?enablejsapi=1&autoplay=0&loop=1&playlist=ANkxRGvl1VY";
        document.documentElement.appendChild(ytPlayer);
      }

      const musicBtn = document.getElementById("music-player-btn");
      if (musicBtn) {
        if (window.musicIsPlaying) { musicBtn.classList.add("playing"); }

        musicBtn.addEventListener("click", () => {
          window.musicIsPlaying = !window.musicIsPlaying;
          if (window.musicIsPlaying) {
            musicBtn.classList.add("playing");
            ytPlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          } else {
            musicBtn.classList.remove("playing");
            ytPlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          }
        });
      }

      // --- 2. CONTROL DE SCRIPTS - VOLVER ARRIBA (RESTAURADO CON SCROLL) ---
      const backToTop = document.getElementById("back-to-top")
      if (backToTop) {
        const handleScroll = () => {
          if (window.scrollY > 300) {
            backToTop.classList.add("visible")
          } else {
            backToTop.classList.remove("visible")
          }
        }
        
        window.addEventListener("scroll", handleScroll)
        handleScroll() // Evaluacion inicial preventiva
        
        backToTop.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" })
        })
        
        window.addCleanup(() => {
          window.removeEventListener("scroll", handleScroll)
        })
      }

      // --- 3. MODO OSCURO (CONTROL REMOTO DEL NATIVO) ---
      const customThemeBtn = document.getElementById("custom-darkmode-btn");
      if (customThemeBtn) {
        customThemeBtn.addEventListener("click", () => {
          const nativeBtn = document.getElementById("darkmode-toggle");
          if (nativeBtn && nativeBtn.id !== "custom-darkmode-btn") {
            nativeBtn.click();
          } else {
            const html = document.documentElement;
            const currentTheme = html.getAttribute("saved-theme") || "light";
            const newTheme = currentTheme === "light" ? "dark" : "light";
            html.setAttribute("saved-theme", newTheme);
            localStorage.setItem("theme", newTheme);
            document.dispatchEvent(new CustomEvent("themechange", { detail: { theme: newTheme } }));
          }
        });
      }
    })
  `
  return Footer
}) satisfies QuartzComponentConstructor