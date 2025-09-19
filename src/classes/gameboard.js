import Ship from "./ship";

export default class Gameboard {
  constructor() {
    this.ships = {};
  }

  receiveAttack(coordinates) {
    console.log(this.ships.values);
    this.ships.keys.forEach((ship) => {
      if (this.ships[ship] == [coordinates.x, coordinates.y]) {
        ship.hit();
      }
    });
  }

  placeShip(coordinates, shipLength, direction) {
    const ship = new Ship();
    let x = coordinates.x;
    let y = coordinates.y;
    let shipCoordinates = [];

    if (direction.toLowerCase() === "horizontal") {
      for (let i = 0; i < shipLength; i++) {
        x += i;
        shipCoordinates.push([x, y]);
      }
    } else if (direction.toLowerCase() === "vertical") {
      for (let i = 0; i < shipLength; i++) {
        y += i;
        shipCoordinates.push([x, y]);
      }
    } else {
      throw new Error("Worng ship direction");
    }
    this.ships[ship] = shipCoordinates;
  }
}
