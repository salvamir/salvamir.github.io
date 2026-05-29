---
title: Música
---

<iframe id="musica-iframe" src="/static/musica.html" style="width: 100%; border: none; overflow: hidden;" scrolling="no"></iframe>

<script>
  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'resize-iframe-musica') {
      document.getElementById('musica-iframe').style.height = e.data.height + 'px';
    }
  });
</script>