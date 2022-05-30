import React, { useContext } from 'react'
import { context } from '../../App';
import Now from './Now'
import WeekForecast from './WeekForecast'


const Left = () => {
    const cont = useContext(context);
    let { weather } = cont!;
    const { current, location } = weather;
    return (
        <div className='left'>
            {
                current && location
                    ? <Now current={current} location={location} />
                    : <h1>loading...</h1>
            }
            <WeekForecast />
        </div>
    )
}

export default Left