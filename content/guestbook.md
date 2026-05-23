<div class="guestbook-container">
  <h1 class="guestbook-main-title">Sign the guestbook</h1>

  <div class="guestbook-tabs">
    <button id="tab-draw" class="tab-btn active" onclick="switchTab('draw')">Draw something</button>
    <button id="tab-write" class="tab-btn" onclick="switchTab('write')">Write a message</button>
  </div>

  <form id="guestbook-form" onsubmit="handleFormSubmit(event)">
    
    <div id="section-draw" class="guestbook-section active">
      <div class="canvas-toolbar">
        <button type="button" id="tool-pencil" class="tool-btn active" onclick="setTool('pencil')">✏️</button>
        <button type="button" id="tool-eraser" class="tool-btn" onclick="setTool('eraser')">🧽</button>
        <span class="divider">|</span>
        <button type="button" class="size-btn small active" onclick="setBrushSize(2, this)">•</button>
        <button type="button" class="size-btn medium" onclick="setBrushSize(6, this)">●</button>
        <button type="button" class="size-btn large" onclick="setBrushSize(12, this)">⬤</button>
        <span class="divider">|</span>
        <button type="button" class="action-btn" onclick="undoLast()">⟲</button>
        <button type="button" class="action-btn" onclick="clearCanvas()">🗑️</button>
      </div>
      
      <div class="canvas-wrapper">
        <canvas id="paintbook-canvas" width="500" height="400"></canvas>
      </div>
    </div>

    <div id="section-write" class="guestbook-section">
      <div class="input-group">
        <label for="guest-words">Your words</label>
        <textarea id="guest-words" rows="5" placeholder="Escribe tu mensaje aquí..."></textarea>
      </div>
    </div>

    <div class="guestbook-common-fields">
      <div class="input-group">
        <label for="guest-name">Your name</label>
        <input type="text" id="guest-name" required placeholder="Anónimo">
      </div>
      
      <div class="input-group">
        <label for="guest-website">Your website (optional)</label>
        <input type="url" id="guest-website" placeholder="https://tuweb.com">
      </div>
    </div>

    <button type="submit" class="submit-guestbook-btn">Submit entry</button>
  </form>
</div>

<style>
.guestbook-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  font-family: system-ui, -apple-system, sans-serif !important;
  color: #e3dac9;
}

.guestbook-main-title {
  text-align: center;
  font-family: 'Times New Roman', serif !important;
  color: #E7C8A0;
  font-size: 2.2rem;
  margin-bottom: 2rem;
}

/* Pestañas */
.guestbook-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 2rem;
}

.tab-btn {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(168, 158, 149, 0.3);
  color: #e3dac9;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.tab-btn:hover, .tab-btn.active {
  background: rgba(231, 200, 160, 0.15);
  border-color: #E7C8A0;
  color: #E7C8A0;
}

/* Secciones intercambiables */
.guestbook-section {
  display: none;
}

.guestbook-section.active {
  display: block;
}

/* Herramientas de dibujo */
.canvas-toolbar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.04);
  padding: 8px 16px;
  border-radius: 8px 8px 0 0;
  border: 1px solid rgba(168, 158, 149, 0.3);
  border-bottom: none;
}

.tool-btn, .size-btn, .action-btn {
  background: none;
  border: none;
  color: #e3dac9;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 1rem;
}

.tool-btn.active, .size-btn.active {
  background: rgba(231, 200, 160, 0.2);
  color: #E7C8A0;
}

.divider {
  color: rgba(168, 158, 149, 0.3);
}

/* Contenedor del Lienzo */
.canvas-wrapper {
  background: #faf7f2; /* Fondo claro para dibujar idéntico a Daniel */
  border: 1px solid rgba(168, 158, 149, 0.3);
  border-radius: 0 0 8px 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

#paintbook-canvas {
  display: block;
  cursor: crosshair;
  background: #faf7f2;
}

/* Campos de Formulario */
.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 1.5rem;
}

.input-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #e3dac9;
}

.input-group input, .input-group textarea {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(168, 158, 149, 0.3);
  border-radius: 8px;
  padding: 12px;
  color: #faf7f2;
  font-family: inherit;
  font-size: 0.95rem;
}

