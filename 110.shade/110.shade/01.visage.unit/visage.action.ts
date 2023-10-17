import { Action } from "../99.core/interface/action.interface";
import  VisageBit  from "./fce/visage.bit";

// Visage actions

export const INIT_VISAGE = "[Visage action] Init Visage";
export class InitVisage implements Action {
 readonly type = INIT_VISAGE;
 constructor(public bale: VisageBit) {}
}

export const UPDATE_VISAGE = "[Visage action] Update Visage";
export class UpdateVisage implements Action {
 readonly type = UPDATE_VISAGE;
 constructor(public bale: VisageBit) {}
}

export const FULLSCREEN_VISAGE = "[Fullscreen action] Fullscreen Visage";
 export class FullscreenVisage implements Action {
 readonly type = FULLSCREEN_VISAGE;
 constructor(public bale: VisageBit) {}
 }
 
export const READ_VISAGE = "[Read action] Read Visage";
 export class ReadVisage implements Action {
 readonly type = READ_VISAGE;
 constructor(public bale: VisageBit) {}
 }
 
export const WRITE_VISAGE = "[Write action] Write Visage";
 export class WriteVisage implements Action {
 readonly type = WRITE_VISAGE;
 constructor(public bale: VisageBit) {}
 }

 export const REMOVE_VISAGE = "[Write action] Remove Visage";
 export class RemoveVisage implements Action {
 readonly type = REMOVE_VISAGE;
 constructor(public bale: VisageBit) {}
 }
 
export const CREATE_VISAGE = "[Create action] Create Visage";
 export class CreateVisage implements Action {
 readonly type = CREATE_VISAGE;
 constructor(public bale: VisageBit) {}
 }
 
export const SIZE_VISAGE = "[Size action] Size Visage";
 export class SizeVisage implements Action {
 readonly type = SIZE_VISAGE;
 constructor(public bale: VisageBit) {}
 }
 
export const RENDER_VISAGE = "[Render action] Render Visage";
 export class RenderVisage implements Action {
 readonly type = RENDER_VISAGE;
 constructor(public bale: VisageBit) {}
 }
 
export const DIMENSION_VISAGE = "[Dimension action] Dimension Visage";
 export class DimensionVisage implements Action {
 readonly type = DIMENSION_VISAGE;
 constructor(public bale: VisageBit) {}
 }
 
export const SCREEN_VISAGE = "[Screen action] Screen Visage";
 export class ScreenVisage implements Action {
 readonly type = SCREEN_VISAGE;
 constructor(public bale: VisageBit) {}
 }
 
export const MOUNT_VISAGE = "[Mount action] Mount Visage";
 export class MountVisage implements Action {
 readonly type = MOUNT_VISAGE;
 constructor(public bale: VisageBit) {}
 }
 
export const MAIN_VISAGE = "[Main action] Main Visage";
 export class MainVisage implements Action {
 readonly type = MAIN_VISAGE;
 constructor(public bale: VisageBit) {}
 }
 
export const CLEAR_VISAGE = "[Clear action] Clear Visage";
 export class ClearVisage implements Action {
 readonly type = CLEAR_VISAGE;
 constructor(public bale: VisageBit) {}
 }
 
export const DELETE_VISAGE = "[Delete action] Delete Visage";
 export class DeleteVisage implements Action {
 readonly type = DELETE_VISAGE;
 constructor(public bale: VisageBit) {}
 }
 
export const LIST_VISAGE = "[List action] List Visage";
 export class ListVisage implements Action {
 readonly type = LIST_VISAGE;
 constructor(public bale: VisageBit) {}
 }
 
export const NEST_VISAGE = "[Nest action] Nest Visage";
 export class NestVisage implements Action {
 readonly type = NEST_VISAGE;
 constructor(public bale: VisageBit) {}
 }
 
export type Actions = | InitVisage | UpdateVisage 
| FullscreenVisage
| ReadVisage
| WriteVisage
| CreateVisage
| SizeVisage
| RenderVisage
| DimensionVisage
| ScreenVisage
| MountVisage
| MainVisage
| ClearVisage
| DeleteVisage
| ListVisage
| RemoveVisage
| NestVisage