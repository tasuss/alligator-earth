import { Action } from "../99.core/interface/action.interface";
import  PlotBit  from "./fce/plot.bit";

// Plot actions

export const INIT_PLOT = "[Plot action] Init Plot";
export class InitPlot implements Action {
 readonly type = INIT_PLOT;
 constructor(public bale: PlotBit) {}
}

export const UPDATE_PLOT = "[Plot action] Update Plot";
export class UpdatePlot implements Action {
 readonly type = UPDATE_PLOT;
 constructor(public bale: PlotBit) {}
}

export const PUSH_PLOT = "[Push action] Push Plot";
 export class PushPlot implements Action {
 readonly type = PUSH_PLOT;
 constructor(public bale: PlotBit) {}
 }
 
export const OPEN_PLOT = "[Open action] Open Plot";
 export class OpenPlot implements Action {
 readonly type = OPEN_PLOT;
 constructor(public bale: PlotBit) {}
 }
 
export const READ_PLOT = "[Read action] Read Plot";
 export class ReadPlot implements Action {
 readonly type = READ_PLOT;
 constructor(public bale: PlotBit) {}
 }
 
export const WRITE_PLOT = "[Write action] Write Plot";
 export class WritePlot implements Action {
 readonly type = WRITE_PLOT;
 constructor(public bale: PlotBit) {}
 }
 
export const CREATE_PLOT = "[Create action] Create Plot";
 export class CreatePlot implements Action {
 readonly type = CREATE_PLOT;
 constructor(public bale: PlotBit) {}
 }
 
export type Actions = | InitPlot | UpdatePlot 
| PushPlot
| OpenPlot
| ReadPlot
| WritePlot
| CreatePlot