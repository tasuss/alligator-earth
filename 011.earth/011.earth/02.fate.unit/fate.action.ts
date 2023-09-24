import { Action } from "../99.core/interface/action.interface";
import  FateBit  from "./fce/fate.bit";

// Fate actions

export const INIT_FATE = "[Fate action] Init Fate";
export class InitFate implements Action {
 readonly type = INIT_FATE;
 constructor(public bale: FateBit) {}
}

export const UPDATE_FATE = "[Fate action] Update Fate";
export class UpdateFate implements Action {
 readonly type = UPDATE_FATE;
 constructor(public bale: FateBit) {}
}

export const INTEGER_FATE = "[Integer action] Integer Fate";
 export class IntegerFate implements Action {
 readonly type = INTEGER_FATE;
 constructor(public bale: FateBit) {}
 }
 
export const APPLE_FATE = "[Apple action] Apple Fate";
 export class AppleFate implements Action {
 readonly type = APPLE_FATE;
 constructor(public bale: FateBit) {}
 }
 
export type Actions = | InitFate | UpdateFate 
| IntegerFate
| AppleFate