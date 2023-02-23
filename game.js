window.onload = function(){
    var Start = document.getElementById("start");
    var End = document.getElementById("end");
    var Status = document.getElementById("status");
    var Boundaries = document.getElementsByClassName("boundary");
    var Game_started = false;
    var Lost_beforestart = false;
    var Score = 0;
    var Score_text = document.createElement('h2');
    Score_text.innerText = "Score: " + Score;
    Status.after(Score_text);


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

        End.addEventListener("mouseover", gameWon);
    }

    function gameLost() {
        if(Game_started){
            for (var i=0; i < Boundaries.length; i++) {
                Boundaries[i].classList.toggle("youlose");
            }
            Status.innerText = "You Lose!";
            Game_started = false;
            Lost_beforestart = true;
        }
    }

    function gameWon() {
        if(Game_started){
            Status.textContent = "You Win!";
            Game_started = false;
        }
    }

    function gameEnd() {
        
    }

    function scoreReset() {

    }

    // The actual game

    gameStart();

 }

