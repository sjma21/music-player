let progress = document.getElementById("progress");
let song  = document.getElementById("song");
let ctricon = document.getElementById("ctricon");

song.onloadedmetadata = function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}

function playpause(){
    if(ctricon.classList.contains("fa-pause")){
        song.pause();
        ctricon.classList.remove("fa-pause");
        ctricon.classList.add("fa-play");
    }
    else{
        song.play();
        ctricon.classList.add("fa-pause");
        ctricon.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(() => {
        progress.value= song.currentTime;
    }, 500);
}
progress.onchange = function(){
    song.play();
    song.currentTime=progress.value;
    ctricon.classList.add("fa-pause");
    ctricon.classList.remove("fa-play");
}
