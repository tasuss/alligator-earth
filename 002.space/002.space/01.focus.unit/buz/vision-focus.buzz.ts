import * as ActFoc from "../focus.action";
import * as ActMap from "../../03.hexmap.unit/hexmap.action";
import * as ActCol from "../../97.collect.unit/collect.action";

var bit, val, idx, dex, lst, dat;

export const visionFocus = async (cpy: FocusModel, bal: FocusBit, ste: State) => {

  bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: bal.idx })
  var spot: SpotBit = bit.focBit.dat;
  
  bit = await ste.hunt(ActMap.READ_HEXMAP, { idx: spot.src })
  var map: MapBit = bit.mapBit.dat;
  
  var grid = map.grid;

  var size = 3;

  var check = [{ face: spot.face, x: spot.x, y: spot.y }];

  switch (spot.face) {
    case DIRECTION.EAST:
      check.push({ face: spot.face, x: spot.x, y: spot.y + 1 });
      check.push({ face: spot.face, x: spot.x, y: spot.y - 1 });
      break;

    case DIRECTION.WEST:
      check.push({ face: spot.face, x: spot.x, y: spot.y + 1 });
      check.push({ face: spot.face, x: spot.x, y: spot.y - 1 });
      break;

    case DIRECTION.NORTH_EAST:
      check.push({ face: spot.face, x: spot.x, y: spot.y - 1 });
      check.push({ face: spot.face, x: spot.x, y: spot.y + 1 });
      break;

    case DIRECTION.NORTH_WEST:
      check.push({ face: spot.face, x: spot.x, y: spot.y + 1 });
      check.push({ face: spot.face, x: spot.x, y: spot.y - 1 });
      break;

    case DIRECTION.SOUTH_EAST:
      check.push({ face: spot.face, x: spot.x, y: spot.y + 1 });
      check.push({ face: spot.face, x: spot.x, y: spot.y - 1 });
      break;

    case DIRECTION.SOUTH_WEST:
      check.push({ face: spot.face, x: spot.x, y: spot.y + 1 });
      check.push({ face: spot.face, x: spot.x, y: spot.y - 1 });
      break;

    case DIRECTION.SOUTH_EAST:
      check.push({ face: spot.face, x: spot.x, y: spot.y + 1 });
      check.push({ face: spot.face, x: spot.x + 1, y: spot.y - 1 });
      break;
  }

  var output = [];

  check.forEach((a, b) => {
    var last = grid.get({ x: a.x, y: a.y });
    
    for (var i = 0; i < size; i++) {
      if (last != null) {
        var item = grid.neighborsOf(last, compassConvertor(a.face));
        
        if (item[0] != null) {
          var data = { idx: "listing-vison-focus", src: spot.src, x: item[0].x, y: item[0].y, corners: [], h: null };
          last = grid.get({ x: data.x, y: data.y });
          //grabCorners(cpy, data, ste);
          output.push(last.hex);
          
        }
      }
    }
  });


  output
  
  if (bal.slv != null) bal.slv({ focBit: { idx: "vision-focus", lst:output } });

  //var item = grid.neighborsOf(hex, compassConvertor(RCT.EAST));
  //if (item[0] != null) output.push({ x: item[0].x, y: item[0].y });

  //foci.viewList = output;
  //commented out on 3.30

  //cpy.readFocus = foci;
  //commented out on 3.30



  return cpy;
};

const compassConvertor = (val: string) => {
  var result = 0;
  switch (val) {
    case DIRECTION.NORTH_EAST:
      result = 5;
      break;

    case DIRECTION.EAST:
      result = 0;
      break;

    case DIRECTION.SOUTH_EAST:
      result = 1;
      break;

    case DIRECTION.SOUTH_WEST:
      result = 2;
      break;

    case DIRECTION.WEST:
      result = 3;
      break;

    case DIRECTION.NORTH_WEST:
      result = 4;
      break;
  }

  return result;
};



import { FocusModel } from "../focus.model";
import FocusBit from "../fce/focus.bit";
import State from "../../99.core/state";
import SpotBit from "../fce/spot.bit";
import * as Honeycomb from "honeycomb-grid";
import * as SHAPE from '../../val/shape'
import * as SPACE from "../../val/space"
import * as DIRECTION from "../../val/direction"

import MapBit from "../../03.hexmap.unit/fce/map.bit"; 

