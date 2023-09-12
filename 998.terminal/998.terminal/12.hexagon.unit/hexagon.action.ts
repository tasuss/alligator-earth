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

export type Actions = | InitHexagon | UpdateHexagon ;
