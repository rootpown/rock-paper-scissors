

const modelWindow = document.getElementById("modal_window");
const getStatusGame = document.getElementById('status_game')
const restartGame = document.getElementById('restart_game')

const modelPlayer = document.getElementById('block_modelPlayer');
const modelComputer = document.getElementById('block_modelComputer');

const countPlayer = document.getElementById('countPlayer');
const countComputer = document.getElementById("countComputer")

const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
let humanScore = 0
let computerScore = 0

let playerModels = document.createElement('div')
let computerModels = document.createElement('div')


function getChoiceComputer() {
    let words = ['ROCK', 'PAPER', 'SCISSORS']
    return words[Math.floor(Math.random() * words.length)];
}
getChoiceComputer()
rock.addEventListener("click", () => handleClick('ROCK'))
paper.addEventListener("click", () => handleClick('PAPER'))
scissors.addEventListener("click", () => handleClick('SCISSORS'))

function handleClick(playerChoice) { 
    const computerChoice = getChoiceComputer();
    updateChoice(playerChoice, computerChoice)
    console.log(playerChoice, computerChoice);
    
}
function updateChoice(playerChoice, computerChoice) {


    if(playerChoice === 'ROCK') {
        playerModels.id = 'block_rock';
        modelPlayer.append(playerModels) 
    } else if ( playerChoice === "PAPER") { 
        playerModels.id = 'block_paper';
        modelPlayer.append(playerModels);
    } else if ( playerChoice === "SCISSORS") { 
        playerModels.id = 'block_scissors';
        modelPlayer.append(playerModels)
    }
    if (computerChoice === 'ROCK') { 
        computerModels.id = 'block_rock';
        modelComputer.append(computerModels);
    } else if (computerChoice === "PAPER")  {
        computerModels.id = 'block_paper'
        modelComputer.append(computerModels)
    } else if ( computerChoice === "SCISSORS") { 
        computerModels.id = 'block_scissors';
        modelComputer.append(computerModels);
    }
}


