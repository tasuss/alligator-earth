import { Action } from "../99.core/interface/action.interface";
import  BlockBit  from "./fce/block.bit";

// Block actions

export const INIT_BLOCK = "[Block action] Init Block";
export class InitBlock implements Action {
 readonly type = INIT_BLOCK;
 constructor(public bale: BlockBit) {}
}

export const UPDATE_BLOCK = "[Block action] Update Block";
export class UpdateBlock implements Action {
 readonly type = UPDATE_BLOCK;
 constructor(public bale: BlockBit) {}
}

export const READ_BLOCK = "[Read action] Read Block";
 export class ReadBlock implements Action {
 readonly type = READ_BLOCK;
 constructor(public bale: BlockBit) {}
 }
 
export const WRITE_BLOCK = "[Write action] Write Block";
 export class WriteBlock implements Action {
 readonly type = WRITE_BLOCK;
 constructor(public bale: BlockBit) {}
 }
 
export const REMOVE_BLOCK = "[Remove action] Remove Block";
 export class RemoveBlock implements Action {
 readonly type = REMOVE_BLOCK;
 constructor(public bale: BlockBit) {}
 }
 
export const DELETE_BLOCK = "[Delete action] Delete Block";
 export class DeleteBlock implements Action {
 readonly type = DELETE_BLOCK;
 constructor(public bale: BlockBit) {}
 }
 
export const CREATE_BLOCK = "[Create action] Create Block";
 export class CreateBlock implements Action {
 readonly type = CREATE_BLOCK;
 constructor(public bale: BlockBit) {}
 }
 
export type Actions = | InitBlock | UpdateBlock 
| ReadBlock
| WriteBlock
| RemoveBlock
| DeleteBlock
| CreateBlock