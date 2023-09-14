import { Action } from "../99.core/interface/action.interface";
import  CanvasBit  from "./fce/canvas.bit";

// Canvas actions

export const INIT_CANVAS = "[Canvas action] Init Canvas";
export class InitCanvas implements Action {
 readonly type = INIT_CANVAS;
 constructor(public bale: CanvasBit) {}
}

export const UPDATE_CANVAS = "[Canvas action] Update Canvas";
export class UpdateCanvas implements Action {
 readonly type = UPDATE_CANVAS;
 constructor(public bale: CanvasBit) {}
}

export const READ_CANVAS = "[Read action] Read Canvas";
 export class ReadCanvas implements Action {
 readonly type = READ_CANVAS;
 constructor(public bale: CanvasBit) {}
 }
 
export const WRITE_CANVAS = "[Write action] Write Canvas";
 export class WriteCanvas implements Action {
 readonly type = WRITE_CANVAS;
 constructor(public bale: CanvasBit) {}
 }
 
export const DELETE_CANVAS = "[Delete action] Delete Canvas";
 export class DeleteCanvas implements Action {
 readonly type = DELETE_CANVAS;
 constructor(public bale: CanvasBit) {}
 }
 
export const REMOVE_CANVAS = "[Remove action] Remove Canvas";
 export class RemoveCanvas implements Action {
 readonly type = REMOVE_CANVAS;
 constructor(public bale: CanvasBit) {}
 }
 
export const CREATE_CANVAS = "[Create action] Create Canvas";
 export class CreateCanvas implements Action {
 readonly type = CREATE_CANVAS;
 constructor(public bale: CanvasBit) {}
 }
 
export const NEST_CANVAS = "[Nest action] Nest Canvas";
 export class NestCanvas implements Action {
 readonly type = NEST_CANVAS;
 constructor(public bale: CanvasBit) {}
 }
 
export type Actions = | InitCanvas | UpdateCanvas 
| ReadCanvas
| WriteCanvas
| DeleteCanvas
| RemoveCanvas
| CreateCanvas
| NestCanvas