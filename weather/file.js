const api_key='c50d8b54f22687721bfffb1540fd5db4';
let city = '';
let days = 1;
let requestURL = '';
let options = { weekday: 'long' , month: 'long', day: 'numeric' };
sessionStorage.setItem('days', 1);

let phone = false;

function send(){
    city = document.getElementById('city').value;
    days = document.getElementById('days').value;

    if(window.innerWidth <= 1000){
        phone = true;
    }
    if(days < sessionStorage.getItem('days')){ 
        for(let i = 6; i >= days; i--){
            cl = 'c' + (i + 1);
            hl = 't' + (i + 1);
            pl = 'p' + (i + 1);
            document.getElementsByClassName(cl)[0].style.display = 'none';
            document.getElementById(hl).innerHTML = '';
            document.getElementById(pl).innerHTML = '';
        }
    }else{
        sessionStorage.setItem('days', days);
    }
    
    if( (city[0] >= 'a' && city[0] <= 'z') || ('A' <= city[0] && city[0] <= 'Z')){
        
        city = city.toLocaleUpperCase();
        document.getElementsByClassName('error')[0].style.display = 'none';
        document.getElementsByClassName('overlay')[0].style.display = "block";
        document.getElementsByClassName('o_title')[0].innerHTML = city;
        sessionStorage.setItem('ol', true);
        getWeather();
    }
    else{
        if(city != '' || days != ''){

        }
        else{
           document.getElementsByClassName('error')[0].style.display = 'block'; 
        }
        
    }
}

function getWeather(){
    //getting input city geocoding
    requestURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid='+ api_key;
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
      let c = request.response;
      let lon = c[0]['lon'];
      let lat = c[0]['lat'];
      //Getting city weather
      let requrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=current,minutely,hourly,alerts&appid=' + api_key; 
      let req = new XMLHttpRequest();
      req.open('GET', requrl);
      req.responseType = 'json';
      req.send();
      req.onload = function(){
            let data = req.response;
            let w, t;
            let cl,hl, pl;
            for(let i = 0; i < days; i++){
                if(i == 6 && !phone){
                    document.getElementsByClassName('overlay')[0].style.height = '86vh';
                }else if(!phone && i < 5){
                    document.getElementsByClassName('overlay')[0].style.height = '70vh';
                }
                if(phone){
                    if(i == 0 || i == 1){
                        document.getElementsByClassName('overlay')[0].style.height = '55vh';
                    }
                    else if(i == 2 || i == 3){
                        document.getElementsByClassName('overlay')[0].style.height = '85vh';
                    }
                    else if(i == 4 || i == 5){
                        document.getElementsByClassName('overlay')[0].style.height = '125vh';
                    }
                    else{
                        document.getElementsByClassName('overlay')[0].style.height = '165vh';
                    }
                }
               
                cl = 'c' + (i + 1);
                hl = 't' + (i + 1);
                pl = 'p' + (i + 1);
                
                let d = new Date(0);
                d.setUTCSeconds(data['daily'][i]['dt']);
                d = d.toLocaleString('en-EN', options);
                t = Math.round((data['daily'][i]['temp']['day'] - 273.15) * 100) / 100;
                w = data['daily'][i]['weather'][0]['description'];
                document.getElementsByClassName(cl)[0].style.display = 'block';
                document.getElementById(hl).innerHTML = d;
                document.getElementById(pl).innerHTML = 'Temperature: ' + t + '°C' + '<br>' + 'Weather: ' + w;
            }
        }
    }
}

function remove(){
    document.getElementsByClassName('overlay')[0].style.display = 'none';
    sessionStorage.setItem('ol', false);
}