.input-group input:focus, .input-group textarea:focus {
  outline: none;
  border-color: #E7C8A0;
  background: rgba(0, 0, 0, 0.3);
}

.guestbook-common-fields {
  margin-top: 1.5rem;
}

/* Botón de Enviar */
.submit-guestbook-btn {
  width: 100%;
  background: rgba(231, 200, 160, 0.1);
  border: 1px solid #E7C8A0;
  color: #E7C8A0;
  padding: 14px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;
}

.submit-guestbook-btn:hover {
  background: #E7C8A0;
  color: #111;
}
</style>

<script>
let currentTab = 'draw';
let isDrawing = false;
let currentTool = 'pencil';
let brushSize = 2;
let lastX = 0;
let lastY = 0;

// Historial para deshacer (Undo)
let canvasHistory = [];

const canvas = document.getElementById('paintbook-canvas');
const ctx = canvas.getContext('2d');

// Configuración inicial del trazo
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.strokeStyle = '#111111'; // Color del lápiz sobre fondo claro

// Guardar estado inicial para el historial
saveHistory();

function switchTab(tab) {
  currentTab = tab;
  document.getElementById('tab-draw').classList.toggle('active', tab === 'draw');
  document.getElementById('tab-write').classList.toggle('active', tab === 'write');
  document.getElementById('section-draw').classList.toggle('active', tab === 'draw');
  document.getElementById('section-write').classList.toggle('active', tab === 'write');
}

function setTool(tool) {
  currentTool = tool;
  document.getElementById('tool-pencil').classList.toggle('active', tool === 'pencil');
  document.getElementById('tool-eraser').classList.toggle('active', tool === 'eraser');
  ctx.strokeStyle = tool === 'eraser' ? '#faf7f2' : '#111111';
}

function setBrushSize(size, element) {
  brushSize = size;
  document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');
}

// Eventos del Canvas (Mouse y Táctil)
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = getMousePos(e);
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => { if(isDrawing) { isDrawing = false; saveHistory(); } });
canvas.addEventListener('mouseout', () => { if(isDrawing) { isDrawing = false; saveHistory(); } });

// Soporte para celulares (Touch)
canvas.addEventListener('touchstart', (e) => {
  isDrawing = true;
  const touch = e.touches[0];
  [lastX, lastY] = getMousePos(touch);
  e.preventDefault();
});
canvas.addEventListener('touchmove', (e) => {
  if (!isDrawing) return;
  const touch = e.touches[0];
  draw(touch);
  e.preventDefault();
});
canvas.addEventListener('touchend', () => { if(isDrawing) { isDrawing = false; saveHistory(); } });

function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  return [
    e.clientX - rect.left,
    e.clientY - rect.top
  ];
}

function draw(e) {
  if (!isDrawing) return;
  const [x, y] = getMousePos(e);

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.lineWidth = brushSize;
  ctx.stroke();
  
  [lastX, lastY] = [x, y];
}

function clearCanvas() {
  ctx.fillStyle = '#faf7f2';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  saveHistory();
}

function saveHistory() {
  if (canvasHistory.length > 20) canvasHistory.shift(); // Límite de memoria
  canvasHistory.push(canvas.toDataURL());
}

function undoLast() {
  if (canvasHistory.length > 1) {
    canvasHistory.pop(); // Elimina el estado actual
    let previousState = canvasHistory[canvasHistory.length - 1];
    let img = new Image();
    img.src = previousState;
    img.onload = function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    }
  }
}

// Manejo del envío (Prueba local)
function handleFormSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('guest-name').value;
  const website = document.getElementById('guest-website').value;
  
  let entryData = {
    name: name,
    website: website,
    type: currentTab
  };

  if (currentTab === 'draw') {
    // Convierte el dibujo entero a una cadena de texto de imagen
    entryData.content = canvas.toDataURL();
  } else {
    entryData.content = document.getElementById('guest-words').value;
  }

  console.log("¡Datos listos para enviar a la Base de Datos!", entryData);
  alert("Interfaz funcionando perfectamente. ¡Estructura lista para conectar!");
}
</script>