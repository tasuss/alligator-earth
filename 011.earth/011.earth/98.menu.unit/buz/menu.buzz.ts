import * as ActMnu from "../menu.action";
import * as ActErt from "../../00.earth.unit/earth.action";
import * as ActPvt from "../../96.pivot.unit/pivot.action";

import * as ActTrm from "../../act/terminal.action";

var bit, lst, dex, dat;

var sim: SimBit;

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  if (bal == null) bal = { idx: null }

  bit = await ste.bus(ActTrm.INIT_TERMINAL, {})
  updateMenu(cpy, bal, ste);

  return cpy;
};

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Earth PIVOT V0" })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" })

  var lst = [ActMnu.EARTH_MENU, ActMnu.COLOR_MENU, ActMnu.CLOCK_MENU,  ActPvt.UPDATE_PIVOT]

  bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

  bit = bit.trmBit;
  var idx = lst[bit.val];

  switch (idx) {

    case ActPvt.UPDATE_PIVOT:
      bit = await ste.hunt( ActPvt.UPDATE_PIVOT, {})
      break;
      
    case ActMnu.CLOCK_MENU:
      bit = await ste.hunt( ActMnu.CLOCK_MENU, {})
      break;

    case ActMnu.EARTH_MENU:

      bit = await ste.hunt(ActMnu.EARTH_MENU, {})
      break;

      case ActMnu.CLOCK_MENU:

        bit = await ste.hunt(ActMnu.CLOCK_MENU, {})
        break;

    case ActMnu.COLOR_MENU:
      bit = await ste.hunt(ActMnu.COLOR_MENU, {})
      break;

    default:
      bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {})
      break;
  }

  updateMenu(cpy, bal, ste);

  return cpy;
};

export const testMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  return cpy;
};

export const closeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  await ste.bus(ActTrm.CLOSE_TERMINAL, {})
  return cpy;
};


var view = async (sim, ste) => {

  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: sim.idx + ' ::: ' + sim.src + ' ::: ' + sim.cde })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: sim.clkBit.src })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(sim.fte) + " ::::  " + JSON.stringify(sim.pow) })

}

export const earthMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {



  lst = [ActErt.READ_EARTH, ActErt.PUSH_EARTH, ActErt.OPEN_EARTH, ActErt.AUTO_EARTH]

  bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

  bit = bit.trmBit;
  var idx = lst[bit.val];

  switch (idx) {

    case ActErt.READ_EARTH:

      setInterval(async () => {

        bit = await ste.hunt(ActErt.READ_EARTH, { idx: sim.idx })
        sim = bit.ertBit.dat;
        var clkBit = sim.clkBit
        view(sim, ste)

      }, 3333)

      break;

    case ActErt.PUSH_EARTH:
      bit = await ste.hunt(ActErt.PUSH_EARTH, { dx: sim.idx })
      dat = bit.ertBit.dat;
      sim = dat as SimBit
      view(sim, ste)
      break;

    case ActErt.UPDATE_EARTH:
      bit = await ste.hunt(ActErt.UPDATE_EARTH, {})
      break;

    case ActErt.AUTO_EARTH:
      bit = ste.hunt(ActErt.AUTO_EARTH, sim)
      earthMenu( cpy, bal, ste)
      break;

    case ActErt.OPEN_EARTH:
      bit = await ste.hunt(ActErt.OPEN_EARTH, {})
      sim = bit.ertBit.dat;
      view(sim, ste)
      break;

    default:
      bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {})
      break;
  }

  setTimeout(() => { earthMenu(cpy, bal, ste) }, 333)

  return cpy;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });


import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state"; import SimBit from "011.earth/00.earth.unit/fce/sim.bit";

