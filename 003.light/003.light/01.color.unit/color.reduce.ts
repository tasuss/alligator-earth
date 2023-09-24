import * as clone from "clone-deep";
import * as Act from "./color.action";
import { ColorModel } from "./color.model";
import * as Buzz from "./color.buzzer";
import State from "../99.core/state";

export function reducer(model: ColorModel = new ColorModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_COLOR:
 return Buzz.updateColor(clone(model), act.bale, state);

 case Act.INIT_COLOR:
 return Buzz.initColor(clone(model), act.bale, state);

case Act.LOAD_COLOR:
 return Buzz.loadColor(clone(model), act.bale, state);
 
case Act.FETCH_COLOR:
 return Buzz.fetchColor(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
