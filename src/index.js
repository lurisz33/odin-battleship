import GameBoard from "./GameBoard";
import Ship from "./Ship";
import Player from "./Player";
import './styles.css';
import { getRandomInt } from "./GameBoard";


// Global variables
let comBrain = Array.from({ length: 10 }, () => Array(10).fill(0)); // Store the computers guesses
let playerMove = 'player1'; // Keep track of the current Player
let gameField1Copy = null;
let gameBoard1 = null;
let gameBoard2 = null;


// Starting the first game
setupGame();
let player2Table = document.getElementById('player2Table');
const gameConsole = document.getElementById('game-console');
gameMachine();

// Controls the game flow and switches between the players. Stops the game if there is a winner, restarts after
function gameMachine() {
    switch (playerMove) {
        case 'player1':
            gameConsole.innerHTML = 'Its your turn';
            if (player2Table.style.filter === 'blur(5px)') {
                removeBlur(player2Table);
            }
            if (gameBoard2.allShipsSunk()) {
                gameConsole.innerHTML = 'You won!, restarting game in 5 seconds';
                sleep(5000).then(() => {
                    restartGame()
                });
            }
            break;

        case 'player2':
            gameConsole.innerHTML = 'Computer is playing';
            applyBlur(player2Table);
            sleep(1000).then(() => {
                randomGuess(gameField1Copy);
            });
            if (gameBoard1.allShipsSunk()) {
                gameConsole.innerHTML = 'The computer has won!, restarting game in 5 seconds';
                sleep(5000).then(() => {
                    restartGame()
                });
            }
            break;
    }
}

// Restarts the game
function restartGame() {
    disableUserInput();
    location.reload();
}

// Disables the user input while the computer is playing
function disableUserInput() {
    const cells = document.querySelectorAll('#player2Table td');
    cells.forEach(cell => {
        cell.style.pointerEvents = 'none'; // Disable clicks
    });
}

// Enables the user input after the computers play
function enableUserInput() {
    const cells = document.querySelectorAll('#player2Table td');
    cells.forEach(cell => {
        cell.style.pointerEvents = 'auto'; // Enable clicks
    });
}

// Initializes the players as well as their game boards and rendering the information on the screen
function setupGame() {
    const player1 = new Player();
    const player2 = new Player();
    gameBoard1 = player1.gameboard;
    gameBoard2 = player2.gameboard;
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

let missedCells = [];
const quadrants = [
    { xStart: 0, xEnd: 4, yStart: 0, yEnd: 4 }, // Top-left
    { xStart: 0, xEnd: 4, yStart: 5, yEnd: 9 }, // Bottom-left
    { xStart: 5, xEnd: 9, yStart: 0, yEnd: 4 }, // Top-right
    { xStart: 5, xEnd: 9, yStart: 5, yEnd: 9 }  // Bottom-right
];

let fullyGuessedQuadrants = new Set();

// Guesses for the computer using a random strategy by diving the field into quadrants and further into cells
function randomGuess(gameField) {
    const quadrant = getNextRandomQuadrant();
    if (!quadrant) {
        console.error("No valid quadrants available.");
        return;
    }

    const validCells = getValidCellsInQuadrant(quadrant);
    if (validCells.length > 0) {
        makeRandomGuess(validCells, gameField);
    } else {
        markQuadrantAsGuessed(quadrant);
        randomGuess(gameField);
    }
}

function getNextRandomQuadrant() {
    const availableQuadrants = quadrants.filter((_, index) => !fullyGuessedQuadrants.has(index));
    if (availableQuadrants.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * availableQuadrants.length);
    return availableQuadrants[randomIndex];
}

function getValidCellsInQuadrant(quadrant) {
    const validCells = [];
    for (let i = quadrant.xStart; i <= quadrant.xEnd; i++) {
        for (let j = quadrant.yStart; j <= quadrant.yEnd; j++) {
            if (comBrain[i][j] === 0 && !isAdjacentToMissedCell(i, j)) {
                validCells.push([i, j]);
            }
        }
    }
    return validCells;
}

function makeRandomGuess(validCells, gameField) {
    const [x, y] = validCells[getRandomInt(validCells.length)];
    processGuess(x, y, gameField);
}

// Processes the random guess of the computer
function processGuess(x, y, gameField) {
    const table = document.getElementById('player1Table');
    const cell = table.rows[x].cells[y];
    const isHit = gameField[x][y] instanceof Ship;

    cell.style.backgroundColor = isHit ? 'IndianRed' : 'CornflowerBlue';
    comBrain[x][y] = isHit ? 1 : 2; // Mark as hit or miss

    if (isHit) {
        markHit(x, y, table, gameField);
        // Check for victory immediately after a hit
        if (gameBoard1.allShipsSunk()) {
            gameConsole.innerHTML = 'The computer has won!, restarting game in 5 seconds';
            sleep(5000).then(() => {
                restartGame();
            });
            return; // Exit function to avoid further actions
        } else {
            smartGuess(gameField, table); // Continue guessing
        }
    } else {
        playerMove = 'player1'; // Switch to player 1 (user) after missing
    }

    // Continue game logic only if game is not over
    gameMachine();
}

function markQuadrantAsGuessed(quadrant) {
    fullyGuessedQuadrants.add(quadrants.indexOf(quadrant));
}

function isAdjacentToMissedCell(x, y) {
    const directions = [
        [x - 1, y], // Up
        [x + 1, y], // Down
        [x, y - 1], // Left
        [x, y + 1]  // Right
    ];

    return directions.some(([nx, ny]) =>
        nx >= 0 && nx < 10 && ny >= 0 && ny < 10 && missedCells.some(([mx, my]) => mx === nx && my === ny)
    );
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
    if (table === 'player1Table') {
        gameBoard1.receiveAttack(x, y);
    } else {
        gameBoard2.receiveAttack(x, y);
    }
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

// SmartGuess is used after the computer has had a successful guess. It guesses the cells adjacent to the  successful cell
function smartGuess(gameField, table) {
    const queue = []; // Fifo - First in First Out

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

// This function marks the cells around a ship after a successful hit
function markHit(x, y, table, gameField) {
    for (let k = Math.max(0, x - 1); k < Math.min(10, x + 2); k++) {
        for (let l = Math.max(0, y - 1); l < Math.min(10, y + 2); l++) {
            if (!(gameField[k][l] instanceof Ship)) {
                const neighbourCell = table.rows[k].cells[l];
                neighbourCell.style.backgroundColor = 'CornflowerBlue';
                if (gameField === gameField1Copy) { // Update the computers memory
                    comBrain[k][l] = 2;
                }
            }
        }
    }
}

// Creates the game boards in the HTML and displays them
function createTable(playerId, rows, cols) {
    const gameWindow = document.getElementById('game-window');
    const tableContainer = document.createElement('div');
    tableContainer.className = 'table-container';

    const tableTitle = document.createElement('div');
    tableTitle.className = 'table-title';
    tableTitle.innerHTML = playerId === 1 ? 'You' : 'Opponent';

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

    tableContainer.appendChild(tableTitle);
    tableContainer.appendChild(table);
    gameWindow.appendChild(tableContainer);
}

// Blurs the computers table while the computer is playing
function applyBlur(element) {
    element.classList.add('cell-disabled');
    element.style.filter = 'blur(5px)';
}

// Removes the blur if the user is playing
function removeBlur(element) {
    element.classList.remove('cell-disabled');
    element.style.filter = 'none';
}