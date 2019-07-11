// This is the variables for the game 

// var q1= document.game.q1.value;
// var q2= document.game.q2.value;
// var q3= document.game.q3.value;
// var q4= document.game.q4.value;

// var correct=0;



// This is where I created a function to store and check the users input

function check() {
    var q1= document.game.q1.value;
    var q2= document.game.q2.value;
    var q3= document.game.q3.value;
    var q4= document.game.q4.value;

    var correct=0;

    if(q1 =="thailand") {
        correct++;
    }
    if(q2 =="shorthair") {
        correct++;
    }
    if(q3 =="cats") {
        correct++;
    }
    if(q4 =="pepper") {
        correct++;
    }


    var messages = ["Awesome!","Study your felines!","Definitely not a cat person!"];

    var range;
    if (correct<1) {
        range=2;
    }
    if (correct>0 && correct<4) {
        range=1;
    }
    if (correct>2){
        range=0;
    }

    document.getElementById("doneClick").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("numberCorrect").innerHTML ="You got "+ correct +" right.";

}



