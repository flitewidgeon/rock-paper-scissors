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