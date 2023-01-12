'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.highscore').textContent = 5;
// document.querySelector('.guess').value = 23;
// document.querySelector();
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // document.querySelector('.message').textContent = 'Correct Number!';

    if (!guess) {
        document.querySelector('.message').textContent = 'Please enter a number';
    }
    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width='24rem';
        if (score >  0) {
            score++;
            document.querySelector('.score').textContent = score;
        }

        if (score > highScore)
        {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
            
        }
        
    }
    else if (guess != secretNumber) {
         if (score > 1) {
            displayMessage(guess > secretNumber ? 'Number is too High' : 'Number is too low');
            score--;
            document.querySelector('.score').textContent = score;
        }
        }
        else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    
    
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = ' ';
});


