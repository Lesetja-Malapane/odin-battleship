import Ship from "./ship";

export default class Gameboard {
  constructor() {
    this.ships = [];
  }

  receiveAttack(coordinates) {
    for (const { ship, coordinates: coords } of this.ships) {
      for (let i = 0; i < coords.length; i++) {
        if (coords[i][0] === coordinates.x && coords[i][1] === coordinates.y) {
          ship.hit();
          return true;
        }
      }
    }
    return false;
  }

  placeShip(coordinates, shipLength, direction) {
    const ship = new Ship(shipLength);
    let x = coordinates.x;
    let y = coordinates.y;
    let shipCoordinates = [];

    if (direction.toLowerCase() === "horizontal") {
      for (let i = 0; i < shipLength; i++) {
        shipCoordinates.push([x, y]);
        x += 1;
      }
    } else if (direction.toLowerCase() === "vertical") {
      for (let i = 0; i < shipLength; i++) {
        shipCoordinates.push([x, y]);
        y += 1;
      }
    } else {
      throw new Error("Wrong ship direction");
    }
    this.ships.push({ ship, coordinates: shipCoordinates });
  }

  shipsOnBoard() {
    return this.ships;
  }
}
