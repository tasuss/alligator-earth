import { Action } from "../99.core/interface/action.interface";
import  EarthBit  from "./fce/earth.bit";

// Earth actions

export const INIT_EARTH = "[Earth action] Init Earth";
export class InitEarth implements Action {
 readonly type = INIT_EARTH;
 constructor(public bale: EarthBit) {}
}

export const UPDATE_EARTH = "[Earth action] Update Earth";
export class UpdateEarth implements Action {
 readonly type = UPDATE_EARTH;
 constructor(public bale: EarthBit) {}
}

export const OPEN_EARTH = "[Open action] Open Earth";
 export class OpenEarth implements Action {
 readonly type = OPEN_EARTH;
 constructor(public bale: EarthBit) {}
 }
 
export const READ_EARTH = "[Read action] Read Earth";
 export class ReadEarth implements Action {
 readonly type = READ_EARTH;
 constructor(public bale: EarthBit) {}
 }
 
export const WRITE_EARTH = "[Write action] Write Earth";
 export class WriteEarth implements Action {
 readonly type = WRITE_EARTH;
 constructor(public bale: EarthBit) {}
 }
 
export const CREATE_EARTH = "[Create action] Create Earth";
 export class CreateEarth implements Action {
 readonly type = CREATE_EARTH;
 constructor(public bale: EarthBit) {}
 }
 
export const PUSH_EARTH = "[Progress action] Push Earth";
 export class PushEarth implements Action {
 readonly type = PUSH_EARTH;
 constructor(public bale: EarthBit) {}
 }
 
export const AUTO_EARTH = "[Run action] Auto Earth";
 export class AutoEarth implements Action {
 readonly type = AUTO_EARTH;
 constructor(public bale: EarthBit) {}
 }
 
export type Actions = | InitEarth | UpdateEarth 
| OpenEarth
| ReadEarth
| WriteEarth
| CreateEarth
| PushEarth
| AutoEarth