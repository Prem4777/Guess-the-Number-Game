let randomNum = Math.floor(Math.random() * 100) + 1
// console.log(randomNum)

const submit = document.querySelector('#sub')
const userInput = document.querySelector('#guessInput')
const info = document.querySelector('.info')
const msg = document.querySelector('#message')
const guesses = document.querySelector('#previous-guesses')
const guessCount = document.querySelector('#guessCountText')

const p = document.createElement("p")

let playGame = true
let count = 10
let guessArray = []

guessCount.innerHTML = count

if(playGame){
    submit.addEventListener('click', function(event){
        event.preventDefault()
        let guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please the Numbers Only")
    }
    else if(guess < 1){
        alert("Number Should be Greater than or equal to 1")
    }
    else if(guess > 100){
        alert("Number Should be Less than or equal to 100")
    }
    else{
        guessArray.push(guess)
        if(count === 0){
            displayMessage(`Game Over! The number was ${randomNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage("You have guesses the correct number!")
        endGame()
    }
    else if(guess < randomNum){
        
        displayMessage("The number you have guessed is too low")

    }
    else if(guess > randomNum){

        displayMessage("The number you have guessed is too high")
    }
}

function displayGuess(guess){
    userInput.value = ''    
    console.log(guessArray)
    guesses.innerHTML =  guessArray.join(', ') 
    guessCount.innerHTML = `${--count}` 
}


function displayMessage(text){
    msg.innerHTML = `${text}`
}

function endGame(){
    userInput.innerHTML = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    guessCount.innerHTML = '0'
    p.innerHTML = '<h2 id="newGame">Start new game</h2>'
    info.appendChild(p)
    playGame = false
    newGame(p)
}

function newGame(p){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(event) {
        randomNum = Math.floor(Math.random() * 100) + 1
        guessArray = []
        count = 10
        guesses.innerHTML = ''
        guessCount.innerHTML = `${count}`
        userInput.removeAttribute('disabled')
        userInput.value = ''
        msg.innerHTML = 'Enter the number to start the game'
        info.removeChild(p)
        playGame = true 
    })
}
