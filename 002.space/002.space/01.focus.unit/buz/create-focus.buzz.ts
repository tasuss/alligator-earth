import * as ActFoc from "../focus.action";
import * as ActMap from "../../03.hexmap.unit/hexmap.action";
import * as ActCol from "../../97.collect.unit/collect.action";

var bit, val, idx, dex, lst, dat;

export const createFocus = async (cpy: FocusModel, bal: FocusBit, ste: State) => {

  
    
  var dat: SpotBit = { idx: bal.idx, src: bal.src, typ: SPACE.FOCUS };

  for (var key in bal.dat) {
    dat[key] = bal.dat[key]
  }

  if (dat.gph == null) dat.gph = 'None'

  dat.gph

  if (dat.frm == null) dat.frm = SHAPE.RECTANGLE

  if (dat.x == null) dat.x = 0;
  if (dat.y == null) dat.y = 0;
  if (dat.h == null) dat.h = 1;
  if (dat.w == null) dat.w = 1;

  if (dat.awake == null) dat.awake = false;

  if (dat.face == null) dat.face = 'E'
  if (dat.past == null) dat.past = []
  if (dat.update == null) dat.update = 0;
  if (dat.clock == null) dat.clock = 0;
  if (dat.updateSpeed == null) dat.updateSpeed = 11;
  if (dat.turnSpeed == null) dat.turnSpeed = 11;
  if (dat.spin == null) dat.spin = true

  //bit = await ste.hunt(ActFoc.CORNER_FOCUS, { idx: dat.src, dat })
 // dat.corners = bit.focBit.lst;


  bal.slv({ focBit: { idx: "create-focus", dat: dat } });
  return cpy;
}



import { FocusModel } from "../focus.model";
import FocusBit from "../fce/focus.bit";
import State from "../../99.core/state";
import SpotBit from "../fce/spot.bit";
import * as Honeycomb from "honeycomb-grid";
import * as SHAPE from '../../val/shape'
import * as SPACE from "../../val/space"
import * as DIRECTION from "../../val/direction"
import MapBit from "../../03.hexmap.unit/fce/map.bit"; 
