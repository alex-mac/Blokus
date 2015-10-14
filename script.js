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
var rotatePiece = function(shape){
	var arr1 = shape.split('-');
	index = arr1[1],
	dummyArray = gamePiece[index];
	
	var temp = new Array(7);

	for (var i = 0; i < 7; i++){
		temp[i] = new Array(7);
		for (var j = 0; j < 7; j++){
			temp[i][j] = dummyArray[temp.length - j - 1][i];
		}
	}

	// replaces the original array with the rotated array ... for now ...
	gamePiece[index] = temp;

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
	dummyArray = gamePiece[index]; 

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

var playerTurn = function() {
	//listens for a click event on the images of the game pieces

   // cookie = "#19-0";

	$(".game-piece").click(function(){

		//gets ID of the image clicked, returns a string ex. piece-11
		thisPieceID = $( this ).attr('id');

      imageClicked = "on";
   });


	//adds a "shadow" of the piece before it is played on a position relative to the board
	$(".game-tile").hover(function() {
      if (imageClicked === "on"){
			//gets ID of the tile that the mouse is hovering over
			var currentLocation = $( this ).attr('id');
			
			shadowStates[1] = getPiece(thisPieceID, currentLocation);

			var thisShadow = shadowStates[1]

			//the loop that adds the class hover onto the divs in relative to the shape of the
			//piece that was selected
			for (var i = 0; i < thisShadow.length; i++){
				if ( !$(thisShadow[i]).hasClass( "occupied" ) ){
					$( thisShadow[i] ).addClass("hovered");
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
				}
			}
	  }
   });
		
		$(document).keyup(function(e){
         // if shadowStates[1].indexOf('position') > -1
			if(e.keyCode == 65){ //pressing a 
				rotatePiece(thisPieceID);
			}
		});

		//removes all event handlers associated with the class gametile after the player
		//lifts their mouse
		$("#game-board").mouseup(function(){
         if (shadowStates[1].indexOf(playerStart[turn]) == -1 && turn < 4){
            alert("Please play in the designated corner for the first move!");
         // } else if (){  if the value is equal to 3
         } else{
			
            // having trouble getting the on and off to work

			
			   //listens for a click on the gameboard. to try to add a piece onto the gameboard
			   //only works if a piece is selected
		
		 	   var thisShadow = shadowStates[1]
			   // if (isAValidMove()){
			   for (var i = 0; i < thisShadow.length; i++){
				  $( thisShadow[i] ).addClass('occupied');
				  $( thisShadow[i] ).css('background-color', playerColor[turn])
				  $( thisShadow[i] ).removeClass('hovered');

            //add value to the gameBoard 

            }

            $( ".hovered" ).css("background-color", playerColor[turn]);
            count += 1;
            console.log(turn);
            console.log(shadowStates[1]);
			}	
		})		
   };


var playBlokus = function() {

	playerTurn();
}

var gameBoard = [];

//an array that holds 2 shapes: the current shape location [1] and the previous shape location [0]
//used to create and erase the shadow of the shape under the mouse as it moves along the board
var shadowStates = [null, null];
var player = [0, 1, 2, 3];
var playerColor = ["blue", "yellow", "red", "green"];
var playerStart = ["#19-0", "#0-0", "#0-19", "#19-19"];
var count = 0
var turn = count % 4;
var imageClicked = "off";
var thisPieceID = null;


$(document).ready(function(){

	setGameBoard();
	playBlokus();
});








// //listens for a click event on the images of the game pieces

//    // cookie = "#19-0";

//    $(".game-piece").click(function(){

//       //gets ID of the image clicked, returns a string ex. piece-11
//       var thisPieceID = $( this ).attr('id');

//       var imageClicked = "on";
//    // }
   

//       //adds a "shadow" of the piece before it is played on a position relative to the board
//       $(".game-tile").hover(function() {

//          //gets ID of the tile that the mouse is hovering over
//          var currentLocation = $( this ).attr('id');
         
//          shadowStates[1] = getPiece(thisPieceID, currentLocation);

//          var thisShadow = shadowStates[1]

//          //the loop that adds the class hover onto the divs in relative to the shape of the
//          //piece that was selected
//          for (var i = 0; i < thisShadow.length; i++){
//             if ( !$(thisShadow[i]).hasClass( "occupied" ) ){
//                $( thisShadow[i] ).addClass("hovered");
//             }
//          }

//          shadowStates[0] = thisShadow;

//       //removes the after shadow of the piece after you move the mouse to another div
//       }, function() {   

//          var resetShadow = shadowStates[0]
//          for (var i = 0; i < resetShadow.length; i++){
//             if ( !$(resetShadow[i]).hasClass( "occupied" ) ){
//                $( resetShadow[i] ).removeClass("hovered");
//             }
//          }
//       });
      
//       $(document).keyup(function(e){
//          // if shadowStates[1].indexOf('position') > -1
//          if(e.keyCode == 32){
//             rotatePiece(thisPieceID);
//          }
//       });

//       //removes all event handlers associated with the class gametile after the player
//       //lifts their mouse
//       $("#game-board").mouseup(function(){
//          if (shadowStates[1].indexOf(playerStart[turn]) == -1 && turn < 4){
//             alert("Please play in the designated corner for the first move!");
//          // } else if (){  if the value is equal to 3
//          } else{
         
//             $(".game-tile").off();

//             // having trouble getting the on and off to work

         
//             //listens for a click on the gameboard. to try to add a piece onto the gameboard
//             //only works if a piece is selected
      
//             var thisShadow = shadowStates[1]
//             // if (isAValidMove()){
//             for (var i = 0; i < thisShadow.length; i++){
//               $( thisShadow[i] ).addClass('occupied');
//               $( thisShadow[i] ).css('background-color', playerColor[turn])
//               $( thisShadow[i] ).removeClass('hovered');

//             //add value to the gameBoard 

//             }

//             $( ".hovered" ).css("background-color", playerColor[turn]);
//             count += 1;
//             console.log(turn);
//             console.log(shadowStates[1]);
//          }  
//       })    
//    });








