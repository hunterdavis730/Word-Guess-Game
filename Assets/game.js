// Global variables needed for the game 
var wins = 0;


var userGuess = '';

// I need a function that checks the userGuess against any letter in the current word.. If the letter is in the word display it, else if it is not add the letter to currentGuesses
// I need a function that turns each letter in the current word into an _ and displays it in the browser
// 





// Game stored in an object 
var wordGame = {
    characters: [
        'gandalf',
        'frodo',
        'legolas',
        'aragorn',
        'saruman',
        'boromir',
        'sauron',
        'gollum',
        'balrog',
        'theoden',
        'treebeard',
        'gimli'
    ],
    isLetter: false,
    isWord: false,
    currentWord: '',
    wordReady: [],
    currentGuesses: [],
    guessesLeft: 8,

    selectCharacter: function () {
        var randChar = Math.floor(Math.random() * this.characters.length);

        this.isWord = true;
        return wordGame.currentWord = this.characters[randChar];

    },

    showGuesses: function () {
        $('#guesses-left').html(this.guessesLeft);
    },


    incorrectGuess: function () {
        this.guessesLeft--;

    },

    addWord: function () {
        for (var i = 0; i < this.currentWord.length; i++) {
            this.wordReady.push(this.currentWord.charAt(i));
            console.log(wordGame.wordReady)


        }
    },

    displayLines: function () {
        for (var i = 0; i < this.wordReady.length; i++) {
            var charLine = $("<p>");
            charLine.addClass("text-dark d-inline h4 p-3  border-bottom border-warning mx-1 pow");
            charLine.attr("data-letter", wordGame.wordReady[i]);
            charLine.text(wordGame.wordReady[i])
            $("#currentChar").append(charLine);

        }
    },



    resetGame: function () {
        this.wordReady = [];
        $("#currentChar").empty();
        this.guessesLeft = 8;
        this.currentGuesses = [];

    },








}



$(document).ready(function () {

    console.log(wordGame.isWord)
    wordGame.selectCharacter();
    wordGame.showGuesses();


    console.log(wordGame.currentWord)
    console.log(wordGame.isWord)
    wordGame.addWord();



    wordGame.displayLines();


    $(document).on("keydown", function (event) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            userGuess = event.key.toLowerCase();

        } else {
            alert('Please Enter A Valid Key');
        }

        if (wordGame.currentWord.includes(userGuess)) {

        } else {
            wordGame.currentGuesses.push(userGuess.toString());
            $('#currentGuesses').text(wordGame.currentGuesses);
            wordGame.incorrectGuess();
            wordGame.showGuesses();
        }

        if (wordGame.guessesLeft === 0) {
            var gameOver = confirm("Game Over. Play Again?")
        }

        if (gameOver) {
            wordGame.resetGame();
            wordGame.selectCharacter();
            wordGame.showGuesses();
            wordGame.addWord();
            wordGame.displayLines();
        }





    })
});