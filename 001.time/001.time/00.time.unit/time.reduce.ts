import * as clone from "clone-deep";
import * as Act from "./time.action";
import { TimeModel } from "./time.model";
import * as Buzz from "./time.buzzer";
import State from "../99.core/state";

export function reducer(model: TimeModel = new TimeModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_TIME:
 return Buzz.updateTime(clone(model), act.bale, state);

 case Act.INIT_TIME:
 return Buzz.initTime(clone(model), act.bale, state);

case Act.OPEN_TIME:
 return Buzz.openTime(clone(model), act.bale, state);
 
case Act.RUN_TIME:
 return Buzz.runTime(clone(model), act.bale, state);
 
case Act.EDIT_TIME:
 return Buzz.editTime(clone(model), act.bale, state);
 
case Act.PATCH_TIME:
 return Buzz.patchTime(clone(model), act.bale, state);
 
case Act.CLOUD_TIME:
 return Buzz.cloudTime(clone(model), act.bale, state);
 
 default:
 return model;
 }
}



