const cells = document.querySelectorAll(".board button");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let gameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function play(index) {
    if (!gameActive || board[index] !== "") {
        return;
    }

    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;

    const winner = winningPatterns.some(pattern =>
        pattern.every(index => board[index] === currentPlayer)
    );

    if (winner) {
        statusText.textContent = "Player " + currentPlayer + " Wins!";
        gameActive = false;
        return;
    }

    if (board.every(cell => cell !== "")) {
        statusText.textContent = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = "Player " + currentPlayer + "'s Turn";
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;

    cells.forEach(cell => cell.textContent = "");
    statusText.textContent = "Player X's Turn";
}