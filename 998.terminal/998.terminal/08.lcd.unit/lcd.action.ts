import { Action } from "../99.core/interface/action.interface";
import  LcdBit  from "./fce/lcd.bit";

// Lcd actions

export const INIT_LCD = "[Lcd action] Init Lcd";
export class InitLcd implements Action {
 readonly type = INIT_LCD;
 constructor(public bale: LcdBit) {}
}

export const UPDATE_LCD = "[Lcd action] Update Lcd";
export class UpdateLcd implements Action {
 readonly type = UPDATE_LCD;
 constructor(public bale: LcdBit) {}
}

export const READ_LCD = "[Read action] Read Lcd";
 export class ReadLcd implements Action {
 readonly type = READ_LCD;
 constructor(public bale: LcdBit) {}
 }
 
export const WRITE_LCD = "[Write action] Write Lcd";
 export class WriteLcd implements Action {
 readonly type = WRITE_LCD;
 constructor(public bale: LcdBit) {}
 }
 
export const REMOVE_LCD = "[Remove action] Remove Lcd";
 export class RemoveLcd implements Action {
 readonly type = REMOVE_LCD;
 constructor(public bale: LcdBit) {}
 }
 
export const DELETE_LCD = "[Delete action] Delete Lcd";
 export class DeleteLcd implements Action {
 readonly type = DELETE_LCD;
 constructor(public bale: LcdBit) {}
 }
 
export const CREATE_LCD = "[Create action] Create Lcd";
 export class CreateLcd implements Action {
 readonly type = CREATE_LCD;
 constructor(public bale: LcdBit) {}
 }
 
export type Actions = | InitLcd | UpdateLcd 
| ReadLcd
| WriteLcd
| RemoveLcd
| DeleteLcd
| CreateLcd