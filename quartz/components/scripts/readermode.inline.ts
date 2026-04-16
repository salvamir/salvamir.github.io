// 1. Leemos la preferencia guardada. Si no hay nada, activamos el modo inmersivo por defecto.
let isReaderMode = localStorage.getItem("reader-mode") === "off" ? false : true
document.documentElement.setAttribute("reader-mode", isReaderMode ? "on" : "off")

const emitReaderModeChangeEvent = (mode: "on" | "off") => {
  const event: CustomEventMap["readermodechange"] = new CustomEvent("readermodechange", {
    detail: { mode },
  })
  document.dispatchEvent(event)
}

document.addEventListener("nav", () => {
  const switchMode = (e: Event) => {
    isReaderMode = !isReaderMode
    const newMode = isReaderMode ? "on" : "off"
    
    // Aplicamos el cambio visual
    document.documentElement.setAttribute("reader-mode", newMode)
    
    // 2. Guardamos la preferencia del usuario para que se mantenga al recargar
    localStorage.setItem("reader-mode", newMode) 
    
    emitReaderModeChangeEvent(newMode)
  }

  const themeButton = document.querySelector("#readermode") as HTMLButtonElement
  if (themeButton) {
    themeButton.addEventListener("click", switchMode)
    window.addCleanup(() => themeButton.removeEventListener("click", switchMode))
  }
})