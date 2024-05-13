'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
})
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number Entered!'
        document.querySelector('body').style.backgroundColor = 'blue';
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Value!';
        document.querySelector('body').style.backgroundColor = 'teal';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess !== secretNumber) {
        if (score >= 1) {
            document.querySelector('.message').textContent = (((guess - secretNumber) > 0) ? '📈 Too High!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = ((guess - secretNumber > 0) ? 'orange' : 'magenta');
        }
        else {
            document.querySelector('.message').textContent = '😢 You Lost!';
            document.querySelector('body').style.backgroundColor = 'red';
        }
        if (score === 0) {
            document.querySelector('.message').textContent = '😢 You Lost!';
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
})
