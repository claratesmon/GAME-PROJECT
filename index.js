const gameOne = new Game ();
const playerOne = new Player();

const gameBody = document.querySelector(".body")

const gameHeight = gameBody.clientHeight





let pieceRedSpeed = Math.random();
let pieceOrangeSpeed = Math.random();
let pieceYellowSpeed = Math.random();
let pieceGreenSpeed = Math.random();
let pieceBlueSpeed = Math.random();
let piecePurpleSpeed = Math.random();

let gameLoopID;
let frameCount = 0;

gameOne.gameOver = false



document.querySelector(".buttons")



let scoreCount = gameOne.score
document.querySelector(".score-count").innerText = scoreCount



setTimeout (()=> {
    const intervalID = setInterval(() => {

        if (scoreCount >= 1000) {
            clearInterval(intervalID)
        } 
        scoreCount += 5;
        
        document.querySelector(".score-count").innerText = scoreCount
        
    }, 1000);

}, 2000)



const redPiece = document.querySelector(".piece-red");
const orangePiece = document.querySelector(".piece-orange");


let positionRedPiece = gameOne.pieceRedPosition;
let positionOrangePiece = gameOne.pieceOrangePosition;

function pieceFall() {    
    positionRedPiece += pieceRedSpeed;
    positionOrangePiece += pieceOrangeSpeed;
    gameOne.positionYellowPiece += 0;
    gameOne.positionGreenPiece += 0;
    gameOne.positionBluePiece += 0;
    gameOne.positionPurplePiece += 0;

    redPiece.style.marginTop = `${positionRedPiece}em`;
    orangePiece.style.marginTop = `${positionOrangePiece}em`;

    if (positionRedPiece === 40) {
        positionRedPiece += 0
    }
}



pieceFall()



function gameLoop() {
    
    
    if(frameCount % 100 === 0){
       // addEnemy(); // adding the enemy to the html and also to the array of enemies
    }
   
    if(!gameOne.gameOver){
        //pieceFall();
        frameCount ++;
        gameLoopID = requestAnimationFrame(gameLoop);
    }

    
}

gameLoop()

