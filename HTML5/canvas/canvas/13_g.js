function doFirst() {
  let canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  // 格線
  context.beginPath();
  if (canvas.width > canvas.height) {
    range = canvas.width / 50;
  } else {
    range = canvas.height / 50;
  }
  for (let i = 0; i <= range; i++) {
    let interval = i * 50;

    // 水平線
    context.moveTo(0, interval);
    context.lineTo(canvas.width, interval);
    context.fillText(interval, 0, interval);

    // 垂直線
    context.moveTo(interval, 0);
    context.lineTo(interval, canvas.height);
    context.fillText(interval, interval, 10);
  }
  context.strokeStyle = "rgba(0,0,0,0.3)";
  context.stroke();
  // =====

  // 線性漸層
  // let linear = context.createLinearGradient(50, 50, 450, 350);     // 對角線
  // let linear = context.createLinearGradient(50, 200, 450, 200);    // 水平
  let linear = context.createLinearGradient(250, 50, 250, 350); // 垂直
  linear.addColorStop(0, "red");
  linear.addColorStop(1, "blue");
  linear.addColorStop(0.5, "yellow");

  // context.fillStyle='yellow';
  context.fillStyle = linear;
  context.fillRect(50, 50, 400, 300);

  // 放射狀漸層 -- 若内圓跟外圓交會或超出，會讓圖形壞掉
  // let radial = context.createRadialGradient(250, 600, 50, 250, 600, 150);
  let radial = context.createRadialGradient(250, 600, 50, 160, 600, 150);
  radial.addColorStop(0, "red");
  radial.addColorStop(1, "blue");

  context.fillStyle = radial;
  context.fillRect(50, 450, 400, 300);

  // 如何確保内圓一定在外圓裡面? 將放射狀漸層色放在圓的 strokeStyle
  context.translate(750, 200);

  context.lineWidth = 15;
  let radius = 150;

  let circle = context.createRadialGradient(
    0,
    0,
    radius * 0.95,
    0,
    0,
    radius * 1.05
  );
  circle.addColorStop(0, "#666");
  circle.addColorStop(0.5, "#fff");
  circle.addColorStop(1, "#666");

  context.beginPath();
  context.arc(0, 0, radius, 0, 2 * Math.PI);

  context.strokeStyle = circle;
  context.stroke();

  context.translate(-750, -200);
}
window.addEventListener("load", doFirst);
