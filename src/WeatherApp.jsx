import SearchBox from './SearchBox';
import InfoBox from "./InfoBox";
import { useState } from 'react';
export default function WeatherApp()
{
    const [weatherInfo, setWeatherInfo] = useState(
        {
    city: "Kolkata",
    feelsLike: 30.12,
    temp: 26.69,
    tempMin: 26.69,
    tempMax: 26.69,
    humidity: 93,
    weather: "light rain",
        }
    );
    let updateInfo = (newInfo) =>
    {
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2 style={{fontSize:"40px"}}>Weather app by Meghma</h2>
            <SearchBox updateInfo={updateInfo}/>

            <InfoBox info={weatherInfo}/> 
        </div>
    );
}