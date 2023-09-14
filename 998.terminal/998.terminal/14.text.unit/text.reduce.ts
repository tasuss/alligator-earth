import * as clone from "clone-deep";
import * as Act from "./text.action";
import { TextModel } from "./text.model";
import * as Buzz from "./text.buzzer";
import State from "../99.core/state";

export function reducer(model: TextModel = new TextModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_TEXT:
 return Buzz.updateText(clone(model), act.bale, state);

 case Act.INIT_TEXT:
 return Buzz.initText(clone(model), act.bale, state);

case Act.WRITE_TEXT:
 return Buzz.writeText(clone(model), act.bale, state);
 
case Act.READ_TEXT:
 return Buzz.readText(clone(model), act.bale, state);
 
case Act.REMOVE_TEXT:
 return Buzz.removeText(clone(model), act.bale, state);
 
case Act.DELETE_TEXT:
 return Buzz.deleteText(clone(model), act.bale, state);
 
case Act.CREATE_TEXT:
 return Buzz.createText(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
