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

export const EARTH_MENU = "[Earth action] Earth Menu";
 export class EarthMenu implements Action {
 readonly type = EARTH_MENU;
 constructor(public bale: MenuBit) {}
 }
 
export const COLOR_MENU = "[Color action] Color Menu";
 export class ColorMenu implements Action {
 readonly type = COLOR_MENU;
 constructor(public bale: MenuBit) {}
 }

 export const CLOCK_MENU = "[Clock action] Clock Menu";
 export class ClockMenu implements Action {
 readonly type = CLOCK_MENU;
 constructor(public bale: MenuBit) {}
 }
 
export type Actions = InitMenu | UpdateMenu | TestMenu | CloseMenu
| EarthMenu
| ColorMenu
| ClockMenu