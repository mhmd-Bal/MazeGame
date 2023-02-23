window.onload = function(){
    var Start = document.getElementById("start");
    var End = document.getElementById("end");
    var Status = document.getElementById("status");
    var Boundaries = document.getElementsByClassName("boundary");
    var Game_started = false;


    function gameState() {
        if(Game_started){
            console.log("Start has already been clicked");
        }
        else{
            console.log("Start is clicked!");
        }
        Game_started = true;
    }

    function gameStart() {
        Start.addEventListener('click', gameState);
    }

    gameStart();
 }

