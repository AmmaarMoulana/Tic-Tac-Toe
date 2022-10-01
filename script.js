
const gameBoard = (() => {

  let board = []
  currentPlayer = "O" 
  result = document.querySelector('.result')

  //Create game board
  for (i=1; i<=9; i++) {
    const container = document.querySelector('.container')
    const div = document.createElement('div')
    div.classList.add("block")
    div.setAttribute('id', "block" + i)
    container.appendChild(div)
    board.push(div)
    let blocks = document.querySelector('#block' + i)

    document.querySelector('button').addEventListener('click', () =>{
      blocks.textContent = ""
      document.querySelector('.container').style.pointerEvents="auto";
      result.style.fontSize="1em"
      result.style.backgroundColor="white"
      if (currentPlayer="X") {result.textContent="Player O's turn"}
      if (currentPlayer="O") {result.textContent="Player X's turn"}
    })

    //Event listener to add X  or O
    blocks.addEventListener('click', () => {
      if (blocks.textContent !== "") return
      currentPlayer == "X" ? currentPlayer = "O" : currentPlayer = "X"
      blocks.textContent = currentPlayer;
      currentPlayer == "X" ? result.textContent = "Player O's turn" : result.textContent = "Player X's turn"
    })
  }
    //Winning conditions
    document.querySelector('.container').addEventListener('click', () => {
    let zero = board[0]; let one = board[1]; let two = board[2];
    let three = board[3]; let four = board[4]; let five = board[5];
    let six = board[6]; let seven = board[7]; let eight = board[8];
    //if its a tie
    if (zero.textContent !== "" && one.textContent !== "" && two.textContent !== "" && three.textContent !== "" && four.textContent !== ""
        && five.textContent !== "" && six.textContent !== "" && seven.textContent !== "" && eight.textContent !== "") 
        {result.textContent = "ITS A TIE"; result.style.backgroundColor="red"; result.style.fontSize="1.5em"; document.querySelector('.container').style.pointerEvents="none";}

    //Winning condtions for X
    if (zero.textContent === "X" && one.textContent === "X" && two.textContent === "X") {result.textContent = "Player X wins"}
    if (three.textContent === "X" && four.textContent === "X" && five.textContent === "X") {result.textContent = "Player X wins"}
    if (six.textContent === "X" && seven.textContent === "X" && eight.textContent === "X") {result.textContent = "Player X wins"}
    if (six.textContent === "X" && four.textContent === "X" && two.textContent === "X") {result.textContent = "Player X wins"}
    if (zero.textContent === "X" && four.textContent === "X" && eight.textContent === "X") {result.textContent = "Player X wins"}
    if (zero.textContent === "X" && three.textContent === "X" && six.textContent === "X") {result.textContent = "Player X wins"} 
    if (one.textContent === "X" && four.textContent === "X" && seven.textContent === "X") {result.textContent = "Player X wins"} 
    if (two.textContent === "X" && five.textContent === "X" && eight.textContent === "X") {result.textContent = "Player X wins"} 
    //Winning conditions for O
    if (zero.textContent === "O" && one.textContent === "O" && two.textContent === "O") {result.textContent = "Player O wins"}
    if (three.textContent === "O" && four.textContent === "O" && five.textContent === "O") {result.textContent = "Player O wins"}  
    if (six.textContent === "O" && seven.textContent === "O" && eight.textContent === "O") {result.textContent = "Player O wins"}
    if (six.textContent === "O" && four.textContent === "O" && two.textContent === "O") {result.textContent = "Player O wins"}
    if (zero.textContent === "O" && four.textContent === "O" && eight.textContent === "O") {result.textContent = "Player O wins"}
    if (zero.textContent === "O" && three.textContent === "O" && six.textContent === "O") {result.textContent = "Player O wins"} 
    if (one.textContent === "O" && four.textContent === "O" && seven.textContent === "O") {result.textContent = "Player O wins"} 
    if (two.textContent === "O" && five.textContent === "O" && eight.textContent === "O") {result.textContent = "Player O wins"}
    //Style changes after winning condtion is met
    if (result.textContent === "Player X wins") {result.style.backgroundColor="lightgreen"; result.style.fontSize="1.5em"; document.querySelector('.container').style.pointerEvents="none";}
    if (result.textContent === "Player O wins") {result.style.backgroundColor="lightblue"; result.style.fontSize="1.5em"; document.querySelector('.container').style.pointerEvents="none";}     
    })

})();





