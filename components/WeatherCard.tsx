import React, { useState } from "react";
import spinnner from "../public/spinner.gif";
import Image from "next/image";
import { CityWeather, WeatherT } from "../pages";

const WeatherCard = ({
  weather,
  data,
  index,
}: {
  weather: WeatherT;
  data: CityWeather;
  index: number;
}) => {
  const dateObj = new Date(weather.dt_txt);
  const weekday = dateObj.toLocaleString("default", { weekday: "long" });
  const [showCard, setShowCard] = useState(false);

  return (
    <button
      onClick={() => {
        setShowCard(!showCard);
      }}
      className="card-bordered w-96 bg-base-100 shadow-xl p-4 hover:bg-sky-300 focus:outline-none focus:ring"
    >
      <div className="card-title">
        {weekday} - {weather.weather[0].description} -{" "}
        {weather.dt_txt.slice(10, 16)}
      </div>
      <div className={showCard ? "card-body grid" : "card-body hidden"}>
        <div>Humidity: {weather.main.humidity}% </div>
        <div>Temperature: {weather.main.temp}℃</div>
        <div>Min Temperature: {weather.main.temp_min}℃ </div>
        <div>Max Temperature: {weather.main.temp_max}℃ </div>
        <div>Wind Speed: {weather.wind.speed} meter/sec </div>
      </div>
      <div className="flex justify-center">
        <Image
          src={`https://openweathermap.org/img/wn/${data.list?.[index].weather[0].icon}@2x.png`}
          alt={"/"}
          width="100"
          height="100"
        />
      </div>
    </button>
  );
};

export default WeatherCard;
