class Ship {

    constructor(length) {
        this.length = length;
        this.hitCount = 0;
        this.isSunk = false;
    }

    hit() {
        ++this.hitCount;
    }

    checkIfSunk() {
        return this.length === this.hitCount;
    }
}

export default Ship;
