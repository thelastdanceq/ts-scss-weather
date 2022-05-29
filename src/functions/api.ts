import axios from "axios"

export const getForecast = async (q: string = "Магадан") => {

    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=86097b324367485789e73459221705&q=${q}&days=7`)

    return response.data;
}