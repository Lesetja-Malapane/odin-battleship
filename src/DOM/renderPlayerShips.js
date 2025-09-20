const cells = Array.from(document.querySelectorAll(".cell"));

export default function renderPlayerShips(player) {
  const ships = Array.from(player.gameboard.ships);

  ships.forEach((ship) => {
    const coordinates = ship.coordinates;

    coordinates.forEach((coord) => {
      const cell = cells.find(
        (el) =>
          el.dataset.x === coord[0].toString() &&
          el.dataset.y === coord[1].toString(),
      );
      cell.id = "positive";
    });
  });
}
