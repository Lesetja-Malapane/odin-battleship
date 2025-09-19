export default class Ship {
  constructor(shipLength) {
    this.shipLength = shipLength;
    this.hitsTaken = 0;
  }

  hit() {
    this.hitsTaken++;
  }

  isSunk() {
    return this.hitsTaken == this.shipLength;
  }
}
