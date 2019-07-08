

// This is the counters for the game
var wins= 0;
var loses= 0;
var counter= 0;
var timeleft = 60;

// These are the questions that will be asked  to the user
var questions ={
    q1 :["What country does the Siamese cat variation originate from?"],
    q2 :["what hair trype is more common in cats long or short hair ?"],
    q3 :["Which pet do households have more of cats or dogs?"],
    q4 :["What is the name of my first cat?"],


};


// this is the game timer funtion that will count down as the user guesses
function timer () {
    var timeCounter= select('#timer');
    timer.html ('')
    function timeIt () {

        counter++;
        timer.html(counter);

    }
    
    setInterval (timeIt, 1000);

}
