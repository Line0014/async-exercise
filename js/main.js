document.addEventListener("DOMContentLoaded", init);

function init() {
  document.body.addEventListener("click", pickFunction);
}

function pickFunction() {
  let num = Math.random();
  let picked = Math.round(num);

  if (picked) {
    changeColour();
  } else {
    showMessage();
  }
}

function changeColour() {
  console.log("colour will change");
  let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("#79e4bb");
    }, 1500);
  });
  p.then(function (hex) {
    console.log(hex);
  });
}

function showMessage() {
  console.log("message will be displayed");
  let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Hey there, thanks for waiting!");
    }, 1500);
  });
  p.then(function (msg) {
    console.log(msg);
  });
}
