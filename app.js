

let windText=document.getElementById('wind_text');
let cloudText=document.getElementById('cloud_text');
let humadityText=document.getElementById('humadity_text');
let cityname=document.getElementById('cityname');
let countryName=document.getElementById('country_name');
let currentTemp=document.getElementById('temp');
let system=document.getElementById('system');
let feelLike=document.getElementById('feel');
let sysImg=document.getElementById('mainImg');
let currentDay=document.getElementById('day');
let currentDate=document.getElementById('date');

let tarikh=document.getElementById('tarikh');
console.log(sysImg);



// console.log(windText);
// console.log(countryName);
// console.log(cityName);\
let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let date=new Date();
// let str=date.toString();
let day=weekday[date.getDay()]
   currentDay.innerHTML=day;
let getmonth=month[date.getMonth()]
currentDate.innerHTML=getmonth;
console.log(getmonth);
let getDate=date.getDate()
tarikh.innerHTML=getDate;
fetch('https://api.openweathermap.org/data/2.5/weather?lat=24.887296&lon=67.0564352&appid=bb8195730c152b634f3e34904c129e83&units=metric')
 .then(res=>res.json())
 .then((res)=>{
    console.log(res);
    cityname.innerHTML=res.name;
    countryName.innerHTML=res.sys.country;
    currentTemp.innerHTML=Math.round(res.main.temp)+'°C'
    let pisSys=system.innerHTML=res.weather[0].main;
    cloudText.innerHTML=res.clouds.all+'%';
    windText.innerHTML=res.wind.speed+"km/h";
    humadityText.innerHTML=res.main.humidity+'%';
    feelLike.innerHTML="Feels like"+Math.round(res.main.feels_like);
    console.log(pisSys);
    if (pisSys=='Clouds') {
        console.log('clouds')
         document.getElementById('imgMain').innerHTML=`<img id="mainImg" class="mainimg" src='images/overcast.svg' alt="">`
     }
    
     if (pisSys==='Rain') {
     document.getElementById('imgMain').innerHTML=`<img id="mainImg" 
     class="mainimg" src='images/rain.svg' alt="">`
     } 
     if (pisSys=='Haze') {
    
      document.getElementById('imgMain').innerHTML=`<img id="mainImg" 
      class="mainimg" src='images/haze.svg' alt="">`
   }
   if (imgSys=='Clear') {
    
    document.getElementById('imgMain').innerHTML=`<img id="mainImg" 
    class="mainimg" src='images/clear-day.svg' alt="clear">`
 }
 if (imgSys=='Smoke') {
    
    document.getElementById('imgMain').innerHTML=`<img id="mainImg" 
    class="mainimg" src='images/smoke.svg' alt="clear">`
 }
  
}
 )
.catch((err)=>{
    console.log(err);
})



function search () {
    let cityName=document.getElementById('input').value;
       console.log(typeof(cityName))
    let str= cityName[0].toUpperCase();
        // console.log(str);
        let copy=cityName.slice(1);
        // console.log(copy);
        let fullName=str+copy;
         console.log(fullName)
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${fullName}&appid=bb8195730c152b634f3e34904c129e83&units=metric`)
 .then(res=>res.json())
 .then((res)=>{
    console.log(res);
    cityname.innerHTML=res.name;
    console.log(res.name);
    countryName.innerHTML=res.sys.country;
    currentTemp.innerHTML=Math.round(res.main.temp)+'°C'
    let imgSys=system.innerHTML=res.weather[0].main;
    cloudText.innerHTML=res.clouds.all+'%';
    windText.innerHTML=res.wind.speed+"km/h";
    humadityText.innerHTML=res.main.humidity+'%';
    feelLike.innerHTML="Feels like"+Math.round(res.main.feels_like);
    if (imgSys=='Clouds') {
        console.log('clouds')
         document.getElementById('imgMain').innerHTML=`<img id="mainImg" class="mainimg" src='images/overcast.svg' alt="">`
     }
    
     if (imgSys==='Rain') {
     document.getElementById('imgMain').innerHTML=`<img id="mainImg" 
     class="mainimg" src='images/rain.svg' alt="">`
     } 
     if (imgSys=='Haze') {
    
      document.getElementById('imgMain').innerHTML=`<img id="mainImg" 
      class="mainimg" src='images/haze.svg' alt="">`
   }
   if (imgSys=='Clear') {
    
    document.getElementById('imgMain').innerHTML=`<img id="mainImg" 
    class="mainimg" src='images/clear-day.svg' alt="clear">`
 }
 if (imgSys=='Snow') {
    
    document.getElementById('imgMain').innerHTML=`<img id="mainImg" 
    class="mainimg" src='images/snow.svg' alt="clear">`
 }
 if (imgSys=='Smoke') {
    
    document.getElementById('imgMain').innerHTML=`<img id="mainImg" 
    class="mainimg" src='images/smoke.svg' alt="clear">`
 }
 if (imgSys=='Drizzle') {
    
    document.getElementById('imgMain').innerHTML=`<img id="mainImg" 
    class="mainimg" src='images/drizzle.svg' alt="clear">`
 }
 })
.catch((err)=>{
    console.log(err);
})
}

