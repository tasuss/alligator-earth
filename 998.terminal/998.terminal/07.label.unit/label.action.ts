import { Action } from "../99.core/interface/action.interface";
import  LabelBit  from "./fce/label.bit";

// Label actions

export const INIT_LABEL = "[Label action] Init Label";
export class InitLabel implements Action {
 readonly type = INIT_LABEL;
 constructor(public bale: LabelBit) {}
}

export const UPDATE_LABEL = "[Label action] Update Label";
export class UpdateLabel implements Action {
 readonly type = UPDATE_LABEL;
 constructor(public bale: LabelBit) {}
}

export const READ_LABEL = "[Read action] Read Label";
 export class ReadLabel implements Action {
 readonly type = READ_LABEL;
 constructor(public bale: LabelBit) {}
 }
 
export const WRITE_LABEL = "[Write action] Write Label";
 export class WriteLabel implements Action {
 readonly type = WRITE_LABEL;
 constructor(public bale: LabelBit) {}
 }
 
export const REMOVE_LABEL = "[Remove action] Remove Label";
 export class RemoveLabel implements Action {
 readonly type = REMOVE_LABEL;
 constructor(public bale: LabelBit) {}
 }
 
export const DELETE_LABEL = "[Delete action] Delete Label";
 export class DeleteLabel implements Action {
 readonly type = DELETE_LABEL;
 constructor(public bale: LabelBit) {}
 }
 
export const CREATE_LABEL = "[Create action] Create Label";
 export class CreateLabel implements Action {
 readonly type = CREATE_LABEL;
 constructor(public bale: LabelBit) {}
 }
 
export type Actions = | InitLabel | UpdateLabel 
| ReadLabel
| WriteLabel
| RemoveLabel
| DeleteLabel
| CreateLabel