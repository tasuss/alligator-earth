import WeatherDayBit from "./weather-day.bit";
import WeatherHourBit from "./weather-hour.bit";

export default interface WeatherYearBit {
 idx:string; //date
 src:string; //summary
 lst: WeatherDayBit[]
}
