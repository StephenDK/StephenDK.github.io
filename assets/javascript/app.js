$(document).ready(function(){
	var setTimerMax = 30;
	var intervalID;

	function run() {
		intervalID = setInterval(decrement, 1000);
	}


	function decrement() {
		setTimerMax--
		$('.timer').html('<h3>Time Remaining: ' + setTimerMax + ' Seconds</h2>')
	}

	function stop() {
		clearInterval(intervalID);
	}

	
	//These are the global variable scoreboard counters
	var correct = 0;
	var wrong = 0;


var question1 = {
	question: "Who is the fastest of theses video game characters?",
	possibleAnswers: ['A. Mario',
				'B. Sonic',
				'C. Donkey Kong',
				'D. The paperboy'],
	answer: 'B. Sonic'
};

var question2 = {
	question: "In Halo combat evolved the flood was introduced at what level?",
	possibleAnswers: [' A. The Pillar of Autumn',
				' B. The Maw',
				' C. The Library',
				' D. 343 Guilty Spark'],
	answer: ' C. The Library'
};

var question3 = {
	question: "Which of these bands was not featured in Guitar Hero III: Legends of Rock?",
	possibleAnswers: [' A. Iron Maiden',
				' B. Weezer',
				' C. Metallica',
				' D. Lynard Skynyrd'],
	answer: ' A. Iron Maiden'
};

var question4 = {
	question: "Which of the following video games takes place in a dystopian underwater city called Rapture?",
	possibleAnswers: [' A. Half-Life',
				' B. God Of War',
				' C. Fallout 3',
				' D. Bioshock'],
	answer: 'D. Bioshock'
}

// // This function will add all of the questions to the html page.

function loadQuestions() {
	$('.question1').text(question1.question);
	$('.question2').text(question2.question);
	$('.question3').text(question3.question);
	$('.question4').text(question4.question);
}


function loadAnswers() {
	for (var i = 0; i < question1.possibleAnswers.length; i++) {
   $('.answersQ1').append(
   		"<input type='radio' name='question1' value=" 
   		+ question1.possibleAnswers[i] 
   		+ ">" 
   		+ question1.possibleAnswers[i]
   	);
};
}
function loadAnswers2() {
	for (var i = 0; i < question2.possibleAnswers.length; i++) {
   $('.answersQ2').append(
   		"<input type='radio' name='question1' value=" 
   		+ question2.possibleAnswers[i] 
   		+ ">" 
   		+ question2.possibleAnswers[i]
   	);
};
}
function loadAnswers3() {
	for (var i = 0; i < question3.possibleAnswers.length; i++) {
   $('.answersQ3').append(
   		"<input type='radio' name='question1' value=" 
   		+ question3.possibleAnswers[i] 
   		+ ">" 
   		+ question3.possibleAnswers[i]
   	);
};
}
function loadAnswers4() {
	for (var i = 0; i < question4.possibleAnswers.length; i++) {
   $('.answersQ4').append(
   		"<input type='radio' name='question1' value=" 
   		+ question4.possibleAnswers[i] 
   		+ ">" 
   		+ question4.possibleAnswers[i]
   	);
};
}

function gameFinishButton(){
	$("#submit").append("<button class='submitTestForResults'>Submit</button");
}


function answerChecker() {
   $.each($("input=[name='question1']:checked"), function() {
      if ($(this).val() === questions.correctAnswer) {
        correct++;
      } else {
       wrong++;
      }
   });
}




// function scoarBoard() {
// 	$('#scoarBoard').append('<h2>Number of questions correct' + correct + '</h2>')
// }	$('#scoarBoard').append('<h2>Number of questions correct' + wrong + '</h2>')

	//When the start button is clicked hide the start button and run clock
	//Also run the loadQuestions and loadAnswers functions.

	$('#startButton').on('click', function(){
		$(this).hide();
		loadQuestions();
		loadAnswers();
		loadAnswers2();
		loadAnswers3();
		loadAnswers4();
		run();
		gameFinishButton();
	});

		
		$('submitTestForResults').on('click', function(){
			answerChecker();
			scoreboard();
		})

		if (intervalID === 0) {
			answerChecker();
			scoreboard();
		}

		
	
	
});

// Pseudocode 

// What remains to be fixed in this game is the evaluator, conditionals, and scoreboard updater.
// The evaluator is supposed to go through each answer and check which radio input has been clicked.
// After the evaluation is don the conditionals will determine is the users choice is equal to the 
// answer that has been assigned. After everything is checked the scorboard shw be updated with the latest
// scores and then displayed onto the screen.
// My game is a portion of the way there but I got lost in the logic needed to finish theses problems.
// please let me know what I could have done better

	














