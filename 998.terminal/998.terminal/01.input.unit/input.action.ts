import { Action } from "../99.core/interface/action.interface";
import  InputBit  from "./fce/input.bit";

// Input actions

export const INIT_INPUT = "[Input action] Init Input";
export class InitInput implements Action {
 readonly type = INIT_INPUT;
 constructor(public bale: InputBit) {}
}

export const UPDATE_INPUT = "[Input action] Update Input";
export class UpdateInput implements Action {
 readonly type = UPDATE_INPUT;
 constructor(public bale: InputBit) {}
}

export const OPEN_INPUT = "[Open action] Open Input";
 export class OpenInput implements Action {
 readonly type = OPEN_INPUT;
 constructor(public bale: InputBit) {}
 }
 
export type Actions = | InitInput | UpdateInput 
| OpenInput