// variables for the wins, losses, and currentScore.
var wins = 0;
var losses = 0;
var currentScore;
var computersChoice;

var gemNum = 0;
var gemAmount = 0;

setup();

function setup() {
	resetGame()
	scoreBoardUpdater();
	// remember to call assignGemValues here!
	assignGemValues();
}

function resetGame() {
	computersChoice = generateNumber(40);
	currentScore = 0;
}

// A random number between 1-40 given the var computersChoice
function generateNumber(multiplier) {
	return Math.floor(Math.random() * multiplier) + 1;
}

function assignGemValues(){
		// jquery to assign random values to gems via .attr
		$("#gem1").attr("value", generateNumber(12));
		$("#gem2").attr("value", generateNumber(12));
		$("#gem3").attr("value", generateNumber(12));
		$("#gem4").attr("value", generateNumber(12));
};


function scoreBoardUpdater() {
	// writes the computer choice to the index.html DOM
	$("#compChoice").text(computersChoice);

	//writes the players wins and losses to index.html
	$(".gameWins").text(wins);

	// Writes the losses to the index.html
	$(".gameLosses").text(losses);

	// Writes currentscore to the appropriate html element
	$(".playersScore").text(currentScore);
}

// This function resets the game

$(document).ready(function(){
	// When the class .gem is clicked..
	$(".gem").on("click", function(){
		// generate a random number and set it to the gem
		gemAmount = parseInt($(this).attr("value"));
		//var gemAmount = generateNumber(storedNum) //instead of this, grab the value attr from the gem HTML element
		console.log("Gem Amount: " + gemAmount);

		// Add the gem ammoumt to the current score
		currentScore += gemAmount;
		console.log("current score: " + currentScore);
		// Display the current score to the .playerScore class
		$(".playersScore").text(currentScore);

		console.log(currentScore, computersChoice)
		// if the current score is equal to the computersChoice
		if (currentScore === computersChoice){
			console.log("you win");
			// wins increase by one
			wins++;
			setup();

			console.log("wins: " + wins);
			// else if the current score is above the computersChoice
		} else if (currentScore > computersChoice){		
			// increase the losses by one
			
			losses++;
			setup();

			console.log("losses: " + losses);
		}
		
	});

	


});
