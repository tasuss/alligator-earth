import Model from "./99.core/interface/model.interface";

import SpaceUnit from "./00.space.unit/space.unit";
import FocusUnit from "./01.focus.unit/focus.unit";
import GeojsonUnit from "./02.geojson.unit/geojson.unit";
import HexmapUnit from "./03.hexmap.unit/hexmap.unit";
import PivotUnit from "./96.pivot.unit/pivot.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Space from "./00.space.unit/fce/space.interface";
import { SpaceModel } from "./00.space.unit/space.model";
import Focus from "./01.focus.unit/fce/focus.interface";
import { FocusModel } from "./01.focus.unit/focus.model";
import Geojson from "./02.geojson.unit/fce/geojson.interface";
import { GeojsonModel } from "./02.geojson.unit/geojson.model";
import Hexmap from "./03.hexmap.unit/fce/hexmap.interface";
import { HexmapModel } from "./03.hexmap.unit/hexmap.model";
import Pivot from "./96.pivot.unit/fce/pivot.interface";
import { PivotModel } from "./96.pivot.unit/pivot.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [SpaceUnit,FocusUnit,GeojsonUnit,HexmapUnit,PivotUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromSpace from "./00.space.unit/space.reduce";
import * as reduceFromFocus from "./01.focus.unit/focus.reduce";
import * as reduceFromGeojson from "./02.geojson.unit/geojson.reduce";
import * as reduceFromHexmap from "./03.hexmap.unit/hexmap.reduce";
import * as reduceFromPivot from "./96.pivot.unit/pivot.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 space : reduceFromSpace.reducer, 
focus : reduceFromFocus.reducer, 
geojson : reduceFromGeojson.reducer, 
hexmap : reduceFromHexmap.reducer, 
pivot : reduceFromPivot.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 space : Space = new SpaceModel();
focus : Focus = new FocusModel();
geojson : Geojson = new GeojsonModel();
hexmap : Hexmap = new HexmapModel();
pivot : Pivot = new PivotModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
