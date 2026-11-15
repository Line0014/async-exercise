document.addEventListener("DOMContentLoaded", init);

function init() {
  document.body.addEventListener("click", pickFunction);
}

function pickFunction() {
  console.log("body clicked");
}
