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

export type Actions = | InitSprite | UpdateSprite ;
