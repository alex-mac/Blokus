
var setGameBoard = function(){
	
	//sets up arrays, appends 22 "squares" to each row and column
	for (var i = 0; i < 22; i++){
		gameBoard[i] = []
		for (var j = 0; j < 22; j++){
			gameBoard[i][j] = null;
			var gameTile = $("<div class='game-tile' id='square" + i + "-" + j + "'></div>");
			$("#game-stats-container").append(gameTile);

			// colors the unplayable arrays
			if (i === 0 || i === 21 || j === 0 || j === 21) {
				var targetSquareDiv = "#square" + i + "-" + j;
				$(targetSquareDiv).css("background-color", "black");
				$(targetSquareDiv).css("border","none");
				console.log(targetSquareDiv);
			}
		}
	}

	// sets the values of the corners to make them playable
	//need to append classes to them later to make them color specific
	gameBoard[0][0] = 1;
	gameBoard[0][21] = 1;
	gameBoard[21][0] = 1;
	gameBoard[21][21] = 1;
}


var gameBoard = [];


$(document).ready(function(){

	setGameBoard();

	

console.log(gameBoard);
//play a piece condition / function

});