import { Action } from "../99.core/interface/action.interface";
import  GameBit  from "./fce/game.bit";


export const INIT_GAME = "[Game action] Init Game";
export class InitGame implements Action {
 readonly type = INIT_GAME;
 constructor(public bale: GameBit) {}
}

export const UPDATE_GAME = "[Game action] Update Game";
export class UpdateGame implements Action {
 readonly type = UPDATE_GAME;
 constructor(public bale: GameBit) {}
}

export const OPEN_GAME = "[Open action] Open Game";
 export class OpenGame implements Action {
 readonly type = OPEN_GAME;
 constructor(public bale: GameBit) {}
 }
 
export const RUN_GAME = "[Run action] Run Game";
 export class RunGame implements Action {
 readonly type = RUN_GAME;
 constructor(public bale: GameBit) {}
 }
 
export const EDIT_GAME = "[Edit action] Edit Game";
 export class EditGame implements Action {
 readonly type = EDIT_GAME;
 constructor(public bale: GameBit) {}
 }
 
export const PATCH_GAME = "[Patch action] Patch Game";
 export class PatchGame implements Action {
 readonly type = PATCH_GAME;
 constructor(public bale: GameBit) {}
 }
 
export type Actions = | InitGame | UpdateGame 
| OpenGame
| RunGame
| EditGame
| PatchGame

