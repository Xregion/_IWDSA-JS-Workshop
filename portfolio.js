function jump(h){
    var url = location.href;
    location.href = "#"+h;                
    history.replaceState(null,null,url);
}

  var x = document.getElementById("myAudio"); 

function playAudio() { 
    x.play(); 
} 

function pauseAudio() { 
    x.pause(); 
}

    function vidplay() {
       var video = document.getElementById("Video1");
       var button = document.getElementById("play");
       if (video.paused) {
          video.play();
          button.textContent = "||";
       } else {
          video.pause();
          button.textContent = ">";
       }
    }

    function skip(value) {
        var video = document.getElementById("Video1");
        video.currentTime += value;
    }