import './App.css';
import axios from 'axios';
import React, {useState} from "react";
import {InfinitySpin}  from  'react-loader-spinner';


export default function Weather (props){
const [ ready, setReady] = useState(false);
const [weatherData, setWeatherData]= useState({});

function handleResponse(response){

    console.log(response.data);

          setWeatherData({
             temperature: response.data.main.temp,
             wind: 12,
             city: response.data.name



          });


    
    setReady(true);
}




if(ready){
    return(
        <div className="line">
             <InfinitySpin 
  width='200'
  color="aqua"
/>
        
        <form>
            <input type="search" placeholder="type a city.." className="form-contorl" autoFocus="on"/>
            <input type="submit" value="search" className="btn btn-primary" />
        </form>
        
        
        <h1>{weatherData.city}</h1>
        <ul class="week">
         <li>
            Monday 7:00
         </li>
         <li>
         {weatherData.description}
         </li>
        

        </ul>
         <div className="row">
           <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="mostly cloudy" />
            
            
            <span className="temperature">{Math.round(weatherData.temperature)}</span>   <span className="unit">°C</span>


           </div>
           
           
           
           
           
           <div className="col-6">
            <ul class="week">
              <li> 
            Precipitation: 2%
              </li>
              <li>
            Humidity: 73%
              </li>
              <li>
            Wind:{weatherData.wind}km/h
              </li>


            </ul>

           </div>



         </div>

             
             
             
             </div>

    );
}else{


 const apiKey ="c03face7caa58a9b7ffa9f52b7238a93";
 let city = "London";
 let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);
return (
    
    "loading"
    
);







}















}