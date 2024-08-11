let gridContainer = document.querySelector(".gridContainer");

let gridSize = 16;

let resetGrid = () => {
    let pixels = document.querySelectorAll(".pixel")
    pixels.forEach(pixel => pixel.classList.remove("painted"))
}

let makeGrid = (gridSize) => {
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

        
        
        
        gridContainer.appendChild(row);

    }
    ;
}

gridContainer.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.classList == "pixel") {
        target.classList.add("painted")
    }
    
})

makeGrid(gridSize)
