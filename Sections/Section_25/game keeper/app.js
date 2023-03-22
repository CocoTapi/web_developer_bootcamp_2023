const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}

const resetButton = document.querySelector('#resetButton');
const playTo = document.querySelector('#playTo')

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver){
        player.score += 1
        if (player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
}}


playTo.addEventListener('change', function () {
    winningScore = parseInt(playTo.value);
})

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

resetButton.addEventListener('click', reset)

function reset() {
    for (let p of [p1, p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner', 'loser');
        isGameOver = false;
    }
}


