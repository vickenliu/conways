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
