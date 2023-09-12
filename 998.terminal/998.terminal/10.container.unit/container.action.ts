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

export type Actions = | InitContainer | UpdateContainer ;
