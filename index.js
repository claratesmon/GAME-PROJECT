const gameOne = new Game();
const playerOne = new Player();


const gameBody = document.querySelector(".body")

const gameHeight = gameBody.clientHeight



gameOne.gameOver = false

document.querySelector(".buttons")

let scoreCount = gameOne.score
document.querySelector(".score-count").innerText = scoreCount

const start = document.querySelector("#start-button")
document.addEventListener("click", () => {
    start.classList.add("visibility-hidden")
})

setTimeout(() => {
    const intervalID = setInterval(() => {

        if (scoreCount >= 1000) {
            clearInterval(intervalID)
        }
        scoreCount += 5;

        document.querySelector(".score-count").innerText = scoreCount

    }, 1000);

}, 2000)


//Need to be an actual Array to be able to use forEach()
const pieces = gameOne.piecesArray // selector all to get an array (with the generic class)

// forEach with the game.pieces (array) and update the top position of each element

console.log(pieces);


let gameLoopID;
let frameCount = 0;

function gameLoop() {
    
    
    
    pieces.forEach((pieceObject) => {
        
        pieceObject.fall() // you send the piece as argument
        // updatePiecePosition(piece)
    }) 

    if (frameCount % 240 === 0) {
        pieces.forEach((pieceObject) => {
            
            pieceObject.speed += 5 // you send the piece as argument
            // updatePiecePosition(piece)
        }) 
        
    }

    if (!gameOne.gameOver) {


        frameCount++;
        gameLoopID = requestAnimationFrame(gameLoop);
    }

}

//gameLoop() 

