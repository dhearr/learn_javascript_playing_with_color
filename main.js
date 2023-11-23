const ubahWarna = document.getElementById("ubah-warna");
ubahWarna.addEventListener("click", function () {
  document.body.classList.toggle("active");
  document.body.removeAttribute("style");
});
const button1 = document.createElement("button");
const isiButton1 = document.createTextNode("ubah warna acak");
button1.append(isiButton1);
ubahWarna.after(button1);
button1.setAttribute("id", "ubah-warna-random");
const warnaRandom = document.getElementById("ubah-warna-random");
warnaRandom.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  isiRedBox.innerHTML = r;
  isiGreenBox.innerHTML = g;
  isiBlueBox.innerHTML = b;
  kotakBaru.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

const red = document.querySelector("input[name=red]");
const green = document.querySelector("input[name=green]");
const blue = document.querySelector("input[name=blue]");
const isiRedBox = document.querySelector("#isiRedBox");
const isiGreenBox = document.querySelector("#isiGreenBox");
const isiBlueBox = document.querySelector("#isiBlueBox");
const kotakBaru = document.getElementsByClassName("bungkus")[0];
red.addEventListener("input", function () {
  const r = red.value;
  const g = green.value;
  const b = blue.value;
  isiRedBox.innerHTML = r;
  kotakBaru.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

green.addEventListener("input", function () {
  const r = red.value;
  const g = green.value;
  const b = blue.value;
  isiGreenBox.innerHTML = g;
  kotakBaru.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
blue.addEventListener("input", function () {
  const r = red.value;
  const g = green.value;
  const b = blue.value;
  isiBlueBox.innerHTML = b;
  kotakBaru.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

document.body.addEventListener("mousemove", function (event) {
  // posisi mouse
  // console.log(event.clientX);
  // console.log(window.innerWidth);
  const posX = Math.round((event.clientX / window.innerWidth) * 255);
  const posY = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor =
    "rgb(" + posX + "," + posY + "," + posX + ")";
});
