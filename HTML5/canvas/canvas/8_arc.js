function dofirst() {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

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

  //置中線
  context.beginPath();
  context.moveTo(0, canvas.height / 2);
  context.lineTo(canvas.width, canvas.height / 2);

  context.moveTo(canvas.width / 2, 0);
  context.lineTo(canvas.width / 2, canvas.height);

  context.strokeStyle = "rgba(0,0,0,0.7)";
  context.stroke();


  // 畫圓
  context.strokeStyle = "red";
  context.lineWidth = 5;

  let radius = 150;

  context.translate(250, 200); //設定起始點

  
  context.beginPath();
  context.arc(0, 0, radius, 0, Math.PI, false);
  context.stroke();

  context.translate(-250, -200); //結束
}
window.addEventListener("load", dofirst);
