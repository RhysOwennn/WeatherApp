import {useState} from 'react';
import axios from 'axios';
import WeatherComponent from '../components/Weather';
import Spinner from '../components/Spinner'

type City = {
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
}

export type CityWeather = {
  city: City;
  list: WeatherT[];
}

export type WeatherInfo = {
  description: string;
  icon: string;
  id: number;
}

type Wind = {
  speed: number;
}

type WeatherDetails = {
  humidity: number;
  temp: number;
  temp_max: number;
  temp_min: number;

}

export type WeatherT = {
  weather: WeatherInfo[];
  dt_txt: string;
  main: WeatherDetails;
  wind: Wind;

}


export default function Home() {
	const [city, setCity] = useState('');
  const [weather, setWeather] = useState<CityWeather>();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);


	const getWeather = (e: { preventDefault: () => void }) => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
    e.preventDefault()
    axios.get(url).then((response) => {
      console.log(response.data)
      setWeather(response.data)
    }).catch(
      function () {
        setIsError(true)
      }
    )
    setLoading(false);
    
	};

  if(loading){
    return <Spinner/>
  } else{
    return (
      <div className="flex justify-center items-center h-screen flex-col">
        <div>
          <h2 className="font-raleway text-5xl font-extrabold mb-10 sm:text-4xl">
            How's the weather?
          </h2>
        </div>
        <div className="flex sm:flex-col">
          <input
            type="text"
            placeholder="City..."
            className="outline-indigo mr-6 rounded-sm shadow-xl pl-4 w-64 h-12 font-raleway sm:mr-0 sm:mb-4 sm:py-1"
            onChange={e => setCity(e.target.value)}
          />
          <button
            onClick={getWeather}
            className="outline-none border-none font-bold font-raleway px-12 py-2 rounded-sm bg-indigo-300 text-gray-700 transition duration-300 hover:bg-indigo-600 hover:text-white"
            hidden={weather ? true : false}
          >
            Search
          </button>
          {isError && <div className='text-red-500'>There was an error. Are you sure that city exists?</div>}
          {weather && <WeatherComponent data={weather}/>}
          <a href='/' hidden={weather ? false : true} className='outline-none border-none font-bold font-raleway px-12 py-2 rounded-sm bg-indigo-300 text-gray-700 transition duration-300 hover:bg-indigo-600 hover:text-white'>Back</a>
        </div>
      </div>
    );
  }
}