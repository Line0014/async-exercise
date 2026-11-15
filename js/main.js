document.addEventListener("DOMContentLoaded", init);

function init() {
  document.body.addEventListener("click", pickFunction);
}

function pickFunction() {
  let num = Math.random();
  let picked = Math.round(num);
  console.log("random number", num, "rounded to", picked);

  if (picked) {
    changeColour();
  } else {
    showMessage();
  }
}

function changeColour() {
  console.log("colour will change");
}

function showMessage() {
  console.log("message will be displayed");
}
