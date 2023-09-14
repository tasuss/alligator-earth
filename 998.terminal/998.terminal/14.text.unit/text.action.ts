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

export const WRITE_TEXT = "[Write action] Write Text";
 export class WriteText implements Action {
 readonly type = WRITE_TEXT;
 constructor(public bale: TextBit) {}
 }
 
export const READ_TEXT = "[Read action] Read Text";
 export class ReadText implements Action {
 readonly type = READ_TEXT;
 constructor(public bale: TextBit) {}
 }
 
export const REMOVE_TEXT = "[Remove action] Remove Text";
 export class RemoveText implements Action {
 readonly type = REMOVE_TEXT;
 constructor(public bale: TextBit) {}
 }
 
export const DELETE_TEXT = "[Delete action] Delete Text";
 export class DeleteText implements Action {
 readonly type = DELETE_TEXT;
 constructor(public bale: TextBit) {}
 }
 
export const CREATE_TEXT = "[Create action] Create Text";
 export class CreateText implements Action {
 readonly type = CREATE_TEXT;
 constructor(public bale: TextBit) {}
 }
 
export type Actions = | InitText | UpdateText 
| WriteText
| ReadText
| RemoveText
| DeleteText
| CreateText