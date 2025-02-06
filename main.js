let board = {
  one: [5, 4, 3, 2, 1],
  two: [],
  three: [],
};

// const printBoard = () => {
//   // console.log("--- " + board[1]);
//   // console.log("--- " + board[2]);
//   // console.log("--- " + board[3]);

// };

const printBoard = () => {
  let pegsMapped = Object.keys(board).map(function (pegNumber) {
    // return??
    console.log("---" + board[pegNumber]);
  });
};

const checkWinner = () => {
  //board[3].includes([5,4,3,2,1])
  if (board.two.length === 5 || board.three.length === 5) {
    //board.3.length === 5
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
  


  let fromPegIndex = board.fromPeg.length -1 
  let fromPegDisc = board.fromPeg[fromPegIndex]

  let toPegIndex = board.toPeg.length -1; 
  let toPegDisc = board.toPeg[fromPegIndex]; 

  if (fromPeg >= 4 || toPeg >= 4 ){ // check if parameter is 1, 2, 3, 4, or 5
    console.log("Please choose the correct peg number, 1, 2, or 3") // logs to choose the right # 
  } else if (board.fromPeg.length === 0) { // check if fromPeg is 0
    console.log("there are no discs on that peg, move from valid peg")
  } else if (board.toPeg.length === 0 || undefined) { // check if toPeg is 0
    toPeg.push(fromDisc); 
    console.log("That move was succesful, the board is now: ")
  } else if (board.fromPegDisc < board.toPegDisc) { // check if fromPeg bigger than the toPeg
    toPeg.push(fromDisc); 
    console.log("That move was succesful, the board is now: ")
  } else {
    console.log("That move was unsuccesful, cannot place bigger disc on smaller disc. The board is still: ")
  }// check if fromPeg is smaller than toPeg


  
   
  
 

  

  printBoard(); 
  checkWinner();
};

console.log("move disc to win, ex. moveDisc(1,2)");
