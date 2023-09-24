import { Action } from "../99.core/interface/action.interface";
import  ClockBit  from "./fce/clock.bit";

// Clock actions

export const INIT_CLOCK = "[Clock action] Init Clock";
export class InitClock implements Action {
 readonly type = INIT_CLOCK;
 constructor(public bale: ClockBit) {}
}

export const UPDATE_CLOCK = "[Clock action] Update Clock";
export class UpdateClock implements Action {
 readonly type = UPDATE_CLOCK;
 constructor(public bale: ClockBit) {}
}

export const READ_CLOCK = "[Read action] Read Clock";
 export class ReadClock implements Action {
 readonly type = READ_CLOCK;
 constructor(public bale: ClockBit) {}
 }
 
export const WRITE_CLOCK = "[Write action] Write Clock";
 export class WriteClock implements Action {
 readonly type = WRITE_CLOCK;
 constructor(public bale: ClockBit) {}
 }
 
export const REMOVE_CLOCK = "[Remove action] Remove Clock";
 export class RemoveClock implements Action {
 readonly type = REMOVE_CLOCK;
 constructor(public bale: ClockBit) {}
 }
 
export const CREATE_CLOCK = "[Create action] Create Clock";
 export class CreateClock implements Action {
 readonly type = CREATE_CLOCK;
 constructor(public bale: ClockBit) {}
 }
 
export const DELETE_CLOCK = "[Delete action] Delete Clock";
 export class DeleteClock implements Action {
 readonly type = DELETE_CLOCK;
 constructor(public bale: ClockBit) {}
 }
 
export type Actions = | InitClock | UpdateClock 
| ReadClock
| WriteClock
| RemoveClock
| CreateClock
| DeleteClock