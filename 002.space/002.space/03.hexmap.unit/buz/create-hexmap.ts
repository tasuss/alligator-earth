import * as ActMap from "../hexmap.action";

import * as ActFoc from "../../01.focus.unit/focus.action";

import * as ActSpc from "../../00.space.unit/space.action";
import * as ActCol from "../../97.collect.unit/collect.action";

import * as ActDsk from "../../act/disk.action";
import * as ActVrt from "../../act/vurt.action";

var bit, idx, lst, dat, val, src;

export const createHexmap = async (cpy: HexmapModel, bal: HexmapBit, ste: State) => {

  var clone = require("clone-deep");

  var dat: MapBit = { idx: bal.idx, typ: SPACE.HEXMAP }

  for (var key in bal.dat) {
    dat[key] = bal.dat[key]
  }

  dat
  
  const Hex = Honeycomb.extendHex({
    size: Number(1), // default: 1
    orientation: "pointy",
  });

  const Grid = Honeycomb.defineGrid(Hex);
  var copied = clone(dat.bit.grid);
  dat.grid = Grid(copied);

  if ( dat.bit == null ) {
    
    if (bal.slv != null) bal.slv({ mapBit: { idx: "create-hexmap-error", src:"no bit present" } });
  
    return 
  }

  if (bal.slv != null) bal.slv({ mapBit: { idx: "create-hexmap", dat } });
  return cpy;
};

import { HexmapModel } from "../hexmap.model";
import HexmapBit from "../fce/hexmap.bit";
import State from "../../99.core/state";
import * as SHAPE from "../../val/shape";
import * as Honeycomb from "honeycomb-grid";

import * as HEXMAP from "../../val/hexmap";
import * as S from 'string'
import MapBit from "../fce/map.bit";
import * as SPACE from '../../val/space'
import SpotBit from "002.space/01.focus.unit/fce/spot.bit";
