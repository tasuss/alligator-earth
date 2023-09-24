import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActWet from "../../07.weather.unit/weather.action";
import * as ActBus from "../../99.bus.unit/bus.action";

export const initWeather = async (cpy: WeatherModel, bal: WeatherPivotBit, ste: State) => {

  var bit;
  var lst = [];

  bit = await ste.hunt(ActBus.INIT_BUS, { lst: [ActWet], dat: bal.dat })

  if (bal.val == 1) bit = await ste.hunt(ActMnu.INIT_MENU)

  updateWeather(cpy, bal, ste)

  if (bal.slv != null) bal.slv({ intBit: { idx: "init-weather" } });
  return cpy;
};

export const updateWeather = (cpy: WeatherModel, bal: WeatherPivotBit, ste: State) => {
  return cpy;
};

export const processWeather = async (cpy: WeatherModel, bal: WeatherPivotBit, ste: State) => {

}

export const processWeatherBeam = async (cpy: WeatherModel, bal: WeatherPivotBit, ste: State) => {

  return cpy;
};

export const processWeatherYear = async (cpy: WeatherModel, bal: WeatherPivotBit, ste: State) => {

  var beam: WeatherYearBit = { idx: null, src: null, lst: []};
  if (bal.val == null) bal.val = 10;
  if (bal.val == 20) debugger
  
  //reading the folder of the year
  var loc = cpy.weatherSrc + '/' + cpy.workingTitle + '/' + bal.val;
  var list = await FS.readdir(loc)
  var out = []

  list.forEach(async (a, b) => {
    var now = loc + '/' + a;
    //beam.lst.push(day )
  })

}

export const processWeatherDay = async (cpy: WeatherModel, bal: WeatherPivotBit, ste: State) => {

  var bit, src, ico, wet;
  var sunrise, sunset, moon, dew; 

  var dat = bal.dat

  var itm = await FS.readJson(bal.src)

    var year = 2000 + bal.val;
    var day =+ 1
    var dayStr = String(day).padStart(2, "0");
    var timecode = year + '-' + dayStr;
  
    //bit = await cpy.port.time.formatTime( {src:timecode} )
    var idx = S( bit.tmeBit.src).slugify().s
    var lst = idx.split('-') 
    lst = lst.slice(0, 3)
    lst[1] =  String(lst[1]).padStart(2, "0");

    idx = lst.join('-')

    src = dat.daily.data[0].summary;
    ico = dat.daily.data[0].icon;
    wet = dat.daily.data[0].precipType;
    sunrise = dat.daily.data[0].sunriseTime;
    sunset = dat.daily.data[0].sunsetTime;
    moon = dat.daily.data[0].moonPhase;
    dew = dat.daily.data[0].dewPoint;
      
  //  var day:WeatherDayBit = { idx, src, ico, wet, sunrise, sunset, moon, dew, lst:[] }

    dat.hourly.data.forEach((b) => {

      var hour: WeatherHourBit = {
        idx: b.idx,
        src: b.summary,
        temp: b.temperature,
        windSpeed: b.windSpeed,
        windGust: b.windGust,
        windBear: b.windBearing,
        water: b.precipType,
        waterVal: b.precipIntensity,
        cloud: b.cloudCover
      }
      //day.lst.push(hour)
    })


}

export const processWeatherHour = async (cpy: WeatherModel, bal: WeatherPivotBit, ste: State) => {

  var lst = []
  if ( bal.lst == null ) bal.lst = []

  bal.lst.forEach((b) => {

    var hour: WeatherHourBit = {
      idx: b.idx,
      src: b.summary,
      temp: b.temperature,
      windSpeed: b.windSpeed,
      windGust: b.windGust,
      windBear: b.windBearing,
      water: b.precipType,
      waterVal: b.precipIntensity,
      cloud: b.cloudCover
    }

    lst.push( hour)

  })

  if (bal.slv != null) bal.slv({ wetBit: { idx: "process-weather-hour", lst } });

  return //bit
  
}

export const readWeather = (cpy: WeatherModel, bal: WeatherPivotBit, ste: State) => {
  return cpy;
};

export const setWorkingWeather = (cpy: WeatherModel, bal: WeatherPivotBit, ste: State) => {
  cpy.workingDex = bal.val
  cpy.workingTitle = bal.src

  if (bal.slv != null) bal.slv({ wetBit: { idx: "set-working-weather", bal } });

  return cpy;
};



export const listWeather = async (cpy: WeatherModel, bal: WeatherPivotBit, ste: State) => {

  var list = await FS.readdir(cpy.weatherSrc)
  var lst = []
  list.forEach((a) => {

    if (a == '.git') return
    if (a == '.gitignore') return
    lst.push(a)

  })

  if (bal.slv != null) bal.slv({ wetBit: { idx: "list-weather", lst } });

  return cpy;
};


import { WeatherModel } from "../weather.model";
import WeatherPivotBit from "../fce/weather-pivot.bit";
import State from "../../99.core/state";
import * as FS from "fs-extra";
import * as S from "string";

import WeatherBeamBit from "../fce/weather-beam.bit";
import WeatherYearBit from "../fce/weather-beam.bit";
import WeatherDayBit from "../fce/weather-day.bit";
import WeatherHourBit from "../fce/weather-hour.bit";