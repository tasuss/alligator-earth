import * as clone from "clone-deep";
import * as Act from "./frame.action";
import { FrameModel } from "./frame.model";
import * as Buzz from "./frame.buzzer";
import State from "../99.core/state";

export function reducer(model: FrameModel = new FrameModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_FRAME:
 return Buzz.updateFrame(clone(model), act.bale, state);

 case Act.INIT_FRAME:
 return Buzz.initFrame(clone(model), act.bale, state);

case Act.READ_FRAME:
 return Buzz.readFrame(clone(model), act.bale, state);
 
case Act.WRITE_FRAME:
 return Buzz.writeFrame(clone(model), act.bale, state);
 
case Act.REMOVE_FRAME:
 return Buzz.removeFrame(clone(model), act.bale, state);
 
case Act.CREATE_FRAME:
 return Buzz.createFrame(clone(model), act.bale, state);
 
case Act.DELETE_FRAME:
 return Buzz.deleteFrame(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
