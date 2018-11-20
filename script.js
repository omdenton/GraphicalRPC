


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

function upPlayerScore()
{
  playerScore.value++;
  playerScore.innerHTML = playerScore.value;
  if (playerScore.value > 4)
{
  window.alert("You win!");
}


}

function upComputerScore()
{
  computerScore.value++;
  computerScore.innerHTML = computerScore.value;
  if (computerScore.value > 4)
  {
    window.alert("Computer Wins!");
  }
}


//plays the round
function turn(answer)
{
  let playerScore = document.getElementById("playerScore");
  let computerScore = document.getElementById("computerScore");


  document.getElementById('Rock').classList.remove('pressed');
  document.getElementById('Paper').classList.remove('pressed');
  document.getElementById('Scissors').classList.remove('pressed');
  document.getElementById(answer).classList.add('pressed');
  
  playerAnswer = answer; 
  let computerAnswer = computerPlay();

  //Tie Test first
  if (playerAnswer == computerAnswer)
  {
    console.log('Tie!');
    
  }
  //Player answers rock
  if (playerAnswer == 'Rock') 
  {
    
    
    if (computerAnswer == 'Paper')
    {
      console.log('Paper beats Rock, sorry!');
      upComputerScore();
    }  
    if (computerAnswer == 'Scissors')
    {
      console.log('Rock beats Scissors, you win!');
        upPlayerScore();
    }  
    
  }

  //Player answers Scissors
  if (playerAnswer == 'Scissors') 
  {
    if (computerAnswer == 'Rock')
    {
      console.log('Rock beats Scissors, sorry!');
      upComputerScore();
    }  
    if (computerAnswer == 'Paper')
    {
      console.log('Scissors beats paper , you win!');
     upPlayerScore(); 
    }  
  }

//Player answers Paper
if (playerAnswer == 'Paper') 
{
  if (computerAnswer == 'Scissors')
  {
    console.log('Scissors beats Paper, sorry!');
    upComputerScore();
  }  
  if (computerAnswer == 'Paper')
  {
    console.log('Scissors beats Paper, you win!');
    upPlayerScore();
  } 


}
  
}