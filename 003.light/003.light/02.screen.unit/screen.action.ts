import { Action } from "../99.core/interface/action.interface";
import  ScreenBit  from "./fce/screen.bit";

// Screen actions

export const INIT_SCREEN = "[Screen action] Init Screen";
export class InitScreen implements Action {
 readonly type = INIT_SCREEN;
 constructor(public bale: ScreenBit) {}
}

export const UPDATE_SCREEN = "[Screen action] Update Screen";
export class UpdateScreen implements Action {
 readonly type = UPDATE_SCREEN;
 constructor(public bale: ScreenBit) {}
}

export type Actions = | InitScreen | UpdateScreen ;
