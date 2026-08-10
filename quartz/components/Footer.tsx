"use client";

import React from "react";
// Si usas lucide-react (o puedes reemplazar con tus propios SVGs):
import { Rss, Mail, Sun, Moon, ArrowUp } from "lucide-react";

export default function Footer() {
  const [isDark, setIsDark] = React.useState(true);

  // Función para volver al inicio de la página suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Lógica adicional de cambio de tema si la usas (ej. document.documentElement.classList.toggle('dark'))
  };

  return (
    <footer className="w-full py-8 flex justify-center items-center">
      <div className="flex items-center justify-center gap-6">
        {/* RSS */}
        <a
          href="/rss.xml"
          aria-label="RSS Feed"
          className="text-[#8e8d8a] transition-none hover:text-[#8e8d8a] focus:outline-none"
        >
          <Rss className="w-5 h-5 stroke-[1.75]" />
        </a>

        {/* Email */}
        <a
          href="mailto:tu-email@ejemplo.com"
          aria-label="Contacto por Email"
          className="text-[#8e8d8a] transition-none hover:text-[#8e8d8a] focus:outline-none"
        >
          <Mail className="w-5 h-5 stroke-[1.75]" />
        </a>

        {/* Modo Claro / Oscuro */}
        <button
          onClick={toggleTheme}
          aria-label="Cambiar tema"
          className="text-[#8e8d8a] transition-none hover:text-[#8e8d8a] bg-transparent border-0 p-0 cursor-pointer focus:outline-none"
        >
          {isDark ? (
            <Sun className="w-5 h-5 stroke-[1.75]" />
          ) : (
            <Moon className="w-5 h-5 stroke-[1.75]" />
          )}
        </button>

        {/* NUEVO: Ir al inicio */}
        <button
          onClick={scrollToTop}
          aria-label="Volver al inicio"
          className="text-[#8e8d8a] transition-none hover:text-[#8e8d8a] bg-transparent border-0 p-0 cursor-pointer focus:outline-none"
        >
          <ArrowUp className="w-5 h-5 stroke-[1.75]" />
        </button>
      </div>
    </footer>
  );
}