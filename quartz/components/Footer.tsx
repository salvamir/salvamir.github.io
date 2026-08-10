import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import darkmodeStyle from "./styles/darkmode.scss"
import darkmodeScript from "./scripts/darkmode.inline"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const links = opts?.links ?? {}
    return (
      <footer className={`${displayClass ?? ""}`}>
        <hr />
        <ul style="display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 1.25rem; list-style: none; padding: 0; margin: 1rem 0 0 0;">
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
          <li>
            <a
              href="/index.xml"
              aria-label="RSS Feed"
              style="color: inherit; display: inline-flex; align-items: center; text-decoration: none;"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 11a9 9 0 0 1 9 9" />
                <path d="M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="mailto:pez.arroz.tabla@proton.me"
              aria-label="Correo"
              style="color: inherit; display: inline-flex; align-items: center; text-decoration: none;"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </li>
          <li>
            <button
              class="darkmode"
              id="darkmode-toggle"
              aria-label="Cambiar modo oscuro"
              style="background: none; border: none; cursor: pointer; color: inherit; padding: 0; display: inline-flex; align-items: center;"
            >
              <svg
                class="sun"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m4.93 19.07 1.41-1.41" />
                <path d="m17.66 6.34 1.41-1.41" />
              </svg>
              <svg
                class="moon"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </button>
          </li>
          <li>
            <button
              onClick="window.scrollTo({ top: 0, behavior: 'smooth' })"
              aria-label="Volver arriba"
              style="background: none; border: none; cursor: pointer; color: inherit; padding: 0; display: inline-flex; align-items: center;"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 19V5" />
                <path d="m5 12 7-7 7 7" />
              </svg>
            </button>
          </li>
        </ul>
      </footer>
    )
  }

  Footer.beforeJSX = darkmodeScript
  Footer.css = style + "\n" + darkmodeStyle
  return Footer
}) satisfies QuartzComponentConstructor