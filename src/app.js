/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suits = ["&hearts;", "&spades;", "&clubs;", "&diams;"];
  const values = [
    "A",
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
    "K"
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  document.getElementById("top-suit").innerHTML = randomSuit;
  document.getElementById("bottom-suit").innerHTML = randomSuit;

  document.getElementById("number").innerHTML = randomValue;

  if (randomSuit === "&hearts;" || randomSuit === "&diams;") {
    document.getElementById("top-suit").style.color = "red";
    document.getElementById("bottom-suit").style.color = "red";
    document.getElementById("number").style.color = "red";
  } else {
    document.getElementById("top-suit").style.color = "black";
    document.getElementById("bottom-suit").style.color = "black";
    document.getElementById("number").style.color = "black";
  }
};
