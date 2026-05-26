---
title: Libro de Visitas
---

<iframe id="visitas-iframe" src="/static/widget-visitas.html" style="width: 100%; border: none; overflow: hidden;" scrolling="no"></iframe>
<script>
  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'resize-iframe') {
      document.getElementById('visitas-iframe').style.height = e.data.height + 'px';
    }
  });
</script>