import axios, { AxiosResponse } from "axios"
import moment from "moment";
import { IForecastDay, IWeather } from "../App";

export const getForecast = async (q: string = "Магадан") => {

    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=86097b324367485789e73459221705&q=${q}&days=7`)

    return response.data;
}


export const getForecastFor7Days = async (q: string = "Магадан") => {
    const fore: IForecastDay[] = [];


    for (let i = 3; i < 7; i++) {
        const response: AxiosResponse<IWeather> = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=86097b324367485789e73459221705&q=${q}&dt=${[moment().add(i, "days").format("L").split('/')[2], moment().add(i, "days").format("L").split('/')[0], moment().add(i, "days").format("L").split('/')[1]].join('-')}`);
        fore.push(response.data.forecast.forecastday[0])
    }



    return fore;
}