function doFirst() {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  setInterval(run,50)
  let step = 0;

  function run() {

    context.clearRect(0, 0, canvas.width, canvas.height); //清除

    step++;


    // 格線
    if (canvas.width > canvas.height) {
      range = canvas.width / 50;
    } else {
      range = canvas.height / 50;
    }
    // console.log(range);

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

    // 地板
    context.beginPath();
    context.moveTo(25, 350);
    context.lineTo(375, 350);
    context.strokeStyle = "rgb(0,0,0)";
    context.lineWidth = 2;
    context.stroke();

    context.lineWidth = 1;
    // 左邊
    context.beginPath();
    context.rect(50, 150, 150, 200);
    context.fillStyle = "#fff1b0";
    context.fill();
    context.stroke();

    // 左邊屋頂
    context.beginPath();
    context.moveTo(50, 150);
    context.lineTo(125, 75);
    context.lineTo(200, 150);
    context.fillStyle = "#fff1b0";
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(50, 150);
    context.lineTo(75, 125);
    context.lineTo(125, 150);
    context.closePath();
    context.fillStyle = "#f6ab1c";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(75, 125, 33, 25);
    context.rect(108, 125, 33, 25);
    context.rect(141, 125, 33, 25);
    context.fillStyle = "#f6ab1c";
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(174, 125);
    context.lineTo(200, 150);
    context.lineTo(174, 150);
    context.closePath();
    context.fillStyle = "#f6ab1c";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(108, 100, 33, 25);
    context.fillStyle = "#8fcedf";
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(50, 150);
    context.lineTo(25, 150);
    context.lineTo(125, 50);
    context.lineTo(225, 150);
    context.lineTo(200, 150);
    context.lineTo(125, 75);
    context.closePath();
    context.fillStyle = "#8fbc6b";
    context.fill();
    context.stroke();

    // 左邊門
    context.beginPath();
    context.rect(135, 275, 40, 75);
    context.fillStyle = "#9f815b";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(135, 200, 20, 45);
    context.rect(155, 200, 20, 45);

    context.rect(75, 200, 20, 45);
    context.rect(95, 200, 20, 45);

    context.rect(75, 275, 20, 45);
    context.rect(95, 275, 20, 45);

    context.fillStyle = "#8fcedf";
    context.fill();
    context.stroke();

    // 右邊
    context.beginPath();
    context.rect(200, 250, 150, 100);
    context.fillStyle = "#fde062";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(225, 275, 50, 45);
    context.rect(275, 275, 50, 45);
    context.fillStyle = "#8fcedf";
    context.fill();
    context.stroke();

    // 右邊屋頂
    context.beginPath();
    context.moveTo(200, 175);
    context.lineTo(325, 175);
    context.lineTo(360, 250);
    context.lineTo(200, 250);
    context.closePath();

    context.fillStyle = "#8fbe62";
    context.fill();
    context.stroke();

    //自製車子
    context.fillStyle = "#aaa";

    let carX = step % 600; //0~399

    context.fillRect(carX, 325, 40, 25); //車身內填滿
    context.strokeRect(carX, 325, 40, 25); //車身外框線
    context.beginPath(); //脫離
    context.arc(carX + 10, 350, 5, 0, 2 * Math.PI); //左輪胎路徑
    context.arc(carX + 30, 350, 5, 0, 2 * Math.PI); //右輪胎路徑

    context.fillStyle = "#333"; //輪胎上色
    context.stroke(); //輪胎外框線
    context.fill(); //輪胎填滿色
  }
}
window.addEventListener("load", doFirst);
