const gameOne = new Game();
const playerOne = new Player();

const bgSong = new Audio("./audio/Background Music Doraemon-[AudioTrimmer.com].mp3");



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
const background = document.querySelector(":root")

let gameIsOver = false
let gameLoopID;
let frameCount = 0;


startBtn.addEventListener('click', () => {
    startGame()
    bgSong.play()
    gameOverScreen.classList.add("hidden")
})

xButton.addEventListener("click", () => {
    introScreen.classList.remove("hidden")
    gameOverScreen.classList.add("hidden")
    scoreCount = 0
    pieces.forEach(pieceObject => {
        pieceObject.piecesReset()

    });
    buttonsPlayer.classList.add("hidden")


})

restartBtn.addEventListener('click', () => {
    scoreCount = 0
    if (gameIsOver === true) {
        restartGame()
    }
    gameOverScreen.classList.add("hidden")
    document.querySelector(".score-count").innerText = scoreCount;
    document.querySelector(".lives-count").innerText = livesCount;
})

const keyListener = (event) => {

    pieces.forEach(pieceObject => {
        const buttonElement = document.querySelector(".button-" + pieceObject.color)
        const buttonPositionY = buttonElement.getBoundingClientRect().y
        const piecePositionY = pieceObject.element.getBoundingClientRect().y
        if (piecePositionY < buttonPositionY + buttonElement.clientHeight
            && piecePositionY + pieceObject.element.clientHeight > buttonPositionY) {


            if (event.key === pieceObject.key) {

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
    pieces.forEach((pieceObject) => {

        pieceObject.checkCollision()
        pieceObject.fall()
    })

    gameOverScreen.classList.add("hidden")

    if (frameCount % 780 === 0) {
        pieces.forEach((pieceObject) => {
            console.log(pieceObject.speed)
            pieceObject.speed += Math.random()
            //gameBody.style.backgroundImage = 
        })
    }


    /* else if (frameCount % 720 === 0) {
            pieces.forEach((pieceObject) => {
                
                pieceObject.speed += Math.random() + 1
                
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
    gameIsOver = true
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


