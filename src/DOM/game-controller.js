import "./renderGameboard";
import renderPlayerShips from "./renderPlayerShips";
import Player from "../classes/player";

const player1 = new Player("player1");
const player2 = new Player("player2");

const opponentBoard = document.getElementById("opponentBoard");
const opponentCells = opponentBoard.querySelectorAll(".cell");

const playerBoard = document.getElementById("playerBoard");
const playerCells = playerBoard.querySelectorAll(".cell");

const playerData = player1.gameboard;
const opponentData = player2.gameboard;

let computerPlayedMoves = [];
let playerPlayedMoves = [];

function addShipToPlayerBoard(player, coordinates, direction, shipLength) {
  player.gameboard.placeShip(coordinates, shipLength, direction);
}

let rotation = "horizonal";

while (playerData.ships.length < 5) {
  const coordx = Math.floor(Math.random() * 7);
  const coordy = Math.floor(Math.random() * 7);
  const shipLength = Math.floor(Math.random() * (5 - 3) + 3);
  rotation = rotation === "horizontal" ? "vertical" : "horizontal";

  addShipToPlayerBoard(player1, { x: coordx, y: coordy }, rotation, shipLength);
}

while (opponentData.ships.length < 5) {
  const coordx = Math.floor(Math.random() * 7);
  const coordy = Math.floor(Math.random() * 7);
  const shipLength = Math.floor(Math.random() * (5 - 3) + 3);
  rotation = rotation === "horizontal" ? "vertical" : "horizontal";

  addShipToPlayerBoard(player2, { x: coordx, y: coordy }, rotation, shipLength);
}

renderPlayerShips(player1);

export default function game() {
  // player's turn
  opponentCells.forEach((cell) => {
    cell.addEventListener("click", async () => {
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
        opponentData.receiveAttack({ x: cellCoord[0], y: cellCoord[1] });
        if (player2.gameboard.ships.length === 0) {
          console.log("You win!");
        }
        return;
      } else {
        cell.classList.add("miss");
        let turn = await computerTurn();
        while (turn) {
          turn = await computerTurn();
        }
      }
    });
  });
  console.log(opponentData);
}

function computerTurn() {
  const playerCoords = playerData.allShipsCoordinates();

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Computer's Plays");
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
        playerData.receiveAttack({
          x: computerChoice[0],
          y: computerChoice[1],
        });
        if (player1.gameboard.ships.length === 0) {
          console.log("Computer win!");
        }
        resolve(true);
      } else {
        if (targetDiv) targetDiv.classList.add("miss");
        resolve(false);
      }
    }, 2000);
  });
}
