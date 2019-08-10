// Variables:
var drinkArray = ["martini", "cosmo", "manhattan", "zombie", "margarita", "sidecar", "gimlet", "mojito", "daiquiri"];
var wins = 0;
var losses = 0;
//imageNumber needs to not be hardcoded. Changing this will change the numbered images. Might be able to link this to guessesLeft but will need to update the image through out the game mid game.
var imageNumber = 0;
////////////////////////////////////////////////
var currentHangmanImage = '<img src="assets/hangmanPhotos/hangman' + imageNumber + '.svg" alt="hangman image" height="auto" width="400">';
////////////////////////////////////////////////
var guessesLeft = 8;  ///guesses left
var userGuess = [];
var correctGuesses = [];
var wrongGuesses = [];
var wordToGuess = drinkArray[Math.floor(Math.random() * drinkArray.length)];
// var wordLength = wordToGuess.length;
var blanks = [];
var showBlanks = document.getElementById('word-blanks');
var showWins = document.getElementById('wins');
var showLosses = document.getElementById('losses');
var showWrongs = document.getElementById('wrong-letters');

////////////////////////////////////////////////
// var hangmanImage = document.getElementById('hangman-span');
////////////////////////////////////////////////

// 1. startGame function starts game with random word, shows blanks,
function startGame() {
  wordToGuess = drinkArray[Math.floor(Math.random() * drinkArray.length)];
  console.log(wordToGuess);

  for (var i = 0; i < wordToGuess.length; i++) {
    blanks.push(" _ ")
  }
  document.getElementById("word-blanks").textContent = blanks.join(" ");

  //reset

  // html
  document.getElementById('guesses-left').textContent = guessesLeft;
  document.getElementById('wins').textContent = wins;
  document.getElementById('losses').textContent = losses;
  document.getElementById('wrong-letters').textContent = wrongGuesses;
  document.getElementById('hangman-span').innerHTML = currentHangmanImage;
}
//////////////////
function resetGame() {
  wordToGuess = drinkArray[Math.floor(Math.random() * drinkArray.length)];
  console.log(wordToGuess);
  blanks = [];

  for (var i = 0; i < wordToGuess.length; i++) {
    blanks.push(" _ ")
  }
  document.getElementById("word-blanks").textContent = blanks.join(" ");

  //first function starts game with random word, shows blanks,

  guessesLeft = 8;
  wrongGuesses = [];

  // html
  document.getElementById('guesses-left').textContent = guessesLeft;
  document.getElementById('wrong-letters').textContent = wrongGuesses;
  document.getElementById('hangman-span').innerHTML = currentHangmanImage;
}

//  addEventListener
document.onkeyup = function (event) {
  userGuess = event.key;
  guessesLeft--;

  document.getElementById("guesses-left").textContent = guessesLeft;

  imageNumber++;
  document.getElementById('hangman-span').innerHTML = currentHangmanImage;

  if (wordToGuess.indexOf(userGuess) > -1) {
    for (var i = 0; i < wordToGuess.length; i++) {
      if (wordToGuess[i] === userGuess) {
        blanks[i] = userGuess;

      }

      //make the correct letters show
      document.getElementById("word-blanks").textContent = blanks.join(" ");

      //guessesLeft === 0; resetFunction;
      if (wordToGuess == blanks.join("")) {
        wins++;
        resetGame();
        console.log(blanks.join(""));
        console.log(wordToGuess);
        document.getElementById("wins").textContent = wins;
      }
    }
  }
  else {
    wrongGuesses.push(userGuess);
    if (guessesLeft === 0) {
      losses++;
      document.getElementById('losses').textContent = losses;
      imageNumber++;
      resetGame()
    };
    document.getElementById("wrong-letters").textContent = wrongGuesses.join(" ");

    console.log(wrongGuesses);
    console.log(wrongGuesses.join(" "));
    //show wrong guesses
  }
}


// function changeImage() {
//   // need to check the image 
// }
// need to create a function to call the images hangman1-8.svg

// calling start game function 
startGame();

console.log(wins);
console.log(losses);
console.log(guessesLeft);
console.log(wrongGuesses);
console.log(correctGuesses);
console.log(wordToGuess);
console.log(wordLength);
console.log(blanks);
console.log(showBlanks);

// ////////////////////////////////////////////////////////////////////////////

// var images = {
//   tags: document.getElementsByTagName('img'),
//   init: function () {
//     for (var step = 0; step < this.tags.length; step++) {
//       assignClick(this.tags[step], step);
//     }
//   }
// }






// // function replaceBlank(string, index, replace) {
// //   return string.substring(0, index) + replace + string.substring(index + 1);
// // }
// //console.log(replaceBlank)


