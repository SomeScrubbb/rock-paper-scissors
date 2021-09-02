const result = document.querySelector('#round-result'); 

let roundCounter = 0;

const buttons = document.querySelector('#button-container');

const gameStarter = document.querySelector('#game-starter');
gameStarter.addEventListener('click', () => {
    game();
});

const compChoice = document.querySelector('#computer-choice');

const score = document.querySelector('#scorecard'); 

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound('rock', computerPlay());
    roundCounter++;
    game();
});

const gameResult = document.querySelector('#gameResult');

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound('paper', computerPlay());
    roundCounter++;
    game();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playRound('scissors', computerPlay());
    roundCounter++;
    game();
});


function computerPlay() {
    // create a variable called compSelection
    let compSelection = "";
    // create an int variable called randomNum, which is a randomly selected integer from 1-3
    let randomNum = Math.floor((Math.random() * 3) + 1);
    // if random is 1, then set computer selection to rock
    if (randomNum === 1) {
        compSelection = "Rock";
        compChoice.textContent = "Computer Chooses " + compSelection;
        return compSelection;
    }
    // if random is 2, then set computer selection to scissors
    else if (randomNum === 2) {
        compSelection = "Scissors";
        compChoice.textContent = "Computer Chooses " + compSelection;
        return compSelection;
    }  
    // otherwise,  set computer selection to Paper
    else {
        compSelection = "Paper";
        compChoice.textContent = "Computer Chooses " + compSelection;
        return compSelection;
    }
}

//create int variable called playerScore
let playerScore = 0;
//create int variable called computerScore
let computerScore = 0;


// create function called playRound() which takes 2 parameters: playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    console.log(`You chose ${playerSelection}`)
    //create switch statement that runs through all possibilities
    switch (playerSelection) {
        //case 1: lowerPlayerSelection = rock
        case "rock":
        //create new switch statement
            switch (computerSelection) {
                //case 1: computerSelection = rock
                case "Rock":
                    result.textContent = "It's a tie, play again"
                    return
                    break;
                case "Paper": 
                //case 2: computerSelection = paper
                    computerScore++;
                    result.textContent = "You lose"
                    break;
                case "Scissors": 
                //case 3: computerSelection = scissors
                    playerScore++;
                    result.textContent = "You Win!"
                    break;
            }
        break;
        //same logic, but applied to paper and scissors choices for the player
        case "paper": 
            switch (computerSelection) {
                //case 1: computerSelection = rock
                case "Rock":
                    playerScore++;
                    result.textContent = "You Win!"
                    break;
                case "Paper": 
                //case 2: computerSelection = paper
                    result.textContent = "It's a tie, play again"
                    return 
                    break;
                case "Scissors": 
                //case 3: computerSelection = scissors
                    computerScore++;
                    result.textContent = "You lose"
                    break;
            }
        break;
        //playerSelection = scissors
        default: 
            switch (computerSelection) {
                //case 1: computerSelection = rock
                case "Rock":
                    computerScore++;
                    result.textContent = "You lose"
                    break;
                case "Paper": 
                //case 2: computerSelection = paper
                    playerScore++;
                    result.textContent = "You Win!"
                    break;
                case "Scissors": 
                //case 3: computerSelection = scissors
                    result.textContent = "It's a tie, play again"
                    return "It's a tie, play again"
                    break;
            }
        break;
    }
}



//create function called promptPlayer()
/* function promptPlayer() {
    //prompt the player for their input and store it in a variable called playerSelection
    let playerSelection = prompt("What do you choose? Rock, Paper, or Scissors?");
    //create lowercase variable called lowerPlayerSelection
    let lowerPlayerSelection = playerSelection.toLowerCase();
    //while the value is invalid, keep prompting the player
    while (lowerPlayerSelection !== "rock" && lowerPlayerSelection !== "paper" && lowerPlayerSelection !== "scissors") {
        let playerSelection = prompt("You inputted an invalid value. What do you choose? Rock, Paper, or Scissors?")
        //if they inputting a valid value
        let lowerPlayerSelection = playerSelection.toLowerCase();
        if (lowerPlayerSelection == "rock" || lowerPlayerSelection == "paper" || lowerPlayerSelection == "scissors") {
            //return the lowercase version of their selection
            return lowerPlayerSelection;
            break;
        }
    }
    //if the value was correct, then skip the while loop and just return it
    return lowerPlayerSelection;
} */

//create function called game()
function game() {
    /*
    while (roundCounter < 5) {
        score.textContent = "The current score is " + playerScore + 
                " for you and " + computerScore + " for the computer.";

    }*/
    if (roundCounter < 5) {
        score.textContent = "The current score is " + playerScore + " for you and " + computerScore + " for the computer.";
    } else {
        score.style.display = 'none';
        if (playerScore > computerScore) {
            gameResult.textContent = "You won the game!";
            result.style.display = 'none';
            buttons.style.display = 'none';
            compChoice.style.display = 'none';
            return
        } else if (playerScore < computerScore) {
            gameResult.textContent = "You lost the game";
            result.style.display = 'none';
            buttons.style.display = 'none';
            compChoice.style.display = 'none';
            return
        }
    }

}




    //create int variable called playerScore
    //create int variable called computerScore
    //create while loop that will loop over the playRound() function until the game is over
    //before calling on playRound(), prompt the user for their choice and store this in a new variable called playerSelection
    //create a new variable called lowerPlayerSelection, and store a lowercase version of playerSelection in it
    //if lowerPlayerSelection is not rock, paper, or scissors {
        //send a message saying they inputted an invalid value
        //prompt for their input again
    //else, call on playRound() with lowerPlayerSelection and computerPlay() as the parameters



