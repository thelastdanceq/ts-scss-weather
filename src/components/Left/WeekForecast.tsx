import React, { useContext } from 'react'
import { context } from '../../App'
import WeekForecastList from './WeekForecastList'


const WeekForecast = () => {
    const cont = useContext(context);
    const { weather } = cont!;
    const { forecast } = weather;


    return (
        <div className='weekforecast'>{
            forecast?.forecastday ?
                <WeekForecastList forecast={forecast.forecastday} />
                : <h2>loading...</h2>
        }
        </div>
    )
}
export default WeekForecast