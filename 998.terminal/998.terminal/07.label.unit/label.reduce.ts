import * as clone from "clone-deep";
import * as Act from "./label.action";
import { LabelModel } from "./label.model";
import * as Buzz from "./label.buzzer";
import State from "../99.core/state";

export function reducer(model: LabelModel = new LabelModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_LABEL:
 return Buzz.updateLabel(clone(model), act.bale, state);

 case Act.INIT_LABEL:
 return Buzz.initLabel(clone(model), act.bale, state);

case Act.READ_LABEL:
 return Buzz.readLabel(clone(model), act.bale, state);
 
case Act.WRITE_LABEL:
 return Buzz.writeLabel(clone(model), act.bale, state);
 
case Act.REMOVE_LABEL:
 return Buzz.removeLabel(clone(model), act.bale, state);
 
case Act.DELETE_LABEL:
 return Buzz.deleteLabel(clone(model), act.bale, state);
 
case Act.CREATE_LABEL:
 return Buzz.createLabel(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
