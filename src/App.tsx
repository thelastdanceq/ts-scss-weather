import React, { createContext, useEffect, useState } from 'react'
import Left from './components/Left/Left'
import Loader from './components/Loader'
import Right from './components/Right/Right'
import { getForecast, getForecastFor7Days } from './functions/api'
export interface ILocation {
  "name": string,
  "country": string,
  "lat": number,
  "lon": number,
  "localtime_epoch": number,

}
export interface ICurrent {
  "last_updated_epoch": number,
  "temp_c": number,
  "condition": {
    "text": string,
    "icon": string,
    "code": number,
  },
  "wind_kph": number,
  humidity: number,
  cloud: number,
}
export interface IForecastDay {
  "date_epoch": number,
  day: {
    "avgtemp_c": number,
    "condition": {
      "text": string,
      "icon": string,
      "code": number,
    },
    "daily_chance_of_rain": number,
  }
  hour: {
    "time_epoch": number,
    "temp_c": number,
    "condition": {
      "text": string,
      "icon": string,
      "code": number,
    },
    "chance_of_rain": 67,
  }[]


}
export interface IForecast {
  forecastday: IForecastDay[]
}

export interface IWeather {
  location: ILocation;
  current: ICurrent;
  forecast: IForecast;
}

export const context = createContext<{
  weather: IWeather;
  setWeather: React.Dispatch<React.SetStateAction<IWeather>>;
} | null>(null);

export const App = () => {
  const [weather, setWeather] = useState<IWeather>({} as IWeather)
  useEffect(() => {
    getForecast("Коломыя")
      .then(firstdata => (firstdata))
      .then((fulldata) => {
        getForecastFor7Days("Коломыя").then(data => {
          const asd: IWeather = JSON.parse(JSON.stringify(fulldata))
          asd.forecast.forecastday = [...asd.forecast.forecastday, ...data]
          setWeather(asd);
        })
      })

  }, [])


  return (

    <div className="app">
      <context.Provider value={{ weather, setWeather }}>
        {
          weather.current ?
            <>
              <Left />
              <Right />
            </> : <Loader />
        }

      </context.Provider>

    </div>
  )
}