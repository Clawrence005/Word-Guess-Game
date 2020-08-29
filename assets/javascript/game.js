// Variables:
var drinkArray = ["martini", "cosmo", "manhattan", "zombie", "margarita", "sidecar", "gimlet", "mojito", "daiquiri"];
var hintArray = ["shaken not stirred", "quintessential pink drink", "New York borough", "the undead", "chips and queso companion", "motorcycle accoutrement", "sailors' scurvy medicine", "muddled mint", "sometimes strawberry slushie"];
var wins = 0;
var losses = 0;
//imageNumber updates the image through out the game.
var imageNumber = 0;
////////////////////////////////////////////////

var hImage = document.createElement("img");
hImage.setAttribute('src', `assets/hangmanPhotos/hangman${imageNumber}.svg`);
hImage.setAttribute('alt', 'hangman image');
document.getElementById('hangman-image').appendChild(hImage);
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
var wordPlayedAlready = [];

var hangmanImgSrc = "assets/hangmanPhotos/hangman" + imageNumber + ".svg";
document.getElementById('hangman-image').appendChild(hImage);
////////////////////////////////////////////////

// 1. startGame function starts game with random word, shows blanks,
function startGame() {

  wordToGuess = drinkArray[Math.floor(Math.random() * drinkArray.length)];
  //matches the posiotin of current wordToGuess in drinkArray to same item in hintArray
  var currentWordPosition = drinkArray.indexOf(wordToGuess);

  for (var i = 0; i < wordToGuess.length; i++) {
    blanks.push(" _ ")
  }
  // html
  document.getElementById("word-blanks").textContent = blanks.join(" ");
  document.getElementById('hint').textContent = hintArray[currentWordPosition];
  document.getElementById('guesses-left').textContent = guessesLeft;
  document.getElementById('wins').textContent = wins;
  document.getElementById('losses').textContent = losses;
  document.getElementById('wrong-letters').textContent = wrongGuesses;
}
//////////////////
function playNewGame() {
  imageNumber = 0;
  document.getElementById('hangman-image').innerHTML = `<img src="assets/hangmanPhotos/hangman${(imageNumber) + ''}.svg" alt="hangman image" >`;

  wordToGuess = drinkArray[Math.floor(Math.random() * drinkArray.length)];
  console.log(wordToGuess);
  currentWordPosition = drinkArray.indexOf(wordToGuess);
  console.log('currentWordPosition :', currentWordPosition);
  blanks = [];

  for (var i = 0; i < wordToGuess.length; i++) {
    blanks.push(" _ ")
  }
  document.getElementById("word-blanks").textContent = blanks.join(" ");
  document.getElementById('hint').textContent = hintArray[currentWordPosition];
  //first function starts game with random word, shows blanks,

  guessesLeft = 8;

  wrongGuesses = [];

  // html
  document.getElementById('guesses-left').textContent = guessesLeft;
  document.getElementById('wrong-letters').textContent = wrongGuesses;
  console.log(wordToGuess);
  console.log(`wordToGuess ${wordToGuess} 
wins ${wins}, 
losses ${losses},
wordPlayedAlready ${wordPlayedAlready}`);

  console.log(wrongGuesses);
  console.log(correctGuesses);
  console.log(guessesLeft);
  // console.log(wordPlayedAlready);
  console.log(blanks);
  console.log(showBlanks);
}

//  addEventListener
document.onkeyup = function (event) {
  userGuess = event.key;

  if (wordToGuess.indexOf(userGuess) > -1) {
    for (var i = 0; i < wordToGuess.length; i++) {
      if (wordToGuess[i] === userGuess) {
        blanks[i] = userGuess;

      }

      //make the correct letters show
      document.getElementById("word-blanks").textContent = blanks.join(" ");

      //guessesLeft === 0; resetFunction;
      if (wordToGuess == blanks.join("")) {
        // wordPlayedAlready.push(wordToGuess);
        wins++;
        document.getElementById("word-blanks").textContent = blanks.join(" ");
        document.getElementById("wins").textContent = wins;
        alert(`you WON! the word was ${wordToGuess.toUpperCase()}. Care to play again?`);

        playNewGame();
        console.log(blanks.join(""));
        console.log(wordToGuess);

      }
    }
  }
  else {
    imageNumber++;
    console.log('imageNumber ', imageNumber);
    console.log('hangmanImgSrc ', hangmanImgSrc);
    document.getElementById('hangman-image').innerHTML = `<img src="assets/hangmanPhotos/hangman${(imageNumber) + ''}.svg" alt="hangman image" >`;

    wrongGuesses.push(userGuess);
    guessesLeft--;

    document.getElementById("guesses-left").textContent = guessesLeft;
    // you lost because you ran out of guesses

    document.getElementById("wrong-letters").textContent = wrongGuesses.join(" ");

    console.log(wrongGuesses);
    console.log(wrongGuesses.join(" "));
    //show wrong guesses  
    if (guessesLeft === 0) {
      imageNumber = 8;
      document.getElementById('hangman-image').innerHTML = `<img src="assets/hangmanPhotos/hangman${(imageNumber) + ''}.svg" alt="hangman image" >`;
      losses++;
      document.getElementById('losses').textContent = losses;
      document.getElementById("word-blanks").textContent = wordToGuess;
      document.getElementById("prompt").textContent = "Press any key to start next round";
      // }
      // if (guessesLeft === -1) {
      alert(`you lost! The word was ${wordToGuess.toUpperCase()}. Care to play again?`);

      playNewGame()
    };
  }
}

// calling start game function 
startGame();

console.log(wordToGuess);
console.log(`wordToGuess ${wordToGuess} 
wins ${wins}, 
losses ${losses}`);

// console.log(wrongGuesses);
// console.log(correctGuesses);
// console.log(guessesLeft);
// // console.log(wordPlayedAlready);
// console.log(blanks);
// console.log(showBlanks);
