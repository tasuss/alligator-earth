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

 default:
 return model;
 }
}
