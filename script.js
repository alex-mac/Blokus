
var setGameBoard = function(){
	
	//sets up arrays, appends 22 "squares" to each row and column
	for (var i = 0; i < 22; i++){
		gameBoard[i] = []
		for (var j = 0; j < 22; j++){
			gameBoard[i][j] = null;
			var gameTile = $("<div class='game-tile' id='square" + i + "-" + j + "'></div>");
			$("#game-stats-container").append(gameTile);

			if (i === 0 || i === 21 || j === 0 && j === 21) {
				var targetSquareDiv = "#sqaure" + i + "-" + j;
				$(targetSquareDiv).css("background-color, black");
				console.log(targetSquareDiv);
			}
		}
	}

}


var gameBoard = [];


$(document).ready(function(){

	setGameBoard();

	

console.log(gameBoard);
//play a piece condition / function

});