import * as ActMnu from "../menu.action";
import * as ActPvt from "../../00.pivot.unit/pivot.action";
import * as ActTrm from "../../01.terminal.unit/terminal.action";

import * as ActVrt from "../../act/vurt.action"

var bit, lst, dex, src

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

    if (bal == null) bal = { idx: null }

    bit = await ste.hunt(ActTrm.INIT_TERMINAL, {})

    updateMenu(cpy, bal, ste);

    return cpy;
};

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: 'local' })

    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "PIVOT PIVOT V0", bit: 'local' })
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

    var lst = [ActMnu.UNIT_MENU, ActPvt.COUNT_PIVOT, ActPvt.CREATE_PIVOT]

    bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst })

    bit = bit.trmBit;
    var idx = lst[bit.val];

    switch (idx) {

        case ActPvt.COUNT_PIVOT:

            bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "count-menu" });
            bit = await ste.hunt(ActPvt.COUNT_PIVOT, {})

            bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 2, src: JSON.stringify(bit) });

            setTimeout(() => updateMenu(cpy, bal, ste), 3333)
            break;

        case ActPvt.OPEN_PIVOT:
            bit = await ste.hunt(ActPvt.OPEN_PIVOT, {})
            break;

        case ActPvt.UPDATE_PIVOT:
            bit = await ste.hunt(ActPvt.UPDATE_PIVOT, {})
            break;

        case ActMnu.UNIT_MENU:
            bit = await ste.hunt(ActMnu.UNIT_MENU, {})
            break;

        case ActPvt.CREATE_PIVOT:


            bit = await ste.hunt(ActTrm.INPUT_TERMINAL, { lst: ["", "", "Nom Pivot..."] });
            idx = bit.trmBit.src;

            bit = await ste.hunt(ActTrm.INPUT_TERMINAL, { lst: ["", "", "Name Pivot..."] });
            src = bit.trmBit.src;

            bit = await ste.hunt(ActTrm.INPUT_TERMINAL, { lst: ["", "", "Dex Pivot..."] });
            dex = bit.trmBit.src;

            bit = await ste.hunt(ActPvt.CREATE_PIVOT, { idx, src, dex })
            updateMenu(cpy, bal, ste);

            break;


        case ActPvt.EDIT_PIVOT:

            bit = await ste.hunt(ActPvt.EDIT_PIVOT, {})
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PATCHING...", bit: 'local' })
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

            lst = [ActPvt.PATCH_PIVOT]

            bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

            bit = await ste.hunt(ActPvt.PATCH_PIVOT, {})

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
