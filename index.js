const gameOne = new Game();
const playerOne = new Player();

let scoreCount = gameOne.score
let livesCount = gameOne.lives
const gameBody = document.querySelector(".body")
const pieces = gameOne.piecesArray
const startBtn = document.querySelector(".start-btn")
const introScreen = document.querySelector(".intro")
const buttonsPlayer = document.querySelector(".buttons")
const gameOverScreen = document.querySelector(".gameOver-container")
const xButton = document.querySelector("#X")
const restartBtn = document.querySelector("#restart-btn")

let gameIsOver = false
let gameLoopID;
let frameCount = 0;


startBtn.addEventListener('click', () => {
    startGame()
    gameOverScreen.classList.add("hidden")
})

xButton.addEventListener("click", () => {
    introScreen.classList.remove("hidden")
    gameOverScreen.classList.add("hidden")
    pieces.forEach(pieceObject => {
        pieceObject.piecesReset()
    });
    buttonsPlayer.classList.add("hidden")
    gameOne.score = 0

})

restartBtn.addEventListener('click', () => {
    if (gameIsOver === true) {
        restartGame()
    }
    gameOverScreen.classList.add("hidden")
    
})

const keyListener = (event) => {

    pieces.forEach(pieceObject => {
        const buttonElement = document.querySelector(".button-" + pieceObject.color)
        const buttonPostionY = buttonElement.getBoundingClientRect().y
        const piecePositionY = pieceObject.element.getBoundingClientRect().y
        if (piecePositionY < buttonPostionY + buttonElement.clientHeight
            && piecePositionY + pieceObject.element.clientHeight > buttonPostionY) {

            console.log("PIECE POSITION: ", piecePositionY, "BUTTON POSITION: ", buttonPostionY);
            if (event.key === pieceObject.key) {
                console.log("1 point");
                document.removeEventListener("keypress", keyListener);
                pieceObject.position = -170;
                buttonElement.style.backgroundColor = `${pieceObject.color}`;
                setTimeout(() => {
                    buttonElement.style.backgroundColor = `rgb(73, 70, 66)`;
                    document.addEventListener("keypress", keyListener);
                }, 700);

            }

        }

    });
};
document.addEventListener("keypress", keyListener);

///////////SCORE COUNT

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


function gameLoop() {
    // forEach with the game.pieces (array) and update the top position of each element
    // it is updated inside the fall function


    pieces.forEach((pieceObject) => {

        pieceObject.checkCollision()
        pieceObject.fall()
    })

    gameOverScreen.classList.add("hidden")

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
        gameIsOver = true;
        endGame()
        return;
    }

}

function endGame() {
    gameOne.gameStarted = false;
    gameOverScreen.classList.remove("hidden")
    cancelAnimationFrame(gameLoopID)

}



function restartGame() {
    gameOverScreen.classList.add("hidden")
    livesCount = 5
    gameIsOver = false
    scoreCount = 0
    gameOne.gameStarted = true
    gameLoopID = null
    gameLoop()
    pieces.forEach(pieceObject => {
        pieceObject.piecesReset()
    });
    document.querySelector(".score-count").innerText = scoreCount;
    document.querySelector(".lives-count").innerText = livesCount;


}


