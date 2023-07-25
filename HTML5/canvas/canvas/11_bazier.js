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

  //置中線
  context.beginPath();
  context.moveTo(0, canvas.height / 2);
  context.lineTo(canvas.width, canvas.height / 2);

  context.moveTo(canvas.width / 2, 0);
  context.lineTo(canvas.width / 2, canvas.height);

  context.strokeStyle = "rgba(0,0,0,0.7)";
  context.stroke();




  let radius=150;
//   左上
  context.strokeStyle='red';
  context.lineWidth=5;
  
  context.beginPath();
  context.moveTo(150, 250);
  context.bezierCurveTo(250, 100, 350, 50,400,300);
  context.stroke();


//   輔助線
  context.strokeStyle = "blue";
  context.lineWidth = 1;

  context.beginPath();
  context.moveTo(150, 250);
  context.lineTo(250, 100);
  context.lineTo(350, 50);
  context.lineTo(400, 300);
  context.stroke();

  context.fillText('150,250',130,260);
  

  
}
window.addEventListener("load", dofirst);
