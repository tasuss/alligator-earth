import * as clone from "clone-deep";
import * as Act from "./scene.action";
import { SceneModel } from "./scene.model";
import * as Buzz from "./scene.buzzer";
import State from "../99.core/state";

export function reducer(model: SceneModel = new SceneModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_SCENE:
 return Buzz.updateScene(clone(model), act.bale, state);

 case Act.INIT_SCENE:
 return Buzz.initScene(clone(model), act.bale, state);

case Act.HUNT_SCENE:
 return Buzz.huntScene(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
