function createBoard(size) {
  var board = [];
  for(var i=0; i < size; i++){
    var row = [];
    for(var j=0; j < size; j++){
      row.push(Math.random()>0.7123? false : true);
    }
    board.push(row);
  }
  return board;
}

module.exports = createBoard
