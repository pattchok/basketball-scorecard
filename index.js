let homeScore = 0
let guestScore = 0

document.getElementById("home-score-el").textContent = homeScore
document.getElementById("guest-score-el").textContent = guestScore

let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")
let add1homeEl = document.getElementById("add1home-el")
let add2homeEl = document.getElementById("add2home-el")
let add3homeEl = document.getElementById("add3home-el")
let add1guestEl = document.getElementById("add1guest-el")
let add2guestEl = document.getElementById("add2guest-el")
let add3guestEl = document.getElementById("add3guest-el")
let resetEl = document.getElementById("reset-el")

function add1home() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function add2home() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function add3home() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}


function add1guest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function add2guest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function add3guest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function reset() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore 
    guestScoreEl.textContent = guestScore 
}

console.log(add1home)
console.log(add1homeEl)
console.log(homeScore)
