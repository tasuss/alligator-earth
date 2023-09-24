import { Action } from "../99.core/interface/action.interface";
import  BeingBit  from "./fce/being-pivot.bit";

// Being actions

export const INIT_BEING = "[Being action] Init Being";
export class InitBeing implements Action {
 readonly type = INIT_BEING;
 constructor(public bale: BeingBit) {}
}

export const UPDATE_BEING = "[Being action] Update Being";
export class UpdateBeing implements Action {
 readonly type = UPDATE_BEING;
 constructor(public bale: BeingBit) {}
}

export const OPEN_BEING = "[Open action] Open Being";
 export class OpenBeing implements Action {
 readonly type = OPEN_BEING;
 constructor(public bale: BeingBit) {}
 }
 
export const CREATE_BEING = "[Create action] Create Being";
 export class CreateBeing implements Action {
 readonly type = CREATE_BEING;
 constructor(public bale: BeingBit) {}
 }
 
export const ACCESS_BEING = "[Access action] Access Being";
 export class AccessBeing implements Action {
 readonly type = ACCESS_BEING;
 constructor(public bale: BeingBit) {}
 }
 
export const WRITE_BEING = "[Write action] Write Being";
 export class WriteBeing implements Action {
 readonly type = WRITE_BEING;
 constructor(public bale: BeingBit) {}
 }
 
export const READ_BEING = "[Read action] Read Being";
 export class ReadBeing implements Action {
 readonly type = READ_BEING;
 constructor(public bale: BeingBit) {}
 }
 
export const AGE_BEING = "[Age action] Age Being";
 export class AgeBeing implements Action {
 readonly type = AGE_BEING;
 constructor(public bale: BeingBit) {}
 }
 
export const ADVANCE_BEING = "[Advance action] Advance Being";
 export class AdvanceBeing implements Action {
 readonly type = ADVANCE_BEING;
 constructor(public bale: BeingBit) {}
 }
 
export const LOAD_BEING = "[Load action] Load Being";
 export class LoadBeing implements Action {
 readonly type = LOAD_BEING;
 constructor(public bale: BeingBit) {}
 }
 

 
export type Actions = | InitBeing | UpdateBeing 
| OpenBeing
| CreateBeing
| AccessBeing
| WriteBeing
| ReadBeing
| AgeBeing
| AdvanceBeing
| LoadBeing
