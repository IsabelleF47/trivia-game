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
    if(q1=="thailand"){
        correct++;
    }
    if(q2=="shorthair"){
        correct++;
    }
    if(q3=="cats"){
        correct++;
    }
    if(q3=="pepper"){
        correct++;
    }
    document.getElementById("afterSubmit").style.visibility="visible";
    document.getElementById("numberorrect").innerHTML="You got"+correct+"right.";
    
}












// this is the game timer funtion that will count down as the user guesses
