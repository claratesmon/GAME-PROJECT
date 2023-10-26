const gameOne = new Game();
const playerOne = new Player();


const gameBody = document.querySelector(".body")
const pieces = gameOne.piecesArray 
const startBtn = document.querySelector(".start-btn")
const introScreen = document.querySelector(".intro")
const buttonsPlayer = document.querySelector(".buttons")


let gameLoopID;
let frameCount = 0;


startBtn.addEventListener('click', () => {
    startGame()
})

///////////SCORE COUNT
let scoreCount = gameOne.score
document.querySelector(".score-count").innerText = scoreCount

function startGame(){
    
    
    gameOne.gameStarted = true
    introScreen.classList.add("hidden")
    buttonsPlayer.classList.remove("hidden")
    gameLoop()
    console.log(gameOne.gameStarted)
    

}
//Need to be an actual Array to be able to use forEach()
/////It is an actual array without need for Array.from because it is selected (converted into an object) inside the class
// selector all to get an array (with the generic class)

pieces.forEach(pieceObject => {

    pieceObject.checkCollision(pieceObject.color);

});

function endGame() {
    gameOne.gameStarted === false;
    cancelAnimationFrame(gameLoopID)

}

function gameLoop() {
    // forEach with the game.pieces (array) and update the top position of each element
    // it is updated inside the fall function
   
   
    /* const intervalID = setInterval(() => {   /////SCORE-COUNT

        if (scoreCount >= 1000) {
            clearInterval(intervalID)
        }
        scoreCount += 5;

        document.querySelector(".score-count").innerText = scoreCount

    }, 1000); */
   
    pieces.forEach((pieceObject) => {
        
        pieceObject.fall()
        pieceObject.checkCollision()

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



