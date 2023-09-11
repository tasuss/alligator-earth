import { Action } from "../99.core/interface/action.interface";
import  PivotBit  from "./fce/pivot.bit";

// Pivot actions

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

export const OPEN_PIVOT = "[Pivot action] Open Pivot";
export class OpenPivot implements Action {
 readonly type = OPEN_PIVOT;
 constructor(public bale: PivotBit) {}
}

export const RUN_PIVOT = "[Pivot action] Run Pivot";
export class RunPivot implements Action {
 readonly type = RUN_PIVOT;
 constructor(public bale: PivotBit) {}
}

export const EDIT_PIVOT = "[Pivot action] Edit Pivot";
export class EditPivot implements Action {
 readonly type = EDIT_PIVOT;
 constructor(public bale: PivotBit) {}
}

export const PATCH_PIVOT = "[Pivot action] Patch Pivot";
export class PatchPivot implements Action {
 readonly type = PATCH_PIVOT;
 constructor(public bale: PivotBit) {}
}

export const CLOUD_PIVOT = "[Pivot action] Cloud Pivot";
export class CloudPivot implements Action {
 readonly type = CLOUD_PIVOT;
 constructor(public bale: PivotBit) {}
}



export type Actions = | InitPivot | UpdatePivot |OpenPivot | RunPivot | EditPivot |PatchPivot | CloudPivot;
