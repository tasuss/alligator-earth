
export default interface WeatherHourBit {
    idx: string; //time
    src: string //summary
    temp: number
    windSpeed: number;
    windGust: number;
    windBear: number;
    water?: string;
    waterVal?: number;
    cloud:number
}
