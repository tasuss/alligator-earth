import { Action } from "../99.core/interface/action.interface";
import  HexagonBit  from "./fce/hexagon.bit";

// Hexagon actions

export const INIT_HEXAGON = "[Hexagon action] Init Hexagon";
export class InitHexagon implements Action {
 readonly type = INIT_HEXAGON;
 constructor(public bale: HexagonBit) {}
}

export const UPDATE_HEXAGON = "[Hexagon action] Update Hexagon";
export class UpdateHexagon implements Action {
 readonly type = UPDATE_HEXAGON;
 constructor(public bale: HexagonBit) {}
}

export const READ_HEXAGON = "[Read action] Read Hexagon";
 export class ReadHexagon implements Action {
 readonly type = READ_HEXAGON;
 constructor(public bale: HexagonBit) {}
 }
 
export const WRITE_HEXAGON = "[Write action] Write Hexagon";
 export class WriteHexagon implements Action {
 readonly type = WRITE_HEXAGON;
 constructor(public bale: HexagonBit) {}
 }
 
export const REMOVE_HEXAGON = "[Remove action] Remove Hexagon";
 export class RemoveHexagon implements Action {
 readonly type = REMOVE_HEXAGON;
 constructor(public bale: HexagonBit) {}
 }
 
export const DELETE_HEXAGON = "[Delete action] Delete Hexagon";
 export class DeleteHexagon implements Action {
 readonly type = DELETE_HEXAGON;
 constructor(public bale: HexagonBit) {}
 }
 
export const CREATE_HEXAGON = "[Create action] Create Hexagon";
 export class CreateHexagon implements Action {
 readonly type = CREATE_HEXAGON;
 constructor(public bale: HexagonBit) {}
 }
 
export type Actions = | InitHexagon | UpdateHexagon 
| ReadHexagon
| WriteHexagon
| RemoveHexagon
| DeleteHexagon
| CreateHexagon