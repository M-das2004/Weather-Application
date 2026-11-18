import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
  const INIT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcb3CSidUR5kEO9bV9IkNS-O6-QN4i5QLam0UWqIlSnA&s=10";

  const HOT_URL="/assets/hot_weather.png";
  const COLD_URL="/assets/cold_weather.png";
  const RAIN_URL="/assets/rainny_weather.png";

  return (
    <div className="InfoBox">
      <h1>WeatherInfo - {info.weather}</h1>
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity>80 ? RAIN_URL : (info.temp >20) ? HOT_URL : COLD_URL}  // Corrected here

          title={info.weather}
        />
        <CardContent className='card-content'>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            <> </>{info.humidity>80 ? <><i class="fa-solid fa-cloud-rain"></i></> : (info.temp >20) ? <><i class="fa-solid fa-temperature-high"></i></> : <><i class="fa-regular fa-snowflake"></i></>}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
