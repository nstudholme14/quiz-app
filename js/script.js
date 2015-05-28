$(document).ready(function(){
	//quiz question "array"
	var question1 = {
		question: "What kind of animal lays the largest eggs?",
		options: {
			option1:"Ostrich", 
			option2: "Emu", 
			option3: "Shark", 
			option4: "Platypus"},
		answer: 3,
	};

	var question2 = {
		question: "What do you call a group of alligators?",
		options: {
			option1: "A murder", 
			option2: "A herd", 
			option3: "A swarm", 
			option4: "A congregation"},
		answer: 4,
	};

	var question3= {
		question: "What is a rhino's horn made of?",
		options: {
			option1: "Cartilage", 
			option2: "Hair", 
			option3: "Bone", 
			option4: "Skin"},
		answer: 2,
	}; 

	var question4 = {
		question: "What is a baby turkey called?",
		options: {
			option1= "Poult", 
			option2= "Kip", 
			option3= "Fledgling", 
			option4= "Chick"},
		answer: 1,
	}; 

	var question5 = {
		question: "How long can a termite queen live for?",
		choices: {
			choice1: "10 days", 
			choice2: "6 months", 
			choice3: "5 years", 
			choice4: "50 years"},
		correct: 4,
	}; 


	var question6 = {
		question: "Owls are most closely related to what other birds?",
		choices: {
			choice1: "Hummingbirds", 
			choice2: "Hawks", 
			choice3: "Egrets", 
			choice4: "Penguins"},
		correct: 4,
	}; 

	//array to run functions
	var quiz = {
		1: quesion1,
		2: question2,
		3: question3, 
		4: question4, 
		5: question5,
		6: question6, 
	};

	//functions!

	function newQuestion(question){
		//default options to incorrect
		$('.option').addClass('incorrect').css('cursor', 'pointer');

		//set question
		$('.question').text(question.quote);

		//set options
		$('.option.1').attr('src', question.options.option1);
		$('.option.2').attr('src', question.options.option2);
		$('.option.3').attr('src', question.options.option3);
		$('.option.4').attr('src', question.options.option4);

		//add correct flag to right answer
		$('.option.' + question.answer).attr('id', 'correct').removeClass('incorrect'); 

	};

	//evaluate if correct answer is selected
	function evaluateGuess(question) {
		var submitted=false; 
		//correct answers
		$('#correct').bind('click', function() {
			if submitted== false){
			$('.submitButton').show();
			correct=true;
			$('.option').removeClass('selected'); 
			$(this).addClass('selected'); 

		};

		});

		//incorrect answers
		$('.incorrect').bind('click', function(){ 
			if(submitted==false){
				$('.submitButton').show(); 
				correct = false;
				$('.option').removeClass('selected'); 
				$(this).addClass('selected'); 
			};
		});

		//more with selectedd item
		$('.submitButton').click(function(){
			submitted=true;
			answerClicked = document.getElementsByClassName('selected')[0].getAttribute('src');
			//correct answer
			if (correct==true) {
				answerCounter = document.getElementById('correctCount'); 
				correctCount.innerHTML++; 
				$('.feedBackText').show().text("Correct!"); 
				$('.nextButton').show(); 
				$('.submitButton').hide(); 
			}

			//incorrect answer
			else if (correct==false) {
				$('.feedBackText').show().text("Incorrect!"); 
				$('.nextButton').show(); 
				$('.submitButton').hide(); 
			}
			
		});

		//for all the quesiton within the quiz do this
		$('.feedBack').on('click', '.nextButton', function() {
			$('.submitButton').unbind('click');
			$('#correct').unbind('click');
			$('.incorrect').unbind('click');
			$('.option').removeAttr('id', 'correct').removeClass('selected');
			$('.feedBackText').hide();
			$('.nextButton').hide();
			questionCounter++;
			movingOn(); 
		});


		//after last question
		else if (questionCounter>5){ 
			function endCount(){
				//show final count, give replay option
				answerCounter=document.getElementById('correctCount').innerText;
				console.log(document.getElementById('correctCount').innerText);
				$('.feedBackText').show().text("You got" +answerCounter+ " of 5 correct!");
				$('.submitButton').hide();
				$('.replay').show(); 
				$('.counter').removeClass('visible').addClass('invisible');
			};

			endCount(); 
		}
	};

	//replay quiz
	$('.replay').click(function(){
		//reset quiz
		correct=false;
		questionCounter=1; 
		movingOn(); 

		//correct items showing/hidden
		$('.replay').click(function(){
			correct=false;
			questionCounter=1;
			movingOn(); 
		$('.replay').hide();
		$('.answer').removeAttr('src', answerClicked).removeClass('fade').siblings().addClass('hidden');
		$('.counter').removeClass('invisible').addClass('visible');
		answerCounter= document.getElementById('count');
		correctCount.innerHTML=0;
		}
	});

		//running the quiz
		correct=false;
		questionCounter = 1; 
		movingOn(); 

			

});