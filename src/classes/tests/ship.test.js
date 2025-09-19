import Ship from "../ship";

beforeEach(() => {
  shipObj = new Ship(3);
});

test("ship is hit", () => {
  expect(shipObj.hitsTaken).toBe(0);
  shipObj.hit();

  expect(shipObj.hitsTaken).toBe(1);
});

test("ship is not sunk", () => {
  expect(shipObj.isSunk()).toBe(false);
  shipObj.hit();

  expect(shipObj.isSunk()).toBe(false);
});

test("ship is sunk", () => {
  expect(shipObj.isSunk()).toBe(false);

  shipObj.hit();
  shipObj.hit();
  shipObj.hit();

  expect(shipObj.isSunk()).toBe(true);
});
