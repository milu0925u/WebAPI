const left = document.getElementById("leftbox");
const right = document.getElementById("rightbox");
const img = document.getElementById("image");

// 行為
// 拖曳開始
img.addEventListener("dragstart", function (e) {
  let data = `<img src="${img.src}" alt="${img.alt}">`;
//   e.dataTransfer.setData("image/png", data);
  e.dataTransfer.setData("Shin", data);
});

// 拖曳結束
img.addEventListener("dragend", function () {
    img.style.visibility = 'hidden';
});

//箱子
// 拖進範圍
right.addEventListener("dragenter", function (e) {
  e.preventDefault();
});
// 停在裡面
right.addEventListener("dragover", function (e) {
  e.preventDefault();
});
// 放下
right.addEventListener("drop", function (e) {
  e.preventDefault();
  right.innerHTML = e.dataTransfer.getData("Shin");
});
