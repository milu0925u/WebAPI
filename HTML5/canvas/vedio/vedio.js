function doFirst() {
  let myMovie = document.getElementById("myMovie");
  let playButton = document.getElementById("playButton");
  let defaultBar = document.getElementById("defaultBar");
  let progress = document.getElementById("progress");

  let stopButton = document.getElementById("stopButton");

  // 抓到defaultBar的css設定的長
  barSize = parseInt(getComputedStyle(defaultBar).width);

  //螢幕播放
  myMovie.addEventListener("click", function () {
    if (!myMovie.paused && !myMovie.ended) {
      myMovie.pause();
      playButton.innerText = "play";
    } else {
      myMovie.play();
      playButton.innerText = "pause";
      setInterval(update, 300);
    }
  });
  
  //播放鍵
  playButton.addEventListener("click", function () {
    if (!myMovie.paused && !myMovie.ended) {
      myMovie.pause();
      playButton.innerText = "play";
    } else {
      myMovie.play();
      playButton.innerText = "pause";
      setInterval(update, 300);
    }
  });

  //   停止鍵
  stopButton.addEventListener("click", function () {
    progress.style.width = `0px`;
    playButton.innerText = "play";
    myMovie.currentTime = 0;
    myMovie.pause();
  });

  // 進度條跳段
  defaultBar.addEventListener("click", function (e) {
    let mouseX = e.clientX - defaultBar.offsetLeft;
    progress.style.width = `${mouseX}px`;
    let newtime = mouseX / (barSize / myMovie.duration);
    myMovie.currentTime = newtime;
  });

  function update() {
    if (!myMovie.ended) {
      let size = (barSize / myMovie.duration) * myMovie.currentTime;
      progress.style.width = `${size}px`;
    } else {
      playButton.innerText = "play";
      myMovie.currentTime = 0;
      progress.style.width = `${size}px`;
    }
  }
}
window.addEventListener("load", doFirst);
