function dofirst() {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  if (canvas.width> canvas.height){
    range = canvas.width /50
  }else{
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
}
window.addEventListener("load", dofirst);
