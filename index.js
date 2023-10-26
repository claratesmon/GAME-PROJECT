const gameOne = new Game();
const playerOne = new Player();


const gameBody = document.querySelector(".body")
const pieces = gameOne.piecesArray
const startBtn = document.querySelector(".start-btn")
const introScreen = document.querySelector(".intro")
const buttonsPlayer = document.querySelector(".buttons")
const gameOverScreen = document.querySelector(".gameOver-container")


let gameLoopID;
let frameCount = 0;


startBtn.addEventListener('click', () => {
    startGame()
})


///////////SCORE COUNT
let scoreCount = gameOne.score
document.querySelector(".score-count").innerText = scoreCount

function startGame() {


    gameOne.gameStarted = true
    introScreen.classList.add("hidden")
    buttonsPlayer.classList.remove("hidden")
    gameLoop()
    console.log(gameOne.gameStarted)
    const intervalID = setInterval(() => {   /////SCORE-COUNT

        if (gameOne.checkGameOver()) {
            clearInterval(intervalID)
        }
        scoreCount += 5;

        document.querySelector(".score-count").innerText = scoreCount

    }, 1000);


}
//Need to be an actual Array to be able to use forEach()
/////It is an actual array without need for Array.from because it is selected (converted into an object) inside the class
// selector all to get an array (with the generic class)

/* pieces.forEach(pieceObject => {

    pieceObject.checkCollision(pieceObject.color);
    //document.removeEventListener("keypress", keyManager)

}); */

function endGame() {
    gameOne.gameStarted === false;
    gameOverScreen.classList.remove("hidden")
    cancelAnimationFrame(gameLoopID)

}

function gameLoop() {
    // forEach with the game.pieces (array) and update the top position of each element
    // it is updated inside the fall function
    pieces.forEach((pieceObject) => {

        pieceObject.checkCollision()
        pieceObject.fall()
        

    })
    /* if (frameCount % 240 === 0) {
        pieces.forEach((pieceObject) => {
            
            pieceObject.speed += Math.random() // you send the piece as argument
            // updatePiecePosition(piece)
        }) 
        
    } else if (frameCount % 920 === 0) {
        pieces.forEach((pieceObject) => {
            
            pieceObject.speed += Math.random() + 1 // you send the piece as argument
            // updatePiecePosition(piece)
        }) 
    } */

    if (gameOne.gameStarted === true) {

        frameCount++;
        gameLoopID = requestAnimationFrame(gameLoop);

    }

    if (gameOne.checkGameOver()) {
        endGame()
        return;
    }

}



