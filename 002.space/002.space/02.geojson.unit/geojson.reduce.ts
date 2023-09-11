import * as clone from "clone-deep";
import * as Act from "./geojson.action";
import { GeojsonModel } from "./geojson.model";
import * as Buzz from "./geojson.buzzer";
import State from "../99.core/state";

export function reducer(model: GeojsonModel = new GeojsonModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_GEOJSON:
 return Buzz.updateGeojson(clone(model), act.bale, state);

 case Act.INIT_GEOJSON:
 return Buzz.initGeojson(clone(model), act.bale, state);

case Act.LOAD_GEOJSON:
 return Buzz.loadGeojson(clone(model), act.bale, state);
 
case Act.INDEX_GEOJSON:
 return Buzz.indexGeojson(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
