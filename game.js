window.onload = function(){
    var Start = document.getElementById("start");
    var End = document.getElementById("end");
    var Status = document.getElementById("status");
    var Boundaries = document.getElementsByClassName("boundary");
    var Game_started = false;
    var Lost_beforestart = false;
    var Score = 0;

    // Game Functions:

    function gameState() {
        if(!Game_started && Lost_beforestart){
            for (var i=0; i < Boundaries.length; i++) {
                Boundaries[i].classList.toggle("youlose");
            }
            Lost_beforestart = false;
            console.log("Start is clicked!");
        }
        Game_started = true;
    }

    function gameStart() {
        Start.addEventListener('click', gameState);
        gamePlay();
    }

    function gamePlay() {
        for (var i=0; i < Boundaries.length; i++) {
            Boundaries[i].addEventListener('mouseover', gameLost);
        }
    }

    function gameLost() {
        if(Game_started){
            for (var i=0; i < Boundaries.length; i++) {
                Boundaries[i].classList.toggle("youlose");
            }
            Status.textContent = "You Lose!";
            Game_started = false;
            Lost_beforestart = true;
        }
    }

    function gameWon() {
        
    }

    function gameEnd() {

    }

    function scoreReset() {

    }

    // The actual game

    gameStart();
 }

