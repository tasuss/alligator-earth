import * as clone from "clone-deep";
import * as Act from "./sprite.action";
import { SpriteModel } from "./sprite.model";
import * as Buzz from "./sprite.buzzer";
import State from "../99.core/state";

export function reducer(model: SpriteModel = new SpriteModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_SPRITE:
 return Buzz.updateSprite(clone(model), act.bale, state);

 case Act.INIT_SPRITE:
 return Buzz.initSprite(clone(model), act.bale, state);

case Act.READ_SPRITE:
 return Buzz.readSprite(clone(model), act.bale, state);
 
case Act.WRITE_SPRITE:
 return Buzz.writeSprite(clone(model), act.bale, state);
 
case Act.CREATE_SPRITE:
 return Buzz.createSprite(clone(model), act.bale, state);
 
case Act.REMOVE_SPRITE:
 return Buzz.removeSprite(clone(model), act.bale, state);
 
case Act.DELETE_SPRITE:
 return Buzz.deleteSprite(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
