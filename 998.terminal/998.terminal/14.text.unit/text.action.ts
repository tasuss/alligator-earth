import { Action } from "../99.core/interface/action.interface";
import  TextBit  from "./fce/text.bit";

// Text actions

export const INIT_TEXT = "[Text action] Init Text";
export class InitText implements Action {
 readonly type = INIT_TEXT;
 constructor(public bale: TextBit) {}
}

export const UPDATE_TEXT = "[Text action] Update Text";
export class UpdateText implements Action {
 readonly type = UPDATE_TEXT;
 constructor(public bale: TextBit) {}
}

export type Actions = | InitText | UpdateText ;
