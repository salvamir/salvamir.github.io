import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const NavLinks: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <nav class={`links ${displayClass ?? ""}`}>
      <a href="https://salvamir.github.io/index.xml" target="_blank" rel="noopener noreferrer">🛜 RSS</a>
      <a href="mailto:pez.arroz.tabla@proton.me">📩 Mail</a>
    </nav>
  )
}
export default (() => NavLinks) satisfies QuartzComponentConstructor