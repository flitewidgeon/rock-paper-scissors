// randomly return on of the following string values: 'rock', 'paper', 'scissors'
function getComputerChoice(){
	// generate a random number from following: 0, 1, 2
	const randomNumber = Math.floor(Math.random() * 3);
	// 0 == 'rock', 1 == 'paper', 2 == 'scissors'
	let choice;
	switch(randomNumber){
	case 0:
		choice = 'rock';
		break;
	case 1:
		choice = 'paper';
		break;
	case 2:
		choice = 'scissors';
		break;
	}
	return choice;
} 


// given a human choice, decide a round result for the human based on the computer choice
function decideRoundResult(computer, rockResult, paperResult, scissorsResult){
	let result;
	switch(computer){
	case 'rock':
		result = rockResult;
		break;
	case 'paper':
		result = paperResult;
		break;
	case 'scissors':
		result = scissorsResult;
		break;
	}
	return result;
}

// create log message to show round result
function createResultMessage(roundResult, humanSelection, computerSelection){
	let message;
	switch(roundResult){
	case 'win':
		message = `You win! ${humanSelection} beats ${computerSelection}`;
		break;
	case 'draw':
		message = `It's a draw! You both chose ${humanSelection}`;
		break;
	case 'lose':
		message = `You lose! ${computerSelection} beats ${humanSelection}`;
		break;
	}
	return message;
}

// play 5 rounds of the game, keep track of the scores, and
// declare a winner at the end
function playGame(){
	// variables to track score for players
	let humanScore = 0;
	let computerScore = 0;
	// Add div for displaying results
	const div = document.querySelector("div");
	const para = document.createElement("p");
	div.appendChild(para);
	const scorePara = document.createElement("p");
	div.appendChild(scorePara);


	// take the human and computer player choices as arguments, play a single round, 
	// increment the round winner's score and log a winner announcement
	function playRound(humanChoice, computerChoice){
		const human = humanChoice.toLowerCase();
		let roundResult;

		if (human == 'rock'){
		// human rock, computer rock -> draw
		// human rock, computer paper -> lose
		// human rock, computer scissors -> win
			roundResult = decideRoundResult(computerChoice, 'draw', 'lose', 'win');
		}
		else if (human == 'paper'){
		// human paper, computer rock -> win
		// human paper, computer paper -> draw
		// human paper, computer scissors -> lose
			roundResult = decideRoundResult(computerChoice, 'win', 'draw', 'lose');
		}
		else if (human == 'scissors'){
		// human scissors, computer rock -> lose
		// human scissors, computer paper -> win
		// human scissors, computer scissors -> draw
			roundResult = decideRoundResult(computerChoice, 'lose', 'win', 'draw');
		}

		// display a string value to show the round winner
		message = createResultMessage(roundResult, human, computerChoice);
		para.textContent = message;


		// increment the humanScore or computerScore variable based on round winner
		if (roundResult == 'win'){
			humanScore++;
		}
		else if (roundResult == 'lose'){
			computerScore++;
		}

		// display the running score
		scorePara.textContent = `Player Score: ${humanScore} | Computer Score: ${computerScore}`;

	}

	const buttons = document.querySelectorAll("button");

	buttons.forEach((button) => button.addEventListener('click', (event) => {
		event.stopPropagation();
		playRound(button.textContent, getComputerChoice())

		 // Announce a winner of the game once one player reaches 5 points
		if (humanScore == 5 || computerScore == 5){
			const resultPara = document.createElement('p');
			resultPara.textContent = displayGameResult();
			div.appendChild(resultPara);
		}

	}));

	// Declare the winner
	function displayGameResult(){
		let gameResult;
		if (humanScore > computerScore){
			gameResult = 'Game Over! The winner is Player!';
		}
		else if (computerScore > humanScore){
			gameResult = 'Game Over! The winner is Computer!';
		}
		else{
			gameResult = 'Game Over! It\'s a draw!';
		}
		
		return gameResult; 

	}


}


playGame();






