import * as clone from "clone-deep";
import * as Act from "./toon.action";
import { ToonModel } from "./toon.model";
import * as Buzz from "./toon.buzzer";
import State from "../99.core/state";

export function reducer(model: ToonModel = new ToonModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_TOON:
 return Buzz.updateToon(clone(model), act.bale, state);

 case Act.INIT_TOON:
 return Buzz.initToon(clone(model), act.bale, state);

 default:
 return model;
 }
}
