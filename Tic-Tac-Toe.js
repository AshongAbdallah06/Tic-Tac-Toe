let buttons = document.querySelector('.buttons');

let playerMove = '';
const playerOneMove = 'X';
const playerTwoMove = 'O';

const none = ' ';


function renderMove() {
    if (playerMove === playerOneMove) {
        buttons.innerHTML = "Player O's turn";
        playerMove = playerTwoMove;
    } else {
        buttons.innerHTML = "Player X's turn";
        playerMove = playerOneMove;
    }
}

let playerOne = document.querySelector('.p1');
playerOne.addEventListener('click', () => {
    playerMove = playerOneMove;
    buttons.innerHTML = "Player X's turn";
})


let playerTwo = document.querySelector('.p2');
playerTwo.addEventListener('click', () => {
    playerMove = playerTwoMove;
    buttons.innerHTML = "Player O's turn";
})


let result = document.querySelector('.result');

let playAgain = document.querySelector('.restart');

function replay() {
    playAgain.innerHTML = `<div class="overlay">
    <div class="play-again">
        <div class="message">Wanna play again?!</div>
        <a href="Tic-Tac-Toe.html">
           <button class="yes-button"> Yes </button>
       </a>
        <button class="no-button"> No </button>
    </div>
</div>`; 

    let noButton = document.querySelector('.no-button');
    noButton.addEventListener('click', () => {
        playAgain.innerHTML = `<div class="overlay">
        <div class="second-thought">Having second thought?!</div>
        <a href="Tic-Tac-Toe.html">
            <button class="yes-button">Play Again</button>
        </a>`;     }) 
}



let score = JSON.parse(localStorage.getItem('score')) || {
    playerOneWins: 0,
    playerTwoWins: 0
}


let p1Wins = document.querySelector('.p1-wins');
let p2Wins = document.querySelector('.p2-wins');

p1Wins.innerHTML = score.playerOneWins;
p2Wins.innerHTML = score.playerTwoWins;

let resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', () => {
    score.playerOneWins = 0,
    score.playerTwoWins = 0

    localStorage.removeItem('score');
    p1Wins.innerHTML = score.playerOneWins;
    p2Wins.innerHTML = score.playerTwoWins;
})


function playerOneResult() {
    if (box1.innerHTML === playerOneMove && box2.innerHTML === playerOneMove && box3.innerHTML === playerOneMove) {
        result.innerHTML = `Player X wins`;
        buttons.innerHTML = '';

        if (result.innerHTML === `Player X wins`) {
            score.playerOneWins++;
            p1Wins.innerHTML = score.playerOneWins;
        }

        replay();
    } else if (box4.innerHTML === playerOneMove && box5.innerHTML === playerOneMove && box6.innerHTML === playerOneMove) {
        result.innerHTML = `Player X wins`;
        buttons.innerHTML = '';

        if (result.innerHTML === `Player X wins`) {
            score.playerOneWins++;
            p1Wins.innerHTML = score.playerOneWins;
        }

        replay();
    } else if (box7.innerHTML === playerOneMove && box8.innerHTML === playerOneMove && box9.innerHTML === playerOneMove) {
        result.innerHTML = `Player X wins`;
        buttons.innerHTML = '';

        if (result.innerHTML === `Player X wins`) {
            score.playerOneWins++;
            p1Wins.innerHTML = score.playerOneWins;
        }

        replay();
    } else if (box1.innerHTML === playerOneMove && box4.innerHTML === playerOneMove && box7.innerHTML === playerOneMove) {
        result.innerHTML = `Player X wins`;
        buttons.innerHTML = '';

        if (result.innerHTML === `Player X wins`) {
            score.playerOneWins++;
            p1Wins.innerHTML = score.playerOneWins;
        }

        replay();
    } else if (box2.innerHTML === playerOneMove && box5.innerHTML === playerOneMove && box8.innerHTML === playerOneMove) {
        result.innerHTML = `Player X wins`;
        buttons.innerHTML = '';

        if (result.innerHTML === `Player X wins`) {
            score.playerOneWins++;
            p1Wins.innerHTML = score.playerOneWins;
        }

        replay();
    } else if (box3.innerHTML === playerOneMove && box6.innerHTML === playerOneMove && box9.innerHTML === playerOneMove) {
        result.innerHTML = `Player X wins`;
        buttons.innerHTML = '';

        if (result.innerHTML === `Player X wins`) {
            score.playerOneWins++;
            p1Wins.innerHTML = score.playerOneWins;
        }

        replay();
    } else if (box1.innerHTML === playerOneMove && box5.innerHTML === playerOneMove && box9.innerHTML === playerOneMove) {
        result.innerHTML = `Player X wins`;
        buttons.innerHTML = '';

        if (result.innerHTML === `Player X wins`) {
            score.playerOneWins++;
            p1Wins.innerHTML = score.playerOneWins;
        }

        replay();
    } else if (box3.innerHTML === playerOneMove && box5.innerHTML === playerOneMove && box7.innerHTML === playerOneMove) {
        result.innerHTML = `Player X wins`;
        buttons.innerHTML = '';

        if (result.innerHTML === `Player X wins`) {
            score.playerOneWins++;
            p1Wins.innerHTML = score.playerOneWins;
        }

        replay();
    }

    result.classList.add('Result');

    localStorage.setItem('score', JSON.stringify(score));
}


