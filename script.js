function getComputerChoice(){
	// get a random number: 0, 1, or 2
	const randomNum = Math.floor(Math.random()* 3);
	let choice;
	if (randomNum == 0){
		choice = 'rock';
	} else if (randomNum == 1){
		choice = 'paper';
	} else {
		choice = 'scissors';
	}
	return choice;
}

function getHumanChoice(){
	return prompt('Rock, Paper, Scissors?');
}


function playGame() {

	let humanScore = 0;
	let computerScore = 0;

	function playRound(humanChoice, computerChoice){
		humanChoice = humanChoice.toLowerCase();

		console.log(`You chose ${humanChoice} and the Computer chose ${computerChoice}`);

		let roundWinner;

		if (humanChoice == 'rock'){
			switch(computerChoice){
			// No round winner for a draw
			case 'rock':
				roundWinner = 'none';
				break;
			case 'paper':
				roundWinner = 'computer';
				break;
			case 'scissors':
				roundWinner = 'player';
				break;
			}
		}
		else if (humanChoice == 'paper'){
			switch(computerChoice){
			case 'rock':
				roundWinner = 'player';
				break;
			case 'paper':
				roundWinner = 'none';
				break;
			case 'scissors':
				roundWinner = 'computer';
				break;
			}
		}
		else if(humanChoice == 'scissors'){
			switch(computerChoice){
			case 'rock':
				roundWinner = 'computer';
				break;
			case 'paper':
				roundWinner = 'player'
				break;
			case 'scissors':
				roundWinner = 'none';
				break;
			}
		}

		let message;
		switch(roundWinner){
		case 'player':
			message = `You win! ${humanChoice} beats ${computerChoice}`;
			break;
		case 'computer':
			message = `You lose! ${computerChoice} beats ${humanChoice}`;
			break;
		case 'none':
			message = `It's a draw!`;
			break;
		}
		console.log(message);

		// Increment human score or computer score based on round winner
		if (roundWinner == 'player'){
			humanScore++;
		} 
		if (roundWinner == 'computer'){
			computerScore++;
		}
	}


	const humanSelection = getHumanChoice();
	const computerSelection = getComputerChoice();

	playRound(humanSelection, computerSelection);
	console.log(`Player Score: ${humanScore} | Computer Score ${computerScore}`);
}

playGame();