import * as clone from "clone-deep";
import * as Act from "./being.action";
import { BeingModel } from "./being.model";
import * as Buzz from "./being.buzzer";
import State from "../99.core/state";

export function reducer(model: BeingModel = new BeingModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_BEING:
 return Buzz.updateBeing(clone(model), act.bale, state);

 case Act.INIT_BEING:
 return Buzz.initBeing(clone(model), act.bale, state);

case Act.OPEN_BEING:
 return Buzz.openBeing(clone(model), act.bale, state);
 
case Act.CREATE_BEING:
 return Buzz.createBeing(clone(model), act.bale, state);
 
case Act.ACCESS_BEING:
 return Buzz.accessBeing(clone(model), act.bale, state);
 
case Act.WRITE_BEING:
 return Buzz.writeBeing(clone(model), act.bale, state);
 
case Act.READ_BEING:
 return Buzz.readBeing(clone(model), act.bale, state);
 
case Act.AGE_BEING:
 return Buzz.ageBeing(clone(model), act.bale, state);
 
case Act.ADVANCE_BEING:
 return Buzz.advanceBeing(clone(model), act.bale, state);
 
case Act.LOAD_BEING:
 return Buzz.loadBeing(clone(model), act.bale, state);
 
 
 default:
 return model;
 }
}
