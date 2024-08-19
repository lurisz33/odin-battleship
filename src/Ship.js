class Ship {

    constructor(id, length) {
        this.length = length;
        this.hitCount = 0;
        this.isSunk = false;
        this.id = id;
    }

    hit() {
        ++this.hitCount;
    }

    checkIfSunk() {
        return this.length === this.hitCount;
    }
}

export default Ship;
