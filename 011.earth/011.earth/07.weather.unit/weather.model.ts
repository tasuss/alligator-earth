import Weather from "./fce/Weather.interface";
import WeatherBit from "./fce/weather.interface";

export class WeatherModel implements Weather {
   workingTitle: string = 'Valdosta--GA'
   workingDex: number = 0;

   weatherSrc: string = '../weather/'
   //idx:string;
   //weatherBitList: WeatherBit[] = [];
   //weatherBits: any = {};
}
