var audio, Eplay, Aplay, Dplay, Bplay, Gplay, HighEplay, Pause;

function initAudioPlayer() { //https://stackoverflow.com/questions/32827910/trying-to-play-diffrent-audio-through-the-same-function-javascript-by-using-swit

  Eplay = document.getElementById("E");//left condensed for readability
  Eplay.addEventListener("click", function(){ playPause("playE");});

  Aplay = document.getElementById("A");
  Aplay.addEventListener("click",function(){ playPause("playA");});

  Dplay = document.getElementById("D");
  Dplay.addEventListener("click",function(){ playPause("playD");});

  Gplay = document.getElementById("G");
  Gplay.addEventListener("click",function(){ playPause("playG");});

  Bplay = document.getElementById("B");
  Bplay.addEventListener("click",function(){ playPause("playB");});

  HighEplay = document.getElementById("highE");
  HighEplay.addEventListener("click",function(){ playPause("playHighE");});

  Pause = document.getElementById("pause");
  Pause.addEventListener("click", function(){ audio.pause();});}

function playPause(note) {//in order of tuning
  audio = new Audio();
  switch (note) {
    case "playE":               
      audio.src = "audio/e.wav";
      break;
    case "playA":
      audio.src = "audio/a.wav";
      break;   
    case "playD":               
      audio.src = "audio/d.wav";
      break;
    case "playG":               
      audio.src = "audio/g.wav";
      break;
    case "playB":
      audio.src = "audio/b.wav";
      break;  
    case "playHighE":
      audio.src = "audio/highE.wav";
      break;
    default:
      audio.pause();    
  }

  if (audio.paused) {

      audio.play();

      audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

  } else {

   audio.pause();

  }

} 

window.addEventListener("load", initAudioPlayer);