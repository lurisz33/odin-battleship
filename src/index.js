import GameBoard from "./GameBoard";
import Ship from "./Ship";
import Player from "./Player";
import './styles.css';
import { getRandomInt } from "./GameBoard";

let comBrain = Array.from({ length: 10 }, () => Array(10).fill(0));
let playerMove = 'player1';
let gameField1Copy = null;

setupGame();
gameMachine();

function gameMachine() {
    switch (playerMove) {
        case 'player1':
            console.log("It's your turn");
            // Wait for user interaction (handled by event listeners)
            break;
        case 'player2':
            const player2Table = document.getElementById('player2Table');
            applyBlur(player2Table);
            console.log('Computer is playing');
            sleep(1000).then(() => {
                randomGuess(gameField1Copy);
                removeBlur(player2Table);
            });
            break;
    }
}

function setupGame() {
    const player1 = new Player();
    const player2 = new Player();
    const gameBoard1 = player1.gameboard;
    const gameBoard2 = player2.gameboard;
    const gameField1 = gameBoard1.gameField;
    gameField1Copy = gameField1;
    const gameField2 = gameBoard2.gameField;
    createTable(1, 10, 10);
    createTable(2, 10, 10);
    gameBoard1.populateGameBoardRandom();
    gameBoard2.populateGameBoardRandom();
    renderGameBoard(1, gameField1, false);
    renderGameBoard(2, gameField2, true);
}

function randomGuess(gameField) {
    let x, y;
    let hit = false;

    do {
        x = getRandomInt(10);
        y = getRandomInt(10);
    } while (comBrain[x][y] !== 0);

    const table = document.getElementById(`player1Table`);
    const cell = table.rows[x].cells[y];

    if (gameField[x][y] instanceof Ship) {
        cell.style.backgroundColor = 'IndianRed';
        markHit(x, y, table, gameField);
        comBrain[x][y] = 1; // Mark as hit
        hit = true;
    } else {
        cell.style.backgroundColor = 'CornflowerBlue';
        comBrain[x][y] = 2; // Mark as miss
    }

    // If the computer hits, it gets another turn
    if (hit) {
        sleep(1000).then(() => { smartGuess(gameField, table); });
    } else {
        playerMove = 'player1'; // Switch to player 1 after a miss
        gameMachine();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function renderGameBoard(playerId, gameField, isInteractive) {
    const table = document.getElementById(`player${playerId}Table`);
    if (!table) return;

    const cols = 10;
    const rows = 10;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = table.rows[i].cells[j];

            if (gameField[i][j] instanceof Ship) {
                cell.className = 'ship';
                if (playerId === 1) cell.style.backgroundColor = 'grey';
            }
            if (isInteractive) {
                cell.addEventListener('click', function handleClick() {
                    handleCellClick(i, j, gameField, table);
                    cell.removeEventListener('click', handleClick);
                });
            }
        }
    }
}

function handleCellClick(x, y, gameField, table) {
    const cell = table.rows[x].cells[y];
    let hit = false;
    if (gameField[x][y] instanceof Ship) {
        cell.style.backgroundColor = 'IndianRed';
        markHit(x, y, table, gameField);
        hit = true;
    } else {
        cell.style.backgroundColor = 'CornflowerBlue';
        hit = false;
    }
    if (!hit) {
        playerMove = playerMove === 'player1' ? 'player2' : 'player1';
    }
    if (hit && gameField === gameField1Copy) smartGuess(gameField, table);
    gameMachine();
}

function smartGuess(gameField, table) {
    const queue = [];

    for (let k = 0; k < 10; k++) {
        for (let l = 0; l < 10; l++) {
            if (comBrain[k][l] === 1) { // Found a hit
                queue.push([k, l]);
            }
        }
    }

    while (queue.length > 0) {
        const [x, y] = queue.shift();

        //Check all directions around the cell excp. diagonal
        const directions = [
            [x - 1, y], // Up
            [x + 1, y], // Down
            [x, y - 1], // Left
            [x, y + 1]  // Right
        ];
        for (let [nx, ny] of directions) {
            if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10 && comBrain[nx][ny] === 0) {
                const cell = table.rows[nx].cells[ny];

                if (gameField[nx][ny] instanceof Ship) {
                    cell.style.backgroundColor = 'IndianRed';
                    markHit(nx, ny, table, gameField);
                    comBrain[nx][ny] = 1; // Mark as hit
                    queue.push([nx, ny]); // Continue guessing around this new hit
                } else {
                    cell.style.backgroundColor = 'CornflowerBlue';
                    comBrain[nx][ny] = 2; // Mark as miss
                }
            }
        }
    }

    // If no more cells to check, perform a random guess
    if (queue.length === 0) {
        randomGuess(gameField);
    }
}

function isPartialShip(x, y, gameField, table) {
    const directions = [
        [x - 1, y], // Up
        [x + 1, y], // Down
        [x, y - 1], // Left
        [x, y + 1]  // Right
    ];

    for (let [nx, ny] of directions) {
        if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10 && comBrain[nx][ny] === 0) {
            return [nx, ny];
        }
    }
    return null;
}

function markHit(x, y, table, gameField) {
    for (let k = Math.max(0, x - 1); k < Math.min(10, x + 2); k++) {
        for (let l = Math.max(0, y - 1); l < Math.min(10, y + 2); l++) {
            if (!(gameField[k][l] instanceof Ship)) {
                const neighbourCell = table.rows[k].cells[l];
                neighbourCell.style.backgroundColor = 'CornflowerBlue';
                if (gameField === gameField1Copy) {
                    comBrain[k][l] = 2;
                }
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

function applyBlur(element) {
    element.style.filter = 'blur(5px)';
}

function removeBlur(element) {
    element.style.filter = 'none';
}