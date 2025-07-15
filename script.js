// модель.окно
const modelWindow = document.getElementById("modal_window");
const getStatusGame = document.getElementById('status_game')
const restartGame = document.getElementById('restart_game')

// блоки игроков.
const modelPlayer = document.getElementById('block_modelPlayer');
const modelComputer = document.getElementById('block_modelComputer');
// счет игроков
const countPlayer = document.getElementById('countPlayer');
const countComputer = document.getElementById("countComputer")

const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');

let humanScore = 0
let computerScore = 0
let models = document.createElement('div')

function getChoiceCPU() {
    let randomChoice = Math.ceil(Math.random() * 3);
    if ( randomChoice === 1) {
        return 'ROCK';
    } else if ( randomChoice === 2) { 
        return 'PAPER';
    } else if ( randomChoice === 3) { 
        return 'SCISSORS';
    }
}

rock.addEventListener("click", handleClick('ROCK'))
paper.addEventListener("click", handleClick('PAPER'))
scissors.addEventListener("click", handleClick('SCISSORS'))

function handleClick(playerChoice) { 
    let computerChoice = getChoiceCPU();
    updateChoice(playerChoice, computerChoice)
    // playerStation left -= comptuer
}
function updateChoice(playerChoice, computerChoice) {
    if(playerChoice === 'ROCK') {
        models.id = 'block_rock';
        modelPlayer.appendChild(models);
    } else if ( playerChoice === "PAPER") { 
        models.id = 'block_paper';
        modelPlayer.appendChild(models);
    } else if ( playerChoice === "SCISSORS") { 
        models.id = 'block_scissors';
        modelPlayer.appendChild(models)
    }
    if (computerChoice === 'ROCK') { 
        models.id = 'block_rock';
        modelComputer.appendChild(models);
    } else if (computerChoice === "PAPER")  {
        models.id = 'block_paper'
        modelComputer.appendChild(models)
    } else if ( computerChoice === "SCISSORS") { 
        models.id = 'block.scissors';
        modelComputer.appendChild(models);
    }
}


