const video = document.getElementById('video');

let playVideoBtn = document.getElementById('play-video');
let pauseVideoBtn = document.getElementById('pause-video');
let fastVideoBtn = document.getElementById('fast-video');
let fullVideoBtn = document.getElementById('full-video');
let reverseVideoBtn = document.getElementById('reverse-video');
let muteVideoBtn = document.getElementById('mute-video');



playVideoBtn.addEventListener('click', function(){
    video.play(); 
})
pauseVideoBtn.addEventListener('click', function(){
    video.pause(); 
})
fastVideoBtn.addEventListener('click', function(){
    video.currentTime+=5;///
})
fullVideoBtn.addEventListener('click', function(){
    video.requestFullscreen(); 
})
reverseVideoBtn.addEventListener('click', function(){
    video.currentTime-=5; ///
})
muteVideoBtn.addEventListener('click', function(){
    video.removeAttribute(); ///
})
