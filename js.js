const grid = document.querySelector(".grid");
let rgbVal;
let rgbDir = 1;

function drawGrid() {
  grid.innerHTML = "";
  rgbVal = 225;
  const n = document.querySelector("#numSquare").value;

  for (let i = 0; i < n; i++) {
    let gridRow = document.createElement("div");
    gridRow.className = "gridRow";
    for (let j = 0; j < n; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.className = "gridSquare";
      gridSquare.style.backgroundColor = "white";
      gridSquare.addEventListener("mouseover", (e) => changeColor(e));
      gridRow.appendChild(gridSquare);
    }
    grid.appendChild(gridRow);
  }
}

function changeColor(e) {
  const mode = document.querySelector("input[name='colorMode']:checked").value;

  if (mode == "classic") {
    let currentColor = e.target.style.backgroundColor;
    if (currentColor == "white") {
      e.target.style.backgroundColor = "black";
    } else if (currentColor == "black") {
      e.target.style.backgroundColor = "white";
    }
  } else if (mode == "random") {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;
  } else if (mode == "gray") {
    e.target.style.backgroundColor = `rgb(${rgbVal}, ${rgbVal}, ${rgbVal})`;
    if (rgbVal == 0 || rgbVal == 225) {
      rgbDir *= -1;
    }
    rgbVal = rgbVal + rgbDir * 25;
  }
}

const drawButton = document.querySelector(".drawBtn");
drawButton.addEventListener("click", () => drawGrid());