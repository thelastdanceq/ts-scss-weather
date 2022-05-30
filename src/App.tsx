import React, { createContext, useEffect, useState } from 'react'
import Left from './components/Left/Left'
import Right from './components/Right/Right'
import { getForecast } from './functions/api'
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
} | null>(null);

export const App = () => {
  const [weather, setWeather] = useState<IWeather>({} as IWeather)
  useEffect(() => {
    
    (getForecast("Коротыч").then(data => {setWeather(data)}
    ));
  }, [])


  return (

    <div className="app">
      <context.Provider value={{ weather }}>
        <Left />
        <Right />
      </context.Provider>

    </div>
  )
}