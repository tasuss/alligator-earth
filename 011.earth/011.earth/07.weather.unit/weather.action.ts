import { Action } from "../99.core/interface/action.interface";
import  WeatherPivotBit  from "./fce/weather-pivot.bit";

export const INIT_WEATHER = "[Weather action] Init Weather";
export class InitWeather implements Action {
 readonly type = INIT_WEATHER;
 constructor(public bale: WeatherPivotBit) {}
}

export const SET_WORKING_WEATHER = "[Weather action] Set Working Weather";
export class SetWorkingWeather implements Action {
 readonly type = SET_WORKING_WEATHER;
 constructor(public bale: WeatherPivotBit) {}
}

export const UPDATE_WEATHER = "[Weather action] Update Weather";
export class UpdateWeather implements Action {
 readonly type = UPDATE_WEATHER;
 constructor(public bale: WeatherPivotBit) {}
}

export const PROCESS_WEATHER = "[Weather action] Process Weather";
export class ProcessWeather implements Action {
 readonly type = PROCESS_WEATHER;
 constructor(public bale: WeatherPivotBit) {}
}

export const PROCESS_WEATHER_BEAM = "[Weather action] Process Weather Beam";
export class ProcessWeatherBeam implements Action {
 readonly type = PROCESS_WEATHER_BEAM;
 constructor(public bale: WeatherPivotBit) {}
}

export const PROCESS_WEATHER_DAY = "[Weather action] Process Weather Day";
export class ProcessWeatherDay implements Action {
 readonly type = PROCESS_WEATHER_DAY;
 constructor(public bale: WeatherPivotBit) {}
}

export const PROCESS_WEATHER_HOUR = "[Weather action] Process Weather Hour";
export class ProcessWeatherHour implements Action {
 readonly type = PROCESS_WEATHER_HOUR;
 constructor(public bale: WeatherPivotBit) {}
}


export const READ_WEATHER = "[Weather action] Read Weather";
export class ReadWeather implements Action {
 readonly type = READ_WEATHER;
 constructor(public bale: WeatherPivotBit) {}
}

export const LIST_WEATHER = "[Weather action] List Weather";
export class ListWeather implements Action {
 readonly type = LIST_WEATHER;
 constructor(public bale: WeatherPivotBit) {}
}



export type Actions = 
|SetWorkingWeather |  ListWeather  
| ProcessWeather | ProcessWeatherBeam | ProcessWeatherDay | ProcessWeatherHour 
| InitWeather | UpdateWeather | ReadWeather ;
