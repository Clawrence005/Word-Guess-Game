function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

// // Variables:
// // word 
// // words
// // answerArray
// //lettersLeft

// var word;
// var allowedGuesses;
// var correctGuesses;
// var wrongGuesses;

// var wordElement = document.getElementById('word');
// var letterCountElement = document.getElementById('letterCount');
// var lettersGuessedElement = document.getElementById('lettersGuessed');

// function initializeGame() {
//   word = 'banzai';
//   allowedGuesses = 13;
//   wrongGuesses = [];
//   correctGuesses = [];

//   // initialize correctGuesses array with underscores
//   for (var i = 0; i < word.length; i++) {
//     correctGuesses.push('_');
//   }

//   wordElement.innerHTML = correctGuesses.join(' ');
//   letterCountElement.innerHTML = allowedGuesses;
// }

// function updateGuesses(letter) {
//   allowedGuesses--; // decrement guesses left
//   letterCountElement.innerHTML = allowedGuesses;

//   if (word.indexOf(letter) === -1) { // letter is NOT in the word
//     wrongGuesses.push(letter); // update letters guessed
//     lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
//   } else { // letter IS in the word
//     // replace underscore with the letter
//     for (var i = 0; i < word.length; i++) {
//       if (word[i] === letter) {
//         correctGuesses[i] = letter;
//       }
//     }

//     wordElement.innerHTML = correctGuesses.join(' ');
//   }
// }

// function checkWin() {
//   if (correctGuesses.indexOf('_') === -1) {
//     alert('You Won!');
//   } else if (allowedGuesses === 0) {
//     alert('You Lost!');
//   }
// }

// document.onkeyup = function (event) {
//   var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
//   updateGuesses(letterGuessed);
//   checkWin();
// };

// initializeGame();
// ///////possible words
// function myFunction() {
//     var drinkArray = ["martini", "margarita", "sidecar", "gimlet", "mojito", "daiquiri"];
//     document.getElementById("wordGuess").innerHTML = drinkArray[Math.floor(Math.random() * words.length)];

//     var possibleWord = "M A R T I N I";
//     var blankSpaces = "";
//     var wordLength = possibleWord.length;

//     for (i = 0; i < wordLength; i++) {
//         var x = possibleWord.charAt(i);

//         if (x == " " || x === "/'") {
//             blankSpaces += x;
//         } else {
//             blankSpaces += "_";
//         }
//     }
//     document.getElementById("blankSpaces").innerHTML = blankSpaces;
// }
// var guessesLeft = 9;

// document.onkeypress = function (keyPressed) {
//     var keyPressed || window.event,
//         charCode = keyPressed.keyCode || keyPressed.which,
//         lettersGuessed = String.fromCharCode(charCode);
//     document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
//     document.getElementById("guessesLeft").innerHTML = guessesLeft;

//     guessesLeft--;
//     if (guessesLeft === -1) {
//         alert("you Lose1")
//     }
// }

//create variables:
var drinks = ["bourbon", "vodka", "gin", "rum", "rye", "martini", "margarita", "sidecar", "gimlet", "mojito", "daiquiri"]
//var drinkToGuess = indexOf("drinks").innerHTML = drinkArray[Math.floor(Math.random() * words.length)];
var drinkToGuess = drinks[Math.floor(Math.random() * drinks.length)];
console.log(drinkToGuess);
//create variable that is made up of blankssame length as word 
var wordLength = drinkToGuess.length;
console.log(wordLength);

// var blankWord = ("_") * (wordLength);
var blankWord = drinkToGuess.replace(/\S/gi, "_ ");
console.log(blankWord);

//create the array of possible user options, ie all the possible letters to press.
var blanks = 0;
// create var the Score and set to 0
// computer choices are all the letter keys
var wins = 0;
// create var losses and set to 0
var losses = 0;
// wins and losses start at 0
//guesses left on word
var guessesLeft = 8 // the length of guessed word 
//--
// 9 tries before reset
var guessChoices = [];

//setup when a key is pressed an event is created which is logged to console and called userGuess
document.onkeyup = function doThisOnKeyUp(event) {
  console.log(event)
  var userGuess = event.key;


  //this sets var of computer guess to random letter * the length= "position" 0-25 from the computer choice array then it's logged
  drinkToGuess = drinks[Math.floor(Math.random() * drinks.length)];
  console.log(drinkToGuess);
  currentWord.innerHTML = blankWord;

  //currentWord.innerHTML = game.currentWordDisplay;

  for (i = 0; i < drinkToGuess.length; i++) {
    if (drinkToGuess[i] == event.key.toLowerCase()) {
      blankWord = replaceAt(drinkToGuess, i, event.key.toLowerCase());
    }
  }
}
    // blankWord.length === - 1 





//     // if:  user makes a guess from the correct letters array index user options array is greater than -1 = defined: and the following ifs
//     if (userOptions.indexOf(userGuess) > -1) {
//       //if users guess equals computerGuess they win and adds 1, game starts over, guessesLeft is at 8, and guessChoices resets
//       if (userGuess === computerGuess) {
//         wins++;
//         guessesLeft = 9;
//         guessChoices = [];
//         alert("Great job you're the psychic!")
//       }

//       //if: users guess is not equal to computer guess, they lose 1 guess, and their guess choice is added using .push.
//       if (userGuess != computerGuess) {
//         guessesLeft--;
//         guessChoices.push(userGuess);
//         //alert("nope!");
//       }
//       //if: number of guesses is compared equal to zero, theyve used all guesses, restarts the game? losses add 1, restate undefined user guesses
//       if (guessesLeft === 0) {
//         guessesLeft = 9;
//         losses++;
//         guessChoices = [];
//         alert("Game over. Try again.")

//       }
//       /////set the score board to include the choices; include the wins, losses, number of guesses left , and the guesses chosen;

//       var html =
//         "<div id=scoreboard>"
//       "<h1>Hangman Game </h1>" +
//         "<p>Guess what word I'm thinking of!</p>" +
//         "<p>Wins: " + wins + "</p>" +
//         "<p>Losses: " + losses + "</p>" +
//         "<p>Guesses Left: " + guessesLeft + "</p>" +
//         "<p>word:</p>" + replaceBlanks
//       document.querySelector("#game").innerHTML = html;
//       //then use the Jquery document.querySelector(name of div).innerHTML = the variable for scoreboard 

//     
// };
