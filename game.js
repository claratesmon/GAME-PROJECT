class Piece {
    constructor(color) {
        this.color = color,
        this.position = -170,
        this.speed = Math.random() * (0.9 - 0.5 + 1) + 0.5
        this.element = document.querySelector(`#${color}`)
    }



    fall() {
        this.position += this.speed


        if (this.position > 1050) {
            this.position = -170;

        }
        console.log(this.position);
        this.element.style.top = `${this.position}px`
    }

    checkCollision(button) {
        if (this.position + this.element.clientHeight >= button.element.clientHeight
            && this.position <= button.element.clientHeight + 3) {
            lives--
            document.querySelector(".lives-count").innerText = lives
        }
    }


}

class Game {
    constructor() {
        this.score = 0
        this.lives = 5
        this.gameOver = true
        this.height = 100
        this.piecesArray = [
            new Piece('red'),
            new Piece('orange'),
            new Piece('yellow'),
            new Piece('green'),
            new Piece('blue'),
            new Piece('purple')
        ]
    }
};


