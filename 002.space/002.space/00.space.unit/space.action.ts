import { Action } from "../99.core/interface/action.interface";
import  SpaceBit  from "./fce/space.bit";

// Space actions

export const INIT_SPACE = "[Space action] Init Space";
export class InitSpace implements Action {
 readonly type = INIT_SPACE;
 constructor(public bale: SpaceBit) {}
}

export const UPDATE_SPACE = "[Space action] Update Space";
export class UpdateSpace implements Action {
 readonly type = UPDATE_SPACE;
 constructor(public bale: SpaceBit) {}
}

export const READY_SPACE = "[Ready action] Ready Space";
 export class ReadySpace implements Action {
 readonly type = READY_SPACE;
 constructor(public bale: SpaceBit) {}
 }
 
export const EDIT_SPACE = "[Edit action] Edit Space";
 export class EditSpace implements Action {
 readonly type = EDIT_SPACE;
 constructor(public bale: SpaceBit) {}
 }
 
export const OPEN_SPACE = "[Open action] Open Space";
 export class OpenSpace implements Action {
 readonly type = OPEN_SPACE;
 constructor(public bale: SpaceBit) {}
 }
 
export const RUN_SPACE = "[Run action] Run Space";
 export class RunSpace implements Action {
 readonly type = RUN_SPACE;
 constructor(public bale: SpaceBit) {}
 }
 
export const PATCH_SPACE = "[Patch action] Patch Space";
 export class PatchSpace implements Action {
 readonly type = PATCH_SPACE;
 constructor(public bale: SpaceBit) {}
 }
 
export const MERGE_SPACE = "[Merge action] Merge Space";
 export class MergeSpace implements Action {
 readonly type = MERGE_SPACE;
 constructor(public bale: SpaceBit) {}
 }
 
export const TEST_SPACE = "[Test action] Test Space";
 export class TestSpace implements Action {
 readonly type = TEST_SPACE;
 constructor(public bale: SpaceBit) {}
 }
 
export const CLOUD_SPACE = "[Cloud action] Cloud Space";
 export class CloudSpace implements Action {
 readonly type = CLOUD_SPACE;
 constructor(public bale: SpaceBit) {}
 }

 export const BATCH_SPACE = "[Cloud action] Batch Space";
 export class BatchSpace implements Action {
 readonly type = BATCH_SPACE;
 constructor(public bale: SpaceBit) {}
 }
 
export type Actions = | InitSpace | UpdateSpace 
| ReadySpace
| EditSpace
| OpenSpace
| RunSpace
| PatchSpace
| MergeSpace
| TestSpace
| CloudSpace
| BatchSpace