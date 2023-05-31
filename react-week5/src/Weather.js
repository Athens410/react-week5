import './App.css';
import axios from 'axios';
import React, {useState} from "react";
import {InfinitySpin}  from  'react-loader-spinner';

import WeatherInfo from './WeatherInfo';


export default function Weather (props){

const [weatherData, setWeatherData]= useState({ready: false});
const [city, setCity] = useState(props.defaultCity);

function handleResponse(response){

    console.log(response.data);

          setWeatherData({
            ready: true,
             temperature: response.data.main.temp,
             humidity: response.data.main.humidity,
             description: response.data.weather[0].description,
             date: new Date(response.data.dt * 1000),
             icon: response.data.weather[0].icon,
             wind: response.data.wind.speed,
             city: response.data.name



          });


    
    
}


function Search (){


 const apiKey ="c03face7caa58a9b7ffa9f52b7238a93";
 
 let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);



}








function handleSubmit(event){


  event.preventDefault();
  Search();
}
function handleCityChange (event) {

setCity(event.target.value);




}


if(weatherData.ready){
    return(
        <div className="line">

      
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="type a city.." className="form-contorl" autoFocus="on" onChange={handleCityChange}/>
            <input type="submit" value="search" className="btn btn-primary" />
            { city && (
  <div className="loader-spinner">
    <InfinitySpin width={200} color="aqua" />
   
  </div>
)}
              
        </form>
      
   
        <WeatherInfo data ={weatherData} />
          
        
       

             
             
             
             </div>

    );
}else{


 Search();
return 




 


 



}
    








}















