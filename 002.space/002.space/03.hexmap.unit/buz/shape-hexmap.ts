import * as ActMap from "../hexmap.action";

import * as ActFoc from "../../01.focus.unit/focus.action";

import * as ActSpc from "../../00.space.unit/space.action";
import * as ActCol from "../../97.collect.unit/collect.action";

import * as ActDsk from "../../act/disk.action";
import * as ActVrt from "../../act/vurt.action";

var bit, idx, lst, dat, val, src;

export const shapeHexmap = async (cpy: HexmapModel, bal: HexmapBit, ste: State) => {


  var dat: MapBit = bal.dat
  if (dat == null) return bal.slv({ mapBit: { idx: "shape-hexmap-error" } });

  if (dat.frm == null) dat.frm = SHAPE.RECTANGLE;

  if (dat.w == null) dat.w = 3;
  if (dat.h == null) dat.h = 3;


  const Hex: Honeycomb.HexFactory = Honeycomb.extendHex({
    size: Number(1), // default: 1
    orientation: 'pointy', // default: 'pointy'
  });

  const Grid: Honeycomb.GridFactory<any> = Honeycomb.defineGrid(Hex);
  var grid;


  switch (dat.frm) {
    case SHAPE.RECTANGLE:
      
    grid = Grid.rectangle({ width: dat.w, height: dat.h });
    
    break;

    case SHAPE.TRIANGLE:
      grid = Grid.triangle({ size: dat.w });
      break;

    case SHAPE.HEXAGON:
      grid = Grid.hexagon({ radius: dat.w, center: [dat.w, dat.w] });
      break;

    case SHAPE.PARALLELOGRAM:
      grid = Grid.parallelogram({ width: dat.w, height: dat.h });
      break;
  }


  var Chance = require('chance');
  var chance = new Chance();


  grid.forEach((a) => {
    a.hex = chance.bb_pin()
  })

  
  dat.bit = grid
  
  //bit = await ste.hunt(ActMap.REPLACE_HEXMAP, { dat: grid })

  var shape = { frm: dat.frm, bit: dat.bit, w: dat.w, h: dat.h }
  
  //bit = await ste.hunt(ActMap.WRITE_HEXMAP, { idx: bal.idx, dat: shape })
  

  if (bal.slv != null) bal.slv({ mapBit: { idx: "shape-hexmap", dat: {idx:bal.idx, dat:shape}  } });

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