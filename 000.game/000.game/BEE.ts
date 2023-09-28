import Model from "./99.core/interface/model.interface";

import GameUnit from "./00.game.unit/game.unit";
import ConsoleUnit from "./01.console.unit/console.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Game from "./00.game.unit/fce/game.interface";
import { GameModel } from "./00.game.unit/game.model";
import Console from "./01.console.unit/fce/console.interface";
import { ConsoleModel } from "./01.console.unit/console.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [GameUnit,ConsoleUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromGame from "./00.game.unit/game.reduce";
import * as reduceFromConsole from "./01.console.unit/console.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 game : reduceFromGame.reducer, 
console : reduceFromConsole.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 game : Game = new GameModel();
console : Console = new ConsoleModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
