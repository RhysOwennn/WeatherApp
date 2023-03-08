import React from 'react'
import Image from 'next/image';
import { CityWeather } from '../pages';

// city name
// weather icon
// tempreture
// humidity
// wind speed
// high and low temps ofr the day


const Weather = (data: CityWeather) => {
    console.log("data", data)
    console.log("ICON", data.list?.[0].weather[0].icon)
    return <div>
        Weather
        <div>
            <Image src={`https://openweathermap.org/img/wn/${data.list?.[0].weather[0].icon}@2x.png`} alt={'/'}  width='100' height={'100'}/>
        </div>
    </div>
}

export default Weather