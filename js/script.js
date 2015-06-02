!function() {
//Have browser tell you if you forgot local variable
'use strict';

// debugger;

var submitButton= document.getElementById('submit')
var nextButton= document.getElementById('next')
var numCorrect = 0

	//quiz questions and answers "array"
	var quiz = [{
		question: "What kind of animal lays the largest eggs?",
		choices: [
			"Ostrich", 
			"Emu", 
			"Shark", 
			"Platypus"],
		correct: 2,
	},

	{
		question: "What do you call a group of alligators?",
		choices: [
			"A murder", 
			"A herd", 
			"A swarm", 
			"A congregation"],
		correct: 3
	},
	{
		question: "What is a rhino's horn made of?",
		choices: [
			"Cartilage", 
			"Hair", 
			"Bone", 
			"Skin"],
		correct: 1
	}, 

	{
		question: "What is a baby turkey called?",
		choices: [
			"Poult", 
			"Kip", 
			"Fledgling", 
			"Chick"],
		correct: 0
	},

	{
		question: "How long can a termite queen live for?",
		choices: [
			"10 days", 
			"6 months", 
			"5 years", 
			"50 years"],
		correct: 3
	},
	


	{
		question: "Owls are most closely related to what other birds?",
		choices: [
			"Hummingbirds", 
			"Hawks", 
			"Egrets", 
			"Penguins"],
		correct: 3
	},
	]; 

//funtion to initialize quiz: load start screen--> start.click --> run quiz
	var currentQuestionIndex=0; 

	function start() {
		currentQuestionIndex =0; 
		show(); 
	}


document.getElementById('start').addEventListener('click', start);
		
		function createChoiceElement (choiceIndex, choiceLabel) {
		return '<input type="radio" name="option" class="option" value="' + choiceIndex + '">' +
		'<span class="option 4 incorrect">' + choiceLabel + '</span><br> ' 

		}; 


//function to check answer
submitButton.addEventListener('click', check);

	function check() {
		//check if the index of the item in the array selected is equal to the index of "correct"
		var options=document.querySelectorAll('input.option')
			console.log(options);

		var userSelected;

		//if answer correct, add one to correct counter and total counter
			//display "that is correct!" message
			//else, add one to total counter # only 

		for (var i =0; i < options.length; i++) {
				console.log(options[i]);
				if (options[i].checked== true) {
					userSelected=i;
				};
			};


		if (userSelected== quiz[currentQuestionIndex].correct) {
			document.getElementById('correctIncorrect').innerHTML=('Correct!');
			numCorrect ++; 
		}
		
			else {
			document.getElementById('correctIncorrect').innerHTML=('Incorrect.');
			};


	// //display next button 
		submitButton.style.display="none"; 
		nextButton.style.display="block";
		

		//link next button to show function below
		nextButton.addEventListener('click', show);



	currentQuestionIndex ++;

	}





	
//function to show next question
	function show() {
		if (currentQuestionIndex < 6) {
		var question = quiz[currentQuestionIndex];

		//take everything in the array and do something to each of them ("map)")
		var choices= question.choices.map(function(choice,index){
			return createChoiceElement(index, choice); 
		});

		document.getElementById('title').innerHTML = quiz[currentQuestionIndex].question;


		document.getElementById('choices').innerHTML = choices.join('');
		document.getElementById('start').hidden=true; 
				console.dir (submitButton);
				submitButton.style.display='block'; 
		document.getElementById('next').hidden=true;
				nextButton.style.display='none';

		document.getElementById('questionCount').innerHTML = currentQuestionIndex + '/6';
		}

		else { 
			document.getElementById('content').innerHTML = 'Congratulations! You got ' + numCorrect + 'correct!';
		}	


	}

//function at end of quiz to replay answers
	//show HTML "Congratulations, your score is" + score 
			//show button "Play again?" --> on click, go to start page
			//add button "Learn more about our weird world" --> take to website 







}();






// 	//functions!

// 	function newQuestion(question){
// 		//default options to incorrect
// 		$('.option').addClass('incorrect').css('cursor', 'pointer');

// 		//set question
// 		$('.question').text(question.quote);

// 		//set options
// 		$('.option.1').attr('src', question.options.option1);
// 		$('.option.2').attr('src', question.options.option2);
// 		$('.option.3').attr('src', question.options.option3);
// 		$('.option.4').attr('src', question.options.option4);

// 		//add correct flag to right answer
// 		$('.option.' + question.answer).attr('id', 'correct').removeClass('incorrect'); 

// 	};

// 	//evaluate if correct answer is selected
// 	function evaluateGuess(question) {
// 		var submitted=false; 
// 		//correct answers
// 		$('#correct').bind('click', function() {
// 			if submitted== false){
// 			$('.submitButton').show();
// 			correct=true;
// 			$('.option').removeClass('selected'); 
// 			$(this).addClass('selected'); 

// 		};

// 		});

// 		//incorrect answers
// 		$('.incorrect').bind('click', function(){ 
// 			if(submitted==false){
// 				$('.submitButton').show(); 
// 				correct = false;
// 				$('.option').removeClass('selected'); 
// 				$(this).addClass('selected'); 
// 			};
// 		});

// 		//more with selectedd item
// 		$('.submitButton').click(function(){
// 			submitted=true;
// 			answerClicked = document.getElementsByClassName('selected')[0].getAttribute('src');
// 			//correct answer
// 			if (correct==true) {
// 				answerCounter = document.getElementById('correctCount'); 
// 				correctCount.innerHTML++; 
// 				$('.feedBackText').show().text("Correct!"); 
// 				$('.nextButton').show(); 
// 				$('.submitButton').hide(); 
// 			}

// 			//incorrect answer
// 			else if (correct==false) {
// 				$('.feedBackText').show().text("Incorrect!"); 
// 				$('.nextButton').show(); 
// 				$('.submitButton').hide(); 
// 			}
			
// 		});

// 		//for all the quesiton within the quiz do this
// 		$('.feedBack').on('click', '.nextButton', function() {
// 			$('.submitButton').unbind('click');
// 			$('#correct').unbind('click');
// 			$('.incorrect').unbind('click');
// 			$('.option').removeAttr('id', 'correct').removeClass('selected');
// 			$('.feedBackText').hide();
// 			$('.nextButton').hide();
// 			questionCounter++;
// 			movingOn(); 
// 		});


// 		//after last question
// 		else if (questionCounter>5){ 
// 			function endCount(){
// 				//show final count, give replay option
// 				answerCounter=document.getElementById('correctCount').innerText;
// 				console.log(document.getElementById('correctCount').innerText);
// 				$('.feedBackText').show().text("You got" +answerCounter+ " of 5 correct!");
// 				$('.submitButton').hide();
// 				$('.replay').show(); 
// 				$('.counter').removeClass('visible').addClass('invisible');
// 			};

// 			endCount(); 
// 		}
// 	};

// 	//replay quiz
// 	$('.replay').click(function(){
// 		//reset quiz
// 		correct=false;
// 		questionCounter=1; 
// 		movingOn(); 

// 		//correct items showing/hidden
// 		$('.replay').click(function(){
// 			correct=false;
// 			questionCounter=1;
// 			movingOn(); 
// 		$('.replay').hide();
// 		$('.answer').removeAttr('src', answerClicked).removeClass('fade').siblings().addClass('hidden');
// 		$('.counter').removeClass('invisible').addClass('visible');
// 		answerCounter= document.getElementById('count');
// 		correctCount.innerHTML=0;
// 		}
// 	});

// 		//running the quiz
// 		correct=false;
// 		questionCounter = 1; 
// 		movingOn(); 

			
// };