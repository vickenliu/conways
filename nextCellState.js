var overPopulated = require('./overPopulated')
var underPopulated = require('./underPopulated')
var ressurectable = require('./ressurectable')

function nextCellState(cellState, neighbourCount) {
  if(underPopulated(neighbourCount) || overPopulated(neighbourCount)){
    cellState = false; // these are the two senarios, a cell can dies either from underpopulation or overpopulation
  }
  if(ressurectable(neighbourCount)){
    cellState = true; // since n == 3 then it becomes alive
  }
  return cellState;
}

module.exports = nextCellState
