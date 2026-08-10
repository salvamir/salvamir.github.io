<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ya! — Salva Más De Cerca</title>
    <style>
        :root {
            --bg-main: #1a1714;
            --text-main: #e3dac9;
            --accent-dorado: #E7C8A0;
            --accent-muted: #B7966C;
            --timeline-line: rgba(183, 150, 108, 0.3);
            --timeline-dot: #B7966C;
            --card-bg: rgba(255, 255, 255, 0.03);
            --border-color: rgba(183, 150, 108, 0.15);
        }

        html[data-theme="dark"], body.dark-mode {
            --bg-main: #000000;
            --text-main: #e0eaf5;
            --accent-dorado: #e0eaf5;
            --accent-muted: #84add7;
            --timeline-line: rgba(132, 173, 215, 0.3);
            --timeline-dot: #84add7;
            --card-bg: rgba(60, 60, 60, 0.2);
            --border-color: rgba(224, 234, 245, 0.2);
        }

        body {
            background-color: var(--bg-main);
            color: var(--text-main);
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .container {
            width: 100%;
            max-width: 600px;
            padding: 3rem 1.5rem;
            box-sizing: border-box;
        }

        header {
            margin-bottom: 2rem;
        }

        header h1 {
            font-family: 'Times New Roman', serif;
            font-size: 2.5rem;
            color: var(--accent-dorado);
            margin: 0 0 0.5rem 0;
        }

        .description {
            font-size: 0.95rem;
            line-height: 1.6;
            color: var(--text-main);
            opacity: 0.8;
            margin-bottom: 2.5rem;
        }

        .now-section {
            margin-bottom: 2.5rem;
        }

        .now-section .date {
            font-family: 'Times New Roman', serif;
            font-size: 1.15rem;
            font-weight: bold;
            color: var(--accent-muted);
            margin-bottom: 0.75rem;
        }

        .now-section .content {
            font-size: 1rem;
            line-height: 1.7;
            color: var(--text-main);
        }

        /* --- LÓGICA Y ESTÉTICA DE LÍNEA DE TIEMPO (KY) --- */
        details {
            margin-top: 2rem;
        }

        details summary {
            cursor: pointer;
            color: var(--accent-muted);
            font-size: 1.05rem;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            list-style: none;
            user-select: none;
            transition: color 0.15s ease-out;
        }

        details summary::-webkit-details-marker {
            display: none;
        }

        details summary::before {
            content: "";
            display: inline-block;
            width: 0.5rem;
            height: 0.5rem;
            background-color: var(--accent-muted);
            clip-path: polygon(0 0, 100% 50%, 0 100%);
            transition: transform 0.15s ease-out, background-color 0.15s ease-out;
        }

        details[open] summary::before {
            transform: rotate(90deg);
        }

        details summary:hover {
            color: var(--accent-dorado);
        }

        details summary:hover::before {
            background-color: var(--accent-dorado);
        }

        .events {
            list-style: none;
            padding: 1.5rem 0 0 0;
            margin: 0;
            display: flex;
            flex-direction: column;
        }

        .event {
            display: grid;
            grid-template-columns: 14px 1fr;
            column-gap: 1.25rem;
            grid-template-areas:
                "dot heading"
                "line content";
            position: relative;
        }

        .event .dot {
            grid-area: dot;
            width: 8px;
            height: 8px;
            background-color: var(--timeline-dot);
            border-radius: 50%;
            place-self: center;
            z-index: 2;
        }

        .event .line {
            grid-area: line;
            width: 2px;
            background-color: var(--timeline-line);
            justify-self: center;
            position: absolute;
            top: 10px;
            bottom: -10px;
            z-index: 1;
        }

        .event:last-child .line {
            display: none;
        }

        .event .heading {
            grid-area: heading;
            font-size: 0.95rem;
            font-weight: bold;
            color: var(--accent-muted);
            line-height: 1.2;
        }

        .event .content {
            grid-area: content;
            padding-top: 0.4rem;
            padding-bottom: 2rem;
            font-size: 0.95rem;
            line-height: 1.6;
            color: var(--text-main);
        }

        .event .content p {
            margin: 0;
        }

        /* --- BOTÓN MODO OSCURO CIRCULAR --- */
        .dark-mode-toggle {
            background: none;
            border: 1px solid var(--border-color);
            color: var(--text-main);
            width: 45px;
            height: 45px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.2rem;
            margin: 3rem 0;
            transition: all 0.3s ease;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .dark-mode-toggle:hover {
            background-color: var(--card-bg);
            border-color: var(--accent-dorado);
        }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>Ya!</h1>
    </header>

    <div class="description">
        Acá se encuentran actualizaciones relativamente continuas de las etapas que estoy viviendo. Sirve como un almacenamiento más específicos de las etapas que me tocan.
    </div>

    <div class="now-section">
        <div class="date">Agosto 2026</div>
        <div class="content">
            Acabo de terminar las vacaciones y estoy todavía esforzandome en preparar la cabeza. Mañana arrancan las clases y estoy motivado, pero no termino de aceptarlo. Me estoy esforzando en no priorizar tanto la facultad y en enfocarme más en descansar humanamente también. Doy gracias por el hermoso descanso que tuve. Doy gracias por todos los propositos nuevos para este cuatrimestre, confío en el futuro que Dios me prepara. Se que el está obrando mucho en mi vida, lo he visto y se que sigue haciendolo. Brindis por este nuevo arranque!
        </div>
    </div>

    <details>
        <summary>Previamente...</summary>
        <ul class="events">
            <li class="event">
                <div class="dot" aria-hidden="true"></div>
                <div class="line" aria-hidden="true"></div>
                <span class="heading">Junio 2026</span>
                <div class="content">
                    <p>Estoy en un mar de tareas y movimiento máximo universitario. Me agotó todo, pero estoy contento porque ya se termina y de repente, como si nada, ya se pasó medio año. Doy gracias porque el Señor me resolvió este cuatrimestre redondito. Le tengo miedo a los finales, pero también se pasan.</p>
                </div>
            </li>
        </ul>
    </details>

    <button id="darkModeToggle" class="dark-mode-toggle" aria-label="Cambiar modo">
        ☀️
    </button>
</div>

<script>
    const toggleBtn = document.getElementById('darkModeToggle');
    const htmlRoot = document.documentElement;

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            htmlRoot.setAttribute('data-theme', 'dark');
            toggleBtn.innerText = "🌙";
        } else {
            document.body.classList.remove('dark-mode');
            htmlRoot.setAttribute('data-theme', 'light');
            toggleBtn.innerText = "☀️";
        }
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    toggleBtn.addEventListener('click', () => {
        const currentTheme = htmlRoot.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
        applyTheme(currentTheme);
    });
</script>

</body>
</html>