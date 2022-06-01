import React, { KeyboardEvent, useContext, useState } from 'react'
import { context, IWeather } from '../../App'
//@ts-ignore
import locationimg from "../../assets/location.png"
//@ts-ignore
import searchImg from "../../assets/search.png"
import { getForecast, getForecastFor7Days } from '../../functions/api'
type Props = {}

const Search = (props: Props) => {

  const cont = useContext(context);
  const { weather, setWeather } = cont!
  const { location } = weather;
  const [search, setSearch] = useState('')


  const keyDownHandler = (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      getForecast(search)
        .then(firstdata => (firstdata))
        .then((fulldata: IWeather) => {
          getForecastFor7Days(search).then(data => {
            if (fulldata.forecast) {
              localStorage.setItem('city', search);
              const asd: IWeather = JSON.parse(JSON.stringify(fulldata))
              asd.forecast.forecastday = [...asd.forecast.forecastday, ...data]
              setWeather(asd);
            }
            setSearch('')

          })
        })
    }
  }


  const searchHandler = () => {
    getForecast(search)
      .then(firstdata => (firstdata))
      .then((fulldata: IWeather) => {
        getForecastFor7Days(search).then(data => {
          if (fulldata.forecast) {
            const asd: IWeather = JSON.parse(JSON.stringify(fulldata))
            asd.forecast.forecastday = [...asd.forecast.forecastday, ...data]
            localStorage.setItem('city', search);
            setWeather(asd);
          }
          setSearch('')

        })
      })
  }
  return (
    <>
      {
        location?.name && location?.country ?
          <div className="right-search">
            <div className="right-search-img-div" >
              <img src={locationimg} alt="" />
            </div>
            <input
              onKeyDown={keyDownHandler}
              type="search"
              placeholder={`${location.name} , ${location.country}`}
              value={search}
              onInput={(e: React.FormEvent<HTMLInputElement>) => {
                setSearch(e.currentTarget.value)
              }} />
            <div onClick={searchHandler} className="right-search-button">
              <img src={searchImg} alt="" />
            </div>
          </div>
          : <h2>loading ...</h2>
      }
    </>
  )
}

export default Search