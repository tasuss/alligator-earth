import { Action } from "../99.core/interface/action.interface";
import  GraphicBit  from "./fce/graphic.bit";

// Graphic actions

export const INIT_GRAPHIC = "[Graphic action] Init Graphic";
export class InitGraphic implements Action {
 readonly type = INIT_GRAPHIC;
 constructor(public bale: GraphicBit) {}
}

export const UPDATE_GRAPHIC = "[Graphic action] Update Graphic";
export class UpdateGraphic implements Action {
 readonly type = UPDATE_GRAPHIC;
 constructor(public bale: GraphicBit) {}
}

export type Actions = | InitGraphic | UpdateGraphic ;
