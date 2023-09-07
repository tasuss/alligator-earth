import Model from "./99.core/interface/model.interface";

import TerminalUnit from "./00.terminal.unit/terminal.unit";
import BufferUnit from "./01.buffer.unit/buffer.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Terminal from "./00.terminal.unit/fce/terminal.interface";
import { TerminalModel } from "./00.terminal.unit/terminal.model";
import Buffer from "./01.buffer.unit/fce/buffer.interface";
import { BufferModel } from "./01.buffer.unit/buffer.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [TerminalUnit,BufferUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromTerminal from "./00.terminal.unit/terminal.reduce";
import * as reduceFromBuffer from "./01.buffer.unit/buffer.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 terminal : reduceFromTerminal.reducer, 
buffer : reduceFromBuffer.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 terminal : Terminal = new TerminalModel();
buffer : Buffer = new BufferModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
