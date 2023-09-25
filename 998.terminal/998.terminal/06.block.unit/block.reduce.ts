import * as clone from "clone-deep";
import * as Act from "./block.action";
import { BlockModel } from "./block.model";
import * as Buzz from "./block.buzzer";
import State from "../99.core/state";

export function reducer(model: BlockModel = new BlockModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_BLOCK:
 return Buzz.updateBlock(clone(model), act.bale, state);

 case Act.INIT_BLOCK:
 return Buzz.initBlock(clone(model), act.bale, state);

case Act.READ_BLOCK:
 return Buzz.readBlock(clone(model), act.bale, state);
 
case Act.WRITE_BLOCK:
 return Buzz.writeBlock(clone(model), act.bale, state);
 
case Act.REMOVE_BLOCK:
 return Buzz.removeBlock(clone(model), act.bale, state);
 
case Act.DELETE_BLOCK:
 return Buzz.deleteBlock(clone(model), act.bale, state);
 
case Act.CREATE_BLOCK:
 return Buzz.createBlock(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
