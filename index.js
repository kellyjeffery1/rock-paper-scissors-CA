const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Error!');
    }
  };
  
  console.log(getUserChoice("paper"));
  
  getComputerChoice = () => {
   randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2: 
      return 'scissors';
      break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return console.log('This game was a tie');
    };
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The compter won!';
      } else {
        return 'You Won';
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The compter won!';
      } else {
        return 'You Won';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        return 'You won!';
      } else {
        return 'The computer Won!';
      }
    }
  }
  
  console.log(determineWinner('paper', 'rock'));
  
  const playGame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
  
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
  };
  
  
  
  
  