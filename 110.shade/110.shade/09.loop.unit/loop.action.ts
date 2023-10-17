import { Action } from "../99.core/interface/action.interface";
import  LoopBit  from "./fce/loop.bit";

// Loop actions

export const INIT_LOOP = "[Loop action] Init Loop";
export class InitLoop implements Action {
 readonly type = INIT_LOOP;
 constructor(public bale: LoopBit) {}
}

export const UPDATE_LOOP = "[Loop action] Update Loop";
export class UpdateLoop implements Action {
 readonly type = UPDATE_LOOP;
 constructor(public bale: LoopBit) {}
}

export const REMOVE_LOOP = "[Replace action] Remove Loop";
 export class RemoveLoop implements Action {
 readonly type = REMOVE_LOOP;
 constructor(public bale: LoopBit) {}
 }
 
export const DELETE_LOOP = "[Delete action] Delete Loop";
 export class DeleteLoop implements Action {
 readonly type = DELETE_LOOP;
 constructor(public bale: LoopBit) {}
 }
 
export type Actions = | InitLoop | UpdateLoop 
| RemoveLoop
| DeleteLoop