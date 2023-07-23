const grid = document.querySelector(".grid");

function drawGrid() {
  grid.innerHTML = "";
  const n = document.querySelector("#numSquare").value;
  for (let i = 0; i < n; i++) {
    let gridRow = document.createElement("div");
    gridRow.className = "gridRow";
    for (let j = 0; j < n; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("gridSquare", "unfilled");
      gridSquare.addEventListener("mouseover", (e) => changeColor(e));
      gridRow.appendChild(gridSquare);
    }
    grid.appendChild(gridRow);
  }
}

function changeColor(e) {
  let boxClasses = e.target.classList;
  if (boxClasses.contains("unfilled")) {
    boxClasses.remove("unfilled");
    boxClasses.add("filled");
  } else if (boxClasses.contains("filled")) {
    boxClasses.remove("filled");
    boxClasses.add("unfilled");
  }
}

const drawButton = document.querySelector(".drawBtn");
drawButton.addEventListener("click", () => drawGrid());