"use strict";
window.addEventListener("load", start);
/* ---------------Nav / Burgermenu----------------------- */
document.querySelector("nav svg").addEventListener("click", slideOutMenu);
document.querySelector(".burgermenu li").addEventListener("click", closemenu);
const burgermenuClass = document.querySelector(".bgmenuWidth");
const burgermenu = document.querySelector(".burgermenu");

function closemenu() {
  if (!burgermenu.classList.contains(burgermenuClass)) {
    slideOutMenu();
  }
}
function slideOutMenu() {
  document.querySelector(".burgermenu").classList.toggle("bgmenuWidth");
  document.querySelector("nav svg").classList.toggle("nav_svg_fixed");
  document.querySelector(".one").classList.toggle("lineOne");
  document.querySelector(".two").classList.toggle("lineTwo");
  document.querySelector(".three").classList.toggle("lineThree");
  document.querySelector("main").classList.toggle("remove_display");
}

/* ---------------UI Cards----------------------- */

function animatePlus() {
  document.querySelector(".svg_project_one").classList.toggle("rotate");
  document.querySelector(".project_one_desc").classList.toggle("display_desc");
}
function animatePlus2() {
  document.querySelector(".svg_project_two").classList.toggle("rotate");
  document.querySelector(".project_two_desc").classList.toggle("display_desc");
}
function animatePlus3() {
  document.querySelector(".svg_project_three").classList.toggle("rotate");
  document
    .querySelector(".project_three_desc")
    .classList.toggle("display_desc");
}

/* ---------------Animation------------------------ */
const properties = {
  duration: 1750,
  iterations: Infinity,
  direction: "alternate",
  easing: "ease-in-out",
};
const properties2 = {
  duration: 1750,
  iterations: Infinity,
  direction: "alternate",
  easing: "ease-in-out",
};
const properties3 = {
  duration: 1750,
  iterations: Infinity,
  direction: "alternate",
  easing: "ease-in-out",
};

const keyframes = [
  {
    transform: "translate(0,0)",
  },
  {
    transform: "translate(0,3vw)",
  },
];

const keyframes2 = [
  {
    transform: "translate(0,0)",
  },
  {
    transform: "translate(0,3vw)",
  },
];
const keyframes3 = [
  {
    transform: "translate(0,0)",
  },
  {
    transform: "translate(0,-3vw)",
  },
];

function start() {
  const arrow1 = document.querySelector("#scroll_indicator");
  const animation1 = arrow1.animate(keyframes, properties);
  //-----------------------------

  const arrow2 = document.querySelector("#scroll_indicator_p2");
  const animation2 = arrow2.animate(keyframes2, properties2);
  //-----------------------------------

  const arrow3 = document.querySelector("#backtothetop a");
  const animation3 = arrow3.animate(keyframes3, properties3);
}

/* ------------------------Mediaquery-------------------------------- */
const mediaSize = window.matchMedia("(max-width: 784px)");
const mediaSize2 = window.matchMedia("(max-width: 356px)");
if (mediaSize.matches) {
  properties.duration = 850;
  properties2.duration = 850;
  properties3.duration = 850;
  start();
}

if (mediaSize2.matches) {
  tilstedevaerelse.textContent = "tilstede-værelse";
}
const useDark = window.matchMedia("(prefers-color-scheme: dark)");
if (useDark.matches === false) {
  document.querySelector("#fav_16").href =
    "../assets/favicon_io/darkmode_favicon-16x16.png";
  document.querySelector("#fav_32").href =
    "../assets/favicon_io/darkmode_favicon-32x32.png";
  console.log("we using dark favicon");
}
