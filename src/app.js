import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  document.getElementById("domains").innerHTML = generateDomain();

  function generateDomain() {
    let pronoun = ["the", "our","super","mega"];
    let adj = ["great", "big","spectacular","sayagin"];
    let noun = ["jogger", "racoon","kakarot","god"];
    let combinaciones = "";

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          let randomColor = getRandomColor();
          combinaciones += `<li class="list-group-item" style="color:${randomColor};">${pronoun[i]}${adj[j]}${noun[k]}.com</li>`;
        }
      }
    }
    console.log(combinaciones);
    return combinaciones;
  }


  
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
};