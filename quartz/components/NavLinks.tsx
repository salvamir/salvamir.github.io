import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const NavLinks: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <nav class={`links ${displayClass ?? ""}`}>
      <a href="/el-jardin">🌿 Jardín</a>
      <a href="/notas">📖 Notas</a>
      <a href="/libro-de-visitas">📨 Visitas</a>
    </nav>
  )
}

export default (() => NavLinks) satisfies QuartzComponentConstructor
