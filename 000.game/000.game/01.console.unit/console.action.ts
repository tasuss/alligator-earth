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

export const OPEN_CONSOLE = "[Open action] Open Console";
 export class OpenConsole implements Action {
 readonly type = OPEN_CONSOLE;
 constructor(public bale: ConsoleBit) {}
 }
 
export type Actions = | InitConsole | UpdateConsole 
| OpenConsole