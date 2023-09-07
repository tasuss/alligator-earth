import { Action } from "../99.core/interface/action.interface";
import  BufferBit  from "./fce/buffer.bit";

// Buffer actions

export const INIT_BUFFER = "[Buffer action] Init Buffer";
export class InitBuffer implements Action {
 readonly type = INIT_BUFFER;
 constructor(public bale: BufferBit) {}
}

export const UPDATE_BUFFER = "[Buffer action] Update Buffer";
export class UpdateBuffer implements Action {
 readonly type = UPDATE_BUFFER;
 constructor(public bale: BufferBit) {}
}

export const DRAW_BUFFER = "[Draw action] Draw Buffer";
 export class DrawBuffer implements Action {
 readonly type = DRAW_BUFFER;
 constructor(public bale: BufferBit) {}
 }
 
export const BACKGROUND_BUFFER = "[Background action] Background Buffer";
 export class BackgroundBuffer implements Action {
 readonly type = BACKGROUND_BUFFER;
 constructor(public bale: BufferBit) {}
 }
 
export const READ_BUFFER = "[Read action] Read Buffer";
 export class ReadBuffer implements Action {
 readonly type = READ_BUFFER;
 constructor(public bale: BufferBit) {}
 }
 
export const WRITE_BUFFER = "[Write action] Write Buffer";
 export class WriteBuffer implements Action {
 readonly type = WRITE_BUFFER;
 constructor(public bale: BufferBit) {}
 }
 
export const CREATE_BUFFER = "[Create action] Create Buffer";
 export class CreateBuffer implements Action {
 readonly type = CREATE_BUFFER;
 constructor(public bale: BufferBit) {}
 }
 
export const DELETE_BUFFER = "[Delete action] Delete Buffer";
 export class DeleteBuffer implements Action {
 readonly type = DELETE_BUFFER;
 constructor(public bale: BufferBit) {}
 }
 
export const REMOVE_BUFFER = "[Remove action] Remove Buffer";
 export class RemoveBuffer implements Action {
 readonly type = REMOVE_BUFFER;
 constructor(public bale: BufferBit) {}
 }
 
export const LIST_BUFFER = "[List action] List Buffer";
 export class ListBuffer implements Action {
 readonly type = LIST_BUFFER;
 constructor(public bale: BufferBit) {}
 }
 
export type Actions = | InitBuffer | UpdateBuffer 
| DrawBuffer
| BackgroundBuffer
| ReadBuffer
| WriteBuffer
| CreateBuffer
| DeleteBuffer
| RemoveBuffer
| ListBuffer