function playerTwoResult() {
    if (box1.innerHTML === playerTwoMove && box2.innerHTML === playerTwoMove && box3.innerHTML === playerTwoMove) {
        result.innerHTML = `Player O wins`;
        buttons.innerHTML = '';

        if (result.innerHTML === `Player O wins`) {
            score.playerTwoWins++;
            p2Wins.innerHTML = score.playerTwoWins;
        }

        replay();
    } else if (box4.innerHTML === playerTwoMove && box5.innerHTML === playerTwoMove && box6.innerHTML === playerTwoMove) {
        result.innerHTML = `Player O wins`;
        buttons.innerHTML = '';

        if (result.innerHTML === `Player O wins`) {
            score.playerTwoWins++;
            p2Wins.innerHTML = score.playerTwoWins;
        }

        replay();
    } else if (box7.innerHTML === playerTwoMove && box8.innerHTML === playerTwoMove && box9.innerHTML === playerTwoMove) {
        result.innerHTML = `Player O wins`;
        buttons.innerHTML = '';

        if (result.innerHTML === `Player O wins`) {
            score.playerTwoWins++;
            p2Wins.innerHTML = score.playerTwoWins;
        }

        replay();
    } else if (box1.innerHTML === playerTwoMove && box4.innerHTML === playerTwoMove && box7.innerHTML === playerTwoMove) {
        result.innerHTML = `Player O wins`;
        buttons.innerHTML = '';

        if (result.innerHTML === `Player O wins`) {
            score.playerTwoWins++;
            p2Wins.innerHTML = score.playerTwoWins;
        }

        replay();
    } else if (box2.innerHTML === playerTwoMove && box5.innerHTML === playerTwoMove && box8.innerHTML === playerTwoMove) {
        result.innerHTML = `Player O wins`;
        buttons.innerHTML = '';

        if (result.innerHTML === `Player O wins`) {
            score.playerTwoWins++;
            p2Wins.innerHTML = score.playerTwoWins;
        }

        replay();
    } else if (box3.innerHTML === playerTwoMove && box6.innerHTML === playerTwoMove && box9.innerHTML === playerTwoMove) {
        result.innerHTML = `Player O wins`;
        buttons.innerHTML = '';

        if (result.innerHTML === `Player O wins`) {
            score.playerTwoWins++;
            p2Wins.innerHTML = score.playerTwoWins;
        }

        replay();
    } else if (box1.innerHTML === playerTwoMove && box5.innerHTML === playerTwoMove && box9.innerHTML === playerTwoMove) {
        result.innerHTML = `Player O wins`;
        buttons.innerHTML = '';

        if (result.innerHTML === `Player O wins`) {
            score.playerTwoWins++;
            p2Wins.innerHTML = score.playerTwoWins;
        }

        replay();
    } else if (box3.innerHTML === playerTwoMove && box5.innerHTML === playerTwoMove && box7.innerHTML === playerTwoMove) {
        result.innerHTML = `Player O wins`;
        buttons.innerHTML = '';

        if (result.innerHTML === `Player O wins`) {
            score.playerTwoWins++;
            p2Wins.innerHTML = score.playerTwoWins;
        }

        replay();
    }

    result.classList.add('Result');

    localStorage.setItem('score', JSON.stringify(score));
}


