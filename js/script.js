const FRAGMENT_LENGTH = 4000 // Milliseconds
// Background elements
const GRASS = document.getElementById("grass");
const SPACE = document.getElementById("space");
const NOORDERLICHT = document.getElementById("noorderlicht");
const MOONSURFACE = document.getElementById("moonsurface");
// Main character
const EEKHOORN = document.getElementById("eekhoorn");
const LEGERAKET = document.getElementById("legeraket");
const RAKETMETVUUR = document.getElementById("raketmetvuur");
const RAKETZONDERVUUR = document.getElementById("raketzondervuur");
// Objects
const ACORN = document.getElementById("acorn");
const ZON = document.getElementById("zon");
const CLOUD1 = document.getElementById("cloud1");
const CLOUD2 = document.getElementById("cloud2");
const CLOUD3 = document.getElementById("cloud3");
const PLANE = document.getElementById("plane");
const SATELLITE1 = document.getElementById("satellite1");
const SATELLITE2 = document.getElementById("satellite2");
const MOON = document.getElementById("moon");
const METEOR = document.getElementById("meteor");

function startLoop() {
  let fragment = 0;
  setInterval(() => {
    fragment++;
    console.debug(`[DEBUG] Starting fragment ${fragment}`);
    switch (fragment) {
      case 1:
        fragment1();
        break;
      case 2:
        fragment2();
        break;
      case 3:
        fragment3();
        break;
      case 4:
        fragment4();
        break;
      case 5:
        fragment5();
        break;
      case 6:
        fragment6();
        break;
      case 7:
        fragment7();
        break;
      case 8:
        fragment8();
        break;
      case 9:
        fragment9();
        break;
      case 10:
        resestAnimation();
        break;
      default:
        console.debug("[DEBUG] Restarting fragments");
        fragment = 0;
    }
  }, FRAGMENT_LENGTH);
}

function fragment1() {
  EEKHOORN.style.transition = "transform 4s linear";
  EEKHOORN.style.transform = "translateX(800px)";

}

function fragment2() {
  EEKHOORN.style.visibility = "hidden";
  LEGERAKET.style.visibility = "hidden";
  setTimeout(() => {
    RAKETZONDERVUUR.style.visibility = "visible";
  }, 500);
  setTimeout(() => {
    RAKETZONDERVUUR.style.visibility = "hidden";
  }, 500);
  setTimeout(() => {
    RAKETMETVUUR.style.visibility = "visible";
  }, 500)
}

function fragment3() {
  document.getElementById("grass").style.visibility = "hidden";
}

function fragment4() {

}

function fragment5() {

}

function fragment6() {
  document.getElementById("space").style.visibility = "visible";
}

function fragment7() {

}

function fragment8() {

}

function fragment9() {

}

function resestAnimation() {
  GRASS.style.visibility = "visible";
  SPACE.style.visibility = "hidden";
  NOORDERLICHT.style.visibility = "hidden";
  MOONSURFACE.style.visibility = "hidden";
  EEKHOORN.style.visibility = "visible";
  LEGERAKET.style.visibility = "visible";
  RAKETMETVUUR.style.visibility = "hidden";
  RAKETZONDERVUUR.style.visibility = "hidden";
  ACORN.style.visibility = "hidden";
  ZON.style.visibility = "hidden";
  CLOUD.style.visibility = "hidden";
  PLANE.style.visibility = "hidden";
  SATELLITE1.style.visibility = "hidden";
  SATELLITE2.style.visibility = "hidden";
  MOON.style.visibility = "hidden";
  METEOR.style.visibility = "hidden";
}

window.addEventListener("DOMContentLoaded", () => {
  startLoop();
});