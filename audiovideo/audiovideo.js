//var player = document.getElementById("audioPlayer");
//player.play();
//player.pause();
//no stop button so no stop method 
//define currentTime 0 to go back to beginning
//player.currentTime = 0; //in seconds

var playbutton = document.getElementById("play");
var stopbutton = document.getElementById("stop");
var player = document.getElementById("audioPlayer");
var progressControl = document.getElementById("progressBarControl");

playbutton.addEventListener("click", function(){play("audioPlayer", this);});
stopbutton.addEventListener("click", function(){resume("audioPlayer");});
player.addEventListener("timeupdate", function(){update(player);});
progressControl.addEventListener("click", function(e){selectTime(e, player);});

var volumespan;

for (var i = 1; i < 6; i++)
{
    volumespan = document.getElementById("stick"+i);
    volumespan.style.height = 5*i +"px";

    (function(){
        var volumelvl;
        volumelvl = 0.0 + (i - 1) / 4;
        volumespan.addEventListener("click", function(){volume("audioPlayer",volumelvl);});
    })();
    
}

function play(playerid, control){
    console.log("play");
    var player = document.getElementById(playerid);
    if (player.paused)
    {
        player.play();
        control.textContent = "Pause";
    }
    else
    {
        player.pause();
        control.textContent = "Play";
    }
}

function resume(playerid){
    console.log("stop");
    var player = document.getElementById(playerid);
    player.pause();
    player.currentTime = 0;
    document.getElementById("play").textContent = "Play";
}

function volume(playerid, volumelvl){
    console.log("volume: " + volumelvl);
    var player = document.getElementById(playerid);
    player.volume = volumelvl;
}

function update(player){
    var duration = player.duration;
    var time = player.currentTime;
    var fraction = time / duration;
    var percent = Math.ceil(fraction * 100);
    var progress = document.getElementById("progressBar");
    progress.style.width = percent + '%';
    progress.textContent = "";
    progress.style.backgroundColor = "green";
    if (percent > 2)
    {
        progress.textContent = percent + '%';
    }
}

function selectTime(e, player){
    var div = e.currentTarget;
    var divx = getPosition(div).x;
    var cursx = getMousePosition(e).x;
    var x = cursx - divx;
    var divwidth = div.offsetWidth;
    var fraction = x / divwidth;
    var percent = Math.ceil(fraction * 100);
    player.currentTime = fraction * player.duration;
}

//POUR RAPPEL, récup vraie pos d'un élément
function getPosition(element){
    var top = 0, left = 0;
    do{
        top += element.offsetTop;
        left += element.offsetLeft;
    } while (element = element.offsetParent);
    return {x: left, y: top};
}

function getMousePosition(event){
    return {
        x: event.pageX,
        y: event.pageY
    }
}

console.log("fin audiovideo");