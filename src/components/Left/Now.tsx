import { context } from '../../App'
import { getPostfix, getMonth, getWeekDay, getImage } from '../../functions/postfix';
//@ts-ignore
import wind from '../../assets/wind.png'
//@ts-ignore
import humidity from '../../assets/humidity.png'
//@ts-ignore
import rain from '../../assets/rain.png'
import { useContext } from 'react';



const Now = () => {
    const cont = useContext(context);
    const { weather } = cont!;
    const { location, current } = weather

    const date = new Date(location.localtime_epoch * 1000);

    return (
        <div className='now'>
            <div className="now-image">
                <img src={getImage(current.condition.code)} alt="" />
            </div>
            <div className="now-temp">
                <p>{current.temp_c} &deg;</p>
            </div>
            <div className="now-date">
                <span>{getPostfix(date.getDate())} {getMonth(date.getMonth()).slice(0, 3)} '{date.getFullYear() - 2000} </span>
                <p>{getWeekDay(date.getDay())}  {date.getHours()}:{date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes()}</p   >
            </div>
            <div className="now-stats">
                <div className="now-stats-wind">
                    <img src={wind} alt="" />
                    <p> wind {current.wind_kph} kh / h</p>
                </div>
                <div className="now-stats-humidity">
                    <img src={humidity} alt="" />
                    hum {current.humidity} %
                </div>
                <div className="now-stats-rain">
                    <img src={rain} alt="" />
                    rain {current.cloud} %
                </div>
            </div>

        </div>
    )
}

export default Now