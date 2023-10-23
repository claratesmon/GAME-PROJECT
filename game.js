class Game {
    constructor() {
        this.score = 0
        this.gameOver = true

        this.pieceRedPosition = 0
        this.pieceOrangePosition = 0
        this.pieceYellowPosition = 0
        this.pieceGreenPosition = 0
        this.pieceBluePosition = 0
        this.piecePurplePosition = 0
    }

    pieceFall() {
        this.pieceRedPosition += 20
        
    } 
};