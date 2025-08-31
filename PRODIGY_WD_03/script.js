/* =====  State  ===== */
const boardEl   = document.getElementById("board");
const statusEl  = document.getElementById("status");
const restartEl = document.getElementById("restart");

let board, current;         // board = ["","","",...]; current = "X" | "O"
const wins = [              // all win triplets
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

/* =====  Init  ===== */
function init(){
  board  = Array(9).fill("");
  current = "X";
  boardEl.innerHTML = "";
  statusEl.textContent = "Player X’s turn";
  wins.forEach(() => {});           // keep linter happy

  for(let i=0;i<9;i++){
    const div = document.createElement("div");
    div.classList.add("cell");
    div.dataset.index = i;
    div.addEventListener("click", handleMove, { once:true });
    boardEl.appendChild(div);
  }
}
init();

/* =====  Game logic  ===== */
function handleMove(e){
  const idx = +e.target.dataset.index;
  board[idx] = current;
  e.target.textContent = current;
  e.target.classList.add(current.toLowerCase());

  if(isWin(idx)){ endGame(`${current} wins!`, getWinLine(idx)); return; }
  if(board.every(Boolean)){ endGame("It’s a draw!"); return; }

  current = current === "X" ? "O" : "X";
  statusEl.textContent = `Player ${current}’s turn`;
}

function isWin(idx){
  return wins
    .filter(line => line.includes(idx))
    .some(line => line.every(i => board[i] === current));
}

function getWinLine(idx){
  return wins.find(line => line.includes(idx) && line.every(i => board[i] === current));
}

function endGame(msg, winLine){
  statusEl.textContent = msg;
  document.querySelectorAll(".cell").forEach(c => c.classList.add("disabled"));
  if(winLine){
    winLine.forEach(i => boardEl.children[i].classList.add("win"));
  }
}

/* =====  Restart  ===== */
restartEl.onclick = init;
