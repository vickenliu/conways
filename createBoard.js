function createBoard(size) {
  var board = [];
  for(var i=0; i < size; i++){
    var row = [];
    for(var j=0; j < size; j++){
      row.push(Math.random()<0.5455? true : false);
    }
    board.push(row);
  }
  return board;
}

module.exports = createBoard
