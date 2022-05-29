import React from 'react'
import { IWeather } from '../../App';
import Now from './Now'
import WeekForecast from './WeekForecast'

type Props = {
    weather: IWeather;
}

const Left = (props: Props) => {
    const { location, current } = props.weather;
    return (
        <div className='left'>
            {
                current && location
                    ? <Now current={current} location={location} />
                    : <h1>loading...</h1>
            }
            {/* <WeekForecast /> */}
        </div>
    )
}

export default Left