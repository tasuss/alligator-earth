import { Action } from "../99.core/interface/action.interface";
import  SurfaceBit  from "./fce/surface.bit";

// Surface actions

export const INIT_SURFACE = "[Surface action] Init Surface";
export class InitSurface implements Action {
 readonly type = INIT_SURFACE;
 constructor(public bale: SurfaceBit) {}
}

export const UPDATE_SURFACE = "[Surface action] Update Surface";
export class UpdateSurface implements Action {
 readonly type = UPDATE_SURFACE;
 constructor(public bale: SurfaceBit) {}
}

export const READ_SURFACE = "[Read action] Read Surface";
 export class ReadSurface implements Action {
 readonly type = READ_SURFACE;
 constructor(public bale: SurfaceBit) {}
 }
 
export const WRITE_SURFACE = "[Write action] Write Surface";
 export class WriteSurface implements Action {
 readonly type = WRITE_SURFACE;
 constructor(public bale: SurfaceBit) {}
 }

 export const REMOVE_SURFACE = "[Write action] Remove Surface";
 export class RemoveSurface implements Action {
 readonly type = REMOVE_SURFACE;
 constructor(public bale: SurfaceBit) {}
 }
 
export const CREATE_SURFACE = "[Create action] Create Surface";
 export class CreateSurface implements Action {
 readonly type = CREATE_SURFACE;
 constructor(public bale: SurfaceBit) {}
 }
 
export const DIMENSION_SURFACE = "[Dimension action] Dimension Surface";
 export class DimensionSurface implements Action {
 readonly type = DIMENSION_SURFACE;
 constructor(public bale: SurfaceBit) {}
 }
 
export const DELETE_SURFACE = "[Delete action] Delete Surface";
 export class DeleteSurface implements Action {
 readonly type = DELETE_SURFACE;
 constructor(public bale: SurfaceBit) {}
 }
 
export type Actions = | InitSurface | UpdateSurface 
| ReadSurface
| WriteSurface
| CreateSurface
| DimensionSurface
| DeleteSurface
| RemoveSurface