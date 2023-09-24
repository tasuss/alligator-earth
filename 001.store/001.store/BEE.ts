import Model from "./99.core/interface/model.interface";

import ControlUnit from "./00.control.unit/control.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Control from "./00.control.unit/fce/control.interface";
import { ControlModel } from "./00.control.unit/control.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [ControlUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromControl from "./00.control.unit/control.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 control : reduceFromControl.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 control : Control = new ControlModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
