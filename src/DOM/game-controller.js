import "./renderGameboard";
import renderPlayerShips from "./renderPlayerShips";
import Player from "../classes/player";

const player1 = new Player("player1");
const player2 = new Player("player2");

const opponentBoard = document.getElementById("opponentBoard");
const opponentCells = opponentBoard.querySelectorAll(".cell");

const playerBoard = document.getElementById("playerBoard");
const playerCells = playerBoard.querySelectorAll(".cell");

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

const playerData = player1.gameboard;
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
        let turn = computerTurn();
        while (turn) {
          computerPlays();
          turn = computerTurn();
        }
      }
    });
  });
  console.log(opponentData);
}

function computerTurn() {
  const playerCoords = playerData.allShipsCoordinates();

  setTimeout(() => {
    console.log("Computer's Turn");
    const computerChoice = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];

    const targetDiv = Array.from(playerCells).find(
      (div) =>
        Number(div.dataset.x) === computerChoice[0] &&
        Number(div.dataset.y) === computerChoice[1],
    );
    if (
      playerCoords.some(
        (coord) =>
          coord[0] === computerChoice[0] && coord[1] === computerChoice[1],
      )
    ) {
      targetDiv.classList.add("hit");
      return true;
    } else {
      if (targetDiv) targetDiv.classList.add("miss");
      return false;
    }
  }, 2000);
}

game();
