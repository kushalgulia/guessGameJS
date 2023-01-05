'use strict'

let secret = Math.floor(Math.random() * 20 + 1)
let curScore = 20
let highScore = 0
const changeText = function (_class, newText) {
  document.querySelector(_class).textContent = newText
}
const check = function (value) {
  if (value != secret) {
    value > secret
      ? changeText('.message', 'Too high')
      : changeText('.message', 'Too Low')
    curScore--
    changeText('.score', curScore)
  } else {
    changeText('.message', 'Yay!!!')
    winCondition()
  }
}
const winCondition = function () {
  document
    .querySelector('body')
    .setAttribute('style', 'background-color: #60b347 !important;')
  if (curScore > highScore) {
    highScore = curScore
    changeText('.highscore', curScore)
  }
  changeText('.number', secret)
}

const start = function () {
  if (curScore < 1) {
    changeText('.message', 'You loose☹️! Press Again to restart')
    changeText('.number', secret)
  } else {
    let val = document.querySelector('.guess').value
    if (val == '') changeText('.message', 'Guess a number')
    else check(Number(val))
  }
}
const reset = function () {
  secret = Math.floor(Math.random() * 20 + 1)
  document.body.setAttribute('style', 'background-color: #222')
  document.querySelector('.guess').value = ''
  curScore = 20
  changeText('.score', curScore)
  changeText('.number', '?')
  changeText('.message', 'Start guessing...')
}

document.querySelector('.check').addEventListener('click', start)
document.querySelector('.again').addEventListener('click', reset)
