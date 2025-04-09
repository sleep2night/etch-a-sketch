const container = document.getElementById("container");

const resetButton = document.querySelector("#reset");
const displayGridButton = document.querySelector("#displayGrid");

function createGrid(n){ // n is an integer that represents the dimensions of the grid
    document.documentElement.style.setProperty("--columns", n);
    for(let i = 0; i < n; ++i){
        for(let j = 0; j < n; ++j){
            const div = document.createElement("div");
            div.classList.add("square");
            container.appendChild(div); 
        }
    }
}

function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function userInput(){
    let numberOfSquares = -1;
    while(!Number.isInteger(numberOfSquares) || numberOfSquares < 0 || numberOfSquares > 100){
        numberOfSquares = parseInt(prompt("What should the dimensions of the square grid be? Enter a number between 0 and 100."));
        console.log(numberOfSquares);
        if(!Number.isInteger(numberOfSquares) || numberOfSquares < 0 || numberOfSquares > 100) 
            console.log("Try again. Please enter a valid integer between 0 and 100.");
    }
    createGrid(numberOfSquares);
}

resetButton.addEventListener("click", ()=>{
    console.log("The reset button has been clicked");
    clearGrid();
    userInput();
    colorSquares();
})

displayGridButton.addEventListener("click", ()=>{
    console.log("The Display Grid button has been clicked.");
    const squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        square.classList.toggle("border-toggle");
    })

})

function colorSquares(){
    const squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        square.addEventListener("mouseover",()=>{
            square.classList.add("active");
        })
    })
}
createGrid(16);
colorSquares();

