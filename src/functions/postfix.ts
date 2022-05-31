// @ts-ignore
import cloude from '../assets/clody.png'
// @ts-ignore
import littlerain from '../assets/littlerain.png'
// @ts-ignore
import littlesnow from '../assets/littlesnow.png'
// @ts-ignore
import common from '../assets/common.png'
// @ts-ignore
import mist from '../assets/mist.png'
// @ts-ignore
import overcast from '../assets/overcast.png'
// @ts-ignore
import rain from '../assets/rain.png'
// @ts-ignore
import snow from '../assets/snow.png'
// @ts-ignore
import sunny from '../assets/sunny.png'
// @ts-ignore
import thunder from '../assets/thunder.png'
// @ts-ignore
import wetsnow from '../assets/wetsnow.png'
// @ts-ignore
export const getPostfix = (num: number): string => {
    switch (num) {
        case 1:
            return `${num}st`
        case 2:
            return `${num}nd`
        case 3:
            return `${num}rd`

        default:
            return `${num}th`;
    }
}
export const getMonth = (num: number): string => {
    return ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ][num]
}

export const getWeekDay = (num: number): string => {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "SaturDay",
    ][num]
}

export const getImage = (code: number): string => {
    const heavyRain = [1183, 1186, 1189, 1192, 1195, 1273, 1276];
    const litRain = [1240, 1063, 1180, 1198, 1201, 1243, 1246];
    const clods = [1003, 1006];
    const litSnow = [1066, 1210, 1213, 1216, 1222, 1255, 1258, 1279, 1282]
    const heavySnow = [1114, 1210, 1213, 1219, 1225]
    const misty = [1135, 1147, 1030, 1117];
    const thund = [1087, 1273, 1276, 1279, 1282];
    const wetSnow = [1072, 1150, 1153, 1168, 1171]

    if (heavyRain.includes(code)) return rain;
    if (litRain.includes(code)) return littlerain;
    if (clods.includes(code)) return cloude;
    if (litSnow.includes(code)) return littlesnow;
    if (heavySnow.includes(code)) return snow;
    if (misty.includes(code)) return mist;
    if (code === 1009) return overcast;
    if (code === 1000) return sunny;
    if (thund.includes(code)) return thunder;
    if (wetSnow.includes(code)) return wetsnow;

    return common;
}