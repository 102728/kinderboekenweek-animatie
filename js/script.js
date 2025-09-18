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
// Overig
const BODY = document.getElementById("bodydiv");

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
        fragment10();
        break;
      case 11:
        fragment11();
        break;
      case 12:
        fragment12();
        break;
      case 13:
        resestAnimation();
        break
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
  }, 3500);
  setTimeout(() => {
    RAKETMETVUUR.style.visibility = "visible";
  }, 4000);
}

function fragment3() {
  GRASS.style.transition = "transform 4s linear";
  GRASS.style.transform = "translateY(600px)";
  ZON.style.transition = "transform 12s linear";
  ZON.style.transform = "translateY(1080px)";
  BODY.style.transition = "background-color 20s linear";
  BODY.style.backgroundColor = "rgba(5, 46, 87, 1)"
  setTimeout(() => {
    CLOUD1.style.visibility = "visible";
    CLOUD1.style.transition = "transform 10s linear";
    CLOUD1.style.transform = "translateY(1580px)";
    CLOUD2.style.visibility = "visible";
    CLOUD2.style.transition = "transform 8s linear";
    CLOUD2.style.transform = "translateY(1580px)";
    CLOUD3.style.visibility = "visible";
    CLOUD3.style.transition = "transform 12s linear";
    CLOUD3.style.transform = "translateY(1580px)";
  }, 2000);
}

function fragment4() {
  PLANE.style.visibility = "visible";
  PLANE.style.transition = "transform 6s linear";
  PLANE.style.transform = "translateX(2320px) translateY(400px)";
}

function fragment5() {
  SATELLITE1.style.visibility = "visible";
  SATELLITE1.style.transition = "transform 8s linear";
  SATELLITE1.style.transform = "translateY(1480px)";
  setTimeout(() => {
    SATELLITE2.style.visibility = "visible";
    SATELLITE2.style.transition = "transform 8s linear";
    SATELLITE2.style.transform = "translateY(1580px)";
  }, 1500);
}

function fragment6() {
  setTimeout(() => {
    METEOR.style.visibility = "visible";
    METEOR.style.transition = "transform 4s linear";
    METEOR.style.transform = "translateY(1580px) translateX(1000px)";
  }, 2000)
}

function fragment7() {
  NOORDERLICHT.style.visibility = "visible";
  NOORDERLICHT.style.transition = "transform 4s linear";
  NOORDERLICHT.style.transform = "translateY(700px)";
  setTimeout(() => {
    MOON.style.visibility = "visible";
    MOON.style.transition = "transform 3s linear";
    MOON.style.transform = "translateY(200px)";
  }, 1000);
}

function fragment8() {
  RAKETMETVUUR.style.transition = "transform 4s linear";
  RAKETMETVUUR.style.transform = "translateY(-1200px)";
}

function fragment9() {
  MOON.style.visibility = "hidden";
  NOORDERLICHT.style.visibility = "hidden";
  SPACE.style.visibility = "visible";
  MOONSURFACE.style.visibility = "visible";
  MOONSURFACE.style.transition = "transform 4s linear";
  MOONSURFACE.style.transform = "translateY(-500px)"
  ACORN.style.visibility = "visible";
  ACORN.style.transition = "transform 4s linear";
  ACORN.style.transform = "translateY(-500px)"
  RAKETMETVUUR.style.transition = "transform 6s ease-out";
  RAKETMETVUUR.style.transform = "translateY(0px)";
}

function fragment10() {
  setTimeout(() => {
    RAKETMETVUUR.style.visibility = "hidden";
    RAKETZONDERVUUR.style.visibility = "visible";
  }, 2000);
}

function fragment11() {
  RAKETZONDERVUUR.style.visibility = "hidden";
  setTimeout(() => {
    LEGERAKET.style.visibility = "visible";
  }, 500);
  setTimeout(() => {
    EEKHOORN.style.visibility = "visible";
    EEKHOORN.style.transition = "none";
    EEKHOORN.style.transform = "scaleX(-1) translateX(-800px)";
    void EEKHOORN.offsetWidth;
    EEKHOORN.style.transition = "transform 4s linear";
    EEKHOORN.style.transform = "scaleX(-1) translateX(-250px)";
  }, 1000);
}

function fragment12() {
// leeg om pauze bij einde te creeren
}

function resestAnimation() {
  // Reset background / container
  BODY.style.transition = "none"; // prevent fade anim during reset
  BODY.style.backgroundColor = "skyblue";

  // Helper to clear transform & transition quickly
  function clear(el) {
    if (!el) return;
    el.style.transition = "none"; // remove lingering transitions
    el.style.transform = ""; // empty string restores CSS default (no transform)
  }

  // Show starting elements
  GRASS.style.visibility = "visible";
  ZON.style.visibility = "visible";
  EEKHOORN.style.visibility = "visible";
  LEGERAKET.style.visibility = "visible";

  // Hide elements that should start hidden
  SPACE.style.visibility = "hidden";
  NOORDERLICHT.style.visibility = "hidden";
  MOONSURFACE.style.visibility = "hidden";
  RAKETMETVUUR.style.visibility = "hidden";
  RAKETZONDERVUUR.style.visibility = "hidden";
  ACORN.style.visibility = "hidden";
  CLOUD1.style.visibility = "hidden";
  CLOUD2.style.visibility = "hidden";
  CLOUD3.style.visibility = "hidden";
  PLANE.style.visibility = "hidden";
  SATELLITE1.style.visibility = "hidden";
  SATELLITE2.style.visibility = "hidden";
  MOON.style.visibility = "hidden";
  METEOR.style.visibility = "hidden";

  // Clear transforms & transitions (sets back to initial CSS placement)
  clear(GRASS); // fixes stray semicolon & position
  clear(ZON);
  clear(EEKHOORN);
  clear(LEGERAKET);
  clear(RAKETMETVUUR);
  clear(RAKETZONDERVUUR);
  clear(ACORN);
  clear(SPACE);
  clear(NOORDERLICHT);
  clear(MOONSURFACE);
  clear(CLOUD1);
  clear(CLOUD2);
  clear(CLOUD3);
  clear(PLANE);
  clear(SATELLITE1);
  clear(SATELLITE2);
  clear(MOON);
  clear(METEOR);

  // Specific positions that were transformed during the sequence
  // Squirrel was flipped (scaleX(-1)); ensure it faces original direction
  EEKHOORN.style.transform = ""; // remove flip & translation

  // Rocket states: ensure base rocket visible, others hidden & neutral
  LEGERAKET.style.transform = "";
  RAKETMETVUUR.style.transform = "";
  RAKETZONDERVUUR.style.transform = "";

  // Parallax items
  ACORN.style.transform = ""; // ensure it falls again next loop

  // Northern lights & moon surface revert
  NOORDERLICHT.style.transform = "";
  MOONSURFACE.style.transform = "";

  // Force reflow so next fragment transitions trigger cleanly
  void BODY.offsetWidth;
}

window.addEventListener("DOMContentLoaded", () => {
  startLoop();
});

// fix at reset:
// sun
// background
// squirrel
// grass