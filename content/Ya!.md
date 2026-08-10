<style>
    .timeline-container {
        font-family: var(--sans);
        margin-top: 2rem;
    }
    .intro-text {
        margin-bottom: 2.5rem;
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--text-main);
    }
    .events {
        display: flex;
        flex-direction: column;
        padding: 0;
        list-style: none;
        margin: 0;
    }
    .event {
        display: grid;
        grid-template-columns: 16px 1fr;
        column-gap: 1.5rem;
        grid-template-areas: "dot heading" "line content";
        position: relative;
    }
    .dot {
        grid-area: dot;
        width: 12px;
        height: 12px;
        background-color: var(--gray, #888);
        border-radius: 50%;
        place-self: center;
        margin-top: 6px;
    }
    .line {
        grid-area: line;
        width: 2px;
        background-color: var(--gray, #444);
        justify-self: center;
        position: absolute;
        top: 24px;
        bottom: -16px;
        opacity: 0.3;
    }
    .event:last-child .line {
        display: none;
    }
    .heading {
        grid-area: heading;
        font-weight: 600;
        color: var(--text-muted, #999);
        font-size: 0.95rem;
        align-self: center;
    }
    .content {
        grid-area: content;
        padding-bottom: 3rem;
        line-height: 1.6;
        color: var(--text-main);
    }
    .content p {
        margin-top: 0.5rem;
    }
    .content img {
        margin-top: 1rem;
        border-radius: 6px;
        max-width: 100%;
        height: auto;
    }
</style>

<div class="timeline-container">
    
    <p class="intro-text">
        Acá se encuentran actualizaciones relativamente continuas de las etapas que estoy viviendo. Sirve como un almacenamiento más específicos de las etapas que me tocan. 
    </p>

    <ul class="events">
        <li class="event">
            <div class="dot" aria-hidden="true"></div>
            <span class="heading">Agosto 2026</span>
            <div class="line" aria-hidden="true"></div>
            <div class="content">
                <p>Acabo de terminar las vacaciones y estoy todavía esforzandome en preparar la cabeza. Mañana arrancan las clases y estoy motivado, pero no termino de aceptarlo. Me estoy esforzando en no priorizar tanto la facultad y en enfocarme más en descansar humanamente también. Doy gracias por el hermoso descanso que tuve. Doy gracias por todos los propositos nuevos para este cuatrimestre, confío en el futuro que Dios me prepara. Se que el está obrando mucho en mi vida, lo he visto y se que sigue haciendolo. Brindis por este nuevo arranque!</p>
                <img src="image_7ec824.jpg" alt="Inspiración Ya!">
            </div>
        </li>

        <li class="event">
            <div class="dot" aria-hidden="true"></div>
            <span class="heading">Junio 2026</span>
            <div class="line" aria-hidden="true"></div>
            <div class="content">
                <p>Estoy en un mar de tareas y movimiento máximo universitario. Me agotó todo, pero estoy contento porque ya se termina y de repente, como si nada, ya se pasó medio año. Doy gracias porque el Señor me resolvió este cuatrimestre redondito. Le tengo miedo a los finales, pero también se pasan.</p>
                <img src="image_7ebcde.jpg" alt="Inspiración Secundaria">
            </div>
        </li>
    </ul>

</div>