# Blokus

## Synopsis 

This project has been the largest and most intricate project that I have accomplished (not alone, but with the help of fellow instructors and web developers) to date.  The game created is a web version of the board game "Blokus."  In this game, players compete for territory and fight to protect their own territory against other players.  The only rule to the game is that you MUST connect to your piece only at the corner during your turn (you may not have your color touch its sides).  


## Approach Taken
This application uses HTML, CSS, and javascript(jQuery, iterators, events) to recreate the experience of playing the actual game.  In the early stages of development, the most crutial step was to set up a game board that allows the player to play on.  Each tile or square within the game board must be uniquely identified in order to make everything possible.  After the creation of the game board, the next step involved "sample testing."  Testing for smaller pools of data, I made sure that the code works for the sample pool before implementing the actual data (ie. testing code for just one piece and then adding all the other pieces in afterwards and retesting the code).  

This proved to create quite the challange, actually.  Upon introducing the complete set of pieces that were to be used, the code written proved too static; the method was not flexible enough to be adjusted to use for the entire set. 

After coding the pieces and their effects, the next part of the approach taken was to apply the game logic onto the board.  The game has only one rule, yet that one rule requires many rules or checkpoints to be established to verify that one rule. 
In a sentence, that rule is "you MUST connect to your piece only at the corner during your turn."  In code, that translates to: 1) check to make sure the starting move is at the corner for each player, 2) check to make sure that the sides aren't touching the same color (class), 3) check to make sure the corner piece belongs to the same class.  This may seem like 3 simple things to check, but this brings me to my next point: the approach I took may not have been the most simple one (but was the most sensible one to my knowledge at this time).

To create the game, not only did a visual interface of some sort had to be created, but the computer also had to keep track of the data. In hindsight, I can think of a few more ways to write the same game (with less code).

## Issues 

There are a few problems left over due to the time constraints.  The first problem is that the game doesn't track if the player plays a piece half-way off the board.  If there are enough pieces missing, the game already throws an error; if only ONE piece is missing, however, the game progresses as normal.  Another problem that has yet to be solved (more of a UX thing) is that the pass button doesn't pass the player's turn indefinitely.  Originally, I wanted to make it so that the player only had to press the pass button once.  After thinking about it, however, it might be beneficial near the end of the game if the player passes first but then sees an available move at a later time.

## End

Overall, this project has been an amazing experience and it was fun to struggle, get frustrated, lose hope, succeed, feel happy, all to have your code run into bugs over and over and over and over again.  As time progresses, I aim to refactor the code, give it a better interface, incorporate some animations, incorporate some sounds, and make the experience of playing it more plesant overall.  This project is a great first draft.