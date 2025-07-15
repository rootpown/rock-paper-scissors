// модель.окно
const modelWindow = document.getElementById("modal_window");
const getStatusGame = document.getElementById('status_game')
const restartGame = document.getElementById('restart_game')

// блоки игроков.
const modelPlayer = document.getElementById('block_modelPlayer');
const modelCPU = document.getElementById('block_modelCPU');
// счет игроков
const countPlayer = document.getElementById('countPlayer');
const countCPU = document.getElementById("countCPU")

// выбор карты => отображение
// const resultModel = getElementById('elems');

// выбор блока

const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');

function getChoiceCPU() {
    let models = document.createElement('div')
    let randomChoice = Math.ceil(Math.random() * 3)
    if ( randomChoice === 1) {
        models.id = 'block_rock'
        modelCPU.append(models)
        return 'ROCK'
    } else if ( randomChoice === 2) { 
        models.id = 'block_paper'
        modelCPU.append(models)
        return 'PAPER'
    } else if ( randomChoice === 3) { 
        models.id = 'block_scissors'
        modelCPU.append(models)
        return 'SCISSORS'
    } else { 
        return undefined
    }
}
function getChoicePlayer(choiseCPU) { 
    let models = document.createElement('div')
    paper.addEventListener('click', () => { 
    models.id = 'block_paper'
    modelPlayer.append(models)
    })
    rock.addEventListener('click', () => { 
    models.id = 'block_rock'
    modelPlayer.append(models) 
    })
    scissors.addEventListener('click', () => { 
    models.id = 'block_scissors'
    modelPlayer.append(models) 
    })
} 

