import * as clone from "clone-deep";
import * as Act from "./canvas.action";
import { CanvasModel } from "./canvas.model";
import * as Buzz from "./canvas.buzzer";
import State from "../99.core/state";

export function reducer(model: CanvasModel = new CanvasModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_CANVAS:
 return Buzz.updateCanvas(clone(model), act.bale, state);

 case Act.INIT_CANVAS:
 return Buzz.initCanvas(clone(model), act.bale, state);

case Act.READ_CANVAS:
 return Buzz.readCanvas(clone(model), act.bale, state);
 
case Act.WRITE_CANVAS:
 return Buzz.writeCanvas(clone(model), act.bale, state);
 
case Act.DELETE_CANVAS:
 return Buzz.deleteCanvas(clone(model), act.bale, state);
 
case Act.REMOVE_CANVAS:
 return Buzz.removeCanvas(clone(model), act.bale, state);
 
case Act.CREATE_CANVAS:
 return Buzz.createCanvas(clone(model), act.bale, state);
 
case Act.NEST_CANVAS:
 return Buzz.nestCanvas(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
