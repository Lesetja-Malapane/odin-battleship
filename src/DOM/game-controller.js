import "./renderGameboard";
import renderPlayerShips from "./renderPlayerShips";
import Player from "../classes/player";

const player1 = new Player("player1");
const player2 = new Player("player2");

const opponentBoard = document.getElementById("opponentBoard");
const opponentCells = opponentBoard.querySelectorAll(".cell");

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

// const playerCoords = player1.gameboard.allShipsCoordinates()
const opponentData = player2.gameboard;

export default function game() {
  // player's turn
  opponentCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const cellCoord = [
        Number.parseInt(cell.dataset.x),
        Number.parseInt(cell.dataset.y),
      ];
      const opponentCoords = opponentData.allShipsCoordinates();

      if (
        opponentCoords.some(
          (coord) => coord[0] === cellCoord[0] && coord[1] === cellCoord[1],
        )
      ) {
        cell.classList.add("hit");
      } else {
        cell.classList.add("miss");
      }
    });
  });
  console.log(opponentData);
}

game();
