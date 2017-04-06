describe("Game", function() {
  var player;
  var song;

  beforeEach(function() {
    game = new Game();
  });

  it("should generate an array of length 4", function() {
    expect(game.board.length).toEqual(4);
  });

  describe("function, generateTwoOrFour", function(){
    
    it("should generate a two or four", function(){
      var checkTwoOrFour = function(input){
        if (input === 2 || input === 4){
          return true
        } else {
          return false
        }
      };
      expect(checkTwoOrFour(game.generateTwoOrFour())).toBe(true);
    });
  });

  describe("shift Entire Board to the right", function(){

    it("should add two of the same numbers together that are closest to the border that the board is shifting towards", function(){
      game.board = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 2, 2, 2]];
      game.shiftEntireBoardRightOrLeft("right");
      expect(game.board[3][3]).toBe(4);
    });
  });

  describe("shift Entire Board to the left", function(){

    it("should add two of the same numbers together that are closest to the border that the board is shifting towards", function(){
      game.board = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 2, 2, 2]];
      game.shiftEntireBoardRightOrLeft("left");
      expect(game.board[3][0]).toBe(4);
    });
  });


  describe("shift Entire Board up", function(){

    it("should add two of the same numbers together that are closest to the border that the board is shifting towards", function(){
      game.board = [[0, 0, 0, 0],
                    [0, 0, 0, 2],
                    [0, 0, 0, 2],
                    [0, 0, 0, 2]];
      game.shiftEntireBoardUpOrDown("up");
      expect(game.board[0][3]).toBe(4);
    });
  });


  describe("shift Entire Board down", function(){

    it("should add two of the same numbers together that are closest to the border that the board is shifting towards", function(){
      game.board = [[0, 0, 0, 0],
                    [0, 0, 0, 2],
                    [0, 0, 0, 2],
                    [0, 0, 0, 2]];
      game.shiftEntireBoardUpOrDown("down");
      expect(game.board[3][3]).toBe(4);
    });
  });

  
});
