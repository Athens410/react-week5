import './App.css';
import axios from 'axios';
import React from "react";


export default function weather (){



    return(
        <div className="line">
        
        <form>
            <input type="search" placeholder="type a city.." className="form-contorl" autoFocus="on"/>
            <input type="submit" value="search" className="btn btn-primary" />
        </form>
        
        
        <h1>London</h1>
        <ul class="week">
         <li>
            Monday 7:00
         </li>
         <li>
          Mostly cloudy
         </li>
        

        </ul>
         <div className="row">
           <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="mostly cloudy" />
            
            
            <span className="temperature">6</span>   <span className="unit">°C</span>


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
            Wind: 11 km/h
              </li>


            </ul>

           </div>



         </div>

             
             
             
             </div>
    );
}