import Gameboard from "../gameboard";

jest.mock("../gameboard");

beforeEach(() => {
  Gameboard.mockImplementation(() => {
    return {
      placeShip: jest.fn().mockReturnValue("mock ship placed"),
      receiveAttack: jest.fn().mockReturnValue("mock attack received"),
    };
  });
});

test("a ship was attacked", () => {
  const gameboardObj = new Gameboard();

  expect(gameboardObj.placeShip({ x: 3, y: 1 }, 4, "horizontal")).toBe(
    "mock ship placed",
  );
  expect(gameboardObj.receiveAttack()).toBe("mock attack received");
});
