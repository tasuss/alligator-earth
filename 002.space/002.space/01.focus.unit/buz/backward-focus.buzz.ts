import * as ActFoc from "../focus.action";
import * as ActMap from "../../03.hexmap.unit/hexmap.action";
import * as ActCol from "../../97.collect.unit/collect.action";

var bit, val, idx, dex, lst, dat;

export const backwardFocus = async (cpy: FocusModel, bal: FocusBit, ste: State) => {

  bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: bal.idx })
  var spot: SpotBit = bit.focBit.dat;

  var x = spot.x;
  var y = spot.y;
  var face = spot.face
  var bonds;

  //bit = await ste.hunt(ActFoc.CENTER_FOCUS, {idx:spot.idx, dat: spot } )

  if (spot.face == DIRECTION.WEST) {

    bit = await ste.hunt(ActFoc.BOND_FOCUS, { idx: spot.idx })
    bonds = bit.focBit.dat

    var bond = bonds[DIRECTION.WEST];
    if (bond != null) {
      x = bond.x;
      y = bond.y;
    }

   
  }

  if (spot.face == DIRECTION.EAST) face = DIRECTION.WEST;
  if (spot.face == DIRECTION.NORTH_WEST) face = DIRECTION.WEST;
  if (spot.face == DIRECTION.NORTH_EAST) face = DIRECTION.NORTH_WEST;

  if (spot.face == DIRECTION.SOUTH_WEST) face = DIRECTION.WEST;
  if (spot.face == DIRECTION.SOUTH_EAST) face = DIRECTION.SOUTH_WEST;

  //patch(ste, ActFoc.LIST_VISON_FOCUS, foci);
  //locateHex(ste, foci);

  bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: bal.idx, dat: { x, y, bonds, face } })

  if (bal.slv != null) bal.slv({ focBit: { idx: "backward-focus", dat } });
}


import { FocusModel } from "../focus.model";
import FocusBit from "../fce/focus.bit";
import State from "../../99.core/state";
import SpotBit from "../fce/spot.bit";
import * as Honeycomb from "honeycomb-grid";
import * as SHAPE from '../../val/shape'
import * as SPACE from "../../val/space"
import * as DIRECTION from "../../val/direction"

