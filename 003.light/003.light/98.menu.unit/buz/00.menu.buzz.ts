import * as ActMnu from "../menu.action";
import * as ActLgt from "../../00.light.unit/light.action";
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

    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "LIGHT PIVOT V0", bit: 'local' })
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

    var lst = [ActLgt.CLOUD_LIGHT, ActLgt.UPDATE_LIGHT, ActLgt.OPEN_LIGHT, ActLgt.EDIT_LIGHT,  ActMnu.COLOR_MENU, ActMnu.SCREEN_MENU ]

    bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

    bit = bit.trmBit;
    var idx = lst[bit.val];

    switch (idx) {

        case ActMnu.COLOR_MENU:
            bit = await ste.hunt(ActMnu.COLOR_MENU, {})
            break;

        case ActMnu.SCREEN_MENU:
            bit = await ste.hunt( ActMnu.SCREEN_MENU, {})
            break;

        case ActLgt.CLOUD_LIGHT:
            bit = await ste.hunt(ActLgt.CLOUD_LIGHT, {})
            break;

        case ActLgt.OPEN_LIGHT:
            bit = await ste.hunt(ActLgt.OPEN_LIGHT, {})
            break;


        case ActLgt.UPDATE_LIGHT:
            bit = await ste.hunt(ActLgt.UPDATE_LIGHT, {})
            break;


        case ActLgt.EDIT_LIGHT:

            bit = await ste.hunt(ActLgt.EDIT_LIGHT, {})
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PATCHING...", bit: 'local' })
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

            lst = [ActLgt.PATCH_LIGHT]

            bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

            bit = await ste.hunt(ActLgt.PATCH_LIGHT, {})

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
