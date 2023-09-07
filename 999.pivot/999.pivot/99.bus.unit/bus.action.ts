import { Action } from "../99.core/interface/action.interface";
import  BusBit  from "./fce/bus.bit";

// Bus actions

export const INIT_BUS = "[Bus action] Init Bus";
export class InitBus implements Action {
 readonly type = INIT_BUS;
 constructor(public bale: BusBit) {}
}

export const OPEN_BUS = "[Bus action] Open Bus";
export class OpenBus implements Action {
 readonly type = OPEN_BUS;
 constructor(public bale: BusBit) {}
}

export const CONNECT_BUS = "[Bus action] Connect Bus";
export class ConnectBus implements Action {
 readonly type = CONNECT_BUS;
 constructor(public bale: BusBit) {}
}

export const MESSAGE_BUS = "[Bus action] Message Bus";
export class MessageBus implements Action {
 readonly type = MESSAGE_BUS;
 constructor(public bale: BusBit) {}
}

export const UPDATE_BUS = "[Bus action] Update Bus";
export class UpdateBus implements Action {
 readonly type = UPDATE_BUS;
 constructor(public bale: BusBit) {}
}

export const CREATE_BUS = "[Bus action] Create Bus";
export class CreateBus implements Action {
 readonly type = CREATE_BUS;
 constructor(public bale: BusBit) {}
}

export type Actions = | InitBus | OpenBus | UpdateBus |ConnectBus |MessageBus | CreateBus;
