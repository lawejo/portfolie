"use strict";

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

const mediaSize = window.matchMedia("(max-width: 784px)");
const mediaSize2 = window.matchMedia("(max-width: 324px)");
let url = location.href;
let mobileFirstSpan = document.querySelector("#mobile_first_span");
let dynamicSpan = document.querySelector("#dynamic_span");
let fetchSpan = document.querySelector("#fetch_span");
let h2 = document.querySelector("#h2_langt_ord");
if (mediaSize.matches) {
  if (url.includes("en")) {
    mobileFirstSpan.textContent = "Underneath here";
    dynamicSpan.textContent = "underneath here";
    fetchSpan.textContent = "underneath here";
  } else if (url.includes("da")) {
    mobileFirstSpan.textContent = "Forneden her";
    dynamicSpan.textContent = "forneden her";
    fetchSpan.textContent = "forneden her";
  }
}

if (mediaSize2.matches) {
  h2.textContent = "tilstede- værelse";
}
const useDark = window.matchMedia("(prefers-color-scheme: dark)");
if (useDark.matches === false) {
  document.querySelector("#fav_16").href =
    "../assets/favicon_io/darkmode_favicon-16x16.png";
  document.querySelector("#fav_32").href =
    "../assets/favicon_io/darkmode_favicon-32x32.png";
  console.log("we using dark favicon");
}
