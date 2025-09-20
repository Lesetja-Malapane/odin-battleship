import Gameboard from "../gameboard";
import Ship from "../ship";

let boardObj;

beforeEach(() => {
  boardObj = new Gameboard();
});

test("add a ship", () => {
  expect(boardObj.shipsOnBoard().length).toBe(0);

  boardObj.placeShip({ x: 0, y: 0 }, 4, "horizontal");

  expect(boardObj.shipsOnBoard().length).toBe(1);
});

test("added ship's key & value", () => {
  boardObj.placeShip({ x: 0, y: 0 }, 3, "horizontal");

  const boardShips = boardObj.shipsOnBoard();
  expect(typeof boardShips[0]).toBe("object");
  expect(Array.isArray(boardShips[0].coordinates)).toBe(true);
});

test("a robot recieved an attack", () => {
  boardObj.placeShip({ x: 0, y: 0 }, 3, "horizontal");

  const boardShips = boardObj.shipsOnBoard();
  expect(boardShips[0].ship.hitsTaken).toBe(0);
  expect(Array.isArray(boardShips[0].coordinates)).toBe(true);

  boardObj.receiveAttack({ x: 0, y: 0 });
  expect(boardShips[0].ship.hitsTaken).toBe(1);
});
