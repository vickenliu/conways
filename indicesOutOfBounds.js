var outOfBounds = require('./outOfBounds')

function indicesOutOfBounds(rowIndex, columnIndex, array) {
  var row = out(rowIndex, array);
  var col = out(columnIndex, array)

  return row || col ;
}
//this is a helper method
function out(index, array) { // check if a single array is out of bounds
    return !(index >= 0 && index < array.length); // only index between 0 and length !out of bounds.
}

module.exports = indicesOutOfBounds
