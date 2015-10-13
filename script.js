var gamePiece = [  
   [          
      [0, 0, 0, 0, 0, 0, 0], // * * * * *
      [0, 0, 0, 0, 0, 0, 0], //index = 00
      [1, 2, 2, 2, 2, 2, 1],
      [2, 3, 3, 3, 3, 3, 2],
      [1, 2, 2, 2, 2, 2, 1],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],

   [                         // * * * *
      [0, 0, 0, 0, 0, 0, 0], // *
      [0, 1, 2, 1, 0, 0, 0], //index = 01
      [0, 2, 3, 2, 2, 2, 1],
      [0, 2, 3, 3, 3, 3, 2],
      [0, 1, 2, 2, 2, 2, 1],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
         
   [                          //   * * *
      [0, 0, 1, 2, 1, 0, 0],  // * *
      [0, 0, 2, 3, 2, 0, 0],  //index = 02
      [0, 0, 2, 3, 2, 1, 0],
      [0, 0, 2, 3, 3, 2, 0],
      [0, 0, 1, 2, 3, 2, 0],
      [0, 0, 0, 1, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
         
   [                          //   *
      [0, 0, 0, 0, 0, 0, 0],  // * * * *
      [0, 0, 1, 2, 1, 0, 0],  //index = 03
      [0, 1, 2, 3, 2, 2, 1],
      [0, 2, 3, 3, 3, 3, 2],
      [0, 1, 2, 2, 2, 2, 1],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
         
   [                         //   *
      [0, 0, 0, 0, 0, 0, 0], // * * *
      [0, 0, 1, 2, 1, 0, 0], //     *
      [0, 1, 2, 3, 2, 1, 0], //index = 04
      [0, 2, 3, 3, 3, 2, 0],
      [0, 1, 2, 2, 3, 2, 0],
      [0, 0, 0, 1, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
         
   [                         //   *
      [0, 0, 0, 0, 0, 0, 0], // * * *
      [0, 0, 1, 2, 1, 0, 0], //   *
      [0, 1, 2, 3, 2, 1, 0], //index = 05
      [0, 2, 3, 3, 3, 2, 0],
      [0, 1, 2, 3, 2, 1, 0],
      [0, 0, 1, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
         
   [                         // * * *
      [0, 0, 0, 0, 0, 0, 0], // *   *
      [0, 0, 0, 0, 0, 0, 0], //index = 06
      [0, 1, 2, 2, 2, 1, 0],
      [0, 2, 3, 3, 3, 2, 0],
      [0, 2, 3, 2, 3, 2, 0],
      [0, 1, 2, 1, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
         
   [                         //   * *
      [0, 0, 0, 0, 0, 0, 0], // * * *
      [0, 0, 1, 2, 1, 0, 0], //index = 07
      [0, 1, 2, 3, 2, 1, 0],
      [0, 0, 2, 3, 3, 2, 0],
      [0, 1, 2, 3, 3, 2, 0],
      [0, 0, 1, 2, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
         
   [                         //     *
      [0, 0, 0, 0, 0, 0, 0], //   * *
      [0, 0, 0, 1, 2, 1, 0], // * *
      [0, 0, 1, 2, 3, 2, 0], //index = 08
      [0, 1, 2, 3, 3, 2, 0],
      [0, 2, 3, 3, 2, 1, 0],
      [0, 1, 2, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
         
   [                         // *
      [0, 0, 0, 0, 0, 0, 0], // * * *
      [0, 0, 1, 2, 1, 0, 0], // *
      [0, 0, 2, 3, 2, 0, 0], //index = 09
      [0, 1, 2, 3, 2, 1, 0],
      [0, 2, 3, 3, 3, 2, 0],
      [0, 1, 2, 2, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
         
    [                        // *
      [0, 0, 1, 2, 1, 0, 0], // *
      [0, 0, 2, 3, 2, 0, 0], // * * *
      [0, 0, 2, 3, 2, 2, 1], //index = 10
      [0, 0, 2, 3, 3, 3, 2],
      [0, 0, 1, 2, 2, 2, 1],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
         
    [                        // *
      [0, 0, 0, 0, 0, 0, 0], // * * *
      [0, 0, 1, 2, 2, 1, 0], //     *
      [0, 0, 2, 3, 3, 2, 0], //index = 11
      [0, 1, 2, 3, 2, 1, 0],
      [0, 2, 3, 3, 2, 0, 0],
      [0, 1, 2, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
            
    [                        // * * * *
      [0, 0, 1, 2, 1, 0, 0], // 
      [0, 0, 2, 3, 2, 0, 0], //index = 12 
      [0, 0, 2, 3, 2, 0, 0],
      [0, 0, 2, 3, 2, 0, 0], 
      [0, 0, 2, 3, 2, 0, 0],
      [0, 0, 1, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
        
    [                        // * *
      [0, 0, 0, 0, 0, 0, 0], //   * *
      [0, 0, 1, 2, 2, 1, 0], //index = 13 
      [0, 1, 2, 3, 3, 2, 0],
      [0, 2, 3, 3, 2, 1, 0], 
      [0, 1, 2, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
        
    [                        //  * *
      [0, 0, 0, 0, 0, 0, 0], //  * *
      [0, 1, 2, 2, 1, 0, 0], //index = 14 
      [0, 2, 3, 3, 2, 0, 0],
      [0, 2, 3, 3, 2, 0, 0], 
      [0, 1, 2, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
        
    [                        //   *
      [0, 0, 0, 0, 0, 0, 0], // * * *
      [0, 0, 1, 2, 1, 0, 0], //index = 15
      [0, 1, 2, 3, 2, 1, 0],
      [0, 2, 3, 3, 3, 2, 0], 
      [0, 1, 2, 2, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
        
    [                        // * * * 
      [0, 0, 0, 0, 0, 0, 0], //     *
      [0, 0, 0, 0, 0, 0, 0], //index = 16
      [0, 1, 2, 2, 2, 2, 0],
      [0, 2, 3, 3, 3, 2, 0], 
      [0, 1, 2, 2, 3, 2, 0],
      [0, 0, 0, 1, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
        
    [                         
      [0, 0, 0, 0, 0, 0, 0], // * * *
      [0, 0, 0, 0, 0, 0, 0], //index = 17
      [0, 1, 2, 2, 2, 1, 0],
      [0, 2, 3, 3, 3, 2, 0], 
      [0, 1, 2, 2, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
        
    [                        // *
      [0, 0, 0, 0, 0, 0, 0], // * *
      [0, 0, 1, 2, 1, 0, 0], //index = 18
      [0, 0, 2, 3, 2, 1, 0],
      [0, 0, 2, 3, 3, 2, 0], 
      [0, 0, 1, 2, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
        
    [                        
      [0, 0, 0, 0, 0, 0, 0], // * * 
      [0, 0, 1, 2, 1, 0, 0], //index = 19 
      [0, 0, 2, 3, 2, 0, 0],
      [0, 0, 2, 3, 2, 0, 0], 
      [0, 0, 1, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
        
    [                        // *
      [0, 0, 0, 0, 0, 0, 0], // 
      [0, 0, 0, 0, 0, 0, 0], //index = 20 
      [0, 0, 1, 2, 1, 0, 0],
      [0, 0, 2, 3, 2, 0, 0], 
      [0, 0, 1, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ]
]  

var setGameBoard = function(){
	
	//sets up arrays, appends 20 "squares" to each row and column
	for (var i = 0; i < 20; i++){
		gameBoard[i] = []
		for (var j = 0; j < 20; j++){
			gameBoard[i][j] = null;
			var gameTile = $("<div class='game-tile' id='" + i + "_" + j + "'></div>");
			$("#game-board").append(gameTile);
		}
	}
}

var createShadow = function(shape, location){
	var arr1 = shape.split('-');
	var index = arr1[1];
	var thisArray = gamePiece[index];

	// var coordinates = $( this ).attr("id").split("_")
	for (var x = 0; x < 7; x ++){
		for (var y = 0; y < 7; y++){
			if(thisArray[x][y] === 3){

				//get coordinates of where the mouse is
				var xOnTheBoard = parseInt(location);
				var yOnTheBoard = parseInt(location);
				var coordinatesOnTheBoard = "#" + xOnTheBoard + "_" + yOnTheBoard;
				console.log(coordinatesOnTheBoard);
				// $(coordinatesOnTheBoard).addClass("hovered");
			}
		}
	}	
};



	// var coordinates = $( this ).attr("id").split("_");

	// 	console.log(coordinates);
	// 	for (var x = 0; x < piece3.length; x ++){
	// 		for (var y = 0; y < piece3.length; y++){
	// 			if(piece3[x][y] === 3){
	// 				var xOnTheBoard = parseInt(coordinates[0]) + x - 3;
	// 				var yOnTheBoard = parseInt(coordinates[1]) + y - 2;
	// 				var coordinatesOnTheBoard = xOnTheBoard + "_" + yOnTheBoard;
	// 				var search = "#" + coordinatesOnTheBoard
	// 				$(search).css("background-color", "blue");
					

	// 				console.log(coordinatesOnTheBoard);


	// 				$(coordinatesOnTheBoard).css("background-color", "blue");
	// 			}
	// 		}
// }
	
var playBlokus = function() {
	//listens for a click event
	$(".game-piece").click(function(){
		//gets ID of the piece clicked
		var thisPieceID = $( this ).attr('id');

		$(".game-tile").hover(function() {
			var currentLocation = $( this ).attr('id');

			createShadow(thisPieceID, currentLocation);
		}, function() {	
			$( this ).removeClass("hovered");
		});
	})


	// $(".game-tile").hover(function() {
	// 	$(this).addClass("hovered");
	// }, function() {	
	// 	$( this ).removeClass("hovered");
	// });

	//.offset() ? 
	// $(".game-tile").on("click", function(){ 
	// 	var coordinates = $( this ).attr("id").split("_");

	// 	console.log(coordinates);
	// 	for (var x = 0; x < piece3.length; x ++){
	// 		for (var y = 0; y < piece3.length; y++){
	// 			if(piece3[x][y] === 3){
	// 				var xOnTheBoard = parseInt(coordinates[0]) + x - 3;
	// 				var yOnTheBoard = parseInt(coordinates[1]) + y - 2;
	// 				var coordinatesOnTheBoard = xOnTheBoard + "_" + yOnTheBoard;
	// 				var search = "#" + coordinatesOnTheBoard
	// 				$(search).css("background-color", "blue");
					

	// 				console.log(coordinatesOnTheBoard);


	// 				$(coordinatesOnTheBoard).css("background-color", "blue");
	// 			}
	// 		}
	// 	}
		
	// }); 
}


var gameBoard = [];

$(document).ready(function(){

	setGameBoard();

	playBlokus();
});