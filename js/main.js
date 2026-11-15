document.addEventListener("DOMContentLoaded", init);

function init() {
  document.body.addEventListener("click", pickFunction);
}

function pickFunction() {
  console.log("<body> clicked. Picking a function");
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
      let hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
      resolve(hex);
    }, 1500);
  });
  p.then(function (hex) {
    console.log(hex);
    document.body.style.backgroundColor = hex;
  });
}

function showMessage() {
  console.log("message will be displayed");
  let names = ["Brittany", "Kateryna", "Camilo", "Steve"];
  let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let index = Math.floor(Math.random() * names.length);
      resolve(
        "Hey " +
          names[index] +
          ", thanks for waiting through all those milliseconds.",
      );
    }, 1500);
  });
  p.then(function (msg) {
    let para = document.createElement("p");
    para.textContent = msg;
    document.querySelector("main").append(para);
  });
}
