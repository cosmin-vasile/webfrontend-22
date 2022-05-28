var canvas = document.getElementById('myCanvas');
if (canvas.getContext) {
 var ctx = canvas.getContext('2d');
 ctx.fillStyle = '#c00';

  setTimeout(() => {
    ctx.fillRect(100, 100, 150, 150);
  }, 1000);

  setTimeout(() => {
    ctx.fillRect(200, 200, 150, 150);
  }, 2000);
}
