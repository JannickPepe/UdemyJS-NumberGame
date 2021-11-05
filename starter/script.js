'use strict';

// DOM MANIPULATION
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🖼 Correct Number!'; 

document.querySelector('.number').textContent = 23;
document.querySelector('.score').textContent = 10;

//To set the value
document.querySelector('.guess').value = 23;
// To get the value property
console.log(document.querySelector('.guess').value);
*/




// EventListener - something that can happen on the page (events) - like clicks ect

//set the secret number to change and highscore first value to 0
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//create displayMessage to a funtion for refactoring
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //When there is no input
    if (!guess) {
    //document.querySelector('.message').textContent = '🖼 No Number!'; 
    displayMessage('No number');

    //When player wins
    } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🖼 Correct Number!';
    displayMessage('Correct number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //keep track of highscore
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            //document.querySelector('.message').textContent = guess > secretNumber ? 'Too high !' : 'Too low !';
            displayMessage(guess > secretNumber ? 'Too high my friend!' : 'Too low my friend!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            //document.querySelector('.message').textContent = 'YOU lost !';
            displayMessage('You lost the game !!! ;)');
            document.querySelector('.score').textContent = 0;
        }
    }

    /*
    //When number is too high
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high nigga!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'YOU lost bitch nigga!';
            document.querySelector('.score').textContent = 0;
        }

    //When number is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low nigga!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'YOU lost bitch nigga!';
            document.querySelector('.score').textContent = 0;
        }
    }
    */
});

document.querySelector('.again').addEventListener
('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    //document.querySelector('.message').textContent = 'Start guessing foo';
    displayMessage('Start guessing foo');

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

