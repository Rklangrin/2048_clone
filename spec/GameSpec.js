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

  


});
