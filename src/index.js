import GameBoard from "./GameBoard";
import Ship from "./Ship";
import player from "./Player";
import './styles.css';
import gameBoard from "./GameBoard";
import {getRandomInt} from "./GameBoard";

let comBrain = Array.from({ length: 10 }, () => Array(10).fill(0));
let playerMove = 'player1';

setupGame();
gameMachine();

function gameMachine(playerMove, gameBoard1, gameBoard2) {
        switch (playerMove) {
            case 'player1':
                console.log('Its your turn');
                break;
            case 'player2':
                console.log('Computer is playing');
                break;
        }
}

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
    renderGameBoard(1, gameField1, gameBoard1, gameBoard2);
    renderGameBoard(2, gameField2, gameBoard1, gameBoard2);
}

function randomGuess() {
    const x = getRandomInt(10);
    const y = getRandomInt(10);
    const table = document.getElementById(`player1Table`);
    const cell = table.rows[x].cells[y];
    if (cell instanceof Ship) {
        markWin(x, y, table, cell)
    } else {
        cell.style.backgroundColor = 'CornflowerBlue';
    }
}


function renderGameBoard(playerId, gameField, gameBoard1, gameBoard2) {
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
                    cell.addEventListener('click', function handleClick() {
                        cell.style.backgroundColor = 'IndianRed';
                        //color the adjacent non ship cells blue
                        markWin(i, j, table, gameField);
                        const playerMove = playerId === 1 ? 'player2' : 'player1';
                        gameMachine(playerMove, gameBoard1, gameBoard2);
                        cell.removeEventListener('click', handleClick);
                    })
                }
            } else {
                const cell = table.rows[i].cells[j];
                cell.addEventListener('click', function handleClick() {
                    cell.style.backgroundColor = 'CornflowerBlue';
                    const playerMove = playerId === 1 ? 'player2' : 'player1';
                    gameMachine(playerMove, gameBoard1, gameBoard2);
                    cell.removeEventListener('click', handleClick);
                })
            }
        }
    }
}

function markWin(x, j, table, gameField) {
    for (let k = Math.max(0, i - 1); k < Math.min(10, x + 2); k++) {
        for (let l =  Math.max(0, j - 1); l <  Math.min(10, y + 2); l++) {
            if (!(gameField[k][l] instanceof Ship)) {
                const neighbourCell = table.rows[k].cells[l];
                neighbourCell.style.backgroundColor = 'CornflowerBlue';
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


