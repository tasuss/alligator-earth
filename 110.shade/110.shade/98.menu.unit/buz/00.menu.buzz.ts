import * as ActMnu from "../menu.action";
import * as ActShd from "../../00.shade.unit/shade.action";
import * as ActVsg from "../../01.visage.unit/visage.action"
import * as ActVrt from "../../act/vurt.action"

import * as ActTrm from "../../act/terminal.action";

var bit, lst, dex

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  if (bal == null) bal = { idx: null }

  bit = await ste.bus(ActTrm.INIT_TERMINAL, {})

  updateMenu(cpy, bal, ste);

  return cpy;
};

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: 'local' })

  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "SHADE PIVOT V0", bit: 'local' })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

  var lst = [ActShd.UPDATE_SHADE, ActShd.OPEN_SHADE, ActShd.RUN_SHADE, ActShd.EDIT_SHADE, ActMnu.CONTAINER_MENU, ActMnu.VISAGE_MENU]

  bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

  bit = bit.trmBit;
  var idx = lst[bit.val];

  switch (idx) {

    case ActMnu.CONTAINER_MENU:
      bit = await ste.hunt(ActMnu.CONTAINER_MENU, {})
      break;

    case ActMnu.VISAGE_MENU:
      bit = await ste.hunt(ActMnu.VISAGE_MENU, {})
      break;

    case ActMnu.SHADE_MENU:
      bit = await ste.hunt(ActMnu.SHADE_MENU, {})
      break;

    case ActShd.OPEN_SHADE:
      bit = await ste.hunt(ActShd.OPEN_SHADE, {})
      break;

    case ActShd.BROWSER_SHADE:
      bit = await ste.hunt(ActShd.BROWSER_SHADE, {})
      break;

    case ActShd.RUN_SHADE:
      bit = await ste.hunt(ActShd.RUN_SHADE, {})
      break;

    case ActShd.UPDATE_SHADE:
      bit = await ste.hunt(ActShd.UPDATE_SHADE, {})
      //bit = await ste.hunt(ActShd.OPEN_SHADE, {})
      break;


    case ActShd.EDIT_SHADE:

      bit = await ste.hunt(ActShd.EDIT_SHADE, {})
      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PATCHING...", bit: 'local' })
      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

      lst = [ActShd.PATCH_SHADE]

      bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

      bit = await ste.hunt(ActShd.PATCH_SHADE, {})

      break;

    default:
      bit = await await ste.bus(ActTrm.CLOSE_TERMINAL, {})
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

export const shadeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: 'local' })

  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "SHADE PIVOT V0", bit: 'local' })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

  var lst = [ActMnu.VISAGE_MENU]
  bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

  bit = bit.trmBit;
  var idx = lst[bit.val];

  switch (idx) {

    case ActMnu.VISAGE_MENU:

      bit = await ste.hunt(ActMnu.VISAGE_MENU, {})
      break;

    default:
      bit = await await ste.hunt(ActMnu.UPDATE_MENU, {})
      break;
  }

  shadeMenu(cpy, bal, ste)

  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });


export const visageMenu = (cpy: MenuModel, bal: MenuBit, ste: State) => {
  debugger
  return cpy;
};
import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
