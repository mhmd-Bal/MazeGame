window.onload = function(){
    var Start = document.getElementById("start");
    var End = document.getElementById("end");
    var Status = document.getElementById("status");
    var Boundaries = document.getElementsByClassName("boundary");
    var Game_started = false;
    var Lost_beforestart = false;
    var Score = 0;
    var Score_text = document.createElement('h2');
    Status.after(Score_text);
    scorePrint();

    function gameState() {
        if(!Game_started && Lost_beforestart){
            for (var i=0; i < Boundaries.length; i++) {
                Boundaries[i].classList.toggle("youlose");
            }
            Lost_beforestart = false;
        }
        Game_started = true;
        Status.innerText = "Reach The End!";
    }

    function gameStart() {
        Start.addEventListener('click', gameRestart);
        Start.addEventListener('mouseover', gameState);
        gamePlay();
        draggingStart();
    }

    // gamePlay() without Bonus:

    // function gamePlay() {
    //     for (var i=0; i < Boundaries.length; i++) {
    //         Boundaries[i].addEventListener('mouseover', gameLost);
    //     }
    //     End.addEventListener("mouseover", gameWon);
    // }

    //gamePlay() with Bonus:

    function gamePlay() {
        document.addEventListener('mousemove', checkStart);
    }

    function gameLost() {
        if(Game_started){
            for (var i=0; i < Boundaries.length; i++) {
                Boundaries[i].classList.toggle("youlose");
            }
            Status.innerText = "You Lost!";
            Game_started = false;
            Lost_beforestart = true;
            Score -= 10;
            scorePrint();
            originalPosition();
            // setTimeout(function(){
            //     console.log("Taking a break");
            // }, 3000);
        }
    }

    function gameWon() {
        if(Game_started){
            Status.textContent = "You Won!";
            Game_started = false;
            Score += 5;
            scorePrint();
            originalPosition();
        }
    }

    function gameRestart() {
        Score = 0;
        scorePrint();
        gameState();
    }

    function scorePrint() {
        Score_text.innerText = "Score: " + Score;
    }

    function draggingStart() {
        Start.addEventListener('mousemove', function(e) { 
            Start.style.position = "fixed";
            var mousepositionx = e.clientX;
            var mousepositiony = e.clientY;
            Start.style.left = mousepositionx - 15 + "px";
            Start.style.top  = mousepositiony - 15 + "px";
        });
    }

    function originalPosition() {
        Start.style.position = "absolute";
        Start.style.top = 205 + "px";
        Start.style.left = 0 + "px";
    }

    function startTouchedBlock(Start, Block) {
        var Start_rect = Start.getBoundingClientRect();
        var Block_rect = Block.getBoundingClientRect();
        return (Start_rect.right >= Block_rect.left && Start_rect.left <= Block_rect.right) && (Start_rect.bottom >= Block_rect.top && Start_rect.top <= Block_rect.bottom);
    }

    function checkStart() {
        for (var i=0; i < Boundaries.length; i++) {
            var Boundary = Boundaries[i];
            if(startTouchedBlock(Start, Boundary)) {
                gameLost();
            } 
        }

        if(startTouchedBlock(Start, End)) {
            if(!gameCheating()){
                gameWon();
            }
            else{
                Status.textContent = "NO CHEATING!";
                Game_started = false;
                originalPosition();
            }
        }
    }

    function gameCheating() {
        var Start_rect = Start.getBoundingClientRect();
        var End_rect = End.getBoundingClientRect();
        return(Start_rect.left <= End_rect.right && Start_rect.right >= End_rect.left && Start_rect.left >= End_rect.left);
    }



    gameStart();

 }

