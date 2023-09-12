import * as clone from "clone-deep";
import * as Act from "./graphic.action";
import { GraphicModel } from "./graphic.model";
import * as Buzz from "./graphic.buzzer";
import State from "../99.core/state";

export function reducer(model: GraphicModel = new GraphicModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_GRAPHIC:
 return Buzz.updateGraphic(clone(model), act.bale, state);

 case Act.INIT_GRAPHIC:
 return Buzz.initGraphic(clone(model), act.bale, state);

 default:
 return model;
 }
}
