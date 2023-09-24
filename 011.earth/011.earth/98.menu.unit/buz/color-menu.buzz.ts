import * as ActMnu from "../menu.action";
import * as ActErt from "../../00.earth.unit/earth.action";
import * as ActClr from "../../04.color.unit/color.action";

import * as ActTrm from "../../act/terminal.action";


var bit, lst, dex, dat, src;

export const colorMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Color Menu" })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" })

  lst = [ActClr.FETCH_COLOR]

  bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

  bit = bit.trmBit;
  var idx = lst[bit.val];

  switch (idx) {

    case ActClr.FETCH_COLOR:

      lst = [];

      for (var key in COSMOS) {
        lst.push( COSMOS[ key ].idx  )
      }
 
      bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

      bit = bit.trmBit;
      var idx = lst[bit.val];
      bit = await ste.hunt(ActClr.FETCH_COLOR, { idx })

      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) })      
      break;


    default:
      bit = await ste.bus(ActMnu.UPDATE_MENU, {})
      break;
  }

  colorMenu(cpy, bal, ste);

  return cpy;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state"; import SimBit from "011.earth/00.earth.unit/fce/sim.bit";
import * as COSMOS from '../../val/cosmos'
