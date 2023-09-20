import * as ActMnu from "../menu.action";
import * as ActGam from "../../00.game.unit/game.action";

import * as ActTrm from "../../act/terminal.action";

var bit, lst, dex

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

 if (bal == null) bal = { idx: null }

 bit = await ste.bus(ActTrm.INIT_TERMINAL, {})

 updateMenu(cpy, bal, ste);

 return cpy;
};

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

 bit = await ste.bus(ActTrm.PRINT_TERMINAL, { src: "-----------", bit: 'local' })

 bit = await ste.bus(ActTrm.PRINT_TERMINAL, { src: "AAADS PIVOT V0", bit: 'local' })
 bit = await ste.bus(ActTrm.PRINT_TERMINAL, { src: "-----------", bit: "local" })

 //var lst = [ ActAaa.UPDATE_AAADS, ActAaa.OPEN_AAADS, ActAaa.EDIT_AAADS ]
 var lst = []

 bit = await ste.bus(ActTrm.OPTION_TERMINAL, { lst })

 bit = bit.trmBit;
 var idx = lst[bit.val];

// switch (idx) {

 //case ActAaa.OPEN_AAADS:
 //bit = await ste.hunt(ActAaa.OPEN_AAADS, {})
// break;


// case ActAaa.UPDATE_AAADS:
// bit = await ste.hunt( ActAaa.UPDATE_AAADS, {})
// break;


// case ActAaa.EDIT_AAADS:

// bit = await ste.hunt( ActAaa.EDIT_AAADS, {})
// bit = await ste.bus(ActTrm.PRINT_TERMINAL, { src: "PATCHING...", bit: 'local' })
// bit = await ste.bus(ActTrm.PRINT_TERMINAL, { src: "-----------", bit: "local" })

// lst = [ActAaa.PATCH_AAADS]

// bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

// bit = await ste.hunt( ActAaa.PATCH_AAADS, {})

// break;

// default:
// bit = await await ste.bus(ActTrm.CLOSE_TERMINAL, {})
// break;
 //}

 //updateMenu(cpy, bal, ste);

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
