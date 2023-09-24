import Model from "./99.core/interface/model.interface";

import EarthUnit from "./00.earth.unit/earth.unit";
import ClockUnit from "./01.clock.unit/clock.unit";
import FateUnit from "./02.fate.unit/fate.unit";
import BeingUnit from "./03.being.unit/being.unit";
import ColorUnit from "./04.color.unit/color.unit";
import SpectrumUnit from "./05.spectrum.unit/spectrum.unit";
import RiskUnit from "./06.risk.unit/risk.unit";
import WeatherUnit from "./07.weather.unit/weather.unit";
import PlotUnit from "./08.plot.unit/plot.unit";
import PivotUnit from "./96.pivot.unit/pivot.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Earth from "./00.earth.unit/fce/earth.interface";
import { EarthModel } from "./00.earth.unit/earth.model";
import Clock from "./01.clock.unit/fce/clock.interface";
import { ClockModel } from "./01.clock.unit/clock.model";
import Fate from "./02.fate.unit/fce/fate.interface";
import { FateModel } from "./02.fate.unit/fate.model";
import Being from "./03.being.unit/fce/being.interface";
import { BeingModel } from "./03.being.unit/being.model";
import Color from "./04.color.unit/fce/color.interface";
import { ColorModel } from "./04.color.unit/color.model";
import Spectrum from "./05.spectrum.unit/fce/spectrum.interface";
import { SpectrumModel } from "./05.spectrum.unit/spectrum.model";
import Risk from "./06.risk.unit/fce/risk.interface";
import { RiskModel } from "./06.risk.unit/risk.model";
import Weather from "./07.weather.unit/fce/weather.interface";
import { WeatherModel } from "./07.weather.unit/weather.model";
import Plot from "./08.plot.unit/fce/plot.interface";
import { PlotModel } from "./08.plot.unit/plot.model";
import Pivot from "./96.pivot.unit/fce/pivot.interface";
import { PivotModel } from "./96.pivot.unit/pivot.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [EarthUnit,ClockUnit,FateUnit,BeingUnit,ColorUnit,SpectrumUnit,RiskUnit,WeatherUnit,PlotUnit,PivotUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromEarth from "./00.earth.unit/earth.reduce";
import * as reduceFromClock from "./01.clock.unit/clock.reduce";
import * as reduceFromFate from "./02.fate.unit/fate.reduce";
import * as reduceFromBeing from "./03.being.unit/being.reduce";
import * as reduceFromColor from "./04.color.unit/color.reduce";
import * as reduceFromSpectrum from "./05.spectrum.unit/spectrum.reduce";
import * as reduceFromRisk from "./06.risk.unit/risk.reduce";
import * as reduceFromWeather from "./07.weather.unit/weather.reduce";
import * as reduceFromPlot from "./08.plot.unit/plot.reduce";
import * as reduceFromPivot from "./96.pivot.unit/pivot.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 earth : reduceFromEarth.reducer, 
clock : reduceFromClock.reducer, 
fate : reduceFromFate.reducer, 
being : reduceFromBeing.reducer, 
color : reduceFromColor.reducer, 
spectrum : reduceFromSpectrum.reducer, 
risk : reduceFromRisk.reducer, 
weather : reduceFromWeather.reducer, 
plot : reduceFromPlot.reducer, 
pivot : reduceFromPivot.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 earth : Earth = new EarthModel();
clock : Clock = new ClockModel();
fate : Fate = new FateModel();
being : Being = new BeingModel();
color : Color = new ColorModel();
spectrum : Spectrum = new SpectrumModel();
risk : Risk = new RiskModel();
weather : Weather = new WeatherModel();
plot : Plot = new PlotModel();
pivot : Pivot = new PivotModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
