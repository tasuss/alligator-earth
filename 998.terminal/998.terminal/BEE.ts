import Model from "./99.core/interface/model.interface";

import TerminalUnit from "./00.terminal.unit/terminal.unit";
import CanvasUnit from "./02.canvas.unit/canvas.unit";
import InputUnit from "./04.input.unit/input.unit";
import ChoiceUnit from "./05.choice.unit/choice.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Terminal from "./00.terminal.unit/fce/terminal.interface";
import { TerminalModel } from "./00.terminal.unit/terminal.model";
import Canvas from "./02.canvas.unit/fce/canvas.interface";
import { CanvasModel } from "./02.canvas.unit/canvas.model";
import Input from "./04.input.unit/fce/input.interface";
import { InputModel } from "./04.input.unit/input.model";
import Choice from "./05.choice.unit/fce/choice.interface";
import { ChoiceModel } from "./05.choice.unit/choice.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [TerminalUnit,CanvasUnit,InputUnit,ChoiceUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromTerminal from "./00.terminal.unit/terminal.reduce";
import * as reduceFromCanvas from "./02.canvas.unit/canvas.reduce";
import * as reduceFromInput from "./04.input.unit/input.reduce";
import * as reduceFromChoice from "./05.choice.unit/choice.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 terminal : reduceFromTerminal.reducer, 
canvas : reduceFromCanvas.reducer, 
input : reduceFromInput.reducer, 
choice : reduceFromChoice.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 terminal : Terminal = new TerminalModel();
canvas : Canvas = new CanvasModel();
input : Input = new InputModel();
choice : Choice = new ChoiceModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
