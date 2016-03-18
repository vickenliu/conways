var getNeighbours = require('./getNeighbours')
function countAliveNeighbours(cellRow, cellColumn, board) {
  var neighbours = getNeighbours(cellRow, cellColumn, board);
  var count = 0;
  neighbours.forEach(function(neighbour){ // forEach same as "for" loop, neighbours[i]
    if(neighbour){ //sames as if(neighbour === ture , i.e alive)
      count++; // increment count
    }
  });
  return count;
}
module.exports = countAliveNeighbours
