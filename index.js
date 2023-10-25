const gameOne = new Game();
const playerOne = new Player();


const gameBody = document.querySelector(".body")

const gameHeight = gameBody.clientHeight



gameOne.gameOver = false

document.querySelector(".buttons")

let scoreCount = gameOne.score
document.querySelector(".score-count").innerText = scoreCount

const start = document.querySelector("#start-button")
    document.addEventListener("click",() => {
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
const pieces = Array.from(document.querySelectorAll(".pieces")); // selector all to get an array (with the generic class)

// forEach with the game.pieces (array) and update the top position of each element


function updatePiecePosition(index) {
    
    gameOne.pieces[index].fall() // you send the piece as argument
    pieces[index].style.top = `${gameOne.pieces[index].position}px`

}


let gameLoopID;
let frameCount = 0;
//piece[Math.floor(Math.random()* pieces.length)]
function gameLoop() {

    
    const randomIndex = Math.floor(Math.random() * pieces.length);
    pieces.forEach((piece) => {
        
        updatePiecePosition(piece[randomIndex])
    })

    if (frameCount % 100 === 0) {
        // addEnemy(); // adding the enemy to the html and also to the array of enemies
    }

    if (!gameOne.gameOver) {
        
  
        frameCount++;
        gameLoopID = requestAnimationFrame(gameLoop);
    }

}

gameLoop()

