import { Action } from "../99.core/interface/action.interface";
import  FrameBit  from "./fce/frame.bit";

// Frame actions

export const INIT_FRAME = "[Frame action] Init Frame";
export class InitFrame implements Action {
 readonly type = INIT_FRAME;
 constructor(public bale: FrameBit) {}
}

export const UPDATE_FRAME = "[Frame action] Update Frame";
export class UpdateFrame implements Action {
 readonly type = UPDATE_FRAME;
 constructor(public bale: FrameBit) {}
}

export const READ_FRAME = "[Read action] Read Frame";
 export class ReadFrame implements Action {
 readonly type = READ_FRAME;
 constructor(public bale: FrameBit) {}
 }
 
export const WRITE_FRAME = "[Write action] Write Frame";
 export class WriteFrame implements Action {
 readonly type = WRITE_FRAME;
 constructor(public bale: FrameBit) {}
 }
 
export const REMOVE_FRAME = "[Remove action] Remove Frame";
 export class RemoveFrame implements Action {
 readonly type = REMOVE_FRAME;
 constructor(public bale: FrameBit) {}
 }
 
export const CREATE_FRAME = "[Create action] Create Frame";
 export class CreateFrame implements Action {
 readonly type = CREATE_FRAME;
 constructor(public bale: FrameBit) {}
 }
 
export const DELETE_FRAME = "[Delete action] Delete Frame";
 export class DeleteFrame implements Action {
 readonly type = DELETE_FRAME;
 constructor(public bale: FrameBit) {}
 }
 
export type Actions = | InitFrame | UpdateFrame 
| ReadFrame
| WriteFrame
| RemoveFrame
| CreateFrame
| DeleteFrame