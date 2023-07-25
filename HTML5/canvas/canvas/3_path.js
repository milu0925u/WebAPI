function dofirst() {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
  let ctx = canvas.getContext("2d");

  context.fillStyle = "red";
  context.strokeStyle = "blue";
  context.lineWidth = 5;

  // 移動位置
  context.moveTo(100, 100);
  // 繪製路徑
  context.lineTo(20, 20);
  context.lineTo(20, 50);
  context.lineTo(100, 10);
  context.lineTo(100, 100);
  context.closePath();

  // 依照繪製路徑畫線
  context.stroke();
  context.fill();

  //橡皮擦
  context.clearRect(0, 0, canvas.width, canvas.height);
}
window.addEventListener("load", dofirst);
