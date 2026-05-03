import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const NavLinks: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <nav class={`links ${displayClass ?? ""}`}>
      <a href="/El-Jardín">🌿 Jardín</a>
      <a href="/Notas">📖 Notas</a>
      <a href="/libro-de-visitas">📨 Visitas</a>
    </nav>
  )
}
export default (() => NavLinks) satisfies QuartzComponentConstructor
