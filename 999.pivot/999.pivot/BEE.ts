import Model from "./99.core/interface/model.interface";

import PivotUnit from "./00.pivot.unit/pivot.unit";
import TerminalUnit from "./01.terminal.unit/terminal.unit";
import UnitUnit from "./02.unit.unit/unit.unit";
import DiskUnit from "./96.disk.unit/disk.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Pivot from "./00.pivot.unit/fce/pivot.interface";
import { PivotModel } from "./00.pivot.unit/pivot.model";
import Terminal from "./01.terminal.unit/fce/terminal.interface";
import { TerminalModel } from "./01.terminal.unit/terminal.model";
import Unit from "./02.unit.unit/fce/unit.interface";
import { UnitModel } from "./02.unit.unit/unit.model";
import Disk from "./96.disk.unit/fce/disk.interface";
import { DiskModel } from "./96.disk.unit/disk.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [PivotUnit,TerminalUnit,UnitUnit,DiskUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromPivot from "./00.pivot.unit/pivot.reduce";
import * as reduceFromTerminal from "./01.terminal.unit/terminal.reduce";
import * as reduceFromUnit from "./02.unit.unit/unit.reduce";
import * as reduceFromDisk from "./96.disk.unit/disk.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 pivot : reduceFromPivot.reducer, 
terminal : reduceFromTerminal.reducer, 
unit : reduceFromUnit.reducer, 
disk : reduceFromDisk.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 pivot : Pivot = new PivotModel();
terminal : Terminal = new TerminalModel();
unit : Unit = new UnitModel();
disk : Disk = new DiskModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
