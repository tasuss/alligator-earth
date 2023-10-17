import { Action } from "../99.core/interface/action.interface";
import  SpriteBit  from "./fce/sprite.bit";

// Sprite actions

export const INIT_SPRITE = "[Sprite action] Init Sprite";
export class InitSprite implements Action {
 readonly type = INIT_SPRITE;
 constructor(public bale: SpriteBit) {}
}

export const UPDATE_SPRITE = "[Sprite action] Update Sprite";
export class UpdateSprite implements Action {
 readonly type = UPDATE_SPRITE;
 constructor(public bale: SpriteBit) {}
}

export const READ_SPRITE = "[Read action] Read Sprite";
 export class ReadSprite implements Action {
 readonly type = READ_SPRITE;
 constructor(public bale: SpriteBit) {}
 }
 
export const WRITE_SPRITE = "[Write action] Write Sprite";
 export class WriteSprite implements Action {
 readonly type = WRITE_SPRITE;
 constructor(public bale: SpriteBit) {}
 }
 
export const CREATE_SPRITE = "[Creatt action] Creatt Sprite";
 export class CreateSprite implements Action {
 readonly type = CREATE_SPRITE;
 constructor(public bale: SpriteBit) {}
 }
 
export const REMOVE_SPRITE = "[Remove action] Remove Sprite";
 export class RemoveSprite implements Action {
 readonly type = REMOVE_SPRITE;
 constructor(public bale: SpriteBit) {}
 }
 
export const DELETE_SPRITE = "[Delete action] Delete Sprite";
 export class DeleteSprite implements Action {
 readonly type = DELETE_SPRITE;
 constructor(public bale: SpriteBit) {}
 }
 
export type Actions = | InitSprite | UpdateSprite 
| ReadSprite
| WriteSprite
| CreateSprite
| RemoveSprite
| DeleteSprite