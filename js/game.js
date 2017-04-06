var Game = function(){
  this.board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];

  var position1 = this.randomBoardPosition(); 
  var position2 = this.randomBoardPosition();
  while (position1.row === position2.row && position1.column === position2.column) {
    position2 = randomBoardPosition(); // if the positions are pointing to the same spot, this will change the location of position 2. 
  }

  this.board[position1.row][position1.column] = this.generateTwoOrFour();
  this.board[position2.row][position2.column] = this.generateTwoOrFour();
  // A two or four will now be placed in each of the randomly selected positions in order to start the game. 
}


// This function will just find a random position on the board.
Game.prototype.randomBoardPosition = function() {
  return {
    row: Math.floor(Math.random() * 4),
    column: Math.floor(Math.random() * 4)
  }
}

// this function generates a 2 or 4; 10% chance to generate a 4.
Game.prototype.generateTwoOrFour = function() {
    var random = Math.ceil(Math.random() * 10);
    if (random === 10) {
      return 4;
    } else {
      return 2;
    }
  }

  // this function just makes it easy to visualize the board in the console. It will print the board in the in the proper rows and columns.
  Game.prototype.toString = function(){
    var board_string = "\n";
    for (var i = 0; i < this.board.length; i++) {
      board_string = board_string.concat(this.board[i].toString()) + "\n"
    }
    return board_string;
  }