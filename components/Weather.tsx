import React from "react";
import Image from "next/image";
import { CityWeather, WeatherT } from "../pages";

const Weather = ({ data }: { data: CityWeather }) => (
  <div>
    <div className="flex flex-row text-4xl pt-24 pb-2">
      <h3>{data.city.name}</h3> - <h3>{data.city.country}</h3>
    </div>
    <div className="grid grid-cols-4 grid-flow-row gap-1 p-1">
      {data.list.map((weather: WeatherT, index) => (
        <div className="flex flex-row border-2 border pl-2">
          Date: {weather.dt_txt} - {weather.weather[0].description} Humidity:{" "}
          {weather.main.humidity} Temperature: {weather.main.temp} Max
          temperature: {weather.main.temp_max} Min temperature:{" "}
          {weather.main.temp_min} Wind Speed: {weather.wind.speed} meter/sec
          <Image
            src={`https://openweathermap.org/img/wn/${data.list?.[index].weather[0].icon}@2x.png`}
            alt={"/"}
            width="100"
            height="100"
          />
        </div>
      ))}
    </div>
  </div>
);

export default Weather;
