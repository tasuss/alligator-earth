import { Action } from "../99.core/interface/action.interface";
import  SceneBit  from "./fce/scene.bit";

// Scene actions

export const INIT_SCENE = "[Scene action] Init Scene";
export class InitScene implements Action {
 readonly type = INIT_SCENE;
 constructor(public bale: SceneBit) {}
}

export const UPDATE_SCENE = "[Scene action] Update Scene";
export class UpdateScene implements Action {
 readonly type = UPDATE_SCENE;
 constructor(public bale: SceneBit) {}
}

export const HUNT_SCENE = "[Hunt action] Hunt Scene";
 export class HuntScene implements Action {
 readonly type = HUNT_SCENE;
 constructor(public bale: SceneBit) {}
 }
 
export const TITLE_SCENE = "[Title action] Title Scene";
 export class TitleScene implements Action {
 readonly type = TITLE_SCENE;
 constructor(public bale: SceneBit) {}
 }
 
export const PROLOGUE_SCENE = "[Prologue action] Prologue Scene";
 export class PrologueScene implements Action {
 readonly type = PROLOGUE_SCENE;
 constructor(public bale: SceneBit) {}
 }
 
export type Actions = | InitScene | UpdateScene 
| HuntScene
| TitleScene
| PrologueScene