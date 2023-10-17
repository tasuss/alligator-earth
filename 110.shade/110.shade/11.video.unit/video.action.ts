import { Action } from "../99.core/interface/action.interface";
import  VideoBit  from "./fce/video.bit";

// Video actions

export const INIT_VIDEO = "[Video action] Init Video";
export class InitVideo implements Action {
 readonly type = INIT_VIDEO;
 constructor(public bale: VideoBit) {}
}

export const UPDATE_VIDEO = "[Video action] Update Video";
export class UpdateVideo implements Action {
 readonly type = UPDATE_VIDEO;
 constructor(public bale: VideoBit) {}
}

export const REMOVE_VIDEO = "[Replace action] Replace Video";
 export class RemoveVideo implements Action {
 readonly type = REMOVE_VIDEO;
 constructor(public bale: VideoBit) {}
 }
 
export const DELETE_VIDEO = "[Delete action] Delete Video";
 export class DeleteVideo implements Action {
 readonly type = DELETE_VIDEO;
 constructor(public bale: VideoBit) {}
 }
 
export type Actions = | InitVideo | UpdateVideo 
| RemoveVideo
| DeleteVideo
