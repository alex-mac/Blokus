
/*
on move,
bluePiecesUsed.push(the piece that just got used)

turn all piece divs visible

for each bluePiecesUsed
   $(the piece.id).turnMeInvisible()
*/

var gamePiece = [ 
   {
      piece: 
   [          
      [0, 0, 0, 0, 0, 0, 0], // * * * * *
      [0, 0, 0, 0, 0, 0, 0], //index = 00
      [1, 2, 2, 2, 2, 2, 1],
      [2, 3, 3, 3, 3, 3, 2],
      [1, 2, 2, 2, 2, 2, 1],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "#piece-0"
   },
   
   {
      piece:
   [                         // * * * *
      [0, 0, 0, 0, 0, 0, 0], // *
      [0, 1, 2, 1, 0, 0, 0], //index = 01
      [0, 2, 3, 2, 2, 2, 1],
      [0, 2, 3, 3, 3, 3, 2],
      [0, 1, 2, 2, 2, 2, 1],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "#piece-1"
   },

   {
      piece:     
   [                          //   * * *
      [0, 0, 1, 2, 1, 0, 0],  // * *
      [0, 0, 2, 3, 2, 0, 0],  //index = 02
      [0, 0, 2, 3, 2, 1, 0],
      [0, 0, 2, 3, 3, 2, 0],
      [0, 0, 1, 2, 3, 2, 0],
      [0, 0, 0, 1, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "#piece-2"
   },

   {
      piece:     
   [                          //   *
      [0, 0, 0, 0, 0, 0, 0],  // * * * *
      [0, 0, 1, 2, 1, 0, 0],  //index = 03
      [0, 1, 2, 3, 2, 2, 1],
      [0, 2, 3, 3, 3, 3, 2],
      [0, 1, 2, 2, 2, 2, 1],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "#piece-3"
   },

   {
      piece:     
   [                         //   *
      [0, 0, 0, 0, 0, 0, 0], // * * *
      [0, 0, 1, 2, 1, 0, 0], //     *
      [0, 1, 2, 3, 2, 1, 0], //index = 04
      [0, 2, 3, 3, 3, 2, 0],
      [0, 1, 2, 2, 3, 2, 0],
      [0, 0, 0, 1, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
     id: "#piece-4"
   },

   {
      piece:    
   [                         //   *
      [0, 0, 0, 0, 0, 0, 0], // * * *
      [0, 0, 1, 2, 1, 0, 0], //   *
      [0, 1, 2, 3, 2, 1, 0], //index = 05
      [0, 2, 3, 3, 3, 2, 0],
      [0, 1, 2, 3, 2, 1, 0],
      [0, 0, 1, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "#piece-5"
   },

   {
      piece:     
   [                         // * * *
      [0, 0, 0, 0, 0, 0, 0], // *   *
      [0, 0, 0, 0, 0, 0, 0], //index = 06
      [0, 1, 2, 2, 2, 1, 0],
      [0, 2, 3, 3, 3, 2, 0],
      [0, 2, 3, 2, 3, 2, 0],
      [0, 1, 2, 1, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "#piece-6"
   },

   {
      piece:
   [                         //   * *
      [0, 0, 0, 0, 0, 0, 0], // * * *
      [0, 0, 1, 2, 1, 0, 0], //index = 07
      [0, 1, 2, 3, 2, 1, 0],
      [0, 0, 2, 3, 3, 2, 0],
      [0, 1, 2, 3, 3, 2, 0],
      [0, 0, 1, 2, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "##piece-7"
   },

   {
      piece: 
   [                         //     *
      [0, 0, 0, 0, 0, 0, 0], //   * *
      [0, 0, 0, 1, 2, 1, 0], // * *
      [0, 0, 1, 2, 3, 2, 0], //index = 08
      [0, 1, 2, 3, 3, 2, 0],
      [0, 2, 3, 3, 2, 1, 0],
      [0, 1, 2, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "#piece-8"
   },

   {
      piece:
   [                         // *
      [0, 0, 0, 0, 0, 0, 0], // * * *
      [0, 0, 1, 2, 1, 0, 0], // *
      [0, 0, 2, 3, 2, 0, 0], //index = 09
      [0, 1, 2, 3, 2, 1, 0],
      [0, 2, 3, 3, 3, 2, 0],
      [0, 1, 2, 2, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "#piece-9"
   },

   {
      piece:
    [                        // *
      [0, 0, 1, 2, 1, 0, 0], // *
      [0, 0, 2, 3, 2, 0, 0], // * * *
      [0, 0, 2, 3, 2, 2, 1], //index = 10
      [0, 0, 2, 3, 3, 3, 2],
      [0, 0, 1, 2, 2, 2, 1],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "#piece-10"
   },

   {
      piece:
    [                        // *
      [0, 0, 0, 0, 0, 0, 0], // * * *
      [0, 0, 1, 2, 2, 1, 0], //     *
      [0, 0, 2, 3, 3, 2, 0], //index = 11
      [0, 1, 2, 3, 2, 1, 0],
      [0, 2, 3, 3, 2, 0, 0],
      [0, 1, 2, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "#piece-11"
   },

   {
      piece:

    [                        // * * * *
      [0, 0, 1, 2, 1, 0, 0], // 
      [0, 0, 2, 3, 2, 0, 0], //index = 12 
      [0, 0, 2, 3, 2, 0, 0],
      [0, 0, 2, 3, 2, 0, 0], 
      [0, 0, 2, 3, 2, 0, 0],
      [0, 0, 1, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "#piece-12"
   },

   {
      piece:

    [                        // * *
      [0, 0, 0, 0, 0, 0, 0], //   * *
      [0, 0, 1, 2, 2, 1, 0], //index = 13 
      [0, 1, 2, 3, 3, 2, 0],
      [0, 2, 3, 3, 2, 1, 0], 
      [0, 1, 2, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "#piece-13"
   },

   {
      piece:

    [                        //  * *
      [0, 0, 0, 0, 0, 0, 0], //  * *
      [0, 1, 2, 2, 1, 0, 0], //index = 14 
      [0, 2, 3, 3, 2, 0, 0],
      [0, 2, 3, 3, 2, 0, 0], 
      [0, 1, 2, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "#piece-14"
   },

   {
      piece:

    [                        //   *
      [0, 0, 0, 0, 0, 0, 0], // * * *
      [0, 0, 1, 2, 1, 0, 0], //index = 15
      [0, 1, 2, 3, 2, 1, 0],
      [0, 2, 3, 3, 3, 2, 0], 
      [0, 1, 2, 2, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "#piece-15"
   },

   {
      piece:

    [                        // * * * 
      [0, 0, 0, 0, 0, 0, 0], //     *
      [0, 0, 0, 0, 0, 0, 0], //index = 16
      [0, 1, 2, 2, 2, 2, 0],
      [0, 2, 3, 3, 3, 2, 0], 
      [0, 1, 2, 2, 3, 2, 0],
      [0, 0, 0, 1, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "#piece-16"
   },

   {
      piece:
    [                         
      [0, 0, 0, 0, 0, 0, 0], // * * *
      [0, 0, 0, 0, 0, 0, 0], //index = 17
      [0, 1, 2, 2, 2, 1, 0],
      [0, 2, 3, 3, 3, 2, 0], 
      [0, 1, 2, 2, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "#piece-17"
   },

   {
      piece:
    [                        // *
      [0, 0, 0, 0, 0, 0, 0], // * *
      [0, 0, 1, 2, 1, 0, 0], //index = 18
      [0, 0, 2, 3, 2, 1, 0],
      [0, 0, 2, 3, 3, 2, 0], 
      [0, 0, 1, 2, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "#piece-18"
   },

   {
      piece:
    [                        
      [0, 0, 0, 0, 0, 0, 0], // * * 
      [0, 0, 1, 2, 1, 0, 0], //index = 19 
      [0, 0, 2, 3, 2, 0, 0],
      [0, 0, 2, 3, 2, 0, 0], 
      [0, 0, 1, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ],
      id: "#piece-19"
   },

   {
      piece:
    [                        // *
      [0, 0, 0, 0, 0, 0, 0], // 
      [0, 0, 0, 0, 0, 0, 0], //index = 20 
      [0, 0, 1, 2, 1, 0, 0],
      [0, 0, 2, 3, 2, 0, 0], 
      [0, 0, 1, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
   ], 
      id: "#piece-20"
   }
];


//sets up arrays, appends 20 "squares" to each row and column
var setGameBoard = function(){
	//columns
	for (var i = 0; i < 20; i++){
		gameBoard[i] = []
		//rows
		for (var j = 0; j < 20; j++){
			gameBoard[i][j] = null;
			//y and x in ids
			var gameTile = $("<div class='game-tile' id='" + i + "-" + j + "'></div>");
			$("#game-board").append(gameTile);
		}
	}

	$("#19-0").css("background-color", "blue");
	$("#0-0").css("background-color", "yellow");
	$("#0-19").css("background-color", "red");
	$("#19-19").css("background-color", "green");
}

//should return a value, manipulate not the main array but a copy of the array
var rotateRight = function(shape){
	var arr1 = shape.split('-');
	index = arr1[1],
	dummyArray = gamePiece[index].piece;
	
	var temp = new Array(7);

	for (var i = 0; i < 7; i++){
		temp[i] = new Array(7);
		for (var j = 0; j < 7; j++){
			temp[i][j] = dummyArray[temp.length - j - 1][i];
		}
	}

	// replaces the original array with the rotated array ... for now ...
	gamePiece[index].piece = temp;
};

var rotateLeft = function(shape){
   var arr1 = shape.split('-');
   index = arr1[1],
   dummyArray = gamePiece[index].piece;
   
   var temp = new Array(7);

   for (var i = 0; i < 7; i++){
      temp[i] = new Array(7);
      for (var j = 0; j < 7; j++){
         temp[i][j] = dummyArray[j][temp.length - i - 1];
      }
   }

   // replaces the original array with the rotated array ... for now ...
   gamePiece[index].piece = temp;
}

var convertToArray = function(array, index) {
	var arr1 = array.split('-');
	return arr1[index];
}

var getPiece = function (shape, location){
	//gets the specific game piece from the array of 21 game pieces
	var index = convertToArray(shape, 1),
	currentMouseRow = convertToArray(location, 0),
	currentMouseColumn = convertToArray(location, 1),
	
	//clones the array of the shape, defensive copying
	dummyArray = gamePiece[index].piece; 

// var getPiece = function(dummyArray, currentMouseRow, currentMouseColumn) {
	var pieceShape = [];
	for (var pieceArrayRow = 0; pieceArrayRow < 7; pieceArrayRow ++){
		for (var pieceArrayColumn = 0; pieceArrayColumn < 7; pieceArrayColumn++){
			//checks if it is a valid shape on the bloc (value of 3)
			if(dummyArray[pieceArrayRow][pieceArrayColumn] == 3){

				//adds the position in the array to the position on the board, the -math is to get the starting position to the center
				//of the 7x7 dummyArray
				var columnOffset = parseInt(pieceArrayRow) + parseInt(currentMouseRow) - Math.floor(dummyArray.length / 2);
				var rowOffset = parseInt(pieceArrayColumn) + parseInt(currentMouseColumn) - Math.floor(dummyArray.length / 2);
				
				var makeThisIdChangeColorFinally = ("#" + columnOffset + "-" + rowOffset);
				pieceShape.push(makeThisIdChangeColorFinally);
			}
		}
	}
	return pieceShape;
};

//converts an id into an array of 2 numbers: the row and columns.  THE COORDINATES
var convertToCoordinates = function(string) {
   if (string.charAt(0) === '#'){
      string = string.substr(1);
   }
   var coordinates = string.split('-');
   return coordinates;
}

//checks to see if the value at the square is 3 or not.  if there is a 3 found, return true immediately
var squareIsTaken = function(){
   var arr1 = shadowStates[1];
   for (var i = 0; i < arr1.length; i++){
      var coordinates = convertToCoordinates(arr1[i]);
      if (gameBoard[coordinates[0]][coordinates[1]] === 3) {
         return true;
      }
   }

   return false;
}

var addToGameBoard = function(pieceID){
   var coordinates = convertToCoordinates(pieceID);
   gameBoard[coordinates[0]][coordinates[1]] = 3;
}

var getPlayer = function() {
   color = playerColor[count % 4];


   //shows all the images, ALL 21 OF THEM
   for (var i = 0; i < originalArray.length; i++){
      $( originalArray[i] ).show();
   }
         
         //hides the ones that return the indexOf -1 (doesn't exist in the array)
   for (var i = 0; i <  originalArray.length; i++){
      for (var j = 0; j < piecePlayedByPlayer[color].length; j++){
         if (piecePlayedByPlayer[color].indexOf(originalArray[i]) == -1){
            $( originalArray[i] ).hide();
         }
      }    
   }

   $("h3").html("Player: " + playerColor[count % 4]);
}

calculateWinner = function(){
   var winner = null;
}

var playerTurn = function() {
   
   getPlayer();


   //sets the index in the array for that player to "passed"
   $("#button").click(function(){
      playerPassed[count % 4] = "passed";

      var gameOver = 0;
      for (var i = 0; i < playerPassed.length; i++){
         if (playerPassed[i] === "passed"){
            // gameOver++;
            gameOver++;
         }
      }
      if(gameOver === 4){
         // calculateWinner();
         alert("game over gucci");
      } else {
         count++;
         console.log(count);
         $("h3").html("Player: " + playerColor[count % 4]);
      }
   });

   //listens for a click event on the images of the game pieces
   $(".game-piece").click(function(){

      //gets ID of the image clicked, returns a string ex. piece-11
      thisPieceID = $( this ).attr('id');

      imageClicked = "on";
   });

   var currentLocation = null;
   //adds a "shadow" of the piece before it is played on a position relative to the board
   $(".game-tile").hover(function() {
     
      if (imageClicked === "on"){
      $( ".hovered" ).css("background-color", playerColor[count % 4]);
         //gets ID of the tile that the mouse is hovering over
         currentLocation = $( this ).attr('id'); // made it not declared inside the event.  change here if it messes things up         
         shadowStates[1] = getPiece(thisPieceID, currentLocation);

         var thisShadow = shadowStates[1]
         //the loop that adds the class hover onto the divs in relative to the shape of the
         //piece that was selected
         for (var i = 0; i < thisShadow.length; i++){
            if ( !$(thisShadow[i]).hasClass( "occupied" ) ){
               $( thisShadow[i] ).addClass("hovered");
               $( thisShadow[i] ).addClass(playerColor[count % 4]);
            }
         }

         shadowStates[0] = thisShadow;
      }

      //removes the after shadow of the piece after you move the mouse to another div
   }, function() {   
      if (imageClicked === "on") {
         var resetShadow = shadowStates[0]
         for (var i = 0; i < resetShadow.length; i++){
            if ( !$(resetShadow[i]).hasClass( "occupied" ) ){
               $( resetShadow[i] ).removeClass("hovered");
               $( resetShadow[i] ).removeClass(playerColor[count % 4]);
            }
         }
     }
   });
      

   $(document).keyup(function(e){
         // if shadowStates[1].indexOf('position') > -1
      if(e.keyCode == 83){ //pressing s
         rotateRight(thisPieceID);
      }

      if(e.keyCode == 65){ //pressing a 
         rotateLeft(thisPieceID);
      }
   });

      //removes all event handlers associated with the class gametile after the player
      //lifts their mouse
   $("#game-board").mouseup(function(){
      var turn = count % 4;
      if (shadowStates[1].indexOf(playerStart[turn]) == -1 && count < 4){
         swal({   
            title: "Invalid Move!",
            text: "Please play in the designated corner for the first move",   
            type: "error"
         });
      } else if (squareIsTaken() && count >= 4){  
         
         swal({   
            title: "Invalid Move!",
            text: "Home skillet, there's already another piece in that spot",   
            type: "error"
         });
      // } else if (checkForCorners() && count >= 4) {
      //    alert("Home skillet make sure to tap dat corner broski");
      } else {
            // having trouble getting the on and off to work
         imageClicked = "off";
         
         //listens for a click on the gameboard. to try to add a piece onto the gameboard
         //only works if a piece is selected
         var thisShadow = shadowStates[1]
         for (var i = 0; i < thisShadow.length; i++){
            $( thisShadow[i] ).addClass('occupied');
            $( thisShadow[i] ).css('background-color', playerColor[turn])
            $( thisShadow[i] ).removeClass('hovered');
            addToGameBoard(thisShadow[i]);
            playerScore[turn] ++;
         }
         var a = (parseInt(convertToArray(thisPieceID, 1)));
         var b = "#piece-" + a;
         var color = playerColor[count % 4];


         //splices from the array
         for (var i = 0; i < piecePlayedByPlayer[color].length; i++){
            if (piecePlayedByPlayer[color][i].indexOf(b) > -1) {
               var garbageVar = piecePlayedByPlayer[color].splice(i, 1);
            }
         }
         
         count++;
         console.log(count);
         getPlayer();
		}	
	})
   return true;	//gets here only once ... why ?	
};


var playBlokus = function() {
   //set up passes here
	var value = playerTurn();
   console.log(value);
}

var gameBoard = [];

//an array that holds 2 shapes: the current shape location [1] and the previous shape location [0]
//used to create and erase the shadow of the shape under the mouse as it moves along the board
var shadowStates = [null, null];
var playerColor = ["blue", "yellow", "red", "green"];
var playerStart = ["#19-0", "#0-0", "#0-19", "#19-19"];
var playerPassed = [null, null, null, null];
var playerScore = [-89, -89, -89, -89];
var count = 0;
var imageClicked = "off";
var thisPieceID = null;
var originalArray = ["#piece-0", "#piece-1", "#piece-2", "#piece-3", 
   "#piece-4", "#piece-5", "#piece-6", "#piece-7", "#piece-8", "#piece-9", 
   "#piece-10", "#piece-11", "#piece-12", "#piece-13", "#piece-14", 
   "#piece-15", "#piece-16", "#piece-17", "#piece-18", "#piece-19", "#piece-20"]
var piecePlayedByPlayer = {
   blue: ["#piece-0", "#piece-1", "#piece-2", "#piece-3", 
   "#piece-4", "#piece-5", "#piece-6", "#piece-7", "#piece-8", "#piece-9", 
   "#piece-10", "#piece-11", "#piece-12", "#piece-13", "#piece-14", 
   "#piece-15", "#piece-16", "#piece-17", "#piece-18", "#piece-19", "#piece-20"],
   yellow: ["#piece-0", "#piece-1", "#piece-2", "#piece-3", 
   "#piece-4", "#piece-5", "#piece-6", "#piece-7", "#piece-8", "#piece-9", 
   "#piece-10", "#piece-11", "#piece-12", "#piece-13", "#piece-14", 
   "#piece-15", "#piece-16", "#piece-17", "#piece-18", "#piece-19", "#piece-20"],
   red: ["#piece-0", "#piece-1", "#piece-2", "#piece-3", 
   "#piece-4", "#piece-5", "#piece-6", "#piece-7", "#piece-8", "#piece-9", 
   "#piece-10", "#piece-11", "#piece-12", "#piece-13", "#piece-14", 
   "#piece-15", "#piece-16", "#piece-17", "#piece-18", "#piece-19", "#piece-20"],
   green:["#piece-0", "#piece-1", "#piece-2", "#piece-3", 
   "#piece-4", "#piece-5", "#piece-6", "#piece-7", "#piece-8", "#piece-9", 
   "#piece-10", "#piece-11", "#piece-12", "#piece-13", "#piece-14", 
   "#piece-15", "#piece-16", "#piece-17", "#piece-18", "#piece-19", "#piece-20"]
};


$(document).ready(function(){
	setGameBoard();
	playBlokus();
});