import Model from "./99.core/interface/model.interface";

import AaadsUnit from "./00.aaads.unit/aaads.unit";
import SceneUnit from "./01.scene.unit/scene.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Aaads from "./00.aaads.unit/fce/aaads.interface";
import { AaadsModel } from "./00.aaads.unit/aaads.model";
import Scene from "./01.scene.unit/fce/scene.interface";
import { SceneModel } from "./01.scene.unit/scene.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [AaadsUnit,SceneUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromAaads from "./00.aaads.unit/aaads.reduce";
import * as reduceFromScene from "./01.scene.unit/scene.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 aaads : reduceFromAaads.reducer, 
scene : reduceFromScene.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 aaads : Aaads = new AaadsModel();
scene : Scene = new SceneModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
