function dofirst() {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  canvas.width = 800;
  canvas.height = 800;

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
  context.strokeStyle = "rgba(0,0,0,1)";
  context.stroke();


  //   外框線
  context.beginPath();
  context.fillStyle = "white";
  context.strokeStyle = "black";
  context.lineWidth = 5;
  context.moveTo(270, 0);
  context.lineTo(460, 0);
  context.lineTo(460, 20);
  context.lineTo(480, 20);
  context.lineTo(480, 40);
  context.lineTo(500, 40);
  context.lineTo(500, 330);
  context.lineTo(295, 330);
  context.lineTo(290, 330);
  context.lineTo(290, 350);
  context.lineTo(190, 350);
  context.lineTo(190, 330);
  context.lineTo(0, 330);
  context.lineTo(0, 60);
  context.lineTo(20, 60);
  context.lineTo(20, 45);
  context.lineTo(45, 45);
  context.lineTo(45, 20);
  context.lineTo(230, 20);
  context.lineTo(230, 45);
  context.lineTo(250, 45);
  context.lineTo(250, 20);
  context.lineTo(270, 20);
  context.lineTo(270, 0);
  context.stroke();
//   context.fill();
  
}
window.addEventListener("load", dofirst);
