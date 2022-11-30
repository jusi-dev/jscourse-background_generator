const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const degInput = document.querySelector(".degInput");

const body = document.getElementById("gradient");

function linearBg() {
    body.style.background = "linear-gradient("+ degInput.value + "deg, " + color1.value + ", " + color2.value + ")";
    
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", linearBg);

color2.addEventListener("input", linearBg);

degInput.addEventListener("input", linearBg);