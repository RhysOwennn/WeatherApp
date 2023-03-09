import React from "react";
import Image from "next/image";
import { CityWeather, WeatherT } from "../pages";
import WeatherCard from "./WeatherCard";

const Weather = ({ data }: { data: CityWeather }) => {
  const today = new Date().toISOString().slice(0, 10)

  return(
  <div>
    <div className="flex flex-row text-4xl pb-4">
      <h3>{data.city.name}</h3> - <h3>{data.city.country}</h3>
    </div>
    <div className="grid grid-cols-4 grid-flow-row gap-2 p-1">
      {data.list.map((weather: WeatherT, index) => (
        <WeatherCard weather={weather} data={data} index={index}/>
      ))}
    </div>
  </div>
)};

export default Weather;
