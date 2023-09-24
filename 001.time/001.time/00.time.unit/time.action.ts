import { Action } from "../99.core/interface/action.interface";
import  TimeBit  from "./fce/time.bit";


export const INIT_TIME = "[Time action] Init Time";
export class InitTime implements Action {
 readonly type = INIT_TIME;
 constructor(public bale: TimeBit) {}
}

export const UPDATE_TIME = "[Time action] Update Time";
export class UpdateTime implements Action {
 readonly type = UPDATE_TIME;
 constructor(public bale: TimeBit) {}
}

export const OPEN_TIME = "[Open action] Open Time";
 export class OpenTime implements Action {
 readonly type = OPEN_TIME;
 constructor(public bale: TimeBit) {}
 }
 
export const RUN_TIME = "[Run action] Run Time";
 export class RunTime implements Action {
 readonly type = RUN_TIME;
 constructor(public bale: TimeBit) {}
 }
 
export const EDIT_TIME = "[Edit action] Edit Time";
 export class EditTime implements Action {
 readonly type = EDIT_TIME;
 constructor(public bale: TimeBit) {}
 }
 
export const PATCH_TIME = "[Patch action] Patch Time";
 export class PatchTime implements Action {
 readonly type = PATCH_TIME;
 constructor(public bale: TimeBit) {}
 }
 
export const CLOUD_TIME = "[Cloud action] Cloud Time";
 export class CloudTime implements Action {
 readonly type = CLOUD_TIME;
 constructor(public bale: TimeBit) {}
 }
 
export type Actions = | InitTime | UpdateTime 
| OpenTime
| RunTime
| EditTime
| PatchTime
| CloudTime