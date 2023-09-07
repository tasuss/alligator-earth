import { Action } from "../99.core/interface/action.interface";
import  TitleBit  from "./fce/title.bit";


export const INIT_TITLE = "[Title action] Init Title";
export class InitTitle implements Action {
 readonly type = INIT_TITLE;
 constructor(public bale: TitleBit) {}
}

export const UPDATE_TITLE = "[Title action] Update Title";
export class UpdateTitle implements Action {
 readonly type = UPDATE_TITLE;
 constructor(public bale: TitleBit) {}
}

export const OPEN_TITLE = "[Open action] Open Title";
 export class OpenTitle implements Action {
 readonly type = OPEN_TITLE;
 constructor(public bale: TitleBit) {}
 }
 
export const RUN_TITLE = "[Run action] Run Title";
 export class RunTitle implements Action {
 readonly type = RUN_TITLE;
 constructor(public bale: TitleBit) {}
 }
 
export const EDIT_TITLE = "[Edit action] Edit Title";
 export class EditTitle implements Action {
 readonly type = EDIT_TITLE;
 constructor(public bale: TitleBit) {}
 }
 
export const PATCH_TITLE = "[Patch action] Patch Title";
 export class PatchTitle implements Action {
 readonly type = PATCH_TITLE;
 constructor(public bale: TitleBit) {}
 }
 
export type Actions = | InitTitle | UpdateTitle 
| OpenTitle
| RunTitle
| EditTitle
| PatchTitle

