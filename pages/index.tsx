import { useState } from "react";
import axios from "axios";
import WeatherComponent from "../components/Weather";
import Spinner from "../components/Spinner";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Image from 'next/image'

type City = {
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
};

export type CityWeather = {
  city: City;
  list: WeatherT[];
};

export type WeatherInfo = {
  description: string;
  icon: string;
  id: number;
};

type Wind = {
  speed: number;
};

type WeatherDetails = {
  humidity: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

export type WeatherT = {
  weather: WeatherInfo[];
  dt_txt: string;
  main: WeatherDetails;
  wind: Wind;
};

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<CityWeather>();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getWeather = (e: { preventDefault: () => void }) => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&units=metric`;
    e.preventDefault();
    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
        setIsError(false);
      })
      .catch(function () {
        setIsError(true);
      });
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <><div className="min-h-screen bg-sky">
        <Nav />
        <div className="flex items-center flex-col mt-12">
          <div>
            <h2 className="font-raleway text-5xl font-extrabold mb-10 sm:text-4xl mt-8">
              How's the weather?
            </h2>
          </div>
          <Search getWeather={getWeather} weather={weather} setCity={setCity} isError={isError} />
          {weather && <WeatherComponent data={weather} />}
        </div>
        </div><Footer/>
      </>
    );
  }
}
