from re import T
from urllib import response
import requests
import datetime


API_KEY = 'c50d8b54f22687721bfffb1540fd5db4'
BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall'

url = 'http://api.openweathermap.org/geo/1.0/direct'

city = input("Enter city name: ")
days = int(input("Enter day range (1-7): "))
print('\n')

req = f"{url}?q={city}&limit={5}&appid={API_KEY}"

response = requests.get(req)

def getMonth(value):
    if(value == '01'):
        return 'January'
    elif(value == '02'):
        return 'February'
    elif(value == '03'):
        return 'March'
    elif(value == '04'):
        return 'April'
    elif(value == '05'):
        return 'May'
    elif(value == '06'):
        return 'June'
    elif(value == '07'):
        return 'July'
    elif(value == '08'):
        return 'August'
    elif(value == '09'):
        return 'September'
    elif(value == '10'):
        return 'Octomber'
    elif(value == '11'):
        return 'November'
    elif(value == '03'):
        return 'December'

if response.status_code == 200:
    d1 = response.json()
    lat = d1[0]['lat']
    lon = d1[0]['lon']
    request_url = f"{BASE_URL}?appid={API_KEY}&exclude={'current,minutely,hourly,alerts'}&lon={lon}&lat={lat}"
    resp = requests.get(request_url)
    if resp.status_code == 200:
        d2 = resp.json()
        i = 0
        date = ''
        w = ''
        t = ''
        forecast =''
        while(i < days):
            cur = datetime.datetime.fromtimestamp(d2['daily'][i]['dt'])
            day = cur.strftime('%d')
            month = getMonth(cur.strftime('%m'))
            temp = round(d2['daily'][i]['temp']['day'] - 273.15, 2)
            weather = d2['daily'][i]['weather'][0]['description']
            date = day + ' ' + month
            w ='Weather: ' + weather
            t = 'Temperature: ' + str(temp) 
            if(i < days - 1):
                forecast = forecast + date + '\n ' + w + '\n ' + t + '°C\n\n'
            else:
                forecast = forecast + date + '\n ' + w + '\n ' + t + '°C'
            i+=1
        print(forecast)
        
    else: 
        print(resp.status_code, '2')
else: 
    print(response.status_code, '1')