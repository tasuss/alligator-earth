import * as clone from "clone-deep";
import * as Act from "./buffer.action";
import { BufferModel } from "./buffer.model";
import * as Buzz from "./buffer.buzzer";
import State from "../99.core/state";

export function reducer(model: BufferModel = new BufferModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_BUFFER:
 return Buzz.updateBuffer(clone(model), act.bale, state);

 case Act.INIT_BUFFER:
 return Buzz.initBuffer(clone(model), act.bale, state);

case Act.DRAW_BUFFER:
 return Buzz.drawBuffer(clone(model), act.bale, state);
 
case Act.BACKGROUND_BUFFER:
 return Buzz.backgroundBuffer(clone(model), act.bale, state);
 
case Act.READ_BUFFER:
 return Buzz.readBuffer(clone(model), act.bale, state);
 
case Act.WRITE_BUFFER:
 return Buzz.writeBuffer(clone(model), act.bale, state);
 
case Act.CREATE_BUFFER:
 return Buzz.createBuffer(clone(model), act.bale, state);
 
case Act.DELETE_BUFFER:
 return Buzz.deleteBuffer(clone(model), act.bale, state);
 
case Act.REMOVE_BUFFER:
 return Buzz.removeBuffer(clone(model), act.bale, state);
 
case Act.LIST_BUFFER:
 return Buzz.listBuffer(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
