
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
const textResult = document.getElementById('textResult')
const playerModels = document.createElement('div')
const computerModels = document.createElement('div')
let humanScore = 0
let computerScore = 0

function getChoiceComputer() {
    let words = ['ROCK', 'PAPER', 'SCISSORS']
    return words[Math.floor(Math.random() * words.length)];
}
rock.addEventListener("click", () => handleClick('ROCK'))
paper.addEventListener("click", () => handleClick('PAPER'))
scissors.addEventListener("click", () => handleClick('SCISSORS'))

function handleClick(playerChoice) { 
    const computerChoice = getChoiceComputer();
    updateChoice(playerChoice, computerChoice)
    getCounter(playerChoice, computerChoice)
    resetGames()
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

function getCounter(playerChoice, computerChoice) {    
    if( playerChoice === 'PAPER' && computerChoice === "SCISSORS" ||
        playerChoice === 'SCISSORS' && computerChoice === 'ROCK' || 
        playerChoice === "ROCK" && computerChoice === 'PAPER'
    ) { 
        humanScore++;
        countPlayer.textContent = humanScore;
        countPlayer.style.color = 'black'
        countComputer.style.color = 'black'
        textResult.textContent = ''
        console.log(humanScore, 'comp');
    } else if(playerChoice === computerChoice) { 
        console.log('Ничья');
        textResult.textContent = 'DRAW'
        textResult.style.color = 'red'
        countPlayer.style.color = 'red'
        countComputer.style.color = 'red'
    } else { 
        computerScore++;
        countComputer.textContent = computerScore;
        countComputer.style.color = 'black'
        countPlayer.style.color = 'black'
        textResult.textContent = ''
        console.log(computerScore, 'comp');
    }
}
function resetGames() { 
    if(humanScore === 5 || computerScore === 5) { 

    humanScore = 0;
    computerScore = 0;
    countPlayer.textContent = '';
    countComputer.textContent = '';
    modelPlayer.innerHTML = ''
    modelComputer.innerHTML = ''
    }
}