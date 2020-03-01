const getUserChoice = (userInput) =>{
  userInput = userInput.toLowerCase();
  if (userInput === 'left cup' || userInput === 'middle cup' || userInput === 'right cup') {
    return userInput;
  } else {
    console.log('Error!');
  }
};
  const getComputerChoice = () =>{
   const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
  case 0:
    return 'left cup';
    break;
  case 1:
    return 'middle cup';
    break;
  case 2:
    return 'right cup';
  }
};

let determineWinner = (userChoice, computerChoice) =>{
  if (userChoice === computerChoice) {
    return 'You found the coin!';
  } if (userChoice === 'left cup') {
    if (computerChoice === 'middle cup') {
      return 'The coin was under the middle cup';
    } else {
      return 'The coin was under the right cup';
    }
  } if (userChoice === 'right cup') {
    if (computerChoice === 'middle cup') {
      return 'The coin was under the middle cup';
    } else {
      return 'The coin was under the left cup';
    }
  } if (userChoice === 'middle cup') {
    if (computerChoice === 'right cup') {
      return 'The coin was under the right cup';
    } else {
      return 'The coin was under the left cup';
    }
  }
};
const playGame = () =>{
  const userChoice = getUserChoice('middle cup');
  const computerChoice = getComputerChoice();
  console.log('Your choice is: ' + userChoice);
  console.log('The computers choice is: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  };

playGame();
