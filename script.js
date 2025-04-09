const container = document.getElementById("container");

const resetButton = document.querySelector("#reset");

function createGrid(n){ // n is an integer that represents the dimensions of the grid
    document.documentElement.style.setProperty("--columns", n);
    for(let i = 0; i < n; ++i){
        for(let j = 0; j < n; ++j){
            const div = document.createElement("div");
            div.classList.add("square")
            container.appendChild(div); 
        }
    }
}

function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}


resetButton.addEventListener("click", ()=>{
    console.log("The reset button has been clicked");
    clearGrid();
    let numberOfSquares = -1;
    while(numberOfSquares < 0 || numberOfSquares > 100){
        numberOfSquares = parseInt(prompt("What should the dimensions of the square grid be?"));
        console.log(numberOfSquares);
        console.log("Try again. The dimensions are too small or too big.");
    }
    createGrid(numberOfSquares);
})