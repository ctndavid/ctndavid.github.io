let th = 1;

if(sessionStorage.getItem('theme') != 'dark'){
    sessionStorage.setItem('theme', 'light');
}else{
    th = -1;
}

function getpage(page){//onload function + Sets theme
    sessionStorage.setItem('page', page);
    thememode();
}

function modtheme(){//Sets theme
    th *= -1;
    if(th == 1){ 
        sessionStorage.setItem('theme', 'light');
    }
    else{
        sessionStorage.setItem('theme', 'dark');
    }
    thememode();
}

function thememode(){//sets theme
    if(sessionStorage.getItem('theme') == 'light'){
        if(sessionStorage.getItem('page') == 'home'){
            homecolorlight();
        }
        else if(sessionStorage.getItem('page') == 'proj'){
            projcolorlight();
        }
        else if(sessionStorage.getItem('page') == 'about'){
            aboutcolorlight();
        }
    }
    else if(sessionStorage.getItem('theme') == 'dark'){
        if(sessionStorage.getItem('page') == 'home'){
            homecolordark();
        }
        else if(sessionStorage.getItem('page') == 'proj'){
            projcolordark();
        }
        else if(sessionStorage.getItem('page') == 'about'){
            aboutcolordark();
        }
    }
}

function homecolorlight(){
    document.body.style.background = '#adc2d3';
    let i = 0;
    while(true){//topnav anchor
        try{
            document.getElementsByClassName('a1')[i].style.color = '#3b707d';
        }catch(e){
            break;
        }
        i++;
    }
    i = 0;
    while(true){//text anchor
        try{
            document.getElementsByClassName('a')[i].style.color = '#242e2d';
        }catch(e){
            break;
        }
        i++;
    }
    document.getElementsByClassName('ME')[0].style.color = '#3b707d';
    document.getElementsByClassName('NL')[0].style.color = '#3b707d';
    document.getElementById('sub').style.color = '#3b707d';
    document.getElementById('topbtn').style.background = '#3b707d';
    document.getElementById('mode_img').src = 'data/li2.png';
    document.getElementById('GHI').src = 'data/ghdk.png';
}

function homecolordark(){
    document.body.style.background = '#282120';
    let i = 0;
    while(true){//topnav anchor
        try{
            document.getElementsByClassName('a1')[i].style.color = '#f8efe4';
        }catch(e){
            break;
        }
        i++;
    }
    i = 0;
    while(true){//text anchor
        try{
            document.getElementsByClassName('a')[i].style.color = '#e6c2bf';
        }catch(e){
            break;
        }
        i++;
    }
    document.getElementsByClassName('ME')[0].style.color = '#f8efe4';
    document.getElementsByClassName('NL')[0].style.color = '#f8efe4';
    document.getElementById('sub').style.color = '#f8efe4';
    document.getElementById('topbtn').style.background = '#E6C2BF';
    document.getElementById('mode_img').src = 'data/dk1.png';
    document.getElementById('GHI').src = 'data/ghli.png'; 
}

function projcolorlight(){
    document.body.style.background = '#adc2d3';
    let i = 0;
    while(true){//topnav anchor
        try{
            document.getElementsByClassName('a1')[i].style.color = '#3b707d';
        }catch(e){
            break;
        }
        i++;
    }
    document.getElementById('app1').style.color = '#3b707d';
    document.getElementById('app2').style.color = '#3b707d';
    document.getElementById('app3').style.color = '#3b707d';
    document.getElementById('title').style.color ='#3b707d';
    document.getElementById('mode_img').src = 'data/li2.png';
    if(ol){
        document.getElementById('overlay').style.background = '#cff4f9';
    }
}

function projcolordark(){
    document.body.style.background = '#282120';
    let i = 0;
    while(true){
        try{
            document.getElementsByClassName('a1')[i].style.color = '#f8efe4';
        }catch(e){
            break;
        }
        i++;
    }
    document.getElementById('mode_img').src = 'data/dk1.png';
    document.getElementById('app1').style.color = '#f8efe4';
    document.getElementById('app2').style.color = '#f8efe4';
    document.getElementById('app3').style.color = '#f8efe4';
    document.getElementById('title').style.color ='#f8efe4';
    if(ol){
        document.getElementById('overlay').style.background = '#e6c2bf';
    }
}   

function aboutcolorlight(){
    let i = 0;
    document.body.style.background = '#adc2d3';
    document.getElementById('mode_img').src = 'data/li2.png';
    while(true){//topnav anchor
        try{
            document.getElementsByClassName('a1')[i].style.color = '#3b707d';
        }catch(e){
            break;
        }
        i++;
    }
    document.getElementsByClassName('ME')[0].style.color = '#3b707d';
    document.getElementsByClassName('ME')[0].style.borderColor = '#3b707d';
    document.getElementsByClassName('DC')[0].style.color = '#3b707d';
    document.getElementsByClassName('DC')[0].style.borderColor = '#3b707d';
    document.getElementsByClassName('SK')[0].style.color = '#3b707d';
    document.getElementsByClassName('SK')[0].style.borderColor = '#3b707d';
    i = 0;
    while(true){
        try{
            document.getElementsByClassName('S1')[i].style.color = '#3b707d';
            document.getElementsByClassName('S1')[i].style.borderColor = '#3b707d';
        }catch(e){
            break;
        }
        i++;
    }
    i = 0;
    while(true){
        try{
            document.getElementsByClassName('S2')[i].style.color = '#3b707d';
            document.getElementsByClassName('S2')[i].style.borderColor = '#3b707d';
        }catch(e){
            break;
        }
        i++;
    }
    i = 0;
    while(true){
        try{
            document.getElementsByClassName('S3')[i].style.color = '#3b707d';
            document.getElementsByClassName('S3')[i].style.borderColor = '#3b707d';
        }catch(e){
            break;
        }
        i++;
    }
}

function aboutcolordark(){
    let i = 0;
    document.body.style.background = '#282120';
    while(true){
        try{
            document.getElementsByClassName('a1')[i].style.color = '#f8efe4';
        }catch(e){
            break;
        }
        i++;
    }
    document.getElementById('mode_img').src = 'data/dk1.png';
    document.getElementsByClassName('ME')[0].style.color = '#e6c2bf';
    document.getElementsByClassName('ME')[0].style.borderColor = '#a7a5e6';
    document.getElementsByClassName('DC')[0].style.color = '#e6c2bf';
    document.getElementsByClassName('DC')[0].style.borderColor = '#a7a5e6';
    document.getElementsByClassName('SK')[0].style.color = '#e6c2bf';
    document.getElementsByClassName('SK')[0].style.borderColor = '#a7a5e6';
    i = 0;
    while(true){
        try{
            document.getElementsByClassName('S1')[i].style.color = '#e6c2bf';
            document.getElementsByClassName('S1')[i].style.borderColor = '#a7a5e6';
        }catch(e){
            break;
        }
        i++;
    }
    i = 0;
    while(true){
        try{
            document.getElementsByClassName('S2')[i].style.color = '#e6c2bf';
            document.getElementsByClassName('S2')[i].style.borderColor = '#a7a5e6';
        }catch(e){
            break;
        }
        i++;
    }
    i = 0;
    while(true){
        try{
            document.getElementsByClassName('S3')[i].style.color = '#e6c2bf';
            document.getElementsByClassName('S3')[i].style.borderColor = '#a7a5e6';
        }catch(e){
            break;
        }
        i++;
    }
}