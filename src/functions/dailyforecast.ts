import { now } from "moment";
import { IForecastDay, IForecastHour } from "../App";

export const getDailyForecast = (arr: IForecastDay[]): IForecastHour[] => {
    const dayToMilisecs = 86_400_000
    const res = [...arr[0].hour, ...arr[1].hour].filter(el => {
        return el.time_epoch * 1000 >= now() && el.time_epoch * 1000 <= now() + dayToMilisecs;
    })
    return res;
}