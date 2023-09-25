import * as clone from "clone-deep";
import * as Act from "./lcd.action";
import { LcdModel } from "./lcd.model";
import * as Buzz from "./lcd.buzzer";
import State from "../99.core/state";

export function reducer(model: LcdModel = new LcdModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_LCD:
 return Buzz.updateLcd(clone(model), act.bale, state);

 case Act.INIT_LCD:
 return Buzz.initLcd(clone(model), act.bale, state);

case Act.READ_LCD:
 return Buzz.readLcd(clone(model), act.bale, state);
 
case Act.WRITE_LCD:
 return Buzz.writeLcd(clone(model), act.bale, state);
 
case Act.REMOVE_LCD:
 return Buzz.removeLcd(clone(model), act.bale, state);
 
case Act.DELETE_LCD:
 return Buzz.deleteLcd(clone(model), act.bale, state);
 
case Act.CREATE_LCD:
 return Buzz.createLcd(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
