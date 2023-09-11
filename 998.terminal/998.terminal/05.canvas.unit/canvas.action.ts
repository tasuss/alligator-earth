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

export type Actions = | InitCanvas | UpdateCanvas ;
