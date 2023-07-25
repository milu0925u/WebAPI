function dofirst() {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  // 網格
  if (canvas.width > canvas.height) {
    range = canvas.width / 50;
  } else {
    range = canvas.height / 50;
  }

  for (let i = 0; i <= range; i++) {
    let interval = i * 50; //間格
    context.moveTo(0, interval);
    context.lineTo(canvas.width, interval);
    context.fillText(interval, 0, interval);

    context.moveTo(interval, 0);
    context.lineTo(interval, canvas.height);
    context.fillText(interval, interval, 10);
  }
  context.strokeStyle = "rgba(0,0,0,0.1)";
  context.stroke();


  context.lineWidth = 15;
  context.strokeStyle = "red";

  context.beginPath();
  context.lineCap = "round";
  context.moveTo(100, 100);
  context.lineTo(200, 100);
  context.stroke();

  context.beginPath();
  context.lineCap = "square";
  context.moveTo(100, 200);
  context.lineTo(200, 200);
  context.stroke();

  context.beginPath();
  context.moveTo(100, 300);
  context.lineTo(200, 300);
  context.stroke();

  context.beginPath();
  context.strokeStyle = "BLACK";
  context.lineCap = "round";
  context.moveTo(400, 120);
  context.lineTo(450, 150);
  context.stroke();

  context.beginPath();
  context.strokeStyle = "BLACK";
  context.lineCap = "round";
  context.moveTo(400, 180);
  context.lineTo(450, 150);
  context.stroke();

  context.beginPath();
  context.strokeStyle = "BLACK";
  context.lineCap = "round";
  context.moveTo(600, 120);
  context.lineTo(550, 150);
  context.stroke();

  context.beginPath();
  context.strokeStyle = "BLACK";
  context.lineCap = "round";
  context.moveTo(600, 180);
  context.lineTo(550, 150);
  context.stroke();

  context.beginPath();
  context.strokeStyle = "BLACK";
  context.moveTo(475, 200);

  // context.bezierCurveTo(50, 100, 150, 200, 300, 150);
  // context.quadraticCurveTo(500, 150, 525, 200);

  context.stroke();
}
window.addEventListener("load", dofirst);

