let homescore = document.getElementById("home-score");
let awayscore = document.getElementById("away-score");
let counth = 0;
let counta = 0;
let savedscorecard = document.getElementById("saved-score");

function addonetohomescore() {
    counth += 1;
    homescore.innerText = counth;
}

function addtwotohomescore() {
    counth += 2;
    homescore.textContent = counth;
}

function addthreetohomescore() {
    counth += 3;
    homescore.textContent = counth;
}

function addonetoawayscore() {
    counta += 1;
    awayscore.innerText = counta;
}

function addtwotoawayscore() {
    counta += 2;
    awayscore.textContent = counta;
}

function addthreetoawayscore() {
    counta += 3;
    awayscore.textContent = counta;
}

function savescore() {
    savedscorecard.textContent = counth + "-" + counta;

}