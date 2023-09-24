import * as clone from "clone-deep";
import * as Act from "./weather.action";
import { WeatherModel } from "./weather.model";
import * as Buzz from "./weather.buzzer";
import State from "../99.core/state";

export function reducer(model: WeatherModel = new WeatherModel(), act: Act.Actions, state?: State) {
   switch (act.type) {

      case Act.UPDATE_WEATHER:
         return Buzz.updateWeather(clone(model), act.bale, state);

      case Act.INIT_WEATHER:
         return Buzz.initWeather(clone(model), act.bale, state);

      case Act.READ_WEATHER:
         return Buzz.readWeather(clone(model), act.bale, state);

      case Act.LIST_WEATHER:
         return Buzz.listWeather(clone(model), act.bale, state);


      case Act.SET_WORKING_WEATHER:
         return Buzz.setWorkingWeather(clone(model), act.bale, state);


      case Act.PROCESS_WEATHER:
         return Buzz.processWeather(clone(model), act.bale, state);


      case Act.PROCESS_WEATHER_HOUR:
         return Buzz.processWeatherHour(clone(model), act.bale, state);


      case Act.PROCESS_WEATHER_DAY:
         return Buzz.processWeatherDay(clone(model), act.bale, state);

      case Act.PROCESS_WEATHER_BEAM:
         return Buzz.processWeatherBeam(clone(model), act.bale, state);


      default:
         return model;
   }
}
