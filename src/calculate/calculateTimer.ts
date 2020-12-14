function calculateTimer(timeInSeconds: number): Array<number|string> {
let hours: number=Math.floor(timeInSeconds/3600)
let minute: number=Math.floor((timeInSeconds-(hours*3600)
)/60)
let seconds: number=(timeInSeconds-(hours*3600)-(minute*60))
let hoursFormate=hours<10? `0${hours}`: hours
let minuteFormate=minute<10? `0${minute}`: minute
let secondsFormate=seconds<10? `0${seconds}`: seconds
    return [
        hoursFormate,
        minuteFormate,
        secondsFormate
    ];
}
export default calculateTimer;
