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

export const TIME_MENU = "[Time action] Time Menu";
export class TimeMenu implements Action {
  readonly type = TIME_MENU;
  constructor(public bale: MenuBit) { }
}

export const FOCUS_MENU = "[Focus action] Focus Menu";
export class FocusMenu implements Action {
  readonly type = FOCUS_MENU;
  constructor(public bale: MenuBit) { }
}

export const FOCUS_PLAY_MENU = "[Focus action] Focus Play Menu";
export class FocusPlayMenu implements Action {
  readonly type = FOCUS_PLAY_MENU;
  constructor(public bale: MenuBit) { }
}

export const CREATE_MENU = "[Create action] Create Menu";
export class CreateMenu implements Action {
  readonly type = CREATE_MENU;
  constructor(public bale: MenuBit) { }
}

export const HEXMAP_MENU = "[Hexmap action] Hexmap Menu";
export class HexmapMenu implements Action {
  readonly type = HEXMAP_MENU;
  constructor(public bale: MenuBit) { }
}

export const CREATE_HEXMAP_MENU = "[Hexmap action] Create Hexmap Menu";
export class CreateHexmapMenu implements Action {
  readonly type = CREATE_HEXMAP_MENU;
  constructor(public bale: MenuBit) { }
}

export const RENDER_MENU = "[Render action] Render Menu";
export class RenderMenu implements Action {
  readonly type = RENDER_MENU;
  constructor(public bale: MenuBit) { }
}

export const YIELD_MENU = "[Render action] Yield Menu";
export class YieldMenu implements Action {
  readonly type = YIELD_MENU;
  constructor(public bale: MenuBit) { }
}



export type Actions = InitMenu | UpdateMenu | TestMenu | CloseMenu
  | TimeMenu
  | FocusMenu
  | CreateMenu
  | HexmapMenu
  | RenderMenu
  | CreateHexmapMenu
  | YieldMenu
  | FocusPlayMenu