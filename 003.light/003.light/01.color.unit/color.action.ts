import { Action } from "../99.core/interface/action.interface";
import  ColorBit  from "./fce/color.bit";

// Color actions

export const INIT_COLOR = "[Color action] Init Color";
export class InitColor implements Action {
 readonly type = INIT_COLOR;
 constructor(public bale: ColorBit) {}
}

export const UPDATE_COLOR = "[Color action] Update Color";
export class UpdateColor implements Action {
 readonly type = UPDATE_COLOR;
 constructor(public bale: ColorBit) {}
}

export const LOAD_COLOR = "[Load action] Load Color";
 export class LoadColor implements Action {
 readonly type = LOAD_COLOR;
 constructor(public bale: ColorBit) {}
 }
 
export const FETCH_COLOR = "[Fetch action] Fetch Color";
 export class FetchColor implements Action {
 readonly type = FETCH_COLOR;
 constructor(public bale: ColorBit) {}
 }
 
export type Actions = | InitColor | UpdateColor 
| LoadColor
| FetchColor