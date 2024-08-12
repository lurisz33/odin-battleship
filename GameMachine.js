import Player from "./Player";
import Gameboard from "./Gameboard";

function setupGame {
    const gameboard1 = new Gameboard();
    const gameboard2 = new Gameboard();
    populateGameboard(gameboard1);
    populateGameboard(gameboard2);
}

function populateGameboard(gameBoard) {
    gameBoard.placeShip(1, 1, 4, 'vertical');
    gameBoard.placeShip(0, 4, 3, 'vertical');
    gameBoard.placeShip(1, 8, 2, 'vertical');
    gameBoard.placeShip(3, 6, 1, 'vertical');
    gameBoard.placeShip(4, 3, 2, 'horizontal');
    gameBoard.placeShip(5, 7, 2, 'horizontal');
    gameBoard.placeShip(7, 4, 1, 'horizontal');
    gameBoard.placeShip(7, 8, 1, 'horizontal');
    gameBoard.placeShip(9, 1, 1, 'horizontal');
    gameBoard.placeShip(9, 5, 3, 'horizontal');
}

function renderGameboard(gameboard) {

}