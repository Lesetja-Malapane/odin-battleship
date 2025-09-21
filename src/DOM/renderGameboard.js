const playerBoard = document.querySelector("#playerBoard");
const opponentBoard = document.querySelector("#opponentBoard");

function renderPlayerGameboard() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let div = document.createElement("div");
      div.className = "cell";
      div.dataset.y = i;
      div.dataset.x = j;
      playerBoard.appendChild(div);
    }
  }
}

function renderOpponentGameboard() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let div = document.createElement("div");
      div.className = "cell";
      div.dataset.y = i;
      div.dataset.x = j;
      opponentBoard.appendChild(div);
    }
  }
}
renderPlayerGameboard();
renderOpponentGameboard();
