class Piece {
    constructor(color, key) {
        this.color = color,
        this.position = -170,
        this.speed = Math.random() * (0.9 - 0.5 + 1) + 0.5
        this.element = document.querySelector(`#${color}`)
        this.key = key
    }



    fall() {
        this.position += this.speed


        if (this.position > 1000) {
            this.position = -170;
            gameOne.lives--
                
        }
        // console.log(this.position);
        this.element.style.top = `${this.position}px`
        document.querySelector(".lives-count").innerText = gameOne.lives
    }

    

    
    
    checkCollision() {
        let collisionOccurred = false
        const buttonElement = document.querySelector(".button-" + this.color)
        const buttonPostionY = buttonElement.getBoundingClientRect().y
        const piecePositionY = this.element.getBoundingClientRect().y

        document.addEventListener("keypress",(event)=> {
            
            if (piecePositionY  < buttonPostionY + buttonElement.clientHeight
                    && piecePositionY + this.element.clientHeight > buttonPostionY 
                    ) {
                    
                    if(event.key === this.key) {
                        console.log("success!!");
                        this.position = -170;
                        buttonElement.style.backgroundColor = `${this.color}`
                        setTimeout(() => {
                            buttonElement.style.backgroundColor = `rgb(73, 70, 66)`
                        }, 2000);
                    }
                }
                
        })  
        
    }


}

class Game {
    constructor() {
        this.score = 0
        this.lives = 5
        this.gameOver = true
        this.height = 100
        this.piecesArray = [
            new Piece('red', 'a'),
            new Piece('orange', 's'),
            new Piece('yellow', 'd'),
            new Piece('green', 'k'),
            new Piece('blue', 'l'),
            new Piece('purple', 'ñ')
        ]
    }
};


