import * as ActFoc from "../focus.action";
import * as ActMap from "../../03.hexmap.unit/hexmap.action";
import * as ActCol from "../../97.collect.unit/collect.action";

var bit, val, idx, dex, lst, dat;

var flag = false;

export const updateFocus = async (cpy: FocusModel, bal: FocusBit, ste: State) => {

  if (flag == false) {
    flag = true;
    if (bal.slv != null) bal.slv({ focBit: { idx: "update-focus" } });
    return
  }

  bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: bal.idx })

  var spot: SpotBit = bit.focBit.dat;
  var viewList = []

  if (spot.awake == true) {

    bit = await ste.hunt(ActFoc.VISION_FOCUS, { idx: bal.idx })
    viewList = bit.focBit.lst;

    bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: bal.idx, val: 1, dat: { viewList } })


  }
  else {



    bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: bal.idx, val: 1, dat: { viewList } })

  }


  if (bal.slv != null) bal.slv({ focBit: { idx: "update-focus" } });

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

import MapBit from "../../03.hexmap.unit/fce/map.bit";

