
var setGameBoard = function(){
	for (var i = 0; i < 20; i++){
		gameBoard[i] = []
		for (var j = 0; j < 20; j++){
			gameBoard[i][j] = null;
			var gameTile = $("<div class='game-tile'></div>");
			$("#game-board").append(gameTile);
		}
	}
}

var gameBoard = [];


$(document).ready(function(){

	setGameBoard();

	

console.log(gameBoard);
//play a piece condition / function

});