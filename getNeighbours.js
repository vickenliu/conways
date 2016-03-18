var indicesOutOfBounds = require('./indicesOutOfBounds')
function getNeighbours(cellRow, cellColumn, board) {
  var neighbours=[]
  if( !indicesOutOfBounds(cellRow-1,cellColumn,board) ){ // up
    neighbours.push(board[cellRow-1][cellColumn])

  }
  if(!indicesOutOfBounds(cellRow-1,cellColumn-1,board)){ //diagonal top left
    neighbours.push(board[cellRow-1][cellColumn-1])

  }
   if(!indicesOutOfBounds(cellRow-1,cellColumn+1,board)){//diagonal top right
    neighbours.push(board[cellRow-1][cellColumn+1])

  }
   if(!indicesOutOfBounds(cellRow,cellColumn+1,board)){//right
    neighbours.push(board[cellRow][cellColumn+1])

  }
   if(!indicesOutOfBounds(cellRow,cellColumn-1,board)){//left
    neighbours.push(board[cellRow][cellColumn-1])

  }
   if(!indicesOutOfBounds(cellRow+1,cellColumn,board)){// down
    neighbours.push(board[cellRow+1][cellColumn])

  }
   if(!indicesOutOfBounds(cellRow+1,cellColumn-1,board)){// diagonal down left
    neighbours.push(board[cellRow+1][cellColumn-1])

  }
   if(!indicesOutOfBounds(cellRow+1,cellColumn+1,board)){// diagonal down right
    neighbours.push(board[cellRow+1][cellColumn+1])
  }

return neighbours;
}


module.exports = getNeighbours
