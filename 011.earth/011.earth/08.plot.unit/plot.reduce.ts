import * as clone from "clone-deep";
import * as Act from "./plot.action";
import { PlotModel } from "./plot.model";
import * as Buzz from "./plot.buzzer";
import State from "../99.core/state";

export function reducer(model: PlotModel = new PlotModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_PLOT:
 return Buzz.updatePlot(clone(model), act.bale, state);

 case Act.INIT_PLOT:
 return Buzz.initPlot(clone(model), act.bale, state);

case Act.PUSH_PLOT:
 return Buzz.pushPlot(clone(model), act.bale, state);
 
case Act.OPEN_PLOT:
 return Buzz.openPlot(clone(model), act.bale, state);
 
case Act.READ_PLOT:
 return Buzz.readPlot(clone(model), act.bale, state);
 
case Act.WRITE_PLOT:
 return Buzz.writePlot(clone(model), act.bale, state);
 
case Act.CREATE_PLOT:
 return Buzz.createPlot(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
