export const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

export const checkWinner = (squares) => {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    const [a, b, c] = WINNING_LINES[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export const checkDraw = (squares) => {
  return squares.every(square => square !== null);
};

export const findWinningLine = (board, winner) => {
  if (!winner) return [];
  
  for (let i = 0; i < WINNING_LINES.length; i++) {
    const [a, b, c] = WINNING_LINES[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return WINNING_LINES[i];
    }
  }
  return [];
};

export const getAvailableMoves = (board) => {
  return board
    .map((square, index) => square === null ? index : null)
    .filter(index => index !== null);
};

export const makeRandomMove = (board) => {
  const availableMoves = getAvailableMoves(board);
  if (availableMoves.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
  }
  return null;
}; 