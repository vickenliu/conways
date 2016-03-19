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