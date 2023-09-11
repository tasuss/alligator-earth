import * as Honeycomb from "honeycomb-grid";

export default interface HoneycombCollection {
  hexFactoryList: Honeycomb.HexFactory[];
  hexFactories: any;

  gridFactoryList: Honeycomb.GridFactory<any>[];
  gridFactories: any;

  gridList: any[];
  grids: any;

  hexList: Honeycomb.Hex<any>[];
  hexs: any;
}
