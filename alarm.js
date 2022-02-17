let th = 1;
let mediabut = false;

function modtheme(){//Sets theme
    th *= -1;
    if(th == 1){ 
        light();
    }
    else{
        dark();
    }
}

function light(){
    document.body.style.background = 'lightblue';
    document.getElementsByClassName('title')[0].style.textShadow = '2px 0 0 aliceblue, -2px 0 0 aliceblue, 0 2px 0 aliceblue, 0 -2px 0 aliceblue, 1px 1px aliceblue, -1px -1px 0 aliceblue, 1px -1px 0 aliceblue, -1px 1px 0 aliceblue';
    document.getElementsByClassName('title')[0].style.color = 'lightblue';
    document.getElementsByClassName('theme_icon')[0].src = 'data/dk.png';
    if(!mediabut){
        document.getElementById('start_but').style.borderColor = 'aliceblue';
        document.getElementById('start_but').style.color = 'aliceblue'; 
    }
    else if(mediabut){
        document.getElementsByClassName('stop_but')[0].style.borderColor = 'aliceblue';
        document.getElementsByClassName('stop_but')[0].style.color = 'aliceblue';
        document.getElementsByClassName('snooze_but')[0].style.borderColor = 'aliceblue';
        document.getElementsByClassName('snooze_but')[0].style.color = 'aliceblue';
    }
}

function dark(){
    document.body.style.background = '#0A0A2C';
    document.getElementsByClassName('title')[0].style.textShadow = '2px 0 0 #DCAE96, -2px 0 0 #DCAE96, 0 2px 0 #DCAE96, 0 -2px 0 #DCAE96, 1px 1px #DCAE96, -1px -1px 0 #DCAE96, 1px -1px 0 #DCAE96, -1px 1px 0 #DCAE96';
    document.getElementsByClassName('title')[0].style.color = '#0A0A2C';
    document.getElementsByClassName('theme_icon')[0].src = 'data/li.png';
    if(!mediabut){
        document.getElementById('start_but').style.borderColor = '#DCAE96';
        document.getElementById('start_but').style.color = '#DCAE96';
    }
    else if(mediabut){
        document.getElementsByClassName('stop_but')[0].style.borderColor = '#DCAE96';
        document.getElementsByClassName('stop_but')[0].style.color = '#DCAE96';
        document.getElementsByClassName('snooze_but')[0].style.borderColor = '#DCAE96';
        document.getElementsByClassName('snooze_but')[0].style.color = '#DCAE96';
    }
}

function spawn(){
    document.getElementsByClassName('stop_button')[0].style.display = 'block';
    document.getElementsByClassName('snooze_button')[0].style.display = 'block';
    mediabut = true;
    if(th == 1){
        light();
    }else{
        dark();
    }
}

function despawn(){
    document.getElementsByClassName('stop_button')[0].style.display = 'none';
    document.getElementsByClassName('snooze_button')[0].style.display = 'none';
    mediabut = false;
}

function startfunc(){
    document.body.removeChild(document.getElementsByClassName('start_button')[0]);
    spawn();
    alarmfunc();
}

//ALARM

//alarm sound
var music = new Audio("alarm.mp4");
let alarm = false;

let m2, m1;

let d1 = new Date();//actual hour
let d2 = new Date();//next alarm

//time options
let o1 = {hour : 'numeric', minute: 'numeric'};
let o2 = {minute : 'numeric'};

function addmin(value){
    m2 = Number(m2);
    m2 += value;
    if( m2 > 59){
        m2 -= 60;
    }
    m2.toString();
}

function play(){
    music.play();
}

function stopfunc(){
    if(alarm){
        music.pause();
        music.currentTime = 0;
        addmin(1);
        alarm = false;
        despawn();
    }
}

function snoozefunc(){
    if(alarm){
        music.pause();
        music.pause();
        music.currentTime = 0;
        addmin(1);
        alarm = false;
        despawn();
    }
}

function alarmfunc(){
    m2 = d2.toLocaleString('ro-RO', o2);
    setInterval(function(){
        d1 = new Date();
        m1 = d1.toLocaleString('ro-RO', o2);
        if(m1 == m2){
            alarm = true;
            spawn();
            play();
        }
    }, 1000);   
}
