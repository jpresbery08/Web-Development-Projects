// Accessing Home Score Section and Away Score Section
let homeEl = document.getElementById("home-score");
let awayEl = document.getElementById("away-score");

// Setting score to 0 for opposing Teams

let homeScore = 0;
let awayScore = 0;

//  ---------- HOME SIDE SCORING FUNCTIONS ----------- //
// Creating Functions for ADDING POINTS TO HOME TEAM

// Home Team: +1 point Function
function homePlusOne() {
    homeScore += 1;
    homeEl.textContent = homeScore;
}   

// Home Team: +2 point Function
function homePlusTwo() {
    homeScore += 2;
    homeEl.textContent = homeScore;
}     

// Home Team: +3 point Function
function homePlusThree() {
    homeScore += 3;
    homeEl.textContent = homeScore;
}      

// Home Team: -1 point Function
function homeMinusOne() {
    if(homeEl.textContent > 0) {
         homeScore -= 1;
         homeEl.textContent = homeScore;
    }  
}
//  ---------- AWAY SIDE SCORING FUNCTIONS ----------- //

// Creating Functions for ADDING POINTS TO AWAY TEAM

// Away Team: +1 point Function
function awayPlusOne() {
    awayScore += 1;
    awayEl.textContent = awayScore;
}                

// Away Team: +2 point Function
function awayPlusTwo() {
    awayScore += 2;
    awayEl.textContent = awayScore;
} 

// Away Team: +3 point Function
function awayPlusThree() {
    awayScore += 3;
    awayEl.textContent = awayScore;
} 

// Away Team: -1 point Function
function awayMinusOne() {
    if(awayEl.textContent > 0) {
         awayScore -= 1;
         awayEl.textContent = awayScore;
    }  
}


//  ---------- NEW GAME FUNCTION ----------- //

function newGame() {
    homeEl.textContent = 0;
    awayEl.textContent = 0;
    
    homeScore = 0;
    awayScore = 0;
}