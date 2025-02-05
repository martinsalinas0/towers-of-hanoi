let board = {
  1: [5, 4, 3, 2, 1],
  2: [],
  3: [],
};

// const printBoard = () => {
//   // console.log("--- " + board[1]);
//   // console.log("--- " + board[2]);
//   // console.log("--- " + board[3]);

// };

const printBoard = () => {
  let pegsMapped = Object.keys(board).map(function (pegNumber) { // return?? 
    console.log("---" + board[pegNumber]) 
  });
  
};

const checkWinner = () => {
  //board[3].includes([5,4,3,2,1])
  if (board[3].length === 5 || board[2] === 5) { //board.3.length === 5 
    console.log("YOU WIN the game!!!");
    resetGame();
    console.log("Game has been reset; move disc to play again!");
    printBoard();
  }
};

const resetGame = () => {
  board[1] = [5, 4, 3, 2, 1];
  board[2] = [];
  board[3] = [];
};

const moveDisc = (fromPeg, toPeg) => {
  
  if (fromPeg > fromPeg.length || toPeg > toPeg.length) { 
    console.log("Error, input 1-3 for pegs"); 

  } else if (toPeg.length) {

    //board[toPeg].length === 0 || board[toPeg][board[toPeg].length - 1] > board[fromPeg].pop()

    let disc1 = board[fromPeg].pop(); // this is the last element of that peg
    board[toPeg].push(disc1);   // adds disc to that peg
    console.log("That move was successful, the board is now:"); 
  } else {

    board[fromPeg].push(disc1); // Put the disc back
    console.log(
      "That move was unsuccessful. Cannot place a larger disc on a smaller one. "
    );
  }

  console.log(printBoard()) 
  checkWinner();
};

console.log("move disc to win, ex. moveDisc(1,2)");


