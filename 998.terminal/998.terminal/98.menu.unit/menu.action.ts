import { ConsoleModel } from "998.terminal/03.console.unit/console.model";
import { Action } from "../99.core/interface/action.interface";
import MenuBit from "./fce/menu.bit";

export const INIT_MENU = "[Menu action] Init Menu";
export class InitMenu implements Action {
  readonly type = INIT_MENU;
  constructor(public bale: MenuBit) { }
}

export const UPDATE_MENU = "[Menu action] Update Menu";
export class UpdateMenu implements Action {
  readonly type = UPDATE_MENU;
  constructor(public bale: MenuBit) { }
}


export const TEST_MENU = "[Menu action] Test Menu";
export class TestMenu implements Action {
  readonly type = TEST_MENU;
  constructor(public bale: MenuBit) { }
}

export const CLOSE_MENU = "[Menu action] Close Menu";
export class CloseMenu implements Action {
  readonly type = CLOSE_MENU;
  constructor(public bale: MenuBit) { }
}

export const CONSOLE_MENU = "[Shade action] Console Menu";
 export class ConsoleMenu implements Action {
 readonly type = CONSOLE_MENU;
 constructor(public bale: MenuBit) {}
 }
 
export const CANAVS_MENU = "[Canvas action] Canvas Menu";
 export class CanvasMenu implements Action {
 readonly type = CANAVS_MENU;
 constructor(public bale: MenuBit) {}
 }

 export const CONTAINER_MENU = "[Visage action] Container Menu";
 export class ContainerMenu implements Action {
 readonly type = CONTAINER_MENU;
 constructor(public bale: MenuBit) {}
 }
 

 
export type Actions = InitMenu | UpdateMenu | TestMenu | CloseMenu
| ConsoleMenu
| CanvasMenu
| ContainerMenu
| CanvasMenu
