let gridContainer = document.querySelector(".gridContainer");
let squaresPerSide = document.querySelector("#squaresPerSide")
let sliderText = document.querySelector(".sliderText");
let refreshBtn = document.querySelector("#refreshGrid");
let colorPicker = document.querySelector("#colorPicker")
let selectedColor = "#000000"
let gridSize = 16;




// User Interface functions

colorPicker.addEventListener("input", () => {
    selectedColor = colorPicker.value;
})

squaresPerSide.addEventListener("input", () => {
    let sliderValue = squaresPerSide.value;
    sliderText.textContent = sliderValue;
    gridSize = sliderValue;
    refreshGrid(gridSize)
})






// Grid functions


let paint = (event) => {
    let target = event.target;
    if (target.classList.contains("pixel")) {
        target.style.backgroundColor = selectedColor;
    }
}
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

gridContainer.addEventListener("mouseover", (event) => {
    paint(event)
    
})

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



refreshBtn.addEventListener("click", () => refreshGrid(gridSize))