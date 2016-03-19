(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./countAliveNeighbours":2,"./createBoard":3,"./displayBoard":4,"./nextBoard":7,"./nextCellState":8}],2:[function(require,module,exports){
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

},{"./getNeighbours":5}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
function displayBoard(board) {
	var app=document.querySelector('#app');
	app.innerHTML='';
  var rowNum=board.length,table=document.createElement('table')
  for(var i=0;i<rowNum;i++){
  	var row=document.createElement('tr')
  	for(var j=0;j<rowNum;j++){
  		var td=document.createElement('td')
      td.style.backgroundColor=board[i][j]? 'black' : ' '
  		row.appendChild(td);
  	}
  	table.appendChild(row);
  }
  app.appendChild(table);

}
module.exports = displayBoard 

},{}],5:[function(require,module,exports){
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

},{"./indicesOutOfBounds":6}],6:[function(require,module,exports){
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




},{"./outOfBounds":9}],7:[function(require,module,exports){
var nextCellState = require('./nextCellState')
var countAliveNeighbours = require('./countAliveNeighbours')

function nextBoard(currentBoard) {
	var l=currentBoard.length,newBoard=[];
	for(var i=0;i<l;i++){
		var row=[];
		for(var j=0;j<l;j++){
			var aliveNeighbours=countAliveNeighbours(i,j,currentBoard),preValue=currentBoard[i][j];
			row.push(nextCellState(preValue,aliveNeighbours));
		}
		newBoard.push(row);
	}
	
 
	return newBoard;
  
}
module.exports = nextBoard
/*function nextBoard(currentBoard) {
	var l=currentBoard.length,changed=false;
	for(var i=0;i<l;i++){
		for(var j=0;j<l;j++){
			var aliveNeighbours=countAliveNeighbours(i,j,currentBoard),preValue=currentBoard[i][j];
			currentBoard[i][j]=nextCellState(preValue,aliveNeighbours);
			if(preValue===currentBoard[i][j]){
				if(aliveNeighbours==2 || aliveNeighbours==3){
				 	changed =changed || true;
				}else{
					changed =changed || false;
				}
			}else{
				changed =changed || true;
			}
		}
	}
	
	if(!changed) return; 
	return currentBoard;
  
}*/
},{"./countAliveNeighbours":2,"./nextCellState":8}],8:[function(require,module,exports){
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

},{"./overPopulated":10,"./ressurectable":11,"./underPopulated":12}],9:[function(require,module,exports){
function outOfBounds(index, array) {
  return !(index >= 0 && index < array.length);
}
module.exports = outOfBounds

},{}],10:[function(require,module,exports){
function overPopulated(neighbourCount) {
  return  neighbourCount > 3;
}
module.exports = overPopulated

},{}],11:[function(require,module,exports){
function ressurectable(neighbourCount) {
  return  neighbourCount === 3;
}
module.exports = ressurectable

},{}],12:[function(require,module,exports){
function underPopulated(neighbourCount) {
  return neighbourCount < 2;
}
module.exports = underPopulated

},{}]},{},[1]);
