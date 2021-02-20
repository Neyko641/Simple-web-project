'use strict'


function takeInput() {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess) {
        document.querySelector('.message').textContent = "Invalid or empty input!";
    } else {
    return guess;
    }
}
function checkInput() {
    const input = takeInput();
    const secretNumber = Math.trunc(Math.random() * 20) + 1;
    if(input > secretNumber) {
        document.querySelector('.message').textContent = "high!";
    } else if (input < secretNumber) {
        document.querySelector('.message').textContent = "Low!";
    } else if(input === secretNumber) {
        document.querySelector('.message').textContent = "Correct!"; 
        changeColor();
        document.querySelector('.number').textContent = secretNumber;  
    } 
    const isTrue = input === secretNumber ? true : false;
    return isTrue;
}
function score(highscore, score) {
    highscore = Number(document.querySelector('.highscore').textContent);
    score = Number(document.querySelector('.score').textContent);
    if(checkInput()) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    } else {
        score--;
        document.querySelector('.score').textContent = score;
    } 
    if(score <= 0) {
        document.querySelector('.message').textContent = "You lose!";
    }
    return highscore;
}
function changeColor() {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';   
}
function reset() {
    const defScore = 20;
    const defHighScore = 0;
    document.querySelector('.score').textContent = defScore;
    document.querySelector('.highscore').textContent = defHighScore;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';  
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = "Start guessing...";

}
document.querySelector('.check').addEventListener('click', takeInput);
document.querySelector('.check').addEventListener('click', checkInput);
document.querySelector('.check').addEventListener('click', score);
document.querySelector('.again').addEventListener('click', reset);

