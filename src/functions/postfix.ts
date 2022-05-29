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
    switch (code) {
        case 1003 || 1006:
            return cloude
        case 1063 || 1180 || 1198 || 1201 || 1240 || 1243 || 1246:
            return littlerain
        case 1183 || 1186 || 1189 || 1192 || 1195 || 1273 || 1276:
            return rain
        case 1066 || 1210 || 1213 || 1216 || 1222 || 1255 || 1258 || 1279 || 1282:
            return littlesnow
        case 1114 || 1210 || 1213 || 1219 || 1225:
            return snow
        case 1135 || 1147 || 1030 || 1117 || 1147:
            return mist
        case 1090:
            return overcast
        case 1000:
            return sunny
        case 1087 || 1273 || 1276 || 1279 || 1282:
            return thunder
        case 1072 || 1150 || 1153 || 1168 || 1171:
            return wetsnow

        default:
            return common;
    }
}