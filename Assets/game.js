// Global variables needed for the game 
var wins = 0;


var userGuess = '';

// I need a function that checks the userGuess against any letter in the current word.. If the letter is in the word display it, else if it is not add the letter to currentGuesses
// I need a function that turns each letter in the current word into an _ and displays it in the browser
// 


// frodo, boromir,  


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
    wordComp: [],
    wins: 0,


    selectCharacter: function () {
        var randChar = Math.floor(Math.random() * this.characters.length);

        this.isWord = true;
        return wordGame.currentWord = this.characters[randChar];

    },

    showGuesses: function () {
        $('#guesses-left').html(this.guessesLeft);

    },

    showWins: function () {
        $('#wins').html(this.wins);
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
            charLine.attr("id", wordGame.wordReady[i]);
            charLine.text(wordGame.wordReady[i])
            if (wordGame.wordReady[i] === 'a') {
                charLine.addClass("-a-");
            }
            if (wordGame.wordReady[i] === 'o') {
                charLine.addClass("-o-");
            }
            if (wordGame.wordReady[i] === 'l') {
                charLine.addClass("-l-");
            }
            if (wordGame.wordReady[i] === 'r') {
                charLine.addClass("-r-");
            }
            if (wordGame.wordReady[i] === 'e') {
                charLine.addClass("-e-");
            }
            if (wordGame.wordReady[i] === 'i') {
                charLine.addClass("-i-");
            }
            $("#currentChar").append(charLine);

        }
    },

    // aragorn, boromir, treebeard


    displayLetter: function (event) {
        if (event === 't') {
            $('#t').removeClass("text-dark")
            $('#t').addClass("text-warning")
            this.wordComp.push('t');
        }
        if (event === 'a') {
            $('.-a-').removeClass("text-dark")
            $('.-a-').addClass("text-warning")
            this.wordComp.push('a');
            if (this.currentWord === 'gandalf' || this.currentWord === 'aragorn' || this.currentWord === 'saruman') {
                this.wordComp.push('a');
            }
        }
        if (event === 'r') {

            $('.-r-').removeClass("text-dark")
            $('.-r-').addClass("text-warning")
            this.wordComp.push('r');
            if (this.currentWord === 'aragorn' || this.currentWord === 'boromir' || this.currentWord === 'treebeard') {
                this.wordComp.push('r')
            }
        }
        if (event === 'e') {
            $('.-e-').removeClass("text-dark")
            $('.-e-').addClass("text-warning")
            this.wordComp.push('e');
            if (this.currentWord === 'treebeard' || this.currentWord === 'theoden') {
                this.wordComp.push('e');
            }
        }
        if (event === 's') {
            $('#s').removeClass("text-dark")
            $('#s').addClass("text-warning")
            this.wordComp.push('s');
        }
        if (event === 'g') {
            $('#g').removeClass("text-dark")
            $('#g').addClass("text-warning")
            this.wordComp.push('g');
        }
        if (event === 'i') {
            $('.-i-').removeClass("text-dark")
            $('.-i-').addClass("text-warning")
            this.wordComp.push('i');
            if (this.currentWord === 'gimli') {
                this.wordComp.push('i');
            }

        }
        if (event === 'l') {
            $('.-l-').removeClass("text-dark")
            $('.-l-').addClass("text-warning")
            this.wordComp.push('l');
            if (this.currentWord === 'legolas' || this.currentWord === 'gollum') {
                this.wordComp.push('l');
            }
        }
        if (event === 'd') {
            $('#d').removeClass("text-dark")
            $('#d').addClass("text-warning")
            this.wordComp.push('d');
        }
        if (event === 'b') {
            $('#b').removeClass("text-dark")
            $('#b').addClass("text-warning")
            this.wordComp.push('b');
        }
        if (event === 'm') {
            $('#m').removeClass("text-dark")
            $('#m').addClass("text-warning")
            this.wordComp.push('m');
        }
        if (event === 'n') {
            $('#n').removeClass("text-dark")
            $('#n').addClass("text-warning")
            this.wordComp.push('n');
        }
        if (event === 'o') {
            $('.-o-').removeClass("text-dark")
            $('.-o-').addClass("text-warning")
            this.wordComp.push('o');
            if (this.currentWord === 'frodo' || this.currentWord === 'boromir') {
                this.wordComp.push('o')
            }
        }
        if (event === 'c') {
            $('#c').removeClass("text-dark")
            $('#c').addClass("text-warning")
            this.wordComp.push('c');
        }
        if (event === 'f') {
            $('#f').removeClass("text-dark")
            $('#f').addClass("text-warning")
            this.wordComp.push('f');
        }
        if (event === 'h') {
            $('#h').removeClass("text-dark")
            $('#h').addClass("text-warning")
            this.wordComp.push('h');
        }
        if (event === 'j') {
            $('#j').removeClass("text-dark")
            $('#j').addClass("text-warning")
            this.wordComp.push('j');
        }
        if (event === 'k') {
            $('#k').removeClass("text-dark")
            $('#k').addClass("text-warning")
            this.wordComp.push('k');
        }
        if (event === 'p') {
            $('#p').removeClass("text-dark")
            $('#p').addClass("text-warning")
            this.wordComp.push('p');
        }
        if (event === 'q') {
            $('#q').removeClass("text-dark")
            $('#q').addClass("text-warning")
            this.wordComp.push('q');
        }
        if (event === 'u') {
            $('#u').removeClass("text-dark")
            $('#u').addClass("text-warning")
            this.wordComp.push('u');
        }
        if (event === 'v') {
            $('#v').removeClass("text-dark")
            $('#v').addClass("text-warning")
            this.wordComp.push('v');
        }
        if (event === 'w') {
            $('#w').removeClass("text-dark")
            $('#w').addClass("text-warning")
            this.wordComp.push('w');
        }
        if (event === 'x') {
            $('#x').removeClass("text-dark")
            $('#x').addClass("text-warning")
            this.wordComp.push('x');
        }
        if (event === 'y') {
            $('#y').removeClass("text-dark")
            $('#y').addClass("text-warning")
            this.wordComp.push('y');
        }
        if (event === 'z') {
            $('#z').removeClass("text-dark")
            $('#z').addClass("text-warning")
            this.wordComp.push('z');

        }
    },

    addWin: function () {
        this.wins++;
        this.wordReady = [];
        this.wordComp = [];
    },


    resetGame: function () {
        this.wordReady = [];
        $("#currentChar").empty();
        this.guessesLeft = 8;
        this.currentGuesses = [];

    },








}



$(document).ready(function () {


    wordGame.selectCharacter();
    wordGame.showGuesses();
    wordGame.showWins();


    wordGame.addWord();



    wordGame.displayLines();


    $(document).on("keydown", function (event) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            userGuess = event.key.toLowerCase();

        } else {
            alert('Please Enter A Valid Key');
        }

        if (wordGame.currentWord.includes(userGuess)) {

            wordGame.displayLetter(userGuess);
            console.log(wordGame.currentGuesses)


        } else if (!wordGame.currentGuesses.includes(userGuess)) {
            wordGame.currentGuesses.push(userGuess.toString());
            $('#currentGuesses').text(wordGame.currentGuesses);
            wordGame.incorrectGuess();
            wordGame.showGuesses();
        } else {
            alert('You have already chosen this letter')
        }

        if (wordGame.guessesLeft === 0) {
            var gameOver = confirm("Game Over. Play Again?")
        }

        if (wordGame.wordReady.length === wordGame.wordComp.length) {
            wordGame.addWin();
            wordGame.showWins();
            var winGame = true;
        }

        if (winGame) {
            var gameOver = true;

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