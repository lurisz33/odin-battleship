import Ship from "./Ship";

class Gameboard {

    constructor() {
        const rows = 10;
        const cols = 10;
        this.gameField = Array.from({ length: rows }, () => Array(cols).fill(0));
    }

    receiveAttack(x, y) {
        if (this.gameField[x][y] instanceof Ship) {
            const currentShip = this.gameField[x][y];
            currentShip.hit();

            if (currentShip.checkIfSunk()) {
                currentShip.isSunk = true;
                console.log('A ship has been sunken');
            } else {
                console.log('Parts of the ship remain');
            }
        } else {
            console.log('Miss');
        }
    }
}