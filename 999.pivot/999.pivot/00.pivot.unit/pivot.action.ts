import { Action } from "../99.core/interface/action.interface";
import  PivotBit  from "./fce/pivot.bit";


export const INIT_PIVOT = "[Pivot action] Init Pivot";
export class InitPivot implements Action {
 readonly type = INIT_PIVOT;
 constructor(public bale: PivotBit) {}
}

export const UPDATE_PIVOT = "[Pivot action] Update Pivot";
export class UpdatePivot implements Action {
 readonly type = UPDATE_PIVOT;
 constructor(public bale: PivotBit) {}
}

export const OPEN_PIVOT = "[Open action] Open Pivot";
 export class OpenPivot implements Action {
 readonly type = OPEN_PIVOT;
 constructor(public bale: PivotBit) {}
 }
 
export const RUN_PIVOT = "[Run action] Run Pivot";
 export class RunPivot implements Action {
 readonly type = RUN_PIVOT;
 constructor(public bale: PivotBit) {}
 }
 
export const EDIT_PIVOT = "[Edit action] Edit Pivot";
 export class EditPivot implements Action {
 readonly type = EDIT_PIVOT;
 constructor(public bale: PivotBit) {}
 }
 
export const PATCH_PIVOT = "[Patch action] Patch Pivot";
 export class PatchPivot implements Action {
 readonly type = PATCH_PIVOT;
 constructor(public bale: PivotBit) {}
 }

 export const COUNT_PIVOT = "[Patch action] Count Pivot";
 export class CountPivot implements Action {
 readonly type = COUNT_PIVOT;
 constructor(public bale: PivotBit) {}
 }

 
 export const LIST_PIVOT = "[Patch action] List Pivot";
 export class ListPivot implements Action {
 readonly type = LIST_PIVOT;
 constructor(public bale: PivotBit) {}
 }


 export const CREATE_PIVOT = "[Patch action] Create Pivot";
 export class CreatePivot implements Action {
 readonly type = CREATE_PIVOT;
 constructor(public bale: PivotBit) {}
 }

 export const CONTAINS_PIVOT = "[Patch action] Contains Pivot";
 export class ContainsPivot implements Action {
 readonly type = CONTAINS_PIVOT;
 constructor(public bale: PivotBit) {}
 }
 
export type Actions = | InitPivot | UpdatePivot 
| OpenPivot
| RunPivot
| EditPivot
| PatchPivot
| CountPivot
| ListPivot
| CreatePivot
| ContainsPivot

