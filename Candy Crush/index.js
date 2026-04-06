
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

function dragDrop() {
    // this refers to the target tile that was dropped on
  otherTile = this;
}
// allow dragging only to left , right, above and below
// for this use id attribute's value
function dragEnd() {
    // swap the images
    
    let currCoords = currTile.id.split("-");// id = "0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0])
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let  r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1])

    let moveLeft = c2 == c - 1 && r2 == r;
    let moveRight = c2 == c + 1 && r == r2;
    let moveUp = r2 == r - 1 && c == c2;
    let moveDown = r2 == r + 1 && c == c2;

    let isAdjacent = moveLeft || moveRight || moveDown || moveUp

   if(isAdjacent){
     let currImg = currTile.src;
     let otherImg = otherTile.src;
     currTile.src = otherImg;
     otherTile.src = currImg;
   }
}

function crushCandy() {
  // check rows

  for(let r = 0; r < rows; r++){
    for( let c = 0; c < columns - 2; c++){
       let candy1 = board[r][c];
       let candy2 = board[r][c + 1];
       let candy3 = board[r + 1][c];
       
       if(candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")){
        candy1.src = "./imgs/blank.png";
        candy2.src = "./imgs/blank.png";
        candy3.src = "./imgs/blank.png";

       }
    }
  }
}
function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {

}

