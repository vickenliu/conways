var countAliveNeighbours = require('./countAliveNeighbours')
var nextCellState = require('./nextCellState')
var createBoard= require('./createBoard')
var nextBoard=require('./nextBoard')
var displayBoard= require('./displayBoard')


console.log('hello')

 	var board=createBoard(100);
/*    board[3][3] = true
    board[3][4] = true
    board[3][5]=true
    board[4][3] = true
    board[4][4] = true
    board[4][5] = true
    board[5][3]= true
    board[5][4]= true
    board[5][5]= true*/
	console.log('hi')

	displayBoard(board);
    setInterval(function(){

    	board=nextBoard(board);
    	displayBoard(board)
    },500)



exports.createBoard = createBoard
exports.nextBoard = nextBoard
