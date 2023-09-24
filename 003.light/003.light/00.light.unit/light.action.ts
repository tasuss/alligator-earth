import { Action } from "../99.core/interface/action.interface";
import  LightBit  from "./fce/light.bit";


export const INIT_LIGHT = "[Light action] Init Light";
export class InitLight implements Action {
 readonly type = INIT_LIGHT;
 constructor(public bale: LightBit) {}
}

export const UPDATE_LIGHT = "[Light action] Update Light";
export class UpdateLight implements Action {
 readonly type = UPDATE_LIGHT;
 constructor(public bale: LightBit) {}
}

export const OPEN_LIGHT = "[Open action] Open Light";
 export class OpenLight implements Action {
 readonly type = OPEN_LIGHT;
 constructor(public bale: LightBit) {}
 }
 
export const RUN_LIGHT = "[Run action] Run Light";
 export class RunLight implements Action {
 readonly type = RUN_LIGHT;
 constructor(public bale: LightBit) {}
 }
 
export const EDIT_LIGHT = "[Edit action] Edit Light";
 export class EditLight implements Action {
 readonly type = EDIT_LIGHT;
 constructor(public bale: LightBit) {}
 }
 
export const PATCH_LIGHT = "[Patch action] Patch Light";
 export class PatchLight implements Action {
 readonly type = PATCH_LIGHT;
 constructor(public bale: LightBit) {}
 }
 
export const TEST_LIGHT = "[Test action] Test Light";
 export class TestLight implements Action {
 readonly type = TEST_LIGHT;
 constructor(public bale: LightBit) {}
 }
 
export const CLOUD_LIGHT = "[Cloud action] Cloud Light";
 export class CloudLight implements Action {
 readonly type = CLOUD_LIGHT;
 constructor(public bale: LightBit) {}
 }
 
export type Actions = | InitLight | UpdateLight 
| OpenLight
| RunLight
| EditLight
| PatchLight
| TestLight
| CloudLight