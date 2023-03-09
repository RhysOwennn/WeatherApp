import React from "react";
import { CityWeather } from "../pages";
import WarningBanner from "./WarningBanner";


const Search = ({ getWeather, weather, isError, setCity }: { weather: CityWeather | undefined, isError: boolean, setCity: any, getWeather: any }) => (
    <div className="flex sm:flex-col gap-2">
    <input
      type="text"
      placeholder="City..."
      className="input input-bordered lg:w-80 max-w-xs1"
      onChange={(e) => setCity(e.target.value)} />
    <button
      onClick={getWeather}
      className="btn sm:mt-1 md:mt-2 lg:mt-4"
      hidden={weather ? true : false}
    >
      Search
    </button>
    {isError && (
        <div className="mt-2">
            <WarningBanner/>
            </div>
      
    )}
  </div>
);

export default Search;
