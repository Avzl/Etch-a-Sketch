let gridContainer = document.querySelector(".gridContainer");
let squaresPerSide = document.querySelector("#squaresPerSide")
let sliderText = document.querySelector(".sliderText");
let refreshBtn = document.querySelector("#refreshGrid");
let colorPicker = document.querySelector("#colorPicker")
let userOptions = document.querySelector(".userOptions")
let selectedColor = "#000000"
let gridSize = 16;

let isRainbow = false;
let isShadeMode = false;




// User Interface functions
let randomNumber255 = () => {
    return Math.round(Math.random()*255)
}
let randomRGBA = () => {
    return (`rgba(${randomNumber255()}, ${randomNumber255()}, ${randomNumber255()}, 1)`)
}

colorPicker.addEventListener("input", () => {
    selectedColor = colorPicker.value;
})

squaresPerSide.addEventListener("input", () => {
    let sliderValue = squaresPerSide.value;
    sliderText.textContent = sliderValue;
    gridSize = sliderValue;
    refreshGrid(gridSize)
})


userOptions.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.id) {
        case "refreshGrid":
            refreshGrid(gridSize)
            break
        case "rainbowBtn":
            isRainbow = !isRainbow;
            isShadeMode = false
            break
        case "shadeBtn":
            isShadeMode = !isShadeMode;
            isRainbow = false;
            refreshGrid(gridSize)
            let pixels = document.querySelectorAll(".pixel")
            pixels.forEach(pixel => pixel.style.opacity = 0)
            break

    }
})




// Grid functions


let paint = (event) => {
    let target = event.target;
    if (target.classList.contains("pixel")) {

        if (isRainbow) {
            target.style.backgroundColor = randomRGBA();
            target.style.opacity = 1
        } else if (isShadeMode) {
            
            target.style.backgroundColor = selectedColor;
            let currentOpacity = parseFloat(target.style.opacity);
            console.log("Opacidad actual:", currentOpacity);

            let newOpacity = Math.min(currentOpacity + 0.2, 1);
            console.log("Nueva opacidad:", newOpacity);

            target.style.opacity = newOpacity;
            console.log(event.target)
        } else {
            target.style.backgroundColor = selectedColor;
            target.style.opacity = 1
        }
        
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

