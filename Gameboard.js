import Ship from "./Ship";

class Gameboard {

    constructor() {
        const rows = 10;
        const cols = 10;
        this.gameField = Array.from({ length: rows }, () => Array(cols).fill(0));
        this.shipCount = 10;
        this.sunkShips = 0;
    }

    receiveAttack(x, y) {
        if (this.gameField[x][y] instanceof Ship) {
            const currentShip = this.gameField[x][y];
            currentShip.hit();

            if (currentShip.checkIfSunk()) {
                currentShip.isSunk = true;
                ++this.sunkShips;
                console.log('A ship has been sunken');
                if (this.hasLost()) {
                    console.log('You lost');
                }
            } else {
                console.log('Parts of the ship remain');
            }
        } else {
            console.log('Miss');
        }
    }

    hasLost() {
        return this.shipCount === this.sunkShips;
    }

    placeShip(x, y, length, direction) {
        let hasPlace = true;
        if (direction === 'horizontal') {
            if (y + length > 10) {
                hasPlace = false;
            } else {
                for (let i = y; i < y + length; i++) {
                    if (this.gameField[x][i] !== 0) {
                        hasPlace = false;
                        break;
                    }
                }
            }
        } else {
            if (x + length > 10) {
                hasPlace = false;
            } else {
                for (let i = x; i < x + length; i++) {
                    if (this.gameField[i][y] !== 0) {
                        hasPlace = false;
                        break;
                    }
                }
            }
        }
        if (hasPlace) {
            const currentShip = new Ship(length);
            if (direction === 'horizontal') {
                for (let i = y; i < y + length; i++) {
                    this.gameField[x][i] = currentShip;
                }
            }
        } else {
            for (let i = x; i < x + length; i++) {
                this.gameField[i][y] = currentShip;
            }
        }
    }
}