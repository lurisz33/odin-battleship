import GameBoard from "./GameBoard";
import Ship from "./Ship";
import player from "./Player";
import './styles.css';

setupGame();

function setupGame() {
    const player1 = new player();
    const player2 = new player();
    const gameBoard1 = player1.gameboard;
    const gameBoard2 = player2.gameboard;
    const gameField1 = gameBoard1.gameField;
    const gameField2 = gameBoard2.gameField;
    createTable(1, 10, 10);
    createTable(2, 10, 10);
    populateGameBoard(gameBoard1);
    populateGameBoard(gameBoard2);
    renderGameBoard(1, gameField1);
    renderGameBoard(2, gameField2);
}

function populateGameBoard(gameBoard) {
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

function renderGameBoard(playerId, gameField) {
    const cols = 10;
    const rows = 10;
    const table = document.getElementById(`player${playerId}Table`);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (gameField[i][j] instanceof Ship) {
                const cell = table.rows[i].cells[j];
                cell.style.backgroundColor = 'grey';
            }
        }
    }
}

function createTable(playerId, rows, cols) {
    const gameWindow = document.getElementById('game-window');
    const table = document.createElement('table');

    const tbody = document.createElement('tbody');
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            row.appendChild(td);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    table.id = `player${playerId}Table`;
    gameWindow.appendChild(table);
}