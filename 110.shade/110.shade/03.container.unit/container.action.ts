import { Action } from "../99.core/interface/action.interface";
import  ContainerBit  from "./fce/container.bit";

// Container actions

export const INIT_CONTAINER = "[Container action] Init Container";
export class InitContainer implements Action {
 readonly type = INIT_CONTAINER;
 constructor(public bale: ContainerBit) {}
}

export const UPDATE_CONTAINER = "[Container action] Update Container";
export class UpdateContainer implements Action {
 readonly type = UPDATE_CONTAINER;
 constructor(public bale: ContainerBit) {}
}

export const READ_CONTAINER = "[Read action] Read Container";
 export class ReadContainer implements Action {
 readonly type = READ_CONTAINER;
 constructor(public bale: ContainerBit) {}
 }
 
export const WRITE_CONTAINER = "[Write action] Write Container";
 export class WriteContainer implements Action {
 readonly type = WRITE_CONTAINER;
 constructor(public bale: ContainerBit) {}
 }
 
export const CREATE_CONTAINER = "[Create action] Create Container";
 export class CreateContainer implements Action {
 readonly type = CREATE_CONTAINER;
 constructor(public bale: ContainerBit) {}
 }
 
export const SURFACE_CONTAINER = "[Surface action] Surface Container";
 export class SurfaceContainer implements Action {
 readonly type = SURFACE_CONTAINER;
 constructor(public bale: ContainerBit) {}
 }
 
export const ADD_CONTAINER = "[Add action] Add Container";
 export class AddContainer implements Action {
 readonly type = ADD_CONTAINER;
 constructor(public bale: ContainerBit) {}
 }
 
export const REMOVE_CONTAINER = "[Remove action] Remove Container";
 export class RemoveContainer implements Action {
 readonly type = REMOVE_CONTAINER;
 constructor(public bale: ContainerBit) {}
 }
 
export const DELETE_CONTAINER = "[Delete action] Delete Container";
 export class DeleteContainer implements Action {
 readonly type = DELETE_CONTAINER;
 constructor(public bale: ContainerBit) {}
 }
 
export type Actions = | InitContainer | UpdateContainer 
| ReadContainer
| WriteContainer
| CreateContainer
| SurfaceContainer
| AddContainer
| RemoveContainer
| DeleteContainer