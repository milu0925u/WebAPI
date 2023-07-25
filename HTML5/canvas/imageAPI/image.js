const thefile = document.getElementById("thefile");
const fileInfo = document.getElementById("fileInfo");
const img = document.getElementById("image");

thefile.addEventListener("change", function () {
  let file = this.files[0];

  //顯示圖片
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener("load", function () {
    img.src = readFile.result;
    img.style.maxWidth = "500px";
    img.style.maxHeight = "500px";
  });
});
