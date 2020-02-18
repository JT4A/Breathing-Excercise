breatheText = document.getElementById("breatheText");
start = document
  .getElementById("circle")
  .addEventListener("animationstart", listener, false);
iteration = document
  .getElementById("circle")
  .addEventListener("animationiteration", listener, false);

const delay = ms => new Promise(res => setTimeout(res, ms));

async function listener(event) {
  breatheText.innerHTML = "Breathe In";
  await delay(4000);
  breatheText.innerHTML = "Hold";
  await delay(4000);
  breatheText.innerHTML = "Breathe Out";
  await delay(4000);
  breatheText.innerHTML = "Hold";
  await delay(4000);
}
