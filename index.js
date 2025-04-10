let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let hScore = 0
let gScore = 0

// Home 
function addOneHome() {
    hScore += 1
    homeScore.textContent = hScore
}

function addTwoHome() {
    hScore += 2
    homeScore.textContent = hScore
}

function addThreeHome() {
    hScore += 3
    homeScore.textContent = hScore
}

// Guest
function addOneGuest() {
    gScore += 1
    guestScore.textContent = gScore
}

function addTwoGuest() {
    gScore += 2
    guestScore.textContent = gScore
}

function addThreeGuest() {
    gScore += 3
    guestScore.textContent = gScore
}

function newGame() {
    gScore = 0
    hScore = 0
    guestScore.textContent = 0
    homeScore.textContent = 0
}