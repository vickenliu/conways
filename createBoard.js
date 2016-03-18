function createBoard(size) {
  var board = [];
  for(var i=0; i < size; i++){
    var row = [];
    for(var j=0; j < size; j++){
      row.push(false)
    }
    board.push(row);
  }
  return board;
}

module.exports = createBoard
