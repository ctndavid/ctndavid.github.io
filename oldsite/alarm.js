//starting
function start(){
    let v = document.getElementById("start");
    v.parentNode.removeChild(v);
    //Create Stop/Snooze buttons
    let stop = document.createElement("button");
    stop.setAttribute('id', 'b1');
    stop.setAttribute('class', "button")
    stop.innerHTML = "Stop";
    document.getElementsByClassName("but1")[0].appendChild(stop);
    document.getElementById('b1').onclick = stopMusic;
    let snooze = document.createElement("button");
    snooze.setAttribute('id', 'b2');
    snooze.setAttribute('class', 'button');
    snooze.innerHTML = "Snooze";
    document.getElementsByClassName("but2")[0].appendChild(snooze);
    document.getElementById('b2').onclick = snoozeMusic;

    let date = new Date();
    let options = { hour: "numeric", minute: "numeric", second: "numeric" };
    let minutes = {minute: "numeric"};

    let M, m; //minutes alarm + current time
    M = date.toLocaleString('ro-RO', minutes);

    let alarm = false; //Activate/Deactivate buttons + Start/Stop alarm
    
    setInterval(function() { 
        date = new Date();
        var text = document.getElementById("clock"); 
        text.innerHTML = date.toLocaleString('ro-RO', options);
        m = date.toLocaleString('ro-RO', minutes);
        m = verify(m);
        M = verify(M);
        if(m === M){
            alarm = true;
            play();
        }
        
    }, 1000);

    //Audio
    var music = new Audio("alarm.mp4");

    function play(){
        music.play();
    }

    function stopMusic(){
        if(alarm){
            music.pause();
            music.currentTime = 0;
            addminutes(30);
            alarm = false;
        }
    }

    function snoozeMusic(){
        if(alarm){
            music.pause();
            music.pause();
            music.currentTime = 0;
            addminutes(10);
            alarm = false;
        }
    }

    function addminutes(value){
        M = Number(M);
        M += value;
        if(M > 59){
            M -= 60;
            if(M < 10){
                M = "0" + (M + "");
            }
            else{
                M += "";
            }
        }
        else{
            M += "";
        }
        console.log(M);
    }

    function verify(value){
        if(Number(value) < 10){
            value = "0" + value;
        }
        return value;
    }
}