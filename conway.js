var countAliveNeighbours = require('./countAliveNeighbours')
var nextCellState = require('./nextCellState')
var createBoard= require('./createBoard')
var displayBoard= require('./displayBoard')

displayBoard(createBoard(9));



/*exports.createBoard = createBoard
exports.nextBoard = nextBoard*/
