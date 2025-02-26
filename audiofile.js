var audio1 = document.getElementById('audio1');
var playPauseBTN1 = document.getElementById('playPauseBTN1');
var count1 = 0;
function playPause1(){
    if(count1 == 0){
        count1 = 1;
        audio1.play();
        playPauseBTN1.innerHTML = "Pause &#9208;";
    }else{
        count1 = 0;
        audio1.pause();
        playPauseBTN1.innerHTML = "Play &#9658;";
    }
}
function stop1(){
    playPause1();
    audio1.pause();
    audio1.currentTime = 0;
}

var audio2 = document.getElementById('audio2');
var playPauseBTN2 = document.getElementById('playPauseBTN2');
var count2 = 0;
function playPause2(){
    if(count2 == 0){
        count2 = 1;
        audio2.play();
        playPauseBTN2.innerHTML = "Pause &#9208;";
    }else{
        count2 = 0;
        audio2.pause();
        playPauseBTN2.innerHTML = "Play &#9658;";
    }
}
function stop2(){
    playPause2();
    audio2.pause();
    audio2.currentTime = 0;
}

var audio3 = document.getElementById('audio3');
var playPauseBTN3 = document.getElementById('playPauseBTN3');
var count3 = 0;
function playPause3(){
    if(count3 == 0){
        count3 = 1;
        audio3.play();
        playPauseBTN3.innerHTML = "Pause &#9208;";
    }else{
        count3 = 0;
        audio3.pause();
        playPauseBTN3.innerHTML = "Play &#9658;";
    }
}
function stop3(){
    playPause3();
    audio3.pause();
    audio3.currentTime = 0;
}

var audio34= document.getElementById('audio4');
var playPauseBTN4 = document.getElementById('playPauseBTN4');
var count4 = 0;
function playPause4(){
    if(count4 == 0){
        count4 = 1;
        audio4.play();
        playPauseBTN4.innerHTML = "Pause &#9208;";
    }else{
        count4 = 0;
        audio4.pause();
        playPauseBTN4.innerHTML = "Play &#9658;";
    }
}
function stop4(){
    playPause4();
    audio4.pause();
    audio4.currentTime = 0;
}
var audio5 = document.getElementById('audio5');
var playPauseBTN5 = document.getElementById('playPauseBTN5');
var count5 = 0;
function playPause5(){
    if(count5 == 0){
        count5 = 1;
        audio5.play();
        playPauseBTN5.innerHTML = "Pause &#9208;";
    }else{
        count5 = 0;
        audio5.pause();
        playPauseBTN5.innerHTML = "Play &#9658;";
    }
}
function stop5(){
    playPause5();
    audio5.pause();
    audio5.currentTime = 0;
}
var audio6 = document.getElementById('audio6');
var playPauseBTN6 = document.getElementById('playPauseBTN6');
var count6 = 0;
function playPause6(){
    if(count6 == 0){
        count6 = 1;
        audio6.play();
        playPauseBTN6.innerHTML = "Pause &#9208;";
    }else{
        count6 = 0;
        audio6.pause();
        playPauseBTN6.innerHTML = "Play &#9658;";
    }
}
function stop6(){
    playPause6();
    audio6.pause();
    audio6.currentTime = 0;
}


