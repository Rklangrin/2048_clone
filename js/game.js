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


// Shift board to the right or left
Game.prototype.shiftEntireBoard = function(rightOrLeft) {
  var length = this.board.length;
  for (var n = 0; n < length; n++) {
    this.board[n] = this.shiftSingleArray(this.board[n], rightOrLeft);
  }
  this.addTwoOrFourToBoard();
  return this.toString()
}

Game.prototype.shiftSingleArray = function(array, rightOrLeft) {
  newArray = this.shiftNonZeroesRight(array);
  newArray = this.addTogetherSameNumbers(newArray, rightOrLeft);
  finalArray = this.shiftNonZeroesRight(newArray);
  if (rightOrLeft === "left") {
    finalArray.reverse();
  }
  return finalArray
}

Game.prototype.shiftNonZeroesRight = function(array){
  var length = array.length;
  var newArrayOrdered = [0, 0, 0, 0];

  var arrayPosition = 3
  for (var i = 0; i < length; i++) {
    var num = array.pop();
    if (num != 0) {
      newArrayOrdered[arrayPosition] = num;
      arrayPosition--;
    }
  }
  return newArrayOrdered;
}

Game.prototype.addTogetherSameNumbers = function(array, rightOrLeft){
  var length = array.length;
  for (var i = length - 1; i > -1; i--) {
    if (array[i] === array[i-1]) {
      array[i] = array[i] + array[i-1];
      array[i-1] = 0;
      i--;
    }
  }
  if (rightOrLeft === "left") {
    array.reverse();
  }
  return array
}


// ADD TWO OR FOUR TO BOARD ------------------------------------------------------------
Game.prototype.addTwoOrFourToBoard = function() {
  locationsToAddNumber = this.findEmptySpaces();
  randomizedLocation = Math.floor(Math.random() * locationsToAddNumber.length);
  row = locationsToAddNumber[randomizedLocation].row;
  column = locationsToAddNumber[randomizedLocation].column;
  this.board[row][column] = this.generateTwoOrFour();
}

Game.prototype.findEmptySpaces = function() {
  var locations = [];
  var length = game.board.length
  for (var i = 0; i < length; i++) {
    for (var n = 0; n < length; n++) {
      if (game.board[i][n] === 0) {
        locations.push({row: i, column: n})
      }
    }
  }
  return locations
}