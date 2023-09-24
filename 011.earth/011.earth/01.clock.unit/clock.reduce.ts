import * as clone from "clone-deep";
import * as Act from "./clock.action";
import { ClockModel } from "./clock.model";
import * as Buzz from "./clock.buzzer";
import State from "../99.core/state";

export function reducer(model: ClockModel = new ClockModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_CLOCK:
 return Buzz.updateClock(clone(model), act.bale, state);

 case Act.INIT_CLOCK:
 return Buzz.initClock(clone(model), act.bale, state);

case Act.READ_CLOCK:
 return Buzz.readClock(clone(model), act.bale, state);
 
case Act.WRITE_CLOCK:
 return Buzz.writeClock(clone(model), act.bale, state);
 
case Act.REMOVE_CLOCK:
 return Buzz.removeClock(clone(model), act.bale, state);
 
case Act.CREATE_CLOCK:
 return Buzz.createClock(clone(model), act.bale, state);
 
case Act.DELETE_CLOCK:
 return Buzz.deleteClock(clone(model), act.bale, state);
 
case Act.BLOCK_CLOCK:
 return Buzz.blockClock(clone(model), act.bale, state);
 
case Act.LIST_CLOCK:
 return Buzz.listClock(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
