import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const NavLinks: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <nav class={`links ${displayClass ?? ""}`}>
      <a href="/el-jardín/index">🌿 Jardín</a>
      <a href="/bitacora/index">📖 Bitácora</a>
      <a href="/libro-de-visitas">📨 Visitas</a>
      <a href="/ahora">📅 Ahora</a>
      <a href="/musica/index">🎧 Música</a>
      <a href="/links">🌐 Links</a>
    </nav>
  )
}

export default (() => NavLinks) satisfies QuartzComponentConstructor
