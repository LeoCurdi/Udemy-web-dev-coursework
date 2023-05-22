
const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const resetButton = document.querySelector('#reset')

const p1ScoreDisplay = document.querySelector('#p1ScoreDisplay')
const p2ScoreDisplay = document.querySelector('#p2ScoreDisplay')

const winningScoreInput = document.querySelector('#winningScore')

let p1Score = 0, p2Score = 0
let winningScore = 5
let gameOver = false

p1Button.addEventListener('click', function () {
    if (!gameOver) {
        p1Score += 1
        if (p1Score === winningScore) {
            gameOver = true
            p1ScoreDisplay.classList.add('winner')
            p2ScoreDisplay.classList.add('loser')
        }
        p1ScoreDisplay.textContent = p1Score 
    }
})
p2Button.addEventListener('click', function () {
    if (!gameOver) {
        p2Score += 1
        if (p2Score === winningScore) {
            gameOver = true
            p2ScoreDisplay.classList.add('winner')
            p1ScoreDisplay.classList.add('loser')
        }
        p2ScoreDisplay.textContent = p2Score 
    }
})

resetButton.addEventListener('click', function () {
    resetGame()
})

winningScoreInput.addEventListener('change', function () {
    // check if its an integer
    var value = parseInt(winningScoreInput.value)
    var isInteger = Number.isInteger(value)

    // update winning score
    if (isInteger) {
        winningScore = value
        console.log(winningScore)
    }

    winningScoreInput.value = '' // clear the entered value

    // reset game
    resetGame()
})

function resetGame() {
    gameOver = false
    p1Score = 0
    p2Score = 0
    p1ScoreDisplay.textContent = p1Score
    p2ScoreDisplay.textContent = p2Score

    p1ScoreDisplay.classList.remove('winner', 'loser')
    p2ScoreDisplay.classList.remove('winner', 'loser')
}