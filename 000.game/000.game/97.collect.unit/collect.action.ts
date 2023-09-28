import { Action } from "../99.core/interface/action.interface";
import  CollectBit  from "./fce/collect.bit";

// Collect actions

export const INIT_COLLECT = "[Collect action] Init Collect";
export class InitCollect implements Action {
 readonly type = INIT_COLLECT;
 constructor(public bale: CollectBit) {}
}

export const UPDATE_COLLECT = "[Collect action] Update Collect";
export class UpdateCollect implements Action {
 readonly type = UPDATE_COLLECT;
 constructor(public bale: CollectBit) {}
}

export const FETCH_COLLECT = "[Collect action] Fetch Collect";
export class FetchCollect implements Action {
 readonly type = FETCH_COLLECT;
 constructor(public bale: CollectBit) {}
}

export const READ_COLLECT = "[Read action] Read Collect";
 export class ReadCollect implements Action {
 readonly type = READ_COLLECT;
 constructor(public bale: CollectBit) {}
 }
 
export const WRITE_COLLECT = "[Write action] Write Collect";
 export class WriteCollect implements Action {
 readonly type = WRITE_COLLECT;
 constructor(public bale: CollectBit) {}
 }
 
export const CREATE_COLLECT = "[Create action] Create Collect";
 export class CreateCollect implements Action {
 readonly type = CREATE_COLLECT;
 constructor(public bale: CollectBit) {}
 }

 export const REMOVE_COLLECT = "[Create action] Remove Collect";
 export class RemoveCollect implements Action {
 readonly type = REMOVE_COLLECT;
 constructor(public bale: CollectBit) {}
 }

 export const DELETE_COLLECT = "[Create action] Delete Collect";
 export class DeleteCollect implements Action {
 readonly type = DELETE_COLLECT;
 constructor(public bale: CollectBit) {}
 }
 
export const EMPTY_COLLECT = "[Empty action] Empty Collect";
 export class EmptyCollect implements Action {
 readonly type = EMPTY_COLLECT;
 constructor(public bale: CollectBit) {}
 }


 export const MODEL_COLLECT = "[Empty action] Model Collect";
 export class ModelCollect implements Action {
 readonly type = MODEL_COLLECT;
 constructor(public bale: CollectBit) {}
 }

 export const PUT_COLLECT = "[Empty action] Put Collect";
 export class PutCollect implements Action {
 readonly type = PUT_COLLECT;
 constructor(public bale: CollectBit) {}
 }

 export const GET_COLLECT = "[Empty action] Get Collect";
 export class GetCollect implements Action {
 readonly type = GET_COLLECT;
 constructor(public bale: CollectBit) {}
 }

 
export const FORMAT_COLLECT = "[Format action] Format Collect";
 export class FormatCollect implements Action {
 readonly type = FORMAT_COLLECT;
 constructor(public bale: CollectBit) {}
 }

 export const DOT_COLLECT = "[Format action] Dot Collect";
 export class DotCollect implements Action {
 readonly type = DOT_COLLECT;
 constructor(public bale: CollectBit) {}
 }
 
export type Actions = | InitCollect | UpdateCollect 
| ReadCollect
| WriteCollect
| CreateCollect
| EmptyCollect
| FetchCollect
| DeleteCollect
| RemoveCollect
| ModelCollect
| GetCollect
| PutCollect
| FormatCollect
| DotCollect