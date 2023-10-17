import { Action } from "../99.core/interface/action.interface";
import  ShadeBit  from "./fce/shade.bit";

// Shade actions

export const INIT_SHADE = "[Shade action] Init Shade";
export class InitShade implements Action {
 readonly type = INIT_SHADE;
 constructor(public bale: ShadeBit) {}
}

export const UPDATE_SHADE = "[Shade action] Update Shade";
export class UpdateShade implements Action {
 readonly type = UPDATE_SHADE;
 constructor(public bale: ShadeBit) {}
}

export const OPEN_SHADE = "[Open action] Open Shade";
 export class OpenShade implements Action {
 readonly type = OPEN_SHADE;
 constructor(public bale: ShadeBit) {}
 }
 
export const BODY_SHADE = "[Body action] Body Shade";
 export class BodyShade implements Action {
 readonly type = BODY_SHADE;
 constructor(public bale: ShadeBit) {}
 }
 
export const BROWSER_SHADE = "[Browser action] Browser Shade";
 export class BrowserShade implements Action {
 readonly type = BROWSER_SHADE;
 constructor(public bale: ShadeBit) {}
 }
 
export const RUN_SHADE = "[Run action] Run Shade";
 export class RunShade implements Action {
 readonly type = RUN_SHADE;
 constructor(public bale: ShadeBit) {}
 }
 
export const EDIT_SHADE = "[Edit action] Edit Shade";
 export class EditShade implements Action {
 readonly type = EDIT_SHADE;
 constructor(public bale: ShadeBit) {}
 }
 
export const PATCH_SHADE = "[Patch action] Patch Shade";
 export class PatchShade implements Action {
 readonly type = PATCH_SHADE;
 constructor(public bale: ShadeBit) {}
 }
 
export const TEST_SHADE = "[Test action] Test Shade";
 export class TestShade implements Action {
 readonly type = TEST_SHADE;
 constructor(public bale: ShadeBit) {}
 }
 
export type Actions = | InitShade | UpdateShade 
| OpenShade
| BodyShade
| BrowserShade
| RunShade
| EditShade
| PatchShade
| TestShade