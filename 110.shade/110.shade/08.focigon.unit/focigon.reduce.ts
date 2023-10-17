import * as clone from "clone-deep";
import * as Act from "./focigon.action";
import { FocigonModel } from "./focigon.model";
import * as Buzz from "./focigon.buzzer";
import State from "../99.core/state";

export function reducer(model: FocigonModel = new FocigonModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_FOCIGON:
 return Buzz.updateFocigon(clone(model), act.bale, state);

 case Act.INIT_FOCIGON:
 return Buzz.initFocigon(clone(model), act.bale, state);

case Act.READ_FOCIGON:
 return Buzz.readFocigon(clone(model), act.bale, state);
 
case Act.WRITE_FOCIGON:
 return Buzz.writeFocigon(clone(model), act.bale, state);
 
case Act.REMOVE_FOCIGON:
 return Buzz.removeFocigon(clone(model), act.bale, state);
 
case Act.CREATE_FOCIGON:
 return Buzz.createFocigon(clone(model), act.bale, state);
 
case Act.DELETE_FOCIGON:
 return Buzz.deleteFocigon(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
