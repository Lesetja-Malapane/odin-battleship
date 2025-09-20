import "./style.css";
import "./DOM/renderGameboard";
import renderPlayerShips from "./DOM/renderPlayerShips";

import Player from "./classes/player";
// import Ship from "./classes/ship";
// import Gameboard from "./classes/gameboard"

const player1 = new Player("player1");
const player2 = new Player("player2");

function addShipToPlayerBoard(player, coordinates, direction, shipLength) {
  player.gameboard.placeShip(coordinates, shipLength, direction);
}

addShipToPlayerBoard(player1, { x: 0, y: 0 }, "horizontal", 4);
addShipToPlayerBoard(player1, { x: 3, y: 4 }, "vertical", 3);
addShipToPlayerBoard(player1, { x: 2, y: 2 }, "horizontal", 2);

addShipToPlayerBoard(player2, { x: 1, y: 1 }, "horizontal", 4);
addShipToPlayerBoard(player2, { x: 4, y: 3 }, "vertical", 3);
addShipToPlayerBoard(player2, { x: 7, y: 7 }, "horizontal", 2);

renderPlayerShips(player1);
