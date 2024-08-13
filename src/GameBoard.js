import Ship from "./Ship";
let id = 1;
class GameBoard {

    constructor() {
        const rows = 10;
        const cols = 10;
        this.gameField = Array.from({ length: rows }, () => Array(cols).fill(0));
        this.shipCount = 0;
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
                if (this.allShipsSunk()) {
                    console.log('All ships sunk');
                }
            } else {
                console.log('Parts of the ship remain');
            }
        } else {
            console.log('Miss');
        }
    }

    allShipsSunk() {
        return this.shipCount === this.sunkShips;
    }

    hasPlace(x, y, length, direction) {
        if (direction === 'horizontal') {
            if (y + length > 10) {
                return false;
            } else {
                for (let i = y; i < y + length; i++) {
                    if (this.gameField[x][i] !== 0) {
                        return false;
                    }
                }
            }
        } else {
            if (x + length > 10) {
                return false;
            } else {
                for (let i = x; i < x + length; i++) {
                    if (this.gameField[i][y] !== 0) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    placeShip(x, y, length, direction) {
        if (this.hasPlace(x, y, length, direction)) {
            const currentShip = new Ship(this.id++, length);
            if (direction === 'horizontal') {
                for (let i = y; i < y + length; i++) {
                    this.gameField[x][i] = currentShip;
                }
            } else {
                for (let i = x; i < x + length; i++) {
                    this.gameField[i][y] = currentShip;
                }
            }
            ++this.shipCount;
        }
    }
}

export default GameBoard;