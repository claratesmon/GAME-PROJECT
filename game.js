class Piece {
    constructor (color) {
        this.color = color,
        this.position = -170,
        this.speed = Math.random() * (0.8 - 0.3 + 1) + 0.3
        this.element = document.querySelector(`${color}`)
    }

    
    
    fall(){ // we recieve a piece as a parameter so we can change it's top property
        this.position += this.speed
        console.log(this.speed)
        /* if (this.speed > 0.8) {
            this.speed === this.speed - 0.2
        } else if (this.speed < 0.3) {
            this.speed === this.speed + 0.4
        } */
        const piecePosition = this.position
        if (piecePosition > 1050){
            this.position = -170;
            this.speed = Math.random()
        }
       }
}

class Game {
    constructor() {
        this.score = 0
        this.gameOver = true
        this.height = 100
        this.pieces = [
            new Piece ('red'),
            new Piece ('orange'),
            new Piece ('yellow'),
            new Piece ('green'),
            new Piece ('blue'),
            new Piece ('purple')
        ]
   }        
};


    