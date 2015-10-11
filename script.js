var piece1 = [  
      [0, 0, 0, 0, 0, 0, 0], // * * * * *
      [0, 0, 0, 0, 0, 0, 0], //index = 0
      [1, 2, 2, 2, 2, 2, 1],
      [2, 3, 3, 3, 3, 3, 2],
      [1, 2, 2, 2, 2, 2, 1],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]];


var setGameBoard = function(){
	
	//sets up arrays, appends 22 "squares" to each row and column
	for (var i = 0; i < 22; i++){
		gameBoard[i] = []
		for (var j = 0; j < 22; j++){
			gameBoard[i][j] = null;
			var gameTile = $("<div class='game-tile' id='square" + i + "-" + j + "'></div>");
			$("#game-stats-container").append(gameTile);

			// colors the unplayable arrays, make same color as bg l8r
			if (i === 0 || i === 21 || j === 0 || j === 21) {

				var targetSquareDiv = "#square" + i + "-" + j;
				$(targetSquareDiv).css("background-color", "black");
				$(targetSquareDiv).css("border","none");
				$(targetSquareDiv).addClass("border")
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

//checks if it is a valid move or not
var validMove = function() {
	// conditions to make a move:
		// none of the blocks are taken (3's position must be null for all 3s)
		// sides can't be touching same color
		// corners must match color


	// if corners (1) match with another corner (1)
		// and sides (2) aren't touching other sides (2)
		// and your pieces (3) are ONLY over nulls in the array
		// 
		//  then return true

}

var gameBoard = [];


$(document).ready(function(){

	setGameBoard();

	$(".game-tile").hover(function() {
		if (!$( this ).hasClass("border")){
			$(this).css("background-color", "red");
		}
	}, function() {
		if (!$( this ).hasClass("border")){
			$( this ).css("background-color", "white");
		}
	});
	
	// $("#left-side").click(function(){

	// })
	// $.ajax(
	// 	"./blokus-pieces.js",
	// 	{
	// 		method:"GET", 
	// 		success: function(data, textString, garbage){
	// 			var shapesArray = data;
	// 			for (var i = 0; i < shapesArray.length; i++){
	// 				console.log(shapesArray[i]);
	// 			}
	// 		}
	// 	}
	// );



// console.log(gameBoard);
//play a piece condition / function

});