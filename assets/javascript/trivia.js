// START BUTTON WHEN CLICKED RUN THE GAME


// 1. Countdown
// 30 seconds when it hit zero stop game

var timer = 30;

var intervalId;

// function which decrements by 1 everytime it's executed.

function decrement() {
    timer--;
    $("#countdown").text(timer + "s");
    if (timer === 0) {
        stop();
        alert('time out')
        $("#content").load("../../index-end.html");
    }
}

// function which will stop the counter
function stop() {

    clearInterval(intervalId);

}

$(document).ready(function () {

    // intervalId = setInterval(decrement, 1000);


})
