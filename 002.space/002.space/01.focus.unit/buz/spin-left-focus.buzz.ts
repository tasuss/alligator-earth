import * as ActFoc from "../focus.action";
import * as ActMap from "../../03.hexmap.unit/hexmap.action";
import * as ActCol from "../../97.collect.unit/collect.action";

var bit, val, idx, dex, lst, dat;

export const spinLeftFocus = async (cpy: FocusModel, bal: FocusBit, ste: State) => {

  bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: bal.idx })
  var dat: SpotBit = bit.focBit.dat;

  var face;

  switch (dat.face) {
    case DIRECTION.NORTH_EAST:
      face = DIRECTION.EAST;
      break;
    case DIRECTION.NORTH_WEST:
      face = DIRECTION.NORTH_EAST;
      break;
    case DIRECTION.WEST:
      face = DIRECTION.NORTH_WEST;
      break;
    case DIRECTION.SOUTH_WEST:
      face = DIRECTION.WEST;
      break;
    case DIRECTION.SOUTH_EAST:
      face = DIRECTION.SOUTH_WEST;
      break;
    case DIRECTION.EAST:
      face = DIRECTION.SOUTH_EAST;
      break;
  }

  dat.move = "";
  dat.face = face;

  bit = await ste.hunt(ActFoc.BOND_FOCUS, { idx: dat.idx, src:dat.face })
  var bonds = bit.focBit.dat
  dat.bonds = bonds
  

  bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: dat.idx, dat })

  if (bal.slv != null) bal.slv({ focBit: { idx: "spin-left-focus", dat } });

  return cpy;
};


import { FocusModel } from "../focus.model";
import FocusBit from "../fce/focus.bit";
import State from "../../99.core/state";
import SpotBit from "../fce/spot.bit";
import * as Honeycomb from "honeycomb-grid";
import * as SHAPE from '../../val/shape'
import * as SPACE from "../../val/space"
import * as DIRECTION from "../../val/direction"

