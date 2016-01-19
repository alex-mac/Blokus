# Blokus Online

##About
This is a web application for the popular boardgame "Blokus". In this game, players compete for territory and fight to protect their own territory against other players.  The only rule to the game is that you MUST connect to your piece only at the corner during your turn (you may not have your color touch its sides).  

## Approach Taken
This application uses HTML, CSS, and JavaScript (jQuery, iterators, events) to recreate the experience of playing the actual game.  In the early stages of development, the most crutial step was to set up a game board that allows the player to play on.  Each tile or square within the game board must be uniquely identified in order to make everything possible.  After the creation of the game board, the next step involved "sample testing."  Testing for smaller pools of data, I made sure that the code works for the sample pool before implementing the actual data (ie. testing code for just one piece and then adding all the other pieces in afterwards and retesting the code).  

After coding the pieces and their effects, the next part of the approach taken was to apply the game logic onto the board.  The game has only one rule, yet that one rule requires many rules or checkpoints to be established to verify that one rule. 

In a sentence, that rule is "you MUST connect to your piece only at the corner during your turn."  In code, that translates to: 1) check to make sure the starting move is at the corner for each player, 2) check to make sure that the sides aren't touching the same color (class), 3) check to make sure the corner piece belongs to the same class.  This may seem like 3 simple things to check, but this brings me to my next point: the approach I took may not have been the most simple one, but was the most logical one to my knowledge at this time.

To create the game, not only did a visual interface of some sort had to be created, but the computer also had to keep track of the data. In hindsight, I can think of a few more ways to write the same game (with less code).

## Known Issues 

* Players can place part of their piece off of the gameboard
* Not responsive for mobile yet

## Screenshots

![Main](https://github.com/alex-mac/blokus/blob/master/github/second.png)

Example of the google Places API

![Game](https://github.com/alex-mac/blokus/blob/master/github/first.png)

