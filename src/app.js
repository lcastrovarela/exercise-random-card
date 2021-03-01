/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
let numeros = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
let palos = ["\u2660", "\u2663", "\u2665", "\u2666"];

window.onload = function() {
  let random = Math.floor(Math.random() * 4);
  let random2 = Math.floor(Math.random() * 14);

  let palo = palos[random];
  let numero = numeros[random2];

  let elemento1 = document.getElementById("top-suit");
  let elemento2 = document.getElementById("number");
  let elemento3 = document.getElementById("bottom-suit");

  if (palo === "\u2665") {
    elemento1.style.color = "red";
    elemento3.style.color = "red";
  } else if (palo === "\u2666") {
    elemento1.style.color = "red";
    elemento3.style.color = "red";
  }

  elemento1.innerHTML = palo;
  elemento2.innerHTML = numero;
  elemento3.innerHTML = palo;
};