function noWinner() {
    if (box1.innerHTML === 'X' && box2.innerHTML === 'O' && box3.innerHTML === 'X' && box4.innerHTML === 'X' && box5.innerHTML === 'O' && box6.innerHTML === 'O' && box7.innerHTML === 'O' && box8.innerHTML === 'X' && box9.innerHTML === 'X') {
        result.innerHTML = 'No winner';
        buttons.innerHTML = '';

        replay();
    } else if (box1.innerHTML === 'O' && box2.innerHTML === 'X' && box3.innerHTML === 'O' && box4.innerHTML === 'O' && box5.innerHTML === 'X' && box6.innerHTML === 'X' && box7.innerHTML === 'X' && box8.innerHTML === 'O' && box9.innerHTML === 'O') {
        result.innerHTML = 'No winner';
        buttons.innerHTML = '';

        replay();
    } else if (box1.innerHTML === 'O' && box2.innerHTML === 'X' && box3.innerHTML === 'X' && box4.innerHTML === 'X' && box5.innerHTML === 'O' && box6.innerHTML === 'O' && box7.innerHTML === 'X' && box8.innerHTML === 'O' && box9.innerHTML === 'X') {
        result.innerHTML = 'No winner';
        buttons.innerHTML = '';

        replay();
    } else if (box1.innerHTML === 'X' && box2.innerHTML === 'O' && box3.innerHTML === 'O' && box4.innerHTML === 'O' && box5.innerHTML === 'X' && box6.innerHTML === 'X' && box7.innerHTML === 'O' && box8.innerHTML === 'X' && box9.innerHTML === 'O') {
        result.innerHTML = 'No winner';
        buttons.innerHTML = '';

        replay();
    } else if (box1.innerHTML === 'X' && box2.innerHTML === 'X' && box3.innerHTML === 'O' && box4.innerHTML === 'O' && box5.innerHTML === 'X' && box6.innerHTML === 'X' && box7.innerHTML === 'X' && box8.innerHTML === 'O' && box9.innerHTML === 'O') {
        result.innerHTML = 'No winner';
        buttons.innerHTML = '';

        replay();
    } else if (box1.innerHTML === 'O' && box2.innerHTML === 'O' && box3.innerHTML === 'X' && box4.innerHTML === 'X' && box5.innerHTML === 'O' && box6.innerHTML === 'O' && box7.innerHTML === 'O' && box8.innerHTML === 'X' && box9.innerHTML === 'X') {
        result.innerHTML = 'No winner';
        buttons.innerHTML = '';

        replay();
    } else if (box1.innerHTML === 'X' && box2.innerHTML === 'O' && box3.innerHTML === 'X' && box4.innerHTML === 'X' && box5.innerHTML === 'O' && box6.innerHTML === 'X' && box7.innerHTML === 'O' && box8.innerHTML === 'X' && box9.innerHTML === 'O') {
        result.innerHTML = 'No winner';
        buttons.innerHTML = '';

        replay();
    } else if (box1.innerHTML === 'O' && box2.innerHTML === 'X' && box3.innerHTML === 'O' && box4.innerHTML === 'O' && box5.innerHTML === 'X' && box6.innerHTML === 'O' && box7.innerHTML === 'X' && box8.innerHTML === 'O' && box9.innerHTML === 'X') {
        result.innerHTML = 'No winner';
        buttons.innerHTML = '';

        replay();
    } else if (box1.innerHTML === 'O' && box2.innerHTML === 'X' && box3.innerHTML === 'O' && box4.innerHTML === 'X' && box5.innerHTML === 'O' && box6.innerHTML === 'X' && box7.innerHTML === 'X' && box8.innerHTML === 'O' && box9.innerHTML === 'X') {
        result.innerHTML = 'No winner';
        buttons.innerHTML = '';

        replay();
    } else if (box1.innerHTML === 'X' && box2.innerHTML === 'O' && box3.innerHTML === 'X' && box4.innerHTML === 'O' && box5.innerHTML === 'X' && box6.innerHTML === 'O' && box7.innerHTML === 'O' && box8.innerHTML === 'X' && box9.innerHTML === 'O') {
        result.innerHTML = 'No winner';
        buttons.innerHTML = '';

        replay();
    }
}



