import { Action } from "../99.core/interface/action.interface";
import  ToonBit  from "./fce/toon.bit";

// Toon actions

export const INIT_TOON = "[Toon action] Init Toon";
export class InitToon implements Action {
 readonly type = INIT_TOON;
 constructor(public bale: ToonBit) {}
}

export const UPDATE_TOON = "[Toon action] Update Toon";
export class UpdateToon implements Action {
 readonly type = UPDATE_TOON;
 constructor(public bale: ToonBit) {}
}

export type Actions = | InitToon | UpdateToon ;
