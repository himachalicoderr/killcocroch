var left = Math.floor(Math.random() * 430) + 1;
var top = Math.floor(Math.random() * 430) + 1;
var cocroch = document.getElementById("killcocroch");
var score = document.getElementById("gamescore");
var killed = document.getElementById("killcocroches");
var scoreval = 0;
var kill = 0;
var start = document.getElementById("startscreen");


function startGame() {
    start.style.display = "none";
}
function killme() {

    cocroch.style.backgroundColor = "red";

    scoreval += 5;
    kill += 1;
    score.innerHTML = scoreval;
    killed.innerHTML = kill;

    setTimeout(function () {
        cocroch.style.backgroundColor = "gray";
    }, 300);

    setInterval(function () {
        cocroch.offsetTop = top;
        cocroch.offsetLeft = left;
    }, 100);



}
