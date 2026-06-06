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
        {/* Contenedor unificado para los tres controles */}
        <div class="footer-controls">
          
          {/* Botón de Música Minimalista */}
          <button id="music-player-btn" aria-label="Reproducir música" title="Reproducir música">
            <MusicIcon />
          </button>

          {/* Botón de Modo Oscuro (Movido aquí para que sea estático) */}
          <button id="darkmode-toggle" aria-label="Cambiar modo" title="Cambiar modo">
            {/* El script de Quartz cambiará este icono dinámicamente, empezamos con luna */}
            <MoonIcon />
          </button>
          
          {/* Botón Volver Arriba */}
          <button id="back-to-top" aria-label="Volver arriba" title="Volver arriba">
            <ArrowUpIcon />
          </button>
        </div>
      </footer>
    )
  }

  Footer.css = style
  
  Footer.afterDOMLoaded = `
    document.addEventListener("nav", () => {
      
      // --- 1. TRUCO DEL REPRODUCTOR DE MÚSICA TOTALMENTE INVISIBLE ---
      // Creamos el iframe invisible al cargar la página para que la música NO se corte al navegar
      let ytPlayer = document.getElementById("yt-global-player");
      if (!ytPlayer) {
        ytPlayer = document.createElement("iframe");
        ytPlayer.id = "yt-global-player";
        // Lo hacemos 100% invisible y lo sacamos del flujo de la página
        ytPlayer.style.cssText = "position:absolute; width:1px; height:1px; top:-10px; left:-10px; opacity:0; pointer-events:none; border:none; overflow:hidden;";
        ytPlayer.setAttribute("allow", "autoplay");
        // Cargamos el link con la API activada (enablejsapi=1) y en bucle (loop=1&playlist=ID)
        ytPlayer.src = "https://www.youtube-nocookie.com/embed/ANkxRGvl1VY?enablejsapi=1&autoplay=0&loop=1&playlist=ANkxRGvl1VY";
        document.body.appendChild(ytPlayer);
      }

      const musicBtn = document.getElementById("music-player-btn");
      if (musicBtn) {
        // Restaurar estado visual si la música ya estaba sonando
        if (window.musicIsPlaying) { musicBtn.classList.add("playing"); }

        musicBtn.addEventListener("click", () => {
          // Invertir estado
          window.musicIsPlaying = !window.musicIsPlaying;
          
          if (window.musicIsPlaying) {
            musicBtn.classList.add("playing");
            // Comando playVideo por JS al iframe invisible
            ytPlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          } else {
            musicBtn.classList.remove("playing");
            // Comando pauseVideo por JS al iframe invisible
            ytPlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          }
        });
      }

      // --- 2. CONTROL DE SCRIPTS - VOLVER ARRIBA (SOLO CLIC, SIN SCROLL) ---
      const backToTop = document.getElementById("back-to-top")
      if (backToTop) {
        // Eliminamos el listener de scroll, el boton ahora es estatico en el footer
        backToTop.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" })
        })
      }

      // --- 3. MODO OSCURO (ELIMINAMOS COMPORTAMIENTO FLOTANTE) ---
      // El script nativo de Quartz ya gestiona el ID '#darkmode-toggle' para cambiar de tema.
      // Al moverlo al footer JSX y quitarle el CSS flotante, el comportamiento de scroll desaparece.
    })
  `
  return Footer
}) satisfies QuartzComponentConstructor