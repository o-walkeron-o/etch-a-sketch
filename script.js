const container = document.querySelector(".container");

let gridSize = 16;
let squareSize = 960 / gridSize;
let numberOfSquares = gridSize * gridSize;

for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px;`);
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "yellow";
    })
    container.appendChild(square);
}