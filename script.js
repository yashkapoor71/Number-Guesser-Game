// Write your code below:
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () =>{
  return Math.floor(Math.random()*10);
}

const getAbsoluteDistance = (guess1, targetGuess) =>{
  return Math.abs(guess1 - targetGuess);
}

const compareGuesses = (userGuess, computerGuess, targetNumber) =>{
  if ((userGuess >= 0) && (userGuess <= 9)){
    let userDifference = getAbsoluteDistance(userGuess, targetNumber);
    let computerDifference = getAbsoluteDistance(computerGuess, targetNumber);
    if(userDifference>computerDifference){
      return false;
    }else{
      return true;
    }
  }else{
    alert('Your guess is out of the range. Please make a guess between 0-9.');
  }
}

const updateScore = (winner) =>{
  if(winner === 'human'){
    humanScore ++;
  }else{
    computerScore++;
  }
}

const advanceRound = () =>{
  currentRoundNumber ++;
}
