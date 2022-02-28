let mode = 1;

function press(){
    mode *= -1;

    
    if(mode == 1){
        sessionStorage.setItem('theme', 'light');
        light();
    }else{
        sessionStorage.setItem('theme', 'dark');
        dark();
    }
}

function light(){
    document.body.style.backgroundColor = '#adc2d3';
    document.getElementById('title').style.color = '#3b707d';
    document.getElementById('mode_but').src = 'li.png';
    if(sessionStorage.getItem('ol')){
        document.getElementsByClassName('overlay')[0].style.backgroundColor = '#cff4f9';
        
    }
    let c, t, p;
    for(let i = 1; i <= 7; i++){
        try{
            c = 'c' + i;
            t = 't' + i;
            p = 'p' + i;
            document.getElementsByClassName(c)[0].style.backgroundColor = '#F9D4CF';
            //document.getElementById(t).style.color = '#3b707d';
            //document.getElementById(p).style.color = '#3b707d';
        }catch(e){
            break;
        }
    }
}

function dark(){
    document.body.style.backgroundColor = '#282120';
    document.getElementById('title').style.color = '#f8efe4';
    document.getElementById('mode_but').src = 'dk.png';
    if(sessionStorage.getItem('ol')){
        document.getElementsByClassName('overlay')[0].style.backgroundColor = '#e6c2bf';
        
    }
    let c, t, p;
    for(let i = 1; i <= 7; i++){
        try{
            c = 'c' + i;
            t = 't' + i;
            p = 'p' + i;
            document.getElementsByClassName(c)[0].style.backgroundColor = '';
            //document.getElementById(t).style.color = '#f8efe4';
            //document.getElementById(p).style.color = '#f8efe4';
        }catch(e){
            break;
        }
    }
}