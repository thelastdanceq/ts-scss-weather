import React from 'react'
import DailyForecast from './DailyForecast'
import Search from './Serch'

type Props = {}

const Right = (props: Props) => {
    return (
        <div className='right'>
            <Search />
            {/* <DailyForecast /> */}
        </div>
    )
}

export default Right