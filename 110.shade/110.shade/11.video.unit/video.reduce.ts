import * as clone from "clone-deep";
import * as Act from "./video.action";
import { VideoModel } from "./video.model";
import * as Buzz from "./video.buzzer";
import State from "../99.core/state";

export function reducer(model: VideoModel = new VideoModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_VIDEO:
 return Buzz.updateVideo(clone(model), act.bale, state);

 case Act.INIT_VIDEO:
 return Buzz.initVideo(clone(model), act.bale, state);

case Act.REMOVE_VIDEO:
 return Buzz.removeVideo(clone(model), act.bale, state);
 
case Act.DELETE_VIDEO:
 return Buzz.deleteVideo(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
