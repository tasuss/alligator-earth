import { Action } from "../99.core/interface/action.interface";
import  AaadsBit  from "./fce/aaads.bit";


export const INIT_AAADS = "[Aaads action] Init Aaads";
export class InitAaads implements Action {
 readonly type = INIT_AAADS;
 constructor(public bale: AaadsBit) {}
}

export const UPDATE_AAADS = "[Aaads action] Update Aaads";
export class UpdateAaads implements Action {
 readonly type = UPDATE_AAADS;
 constructor(public bale: AaadsBit) {}
}

export const OPEN_AAADS = "[Open action] Open Aaads";
 export class OpenAaads implements Action {
 readonly type = OPEN_AAADS;
 constructor(public bale: AaadsBit) {}
 }
 
export const RUN_AAADS = "[Run action] Run Aaads";
 export class RunAaads implements Action {
 readonly type = RUN_AAADS;
 constructor(public bale: AaadsBit) {}
 }
 
export const EDIT_AAADS = "[Edit action] Edit Aaads";
 export class EditAaads implements Action {
 readonly type = EDIT_AAADS;
 constructor(public bale: AaadsBit) {}
 }
 
export const PATCH_AAADS = "[Patch action] Patch Aaads";
 export class PatchAaads implements Action {
 readonly type = PATCH_AAADS;
 constructor(public bale: AaadsBit) {}
 }
 
export type Actions = | InitAaads | UpdateAaads 
| OpenAaads
| RunAaads
| EditAaads
| PatchAaads

