import { Action } from "../99.core/interface/action.interface";
import  ConsoleBit  from "./fce/console.bit";

// Console actions

export const INIT_CONSOLE = "[Console action] Init Console";
export class InitConsole implements Action {
 readonly type = INIT_CONSOLE;
 constructor(public bale: ConsoleBit) {}
}

export const UPDATE_CONSOLE = "[Console action] Update Console";
export class UpdateConsole implements Action {
 readonly type = UPDATE_CONSOLE;
 constructor(public bale: ConsoleBit) {}
}

export const READ_CONSOLE = "[Read action] Read Console";
 export class ReadConsole implements Action {
 readonly type = READ_CONSOLE;
 constructor(public bale: ConsoleBit) {}
 }
 
export const WRITE_CONSOLE = "[Write action] Write Console";
 export class WriteConsole implements Action {
 readonly type = WRITE_CONSOLE;
 constructor(public bale: ConsoleBit) {}
 }
 
export const REMOVE_CONSOLE = "[Remove action] Remove Console";
 export class RemoveConsole implements Action {
 readonly type = REMOVE_CONSOLE;
 constructor(public bale: ConsoleBit) {}
 }
 
export const DELETE_CONSOLE = "[Delete action] Delete Console";
 export class DeleteConsole implements Action {
 readonly type = DELETE_CONSOLE;
 constructor(public bale: ConsoleBit) {}
 }
 
export const CREATE_CONSOLE = "[Create action] Create Console";
 export class CreateConsole implements Action {
 readonly type = CREATE_CONSOLE;
 constructor(public bale: ConsoleBit) {}
 }
 
export type Actions = | InitConsole | UpdateConsole 
| ReadConsole
| WriteConsole
| RemoveConsole
| DeleteConsole
| CreateConsole