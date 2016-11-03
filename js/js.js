// // number of drops created.
// var nbDrop = 158;
//
// // function to generate a random number range.
// function randRange( minNum, maxNum) {
//     return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
// }
//
// // function to generate drops
// function createRain() {
//
//     for( i=1;i<nbDrop;i++) {
//         var dropLeft = randRange(0,1600);
//         var dropTop = randRange(-1000,1400);
//
//         $('.rain').append('<img src="images/doge-icon-01.svg" class="icon" id="drop'+i+'">');
//         $('#drop'+i).css('left',dropLeft);
//         $('#drop'+i).css('top',dropTop);
//     }
//
// }
// Make it rain
// createRain();

window.onload = function () {

    setTimeout(function () {
        $('.logo').addClass("bounceIn");
    },1000);

    setTimeout(function () {
        $('.service-name, .service-name-shadow').addClass("bounceIn");
    },1500);

    setTimeout(function () {
        $('nav').addClass("slideInDown");
    },1800);

    var nDoge = 60;

    function rain(){

        for(i=1; i < nDoge; i++){
            var duration = Math.random() * (4-2) + 2;
            var left = Math.random() * 50;
            var delay = Math.random() * 3;
            if(i >= nDoge/2){
                left = -left;
            }
            $('.rain').append(`<img class='icon' src='images/doge-icon-01.svg'
            style='left:${left}%; animation-delay: ${delay}s; animation-duration: ${duration}s' >`)
        }
    }
    setTimeout(rain(), 2000);
};
var greetings = ["wow", "such fun", "so doge", "so much doge rain", "such navbar", "such home", "so rounded border", "so many accounts", "dogelão", "so much #BFA961", "so much hold spacebar"];
var lastgreeting;
var number = 1;

setInterval(function () {

    //prevent last greeting from repeating itself
    while(lastgreeting == greetings[number]){
        number = Math.floor(Math.random() * greetings.length);
    }
    $(".phrase").html(greetings[number]);
    lastgreeting = greetings[number];

},1000);


$(document).mouseover(function (event) {

})


