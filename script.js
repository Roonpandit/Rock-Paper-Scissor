const choices = ['rock', 'paper', 'scissors'];
const emojis = { rock: '✊', paper: '✋', scissors: '✌️' };

let userWins = 0;
let computerWins = 0;
let draws = 0;

const userChoiceSpan = document.getElementById('user-choice');
const computerChoiceSpan = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');
const finalUserWins = document.getElementById('final-user-wins');
const finalComputerWins = document.getElementById('final-computer-wins');
const finalDraws = document.getElementById('final-draws');

document.querySelectorAll('.choice-button').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        displayChoices(userChoice, computerChoice);
        determineWinner(userChoice, computerChoice);
    });
});

document.getElementById('reset').addEventListener('click', resetGame);

function displayChoices(userChoice, computerChoice) {
    userChoiceSpan.textContent = emojis[userChoice];
    computerChoiceSpan.textContent = emojis[computerChoice];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        resultText.textContent = "It's a Draw!";
        draws++;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        resultText.textContent = "You Win! 🎉";
        userWins++;
    } else {
        resultText.textContent = "Computer Wins! 😞";
        computerWins++;
    }
    updateScores();
}

function updateScores() {
    finalUserWins.textContent = userWins;
    finalComputerWins.textContent = computerWins;
    finalDraws.textContent = draws;
}

function resetGame() {
    userWins = 0;
    computerWins = 0;
    draws = 0;
    userChoiceSpan.textContent = '';
    computerChoiceSpan.textContent = '';
    resultText.textContent = '';
    updateScores();
}