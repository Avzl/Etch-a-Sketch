let gridContainer = document.querySelector(".gridContainer");
let squaresPerSide = document.querySelector("#squaresPerSide")
let sliderText = document.querySelector(".sliderText");
let refreshBtn = document.querySelector("#refreshGrid");
let options = document.querySelector(".options");
let gridSize = 16;
let isMouseDown = false
let selectedColor = "#000000"

// Color Picker

let colorPicker = document.querySelector("#colorPicker");

colorPicker.addEventListener("input", () => {
    selectedColor = colorPicker.value;
})


// User Interface functions
squaresPerSide.addEventListener("input", () => {
    let sliderValue = squaresPerSide.value;
    sliderText.textContent = sliderValue;
    gridSize = sliderValue;
    refreshGrid(gridSize)
})



function paint(event) {
    let target = event.target;
    if (isMouseDown && target.classList.contains('pixel')) {

        target.style.backgroundColor = selectedColor;
    }
}

// Inicia la pintura
function startPainting() {
    isMouseDown = true;
}

// Detiene la pintura
function stopPainting() {
    isMouseDown = false;
}
gridContainer.addEventListener('mousedown', startPainting);
gridContainer.addEventListener('mouseup', stopPainting);
gridContainer.addEventListener('mouseleave', stopPainting); // Detiene la pintura si el ratón sale del contenedor
gridContainer.addEventListener('mouseover', paint);

options.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {
        case "refreshGrid":
            refreshGrid(gridSize);
            break;
    }
})



// Grid functions
let eraseAll = () => {
    let pixels = document.querySelectorAll(".pixel")
    pixels.forEach(pixel => pixel.classList.remove("painted"))
}

let makeGrid = (gridSize) => {
    let grid = document.createElement("div")
    grid.classList.add("grid")
    for(let i = 0; i < gridSize; i++) {

        let row = document.createElement("ul");
        row.classList.add("row");

        for(let i = 0; i < gridSize; i++) {
            let pixel =  document.createElement("div");
            let column = document.createElement("li");
            pixel.classList.add("pixel");
            column.classList.add("column");
            column.appendChild(pixel);

            row.appendChild(column);

            
        }

        
        
        
        grid.appendChild(row);
        

    }
    gridContainer.appendChild(grid);
}






let refreshGrid = (size) => {
    let grid = document.querySelector(".grid");
    if (grid) {
        grid.remove()
    }
    
    makeGrid(size)
}

addEventListener("load", (event) => {
    refreshGrid(gridSize)
})



