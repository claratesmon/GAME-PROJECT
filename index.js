const gameOne = new Game ();
const playerOne = new Player();

let playerOnePositionX = playerOne.positionX
let playerOnePositionY = playerOne.positionY



document.querySelector(".buttons")



let scoreCount = gameOne.score
document.querySelector(".score-count").innerText = scoreCount

const intervalID = setInterval(() => {

    if (scoreCount >= 3000) {
        clearInterval(intervalID)
    } 
    scoreCount += 5;
    
    document.querySelector(".score-count").innerText = scoreCount
    

    
}, 2000);

setTimeout(() => {
    console.log(scoreCount)
}, 3000);

let gameLoopID;
let frameCount = 0;

function gameLoop() {
    frameCount ++;

    
    if(frameCount % 100 === 0){
       // addEnemy(); // adding the enemy to the html and also to the array of enemies
    }
    // Update game state
    // We add here all the functions like checkforCollissions, checkIfGameIsOver....
    // Render game
    if(!gameOne.gameOver){
        gameLoopID = requestAnimationFrame(gameLoop);
    }
}