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
    gameBoard1.populateGameBoardRandom();
    gameBoard2.populateGameBoardRandom();
    renderGameBoard(1, gameField1);
    renderGameBoard(2, gameField2);
}


function renderGameBoard(playerId, gameField) {
    const cols = 10;
    const rows = 10;
    const table = document.getElementById(`player${playerId}Table`);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (gameField[i][j] instanceof Ship) {
                const currShip = gameField[i][j];
                const cell = table.rows[i].cells[j];
                cell.className = 'ship';
                cell.id = `ship${currShip.length}`;
                if (playerId === 1) cell.style.backgroundColor = 'grey';
                if (playerId === 2) {
                    cell.addEventListener('click', function () {
                        cell.style.backgroundColor = 'IndianRed';
                    })
                }
            } else {
                const cell = table.rows[i].cells[j];
                cell.addEventListener('click', function () {
                    cell.style.backgroundColor = 'CornflowerBlue';
                })
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


