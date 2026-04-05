
let candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"]
let board = []

let rows = 9;
let columns = 9;

let scoore = 0;

let currTile;
let  otherTile;

window.onload = function () {
  startGame()
}

function randomCandy() {
    return candies[Math.floor(Math.random() * candies.length)]
}

function startGame(){
    for(let r = 0; r < rows; r++){
        let row = [];
        for(let c = 0; c < columns; c++){
          // <img id = "row-col" src = "./imgs/Red.png">
           let tile = document.createElement("img")
           tile.id = r.toString() + "-" + c.toString();
           tile.src = "./imgs/" + randomCandy() + ".png"

           //drag functionality
           tile.addEventListener("dragstart", dragStart); // click on a candy, initialize drag process
           tile.addEventListener("dragover", dragOver); // clicking on candy, moving mouse to dragthe candy
           tile.addEventListener("dragenter", dragEnter);// draging candy on to another candy
           tile.addEventListener("dragleave", dragLeave); // leave candy over another candy
           tile.addEventListener("drop", dragDrop) // dropping a candy over another candy
           tile.addEventListener("dragend", dragEnd); // after drag process completed, we swap candies

           document.getElementById("board").append(tile);;
           row.push(tile)
        }

        board.push(row)
    }

    console.log(board);
    
}

function dragStart() {
    // this refer to the tile that was clicked om for dragging
  currTile = this
}
