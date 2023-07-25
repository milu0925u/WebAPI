function dofirst() {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  // setInterval(ball, 500);
  let step = 0;
  ball()

  function ball() {
    context.clearRect(0, 0, canvas.width, canvas.height); //清除

    step++;
    context.strokeStyle = "black";
    context.lineWidth = 3;

    let test = 300+Math.floor(Math.random()*50);
    console.log(test)

    //   寶貝球的變數們
    let startx = 100; //起始位置x 圓心
    let starty = 400; //起始位置y 圓心

    //   球的上圓
    context.beginPath();
    context.fillStyle = "red";
    context.arc(test, starty, 50, 0, Math.PI, true);
    context.lineTo(test, starty);
    context.fill();
    context.stroke();
    // 球的下圓
    context.beginPath();
    context.fillStyle = "white";
    context.arc(test, starty, 50, 0, Math.PI, false);
    // context.lineTo(test, starty+100);
    context.fill();
    context.stroke();

    //內圓-大
    context.beginPath();
    context.fillStyle = "white";
    context.lineWidth = 5;
    context.arc(test, starty, 20, 0, 2 * Math.PI);
    context.fill();
    context.stroke();

    //內圓-小
    context.beginPath();
    context.fillStyle = "white";
    context.lineWidth = 1;
    context.arc(test, starty, 10, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
  }


}
window.addEventListener("load", dofirst);
