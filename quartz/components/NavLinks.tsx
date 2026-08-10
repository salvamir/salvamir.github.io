import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const NavLinks: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  // Retornamos null porque los botones ya están integrados en el HTML/Markdown
  return null
}

export default (() => NavLinks) satisfies QuartzComponentConstructor