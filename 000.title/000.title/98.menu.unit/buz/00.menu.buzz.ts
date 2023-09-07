import * as ActMnu from "../menu.action";
import * as ActTtl from "../../00.title.unit/title.action";

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

    bit = await ste.bus(ActTrm.PRINT_TERMINAL, { src: "TITLE PIVOT V0", bit: 'local' })
    bit = await ste.bus(ActTrm.PRINT_TERMINAL, { src: "-----------", bit: "local" })

    var lst = [ActTtl.UPDATE_TITLE, ActTtl.OPEN_TITLE, ActTtl.EDIT_TITLE]

    bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

    bit = bit.trmBit;
    var idx = lst[bit.val];

    switch (idx) {


        case ActTtl.OPEN_TITLE:
            bit = await ste.hunt(ActTtl.OPEN_TITLE, {})
            break;


        case ActTtl.UPDATE_TITLE:
            bit = await ste.hunt(ActTtl.UPDATE_TITLE, {})
            break;


        case ActTtl.EDIT_TITLE:

            bit = await ste.hunt(ActTtl.EDIT_TITLE, {})
            bit = await ste.bus(ActTrm.PRINT_TERMINAL, { src: "PATCHING...", bit: 'local' })
            bit = await ste.bus(ActTrm.PRINT_TERMINAL, { src: "-----------", bit: "local" })

            lst = [ActTtl.PATCH_TITLE]

            bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

            bit = await ste.hunt(ActTtl.PATCH_TITLE, {})

            break;

        default:
            bit = await await ste.bus(ActTrm.PRINT_TERMINAL, {})
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
