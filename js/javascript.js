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

    var left = Math.floor(Math.random() * 430) + 1;
    var top = Math.floor(Math.random() * 430) + 1;

    cocroch.style.backgroundColor = "red";

    scoreval += 5;
    kill += 1;
    score.innerHTML = scoreval;
    killed.innerHTML = kill;

    setTimeout(function () {
        cocroch.style.backgroundColor = "gray";
        clearTimeout(gamet);
    }, 300);

    let gamet = setInterval(() => {
        cocroch.style.top = top + "px";
        cocroch.style.left = left + "px";
    }, 100);



}
