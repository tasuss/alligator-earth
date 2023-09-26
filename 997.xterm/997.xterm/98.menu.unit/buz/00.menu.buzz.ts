import * as ActMnu from "../menu.action";
import * as Act{{=it.nomTitle}} from "../../00.{{=it.name}}.unit/{{=it.name}}.action";
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

  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "{{=it.nameCaps}} PIVOT V0", bit: 'local' })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

  var lst = [ Act{{=it.nomTitle}}.UPDATE_{{=it.nameCaps}}, Act{{=it.nomTitle}}.OPEN_{{=it.nameCaps}}, Act{{=it.nomTitle}}.EDIT_{{=it.nameCaps}} ]

  bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

  bit = bit.trmBit;
  var idx = lst[bit.val];

  switch (idx) {


    case Act{{=it.nomTitle}}.OPEN_{{=it.nameCaps}}:
      bit = await ste.hunt(Act{{=it.nomTitle}}.OPEN_{{=it.nameCaps}}, {})
      break;


    case Act{{=it.nomTitle}}.UPDATE_{{=it.nameCaps}}:
      bit = await ste.hunt( Act{{=it.nomTitle}}.UPDATE_{{=it.nameCaps}}, {})
      //bit = await ste.hunt(ActShd.OPEN_SHADE, {})
      break;


    case Act{{=it.nomTitle}}.EDIT_{{=it.nameCaps}}:

      bit = await ste.hunt( Act{{=it.nomTitle}}.EDIT_{{=it.nameCaps}}, {})
      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PATCHING...", bit: 'local' })
      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

      lst = [Act{{=it.nomTitle}}.PATCH_{{=it.nameCaps}}]

      bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

      bit = await ste.hunt( Act{{=it.nomTitle}}.PATCH_{{=it.nameCaps}}, {})

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
