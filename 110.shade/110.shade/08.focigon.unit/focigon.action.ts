import { Action } from "../99.core/interface/action.interface";
import  FocigonBit  from "./fce/focigon.bit";

// Focigon actions

export const INIT_FOCIGON = "[Focigon action] Init Focigon";
export class InitFocigon implements Action {
 readonly type = INIT_FOCIGON;
 constructor(public bale: FocigonBit) {}
}

export const UPDATE_FOCIGON = "[Focigon action] Update Focigon";
export class UpdateFocigon implements Action {
 readonly type = UPDATE_FOCIGON;
 constructor(public bale: FocigonBit) {}
}

export const READ_FOCIGON = "[Read action] Read Focigon";
 export class ReadFocigon implements Action {
 readonly type = READ_FOCIGON;
 constructor(public bale: FocigonBit) {}
 }
 
export const WRITE_FOCIGON = "[Write action] Write Focigon";
 export class WriteFocigon implements Action {
 readonly type = WRITE_FOCIGON;
 constructor(public bale: FocigonBit) {}
 }
 
export const REMOVE_FOCIGON = "[Remove action] Remove Focigon";
 export class RemoveFocigon implements Action {
 readonly type = REMOVE_FOCIGON;
 constructor(public bale: FocigonBit) {}
 }
 
export const CREATE_FOCIGON = "[Create action] Create Focigon";
 export class CreateFocigon implements Action {
 readonly type = CREATE_FOCIGON;
 constructor(public bale: FocigonBit) {}
 }
 
export const DELETE_FOCIGON = "[Delete action] Delete Focigon";
 export class DeleteFocigon implements Action {
 readonly type = DELETE_FOCIGON;
 constructor(public bale: FocigonBit) {}
 }
 
export type Actions = | InitFocigon | UpdateFocigon 
| ReadFocigon
| WriteFocigon
| RemoveFocigon
| CreateFocigon
| DeleteFocigon