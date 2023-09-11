import * as ActFoc from "../focus.action";
import * as ActMap from "../../03.hexmap.unit/hexmap.action";
import * as ActCol from "../../97.collect.unit/collect.action";

var bit, val, idx, dex, lst, dat;

export const bondFocus = async (cpy: FocusModel, bal: FocusBit, ste: State) => {

  bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: bal.idx })
  var spot: SpotBit = bit.focBit.dat;
  
  bit = await ste.hunt(ActMap.READ_HEXMAP, { idx: spot.src })
  var map: MapBit = bit.mapBit.dat;

  var grid = map.grid;

  if (grid == null) throw new Error("no map present for " + bal.src);

  var hex = grid.get({ x: spot.x, y: spot.y });
  var bonds = {};
  var item;

  var face = bal.src

  item = grid.neighborsOf(hex, compassConvertor(face));

  if ( item[0] == null ){
    bonds = null
  }
  else{

    if (item[0] != null) bonds[face] = { x: item[0].x, y: item[0].y };
  
  }


  //GIVE ME SOME CORNERS
  //var hex = grid.get({ x: spot.x, y: spot.y });

  //const point = hex.toPoint();
  //spot.corners = hex.corners().map((corner) => corner.add(point));
  //spot.area = [];
  //spot.vision = [];

  //not sure why this is needed 04.03.23
  //if (spot.bondList == null) spot.bondList = [];
  //if (spot.viewList == null) spot.viewList = [];

  //spot.bondList.forEach((a) => {
  //  var b = grid.get({ x: a.x, y: a.y });
  //  const p = b.toPoint();
  //  var crn = hex.corners().map((corner) => corner.add(p));
  //  spot.area.push(crn);
  //});

  //spot.viewList.forEach((a) => {
  //  var b = grid.get({ x: a.x, y: a.y });
  //  const p = b.toPoint();
  //  var crn = hex.corners().map((corner) => corner.add(p));
  //  spot.vision.push(crn);
  //});

  //console.log("vis " + spot.vision.length);

  bonds
  
  console.log("bonds::: " + JSON.stringify(bonds))

  if (bal.slv != null) bal.slv({ focBit: { idx: "orbit-focus", dat: bonds } });

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



