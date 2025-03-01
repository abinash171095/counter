import React, { useEffect, useState } from "react";
import Image from "./Image.js";
import Counter from "./Counter.js";
import Name from "./Name.js";
export function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const url = `http://api.weatherapi.com/v1/current.json?key=841eb1f9024b4c229c0170946252802&q=Mumbai&aqi=yes`;
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch weather data");
                }
                return response.json();
            })
            .then(data => setWeatherData(data))
            .catch(err => setError(err.message));
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!weatherData) {
        return <div>Loading weather data...</div>;
    }

    return (
        <div>
            <h4>Weather in {weatherData.location.name}</h4>
            <br></br>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Condition: {weatherData.current.condition.text}</p>
        </div>
    );
}
let tiit='thise didi'

export function Dogcard(props){
    return(
        <div>
            <Counter> </Counter><br>
            </br>
            <>{tiit}</>
            <Name>
                 <h3 style={{fontSize:' 10px', displayFlex: 'center'}} >{props.name}</h3>
                 <br></br>
            </Name>
           
            <Image src={props.Image}/>
           
        </div>
    );
}

//export default dogcard;