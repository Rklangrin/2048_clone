$(document).ready(function(){

  game = new Game();
  var $counter = $("#counter");
  var $tableRowsArr = $("#2048-table tr");

  var render_board = function(){
    $counter.html(game.counter);
    var length = $tableRowsArr.length
    for(var row = 0; row < length; row++){
      for(var col = 0; col < length; col++){
        if (game.board[row][col] != 0){
          $($($tableRowsArr[row]).children()[col]).html(game.board[row][col]);
        } else {
          $($($tableRowsArr[row]).children()[col]).html("");
        }
      }
    }
  };

  render_board();

  Mousetrap.bind("up", function(){
    game.shiftEntireBoardUpOrDown("up");
    render_board();
  });

  Mousetrap.bind("down", function(){
    game.shiftEntireBoardUpOrDown("down");
    render_board();
  });

  Mousetrap.bind("right", function(){
    game.shiftEntireBoardRightOrLeft("right");
    render_board();
  });

  Mousetrap.bind("left", function(){
    game.shiftEntireBoardRightOrLeft("left");
    render_board();
  });

});