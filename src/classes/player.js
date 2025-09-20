import Gameboard from "./gameboard";

export default class Player {
  constructor(username) {
    this.username = username;
    this.gameboard = new Gameboard();
  }
}
