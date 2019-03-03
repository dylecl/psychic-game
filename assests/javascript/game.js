// ==========my variables===========//
//array for computers options
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//starts with no wins or loses
var wins = 0;
var loses = 0;

//start with 10 guesses
var guess = 10;
//start with no guessed letters
var guessed = [];

//determines computers choice
var compChoice = options[Math.floor(Math.random() * options.length)];
console.log(compChoice)



//=========my functions=========//
//sets readable wins
function readWins() {
    if (guess < 1) {
        document.querySelector("#wins").innerHTML = "You have lost";
    } else {
        document.querySelector("#wins").innerHTML = "You have: " + wins + " wins!";
    }
} 
//sets readable lose
function readLose() {
    document.querySelector("#loses").innerHTML = "You have: " + loses + " losses!"
};
//sets readable guesses remaining
function lives() {
    document.querySelector("#guesses").innerHTML = "You have: " + guess + " remaining!";
};
//shows previous guesses
function previous() {
    document.querySelector("#guessed").innerHTML = "You have guessed: " + guessed;
};

// changes compChoice
function changeComp() {
    var compChoice = options[Math.floor(Math.random() * options.length)];
    console.log(compChoice)    
}

//run functions at the start of the game
// previous();
lives();
readLose();
readWins();

//---------it all starts with a release of a button
document.onkeyup = function (event) {

    // stops when remaining guesses is zero
    if (guess === 0) {
        loses++;
        readLose();
        guess = 10;
        guessed.length = 0;
        previous();
        changeComp();
        return;
    };


    // determines key pressed and sets it to lowercase
    var userKey = event.key.toLowerCase();

    //++++++ compares user and computer choices
    // on matching choices add 1 to wins
    if (userKey === compChoice) {
        wins++;
        readWins();
        guessed.length = 0;
        previous();
        changeComp();



    }
    //on not matching subtracts from lives and records user press
    else {
        guess--;
        lives();
        guessed.push(userKey);
        previous();
    }

};




