import React, { useEffect, useState } from "react";
const api_Url= "https://api.openweathermap.org/data/2.5/weather";
const api_Key = "fe60276f92ce78ccdeca6124cbc796fe";
const UNIT = "metric";
const Weather = ()=>{
    const [city, setCity] = useState("");
    const handleChangeCity= (value) =>{
        setCity(value);
    }

    const fetchWeather=()=>{
         fetch(
            `${api_Url}?q={city}&appid=${api_Key}&units=${UNIT}`
             )
             .then((response) =>response.json())
             .then((data)=> console.log("this is the data from api::", data))
             .catch((error)=>console.log(error));
    };
    useEffect(()=>{
        fetchWeather();
    })
    //mount
    //update
    //unmount
   
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col">   
                    <input value={city} type="text" onChange={(e) => handleChangeCity(e.target.value)} placeholder="Enter Your City" className="form-control"></input>
                    <button className="btn btn-primary" onClick={fetchWeather}>Search</button>
                    <p></p>
                </div>
            </div>
        </div>

    );
};
export default Weather;