function dofirst() {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  //設定顏色
  context.fillStyle = "#EDEEC0";
  context.strokeStyle = "#433E0E";

  //填滿矩形　　　　　x,y,寬,高
  context.fillRect(0, 0, 300, 200); //填滿的
  context.strokeRect(10, 10, 50, 50); //線條的



  //橡皮擦
context.clearRect(0, 0, canvas.width, canvas.height);
}
// 　　　　　　　　　window.onload = doFirst
// 　　　　　　　　　　　　↑ ↓ 相同
window.addEventListener("load", dofirst);

