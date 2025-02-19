let humanScore = 0;
let computerScore = 0;
function getComputerChoice()
{

    let choice = Math.floor(Math.random()*3+1);
    console.log(choice);
    if(choice == 1)
    {
        choice = "rock";
    }
    else if(choice == 2){
        choice = "paper";
    }
    else{
        choice = "scissor";
    }
    console.log(choice);
    return choice;
}
function getHumanChoice()
{
    let choice = prompt("Choose among Rock, Paper and Scissor").toLowerCase().trim();
    console.log(choice);
    return choice;
}
function playRound(humanChoice, computerChoice)
{
    switch(humanChoice)
    {
        case "rock":if(computerChoice == "scissor"){
                        console.log("You won! Rock beats Scissor");
                        humanScore++;
                    }
                    else if(computerChoice == "paper"){
                        console.log("You lose! Paper beats Rock");
                        computerScore++;
                    }
                    else{
                        console.log("Tie");
                    }
                    break;
        case "paper":if(computerChoice == "scissor"){
                        console.log("You lose! Scissor beats paper");
                        computerScore++;
                    }
                    else if(computerChoice == "rock"){
                        console.log("You won! Paper beats rock");
                        humanScore++;
                    }
                    else{
                        console.log("Tie");
                    }
                    break;
        case "scissor":if(computerChoice == "paper"){
                        console.log("You won! Scissor beats Paper");
                        humanScore++;
                    }
                    else if(computerChoice == "rock"){
                        console.log("You lose! Rock beats paper");
                        computerScore++;
                    }
                    else{
                        console.log("Tie");
                    }
                    break;
        default:console.log("Invalid input");
}
}
function playGame()
{
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice()
    playRound(humanSelection, computerSelection);
    
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice()
    playRound(humanSelection, computerSelection);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice()
    playRound(humanSelection, computerSelection);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice()
    playRound(humanSelection, computerSelection);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice()
    playRound(humanSelection, computerSelection);

    if(humanScore>computerScore)
    {
        console.log("Human won");
    }
    else{
        console.log("Computer won");
    }

}
playGame();