let box1 = document.querySelector('.b1');
box1.addEventListener('click', () => {
    
    box1.innerHTML = playerMove;

    if (playerMove === '') {
        box1.innerHTML = ''
    } else {
        renderMove();
    }

    playerOneResult();
    playerTwoResult();

    noWinner();
})

let box2 = document.querySelector('.b2');
box2.addEventListener('click', () => {
    
    box2.innerHTML = playerMove;

    if (playerMove === '') {
        box2.innerHTML = ''
    } else {
        renderMove();
    }

    playerOneResult();
    playerTwoResult();

    noWinner();
})

let box3 = document.querySelector('.b3');
box3.addEventListener('click', () => {
    
    box3.innerHTML = playerMove;

    if (playerMove === '') {
        box3.innerHTML = ''
    } else {
        renderMove();
    }

    playerOneResult();
    playerTwoResult();

    noWinner();
})

let box4 = document.querySelector('.b4');
box4.addEventListener('click', () => {
    
    box4.innerHTML = playerMove;

    if (playerMove === '') {
        box4.innerHTML = ''
    } else {
        renderMove();
    }

    playerOneResult();
    playerTwoResult();

    noWinner();
})

let box5 = document.querySelector('.b5');
box5.addEventListener('click', () => {
    
    box5.innerHTML = playerMove;

    if (playerMove === '') {
        box5.innerHTML = ''
    } else {
        renderMove();
    }

    playerOneResult();
    playerTwoResult();

    noWinner();
})

let box6 = document.querySelector('.b6');
box6.addEventListener('click', () => {
    
    box6.innerHTML = playerMove;

    if (playerMove === '') {
        box6.innerHTML = ''
    } else {
        renderMove();
    }

    playerOneResult();
    playerTwoResult();

    noWinner();
})

let box7 = document.querySelector('.b7');
box7.addEventListener('click', () => {
    
    box7.innerHTML = playerMove;

    if (playerMove === '') {
        box7.innerHTML = ''
    } else {
        renderMove();
    }

    playerOneResult();
    playerTwoResult();

    noWinner();
})

let box8 = document.querySelector('.b8');
box8.addEventListener('click', () => {
    
    box8.innerHTML = playerMove;

    if (playerMove === '') {
        box8.innerHTML = ''
    } else {
        renderMove();
    }

    playerOneResult();
    playerTwoResult();

    noWinner();
})

let box9 = document.querySelector('.b9');
box9.addEventListener('click', () => {
    
    box9.innerHTML = playerMove;

    if (playerMove === '') {
        box9.innerHTML = ''
    } else {
        renderMove();
    }

    playerOneResult();
    playerTwoResult();

    noWinner();
})



