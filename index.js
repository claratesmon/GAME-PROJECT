const gameOne = new Game();
const playerOne = new Player();


const gameBody = document.querySelector(".body")
gameOne.gameOver = false

document.querySelector(".buttons")


const redButton = document.querySelector(".button-red")
const orangeButton = document.querySelector(".button-orange")
const yellowButton = document.querySelector(".button-yellow")
const greenButton = document.querySelector(".button-green")
const blueButton = document.querySelector(".button-blue")
const purlpeButton = document.querySelector(".button-purple")




///////////SCORE COUNT
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
/////It is an actual array without need for Array.from because it is selected (converted into an object) inside the class
const pieces = gameOne.piecesArray // selector all to get an array (with the generic class)

pieces.forEach(pieceObject => {
    for (let i = 0; i < pieces.length; i++) {
        pieceObject.checkCollision(pieces[i])
        console.log(pieces[i]);
    }
});

let gameLoopID;
let frameCount = 0;


function gameLoop() {
    // forEach with the game.pieces (array) and update the top position of each element
    // it is updated inside the fall function
    pieces.forEach((pieceObject) => {
        
        pieceObject.fall()
       // pieceObject.checkCollision() 
        
    }) 

    if (frameCount % 240 === 0) {
        pieces.forEach((pieceObject) => {
            
            pieceObject.speed += Math.random() // you send the piece as argument
            // updatePiecePosition(piece)
        }) 
        
    } else if (frameCount % 920 === 0) {
        pieces.forEach((pieceObject) => {
            
            pieceObject.speed += Math.random() + 2 // you send the piece as argument
            // updatePiecePosition(piece)
        }) 
    }

    if (!gameOne.gameOver) {


        frameCount++;
        gameLoopID = requestAnimationFrame(gameLoop);
    }

}

//gameLoop() 

