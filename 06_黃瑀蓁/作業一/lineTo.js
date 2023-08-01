let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;


// 格線
    // if(canvas.width > canvas.height){
    //     range = canvas.width / 50
    // }else{
    //     range = canvas.height / 50
    // }
    // // console.log(range);

    // for(let i = 0; i <= range; i++){
    //     let interval = i * 50

    //     // 水平線
    //     context.moveTo(           0, interval);
    //     context.lineTo(canvas.width, interval);
    //     context.fillText(interval, 0, interval);        

    //     // 垂直線
    //     context.moveTo(interval,             0);
    //     context.lineTo(interval, canvas.height);
    //     context.fillText(interval, interval, 10);
    // }
    // context.strokeStyle='rgba(0,0,0,0.3)';    
    // context.stroke();



// sin(θ) = y / r
// cos(θ) = x / r

// context.beginPath();
// context.lineWidth = 2;
// context.lineTo(250, 150);
// context.lineTo(250, 250);
// context.stroke();

let r = 100; //邊長
let r2 = 35;
let x = 1.96;
let n = 8; //點
let degPI = 360 / (Math.PI * 2); //degPI 被用來將角度從度數轉換為弧度
let deg = 0 / degPI;

// 輔助線
// context.beginPath();
// context.lineWidth = 1;
// for (let i = 0; i < n + 1; i++) {
//   let deg = (i * (360 / n)) / degPI;
//   context.lineTo(250 + r * Math.cos(deg), 250 + r * Math.sin(deg));
// }
// context.stroke();

// context.beginPath();
// context.lineWidth = 1;
// for (let i = 0; i < n + 1; i++) {
//   let deg = (i * (360 / n)) / degPI;
//   context.lineTo(250 + r2 * Math.cos(deg + x), 250 + r2 * Math.sin(deg + x));
// }
// context.stroke();

// context.beginPath();
// context.lineWidth = 2;
// context.strokeStyle = "blue";
// //右
// context.beginPath();
// context.lineTo(250 + r * Math.cos(deg), 250 + r * Math.sin(deg));
// context.lineTo(250 - r2 * Math.cos(deg + x), 250 + r2 * Math.sin(deg + x));

// context.lineTo(250 + r * Math.cos(deg), 250 + r * Math.sin(deg));
// context.lineTo(250 + r2 * Math.cos(deg + x), 250 - r2 * Math.sin(deg + x));
// context.stroke();
// //左
// context.beginPath();
// context.lineTo(250 - r * Math.cos(deg), 250 + r * Math.sin(deg));
// context.lineTo(250 - r2 * Math.cos(deg + x), 250 + r2 * Math.sin(deg + x));

// context.lineTo(250 - r * Math.cos(deg), 250 + r * Math.sin(deg));
// context.lineTo(250 - r2 * Math.cos(deg + x), 250 - r2 * Math.sin(deg + x));
// context.stroke();

// //下
// context.beginPath();
// context.lineTo(250 + r * Math.sin(deg), 250 + r * Math.cos(deg));
// context.lineTo(250 - r2 * Math.sin(deg + x), 250 + r2 * Math.cos(deg + x));

// context.lineTo(250 + r * Math.sin(deg), 250 + r * Math.cos(deg));
// context.lineTo(250 + r2 * Math.sin(deg + x), 250 + r2 * Math.cos(deg + x));
// context.stroke();

// //上
// context.beginPath();
// context.lineTo(250 - r * Math.sin(deg), 250 - r * Math.cos(deg));
// context.lineTo(250 - r2 * Math.sin(deg + x), 250 - r2 * Math.cos(deg + x));

// context.lineTo(250 - r * Math.sin(deg), 250 - r * Math.cos(deg));
// context.lineTo(250 + r2 * Math.sin(deg + x), 250 - r2 * Math.cos(deg + x));
// context.stroke();

// 小上左
// context.lineTo(250 + r2 * Math.cos(deg + x), 250 - r2 * Math.sin(deg + x));
// 小上右
// context.lineTo(250 - r2 * Math.cos(deg + x), 250 - r2 * Math.sin(deg + x));
// 小右上
// context.lineTo(250 + r2 * Math.sin(deg + x), 250 + r2 * Math.cos(deg + x));
// 小右下
// context.lineTo(250 + r2 * Math.sin(deg + x), 250 - r2 * Math.cos(deg + x));
// 小下左
// context.lineTo(250 + r2 * Math.cos(deg + x), 250 + r2 * Math.sin(deg + x));
// 小下右
// context.lineTo(250 - r2 * Math.cos(deg + x), 250 + r2 * Math.sin(deg + x));
// 小左下
// context.lineTo(250 - r2 * Math.sin(deg + x), 250 - r2 * Math.cos(deg + x));
// 小左上
// context.lineTo(250 - r2 * Math.sin(deg + x), 250 + r2 * Math.cos(deg + x));
// 右
// context.lineTo(250 + r * Math.cos(deg), 250 + r * Math.sin(deg));
// 左
// context.lineTo(250 - r * Math.cos(deg), 250 + r * Math.sin(deg));
// 上
// context.lineTo(250 - r * Math.sin(deg), 250 - r * Math.cos(deg));
// 下
// context.lineTo(250 + r * Math.sin(deg), 250 + r * Math.cos(deg));

//    ↙
// context.lineTo(250 - r * Math.sin(degPI), 250 + r * Math.cos(degPI));
//   ↖
// context.lineTo(250 - r * Math.sin(degPI), 250 - r * Math.cos(degPI));
//  ↗
// context.lineTo(250 + r * Math.sin(degPI), 250 - r * Math.cos(degPI));
// ↘
// context.lineTo(250 + r * Math.sin(degPI), 250 + r * Math.cos(degPI));


let y = Math.sqrt(r ** 2 / 2);

// 完成品
context.beginPath();
context.strokeStyle = "black";

context.lineTo(250 - r * Math.sin(deg), 250 - r * Math.cos(deg));
context.lineTo(250 - r2 * Math.cos(deg + x), 250 - r2 * Math.sin(deg + x));
context.lineTo(250 + y, 250 - y); 
context.lineTo(250 + r2 * Math.sin(deg + x), 250 + r2 * Math.cos(deg + x));
context.lineTo(250 + r * Math.cos(deg), 250 + r * Math.sin(deg));
context.lineTo(250 + r2 * Math.sin(deg + x), 250 - r2 * Math.cos(deg + x));
context.lineTo(250 + y, 250 + y); 
context.lineTo(250 - r2 * Math.cos(deg + x), 250 + r2 * Math.sin(deg + x));
context.lineTo(250 + r * Math.sin(deg), 250 + r * Math.cos(deg));
context.lineTo(250 + r2 * Math.cos(deg + x), 250 + r2 * Math.sin(deg + x));
context.lineTo(250 -y, 250 + y); 
context.lineTo(250 - r2 * Math.sin(deg + x), 250 - r2 * Math.cos(deg + x));
context.lineTo(250 - r * Math.cos(deg), 250 + r * Math.sin(deg));
context.lineTo(250 - r2 * Math.sin(deg + x), 250 + r2 * Math.cos(deg + x));
context.lineTo(250 - y, 250 - y); 
context.lineTo(250 + r2 * Math.cos(deg + x), 250 - r2 * Math.sin(deg + x));
context.lineTo(250 - r * Math.sin(deg), 250 - r * Math.cos(deg));
context.stroke();
