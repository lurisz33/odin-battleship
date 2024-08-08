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
        return length === this.hitCount;
    }
}

export default Ship;
