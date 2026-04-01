let scoreResult = document.getElementById('home');
let scoreGuest = document.getElementById('guest');

let homeScore = 0;
let guestScore = 0;

// HOME functions
function homeScore1() {
    homeScore += 1;
    scoreResult.textContent = homeScore;
}

function homeScore2() {
    homeScore += 2;
    scoreResult.textContent = homeScore;
}

function homeScore3() {
    homeScore += 3;
    scoreResult.textContent = homeScore;
}

// GUEST functions
function guestScore1() {
    guestScore += 1;
    scoreGuest.textContent = guestScore;
}

function guestScore2() {
    guestScore += 2;
    scoreGuest.textContent = guestScore;
}

function guestScore3() {
    guestScore += 3;
    scoreGuest.textContent = guestScore;
}