const container = document.querySelector(".container");
const btnSetUpSize = document.querySelector("#btnSetUpSize");
const btnClear = document.querySelector("#btnClear");

let gridSize = 16;
let squareSize = 960 / gridSize;
let numberOfSquares = gridSize * gridSize;

function createGridOfSquares(numberOfSquares, squareSize) {
    for (let i = 0; i < numberOfSquares; i++) {
        const square = document.createElement("div");
        square.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px;`);
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });
        btnClear.addEventListener("click", () => {
            square.style.backgroundColor = "white";
        });
        container.appendChild(square);
    }
}

createGridOfSquares(numberOfSquares, squareSize);

btnSetUpSize.addEventListener("click", () => {
    do {
        gridSize = +prompt("Type a number between 1 and 100 for the grid size")
    } while (gridSize < 1 || gridSize > 100 || isNaN(gridSize));
    squareSize = 960 / gridSize;
    numberOfSquares = gridSize * gridSize;
    container.textContent = "";
    createGridOfSquares(numberOfSquares, squareSize);
});