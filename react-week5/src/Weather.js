import './App.css';

import React from "react";


export default function weather (){



    return(
        <div className="line">
        <h1>London</h1>
        <ul>
         <li>
            Monday 7:00
         </li>
         <li>
          Mostly cloudy
         </li>

        </ul>
         <div className="row">
           <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="mostly cloudy" />6°C


           </div>
           
           
           
           
           
           <div className="col-6">
            <ul>
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