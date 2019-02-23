// Global variables needed for the game 
var wins = 0;
// var currentGuesses = '';
// var currentWord = '';
// var guessesLeft = 8;
var userGuess = '';

// I need a function that checks the userGuess against any letter in the current word.. If the letter is in the word display it, else if it is not add the letter to currentGuesses
// I need a function that turns each letter in the current word into an _ and displays it in the browser
// 
var addWord = function () {
    for (var i = 0; i < wordGame.currentWord.length; i++) {
        wordGame.currentWord.charAt(i) += $('#currentChar').text("_");
    }
};

// Game stored in an object 
var wordGame = {
    characters: [
        'Gandalf',
        'Frodo',
        'Legolas',
        'Aragorn',
        'Saruman',
        'Boromir',
        'Sauron',
        'Gollum',
        'Balrog',
        'Theoden',
        'Treebeard',
        'Gimli'
    ],
    isLetter: false,
    isWord: false,
    currentWord: '',
    guessesLeft: 8,
    currentGuesses: '',

    selectCharacter: function () {
        var randChar = Math.floor(Math.random() * this.characters.length);

        this.isWord = true;
        return wordGame.currentWord = this.characters[randChar];

    },

    showGuesses: function () {
        $('#guesses-left').text('Guesses Left: ' + this.guessesLeft);
    },

    incorrectGuess: function () {
        this.guessesLeft--;

    }





}

console.log(wordGame.isWord)
wordGame.selectCharacter();
wordGame.showGuesses();

console.log(wordGame.currentWord)
console.log(wordGame.isWord)
$(document).on("keydown", function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        userGuess = event.key.toLowerCase();
        wordGame.incorrectGuess();
        console.log(wordGame.guessesLeft)
    } else {
        alert('Please Enter A Valid Key');
    }




})