class Piece {
    constructor(color, key) {
        this.color = color,
        this.position = -170,
        this.speed = Math.random() * (0.9 - 0.5 + 1) + 0.5
        this.element = document.querySelector(`#${color}`)
        this.key = key
        this.initialPosition = -170;
    }



piecesReset() { 
    this.position = -170;
    this.element.style.top = `${this.position}px`
}; 




fall() {
    const buttonElement = document.querySelector(".button-" + this.color)
    const buttonPositionY = buttonElement.getBoundingClientRect().y
    this.position += this.speed

    if (this.position > buttonPositionY) {
        this.position = -170;
        gameOne.lives--
    }
    this.element.style.top = `${this.position}px`
    document.querySelector(".lives-count").innerText = gameOne.lives
}

checkCollision() {
    const buttonElement = document.querySelector(".button-" + this.color)
    const buttonPositionY = buttonElement.getBoundingClientRect().y
    const piecePositionY = this.element.getBoundingClientRect().y
}
}


class Game {
    constructor() {
        this.score = 0
        this.lives = 5
        this.gameStarted = false
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

    checkGameOver() {
        if (this.lives === 0) {
            return true;

        } else {
            return false
        }
    }
};


