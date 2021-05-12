let matrix = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let figure = 0;
let win = false;

function addOption(id, row, column) {
  if (!win) {
    if (matrix[row][column] === 0) {
      if (figure === 0) {
        id.style.background = "url('../assets/x.png') no-repeat center";
        figure = 1;
        matrix[row][column] = 1;
      } else {
        id.style.background = "url('../assets/o.png') no-repeat center";
        figure = 0;
        matrix[row][column] = 2;
      }
      verifyWin();
    }
  }
}

function verifyWin() {
  if (matrix[0][0] == matrix[0][1] && matrix[0][0] == matrix[0][2] &&  matrix[0][2]!=0) {
    win = true;
  } else if (matrix[1][0] == matrix[1][1] && matrix[1][0] == matrix[1][2] &&  matrix[1][2]!=0) {
    win = true;
  }
  if (matrix[2][0] == matrix[2][1] && matrix[2][0] == matrix[2][2] &&  matrix[2][2]!=0) {
    win = true;
  }
  if (matrix[0][0] == matrix[1][0] && matrix[0][0] == matrix[2][0] &&  matrix[2][0]!=0) {
    win = true;
  }
  if (matrix[0][1] == matrix[1][1] && matrix[0][1] == matrix[2][1] &&  matrix[2][1]!=0) {
    win = true;
  }
  if (matrix[0][2] == matrix[1][2] && matrix[0][2] == matrix[2][2] &&  matrix[2][2]!=0) {
    win = true;
  }
  if (matrix[0][0] == matrix[1][1] && matrix[0][0] == matrix[2][2] &&  matrix[2][2]!=0) {
    win = true;
  }
  if (matrix[0][2] == matrix[1][1] && matrix[0][2] == matrix[2][0] &&  matrix[2][0]!=0) {
    win = true;
  }
}

function resetBoard(){
    matrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
    let board = document.getElementsByClassName("grid-container")[0]
    console.log(board)
    for(let i = 0; i<board.childNodes.length; i++){
        if(board.childNodes[i].tagName=== "BUTTON"){
            board.childNodes[i].style.background = "none"
            board.childNodes[i].style.background = "white"
        }
    }
    win = false;
}