import * as ActMnu from "../menu.action";
import * as ActTme from "../../00.time.unit/time.action";
import * as ActVrt from "../../act/vurt.action"
import * as ActClk from "../../01.clock.unit/clock.action"

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

    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "TIME PIVOT V0", bit: 'local' })
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

    var lst = [ActMnu.CLOCK_MENU, ActTme.UPDATE_TIME, ActTme.OPEN_TIME, ActTme.EDIT_TIME, ActTme.CLOUD_TIME]

    bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

    bit = bit.trmBit;
    var idx = lst[bit.val];

    switch (idx) {

        case ActMnu.CLOCK_MENU:
            bit = await ste.hunt(ActMnu.CLOCK_MENU, {})
            break;

        case ActTme.CLOUD_TIME:
            bit = await ste.hunt(ActTme.CLOUD_TIME, {})
            break;

        case ActTme.OPEN_TIME:
            bit = await ste.hunt(ActTme.OPEN_TIME, {})
            break;


        case ActTme.UPDATE_TIME:
            bit = await ste.hunt(ActTme.UPDATE_TIME, {})
            break;


        case ActTme.EDIT_TIME:

            bit = await ste.hunt(ActTme.EDIT_TIME, {})
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PATCHING...", bit: 'local' })
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

            lst = [ActTme.PATCH_TIME]

            bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

            bit = await ste.hunt(ActTme.PATCH_TIME, {})

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

var patch = (ste, type, bale) => ste.dispatch({ type, bale });


import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
