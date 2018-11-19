let winner;

// Obtains the computers random answer
function computerPlay() 
{
  const rand = Math.floor(Math.random() * (3));

  switch (rand) {
    case 0:
      return 'Rock';
    case 1:
      return 'Scissors';
    case 2:
      return 'Paper';
    default:
      break;
  }
}

//Obtains the answer from the user
function playerPlay()
{
  let playerChoice = prompt('Please enter your choice: Rock, Paper, Or Scissors?').toLowerCase();
  switch (playerChoice) 
  {
    case 'rock':
    return 'Rock';
  case 'scissors':
    return 'Scissors';
  case 'paper':
    return 'Paper';
  
    default:
    console.log('i dont think ' + playerChoice + ' was an option, lets try again...');
    playerPlay();
  }
}
//plays the round
function turn()
{

  let computerAnswer = computerPlay();
  let playerAnswer = playerPlay();

  //Tie Test first
  if (playerAnswer == computerAnswer)
  {
    console.log('Tie!');
    return 0;
  }
  //Player answers rock
  if (playerAnswer == 'Rock') 
  {
    if (computerAnswer == 'Paper')
    {
      console.log('Paper beats Rock, sorry!');
      return -1;
    }  
    if (computerAnswer == 'Scissors')
    {
      console.log('Rock beats Scissors, you win!');
      return 1;
    }  
  }

  //Player answers Scissors
  if (playerAnswer == 'Scissors') 
  {
    if (computerAnswer == 'Rock')
    {
      console.log('Rock beats Scissors, sorry!');
      return -1;
    }  
    if (computerAnswer == 'Paper')
    {
      console.log('Scissors beats paper , you win!');
      return 1;
    }  
  }

//Player answers Paper
if (playerAnswer == 'Paper') 
{
  if (computerAnswer == 'Scissors')
  {
    console.log('Scissors beats Paper, sorry!');
    return -1;
  }  
  if (computerAnswer == 'Paper')
  {
    console.log('Scissors beats Paper, you win!');
    return 1;
  }  
}
  
}