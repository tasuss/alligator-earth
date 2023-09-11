import * as ActFoc from "../focus.action";
import * as ActMap from "../../03.hexmap.unit/hexmap.action";
import * as ActCol from "../../97.collect.unit/collect.action";

var bit, val, idx, dex, lst, dat;

export const awakeFocus = async (cpy: FocusModel, bal: FocusBit, ste: State) => {

  if ( bal.val == 1 ){

    
  bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: bal.idx, val:1, dat: { awake:true } })

  bit = await ste.hunt(ActFoc.UPDATE_FOCUS, { idx: bal.idx })
  bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: bal.idx, val:1 })

  }

  else{


    
  bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: bal.idx, val:1, dat: { awake:false, viewList:[] } })

  bit = await ste.hunt(ActFoc.UPDATE_FOCUS, { idx: bal.idx })
  bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: bal.idx, val:1 })





  }

 

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

