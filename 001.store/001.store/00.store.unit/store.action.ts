import { Action } from "../99.core/interface/action.interface";
import  StoreBit  from "./fce/store.bit";


export const INIT_STORE = "[Store action] Init Store";
export class InitStore implements Action {
 readonly type = INIT_STORE;
 constructor(public bale: StoreBit) {}
}

export const UPDATE_STORE = "[Store action] Update Store";
export class UpdateStore implements Action {
 readonly type = UPDATE_STORE;
 constructor(public bale: StoreBit) {}
}

export const OPEN_STORE = "[Open action] Open Store";
 export class OpenStore implements Action {
 readonly type = OPEN_STORE;
 constructor(public bale: StoreBit) {}
 }
 
export const RUN_STORE = "[Run action] Run Store";
 export class RunStore implements Action {
 readonly type = RUN_STORE;
 constructor(public bale: StoreBit) {}
 }
 
export const EDIT_STORE = "[Edit action] Edit Store";
 export class EditStore implements Action {
 readonly type = EDIT_STORE;
 constructor(public bale: StoreBit) {}
 }
 
export const PATCH_STORE = "[Patch action] Patch Store";
 export class PatchStore implements Action {
 readonly type = PATCH_STORE;
 constructor(public bale: StoreBit) {}
 }
 
export type Actions = | InitStore | UpdateStore 
| OpenStore
| RunStore
| EditStore
| PatchStore

