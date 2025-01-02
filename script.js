let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const squares = document.querySelectorAll(".square");
const resetButton = document.getElementById("resetButton");

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;
      setTimeout(() => alert(`${currentPlayer} wins!`), 100);
      return;
    }
  }

  if (!board.includes("")) {
    gameActive = false;
    setTimeout(() => alert("It's a draw!"), 100);
  }
}

function handleClick(event) {
  const index = event.target.getAttribute("data-index");
  if (board[index] || !gameActive) return;

  board[index] = currentPlayer;
  event.target.textContent = currentPlayer;

  checkWinner();

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  squares.forEach((square) => (square.textContent = ""));
}

squares.forEach((square) => square.addEventListener("click", handleClick));
resetButton.addEventListener("click", resetGame);
