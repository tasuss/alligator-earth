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

export const READ_GRAPHIC = "[Read action] Read Graphic";
 export class ReadGraphic implements Action {
 readonly type = READ_GRAPHIC;
 constructor(public bale: GraphicBit) {}
 }
 
export const WRITE_GRAPHIC = "[Write action] Write Graphic";
 export class WriteGraphic implements Action {
 readonly type = WRITE_GRAPHIC;
 constructor(public bale: GraphicBit) {}
 }
 
export const CREATE_GRAPHIC = "[Create action] Create Graphic";
 export class CreateGraphic implements Action {
 readonly type = CREATE_GRAPHIC;
 constructor(public bale: GraphicBit) {}
 }
 
export const REMOVE_GRAPHIC = "[Remove action] Remove Graphic";
 export class RemoveGraphic implements Action {
 readonly type = REMOVE_GRAPHIC;
 constructor(public bale: GraphicBit) {}
 }
 
export const DELETE_GRAPHIC = "[Delete action] Delete Graphic";
 export class DeleteGraphic implements Action {
 readonly type = DELETE_GRAPHIC;
 constructor(public bale: GraphicBit) {}
 }
 
export type Actions = | InitGraphic | UpdateGraphic 
| ReadGraphic
| WriteGraphic
| CreateGraphic
| RemoveGraphic
| DeleteGraphic