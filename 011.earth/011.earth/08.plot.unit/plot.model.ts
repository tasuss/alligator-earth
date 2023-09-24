import Plot from "./fce/Plot.interface";
import PlotBit from "./fce/plot.interface";

export class PlotModel implements Plot {
 //idx:string;
 plotBitList: PlotBit[] = [];
 plotBits: any = {};
}
