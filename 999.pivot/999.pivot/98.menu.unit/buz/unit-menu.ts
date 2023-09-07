import * as ActMnu from "../menu.action";
//import * as ActLib from "../../act/library.action";
import * as ActRen from "../../act/renpy.action";
//import * as ActWrk from "../../act/work.action";

import * as ActPvt from "../../00.pivot.unit/pivot.action";
import * as ActTrm from "../../01.terminal.unit/terminal.action";
//import * as ActDsk from "../../96.disk.unit/disk.action";
import * as ActUnt from "../../02.unit.unit/unit.action";
import * as ActCol from "../../97.collect.unit/collect.action";

var lst, bit, dat, src;

export const unitMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  var bit;

  bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 1, src: "" })
  bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 1, src: "-----------" })
  bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 4, src: "UNIT MENU" })
  bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 1, src: "-----------" })

  var list = [ActUnt.UPDATE_UNIT, ActUnt.CREATE_UNIT, ActUnt.CODE_UNIT, ActUnt.REPLACE_UNIT]

  bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
  bit = bit.trmBit;

  var idx = list[bit.val];

  switch (idx) {

    case ActUnt.CODE_UNIT:

      bit = await ste.hunt(ActPvt.LIST_PIVOT);
      list = bit.pvtBit.lst
      bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
      var val = bit.trmBit.val
      var src = list[val];

      bit = await ste.hunt(ActUnt.CODE_UNIT, { src });

      unitMenu(cpy, bal, ste);

      break

    case ActUnt.CREATE_UNIT:

      bit = await ste.hunt(ActTrm.INPUT_TERMINAL, { lst: ["", "", "Create Unit"] });
      bal.src = bit.trmBit.src;

      bit = await ste.hunt(ActUnt.CREATE_UNIT, bal);

      unitMenu(cpy, bal, ste);

      break


      
    case ActUnt.REPLACE_UNIT:

      var list = ['core', 'bus', 'hunt', 'collect', 'vurt']
      bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
      bit = bit.trmBit;
      var idx = list[bit.val];

      if (idx == null) {

        bit = await ste.hunt(ActMnu.CLOSE_MENU, {});

        return
      }


      bit = await ste.hunt(ActUnt.REPLACE_UNIT, { idx })

      unitMenu(cpy, bal, ste);

      break

    case ActUnt.UPDATE_UNIT:

      bit = await ste.hunt(ActPvt.LIST_PIVOT, {});
      list = bit.pvtBit.lst
      bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
      var val = bit.trmBit.val
      var src = list[val];

      bit = await ste.hunt(ActUnt.LIST_UNIT, { src });


      list = bit.untBit.lst
      bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });

      var val = bit.trmBit.val
      var idx = list[val];

      bit = await ste.hunt(ActTrm.INPUT_TERMINAL, { lst: ["", "", "Input Verb"] });
      var dat = bit.trmBit.src;

      bit = await ste.hunt(ActUnt.UPDATE_UNIT, { src, idx, dat });

      unitMenu(cpy, bal, ste);


      //var list = ['core', 'bus', 'hunt']
      //bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst: list });
      //bit = bit.trmBit;
      //var idx = list[bit.val];

      //ste.hunt(ActVrt.REPLACE_VURT, { idx })

      break
  }


  return cpy;
};




var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";

//import * as PIVOT from "../../val/pivot"
//import { BusModel } from "999.vurt/99.bus.unit/bus.model";
//import * as COLOR_SORT from "../../val/color-sort"
