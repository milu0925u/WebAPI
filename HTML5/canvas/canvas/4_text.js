function dofirst() {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  context.font = "bold 50px Tahoma";

  // 可以選擇在text的哪個位置
  context.textBaseline = "botttom";

  context.strokeText("bookcamp", 100, 100);

  context.strokeStyle = "#7C9082";
  context.moveTo(100, 100);
  context.lineTo(400, 100);
  context.stroke();
}
window.addEventListener("load", dofirst);
