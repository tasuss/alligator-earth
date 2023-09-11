import Hexmap from "./fce/hexmap.interface";
import HexmapBit from "./fce/hexmap.bit";
import HoneycombCollection from "./fce/honeycomb-collection.bit";
import SpotBit from "002.space/01.focus.unit/fce/spot.bit";
import MapBit from "./fce/map.bit";

export class HexmapModel implements Hexmap {
  //idx:string;

  select:MapBit;

  geoJsonNow:any;
  atlasNow:any;
  sizeNow:any = 0;
  mapNomNow:string= 'none'
  
  platBits: any = {};

  hexmapLoc:string = './data/hexmap/';

  //legacy  
  hexmapBitList: HexmapBit[] = [];
  hexmapBits: any = {};


  hc: HoneycombCollection = {
    hexFactoryList: [],
    hexFactories: {},

    gridFactoryList: [],
    gridFactories: {},

    gridList: [],
    grids: {},

    hexList: [],
    hexs: {},
  };

  dex: number = 0;
  count: number = 0;
}
