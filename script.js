let humanScore = 0;
let computerScore = 0;
let gameOver = false;
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

function playRound(humanChoice, computerChoice)
{
    const div = document.querySelector("div");
    if(gameOver == false){
        switch(humanChoice)
        {
            case "rock":if(computerChoice == "scissor"){
                            humanScore++;
                            div.textContent="You won! Rock beats Scissor "+" Human Score "+humanScore;
                            
                        }
                        else if(computerChoice == "paper"){
                            computerScore++;
                            div.textContent="You lose! Paper beats Rock"+" Computer Score "+computerScore;
                        }
                        else{
                            div.textContent = "Tie";
                        }
                        break;
            case "paper":if(computerChoice == "scissor"){
                            computerScore++
                            div.textContent = "You lose! Scissor beat paper"+" Computer Score "+computerScore;
                        }
                        else if(computerChoice == "rock"){
                            humanScore++;
                            div.textContent = "You won! Paper beats rock"+" Human Score "+humanScore;
                        }
                        else{
                            div.textContent = "Tie";
                        }
                        break;
            case "scissor":if(computerChoice == "paper"){
                            humanScore++;
                            div.textContent = "You won! Scissor beats Paper"+" Human Score "+humanScore;
                        }
                        else if(computerChoice == "rock"){
                            computerScore++;
                            div.textContent = "You lose! Rock beats paper"+" Computer Score "+computerScore;
                        }
                        else{
                            div.textContent = "Tie";
                        }
                        break;
            default:div.textContent = "Invalid input";
                    break;
        }}
        if (humanScore==5 || computerScore==5){
            gameOver = true;
            if(humanScore>computerScore)
                {
                    div.textContent = "Human won";
                }
                else{
                    div.textContent = "Computer won";
                }
            console.log(humanScore);
            console.log(computerScore);
            btn1.removeEventListener("click",()=>playRound("rock", getComputerChoice()));
            btn2.removeEventListener("click",()=>playRound("paper", getComputerChoice()));
            btn3.removeEventListener("click",()=>playRound("scissor", getComputerChoice()));
}
}

function playGame()
{
        const btn1 = document.querySelector("#btn1");
        const btn2 = document.querySelector("#btn2");
        const btn3 = document.querySelector("#btn3");
        btn1.addEventListener("click",()=>playRound("rock", getComputerChoice()));
        btn2.addEventListener("click",()=>playRound("paper",getComputerChoice()));
        btn3.addEventListener("click",()=>playRound("scissor",getComputerChoice()));
        buttons = document.querySelectorAll("button");
        buttons.forEach((button)=>{
            button.setAttribute("style","padding:10px;margin:10px;border-radius:5px");
        div = document.querySelector("div");
        div.setAttribute("style","font-weight:900;padding-left:10px");
        }
        )
    }
playGame();