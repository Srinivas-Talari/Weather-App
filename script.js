const APIkey='130b693a9b9ecfc3ad7341758865bea7';
const APIurl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox=document.querySelector('.input');
const searchBtn=document.querySelector('.searchBtn');
const weatherImg=document.querySelector('.weatherimg')

async function checkWeather(city){
    const response=await fetch(APIurl+ city +`&appid=${APIkey}`);
    if(response.status==404){
        document.querySelector('.error').style.display='block';        
        document.querySelector('.weather').style.display='none';        
}else{
    const data=await response.json();
    document.querySelector('.cityName').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=data.main.temp + '°C';
    document.querySelector('.humidityPer').innerHTML=data.main.humidity + '%';
    document.querySelector('.speed').innerHTML=data.wind.speed +'km/hr';
    if(data.weather[0].main=='Clouds'){
        weatherImg.src='images/clouds.png'
    }
    else if(data.weather[0].main=='Clear'){
        weatherImg.src='images/clear.png'
    }
    else if(data.weather[0].main=='Rain'){
        weatherImg.src='images/rain.png'
    }
    else if(data.weather[0].main=='Drizzle'){
        weatherImg.src='images/drizzle.png'
    }
    else if(data.weather[0].main=='Mist'){
        weatherImg.src='images/mist.png'
    }
    document.querySelector('.weather').style.display='block';
    document.querySelector('.error').style.display='none'
    }
}
searchBtn.addEventListener('click',()=>{
        checkWeather(searchBox.value)
})
checkWeather();


