import * as ActMnu from "../menu.action";
import * as ActTrm from "../../00.terminal.unit/terminal.action";
import * as ActVrt from "../../act/vurt.action"


var bit, lst, dex

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

    if (bal == null) bal = { idx: null }

    bit = await ste.bus(ActTrm.INIT_TERMINAL, {})

    updateMenu(cpy, bal, ste);

    return cpy;
};

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

    bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "-----------", bit: 'local' })
    bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "TERMINAL PIVOT V0", bit: 'local' })
    bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "-----------", bit: "local" })

    var lst = [ ActTrm.INPUT_TERMINAL,  ActTrm.UPDATE_TERMINAL,  ActTrm.EDIT_TERMINAL]

    bit = await ste.bus(ActTrm.OPTION_TERMINAL, { lst })

    bit = bit.trmBit;
    var idx = lst[bit.val];

    switch (idx) {


        case ActTrm.UPDATE_TERMINAL:
            bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, {})
            break;


        case ActTrm.INPUT_TERMINAL:

        
            bit = await ste.hunt(ActTrm.INPUT_TERMINAL, { lst: ["", "", "Input..."] });
            idx = bit.trmBit.src;

            bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "" })
            bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "" })
            bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "-input-" + idx })

            //bit = await ste.hunt(ActTrm.EDIT_TERMINAL, {})
            // bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PATCHING...", bit: 'local' })
            // bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

            //lst = [ActTrm.PATCH_TERMINAL]

            //bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

            //bit = await ste.hunt( ActTrm.PATCH_TERMINAL, {})

            break;

        default:
            //bit = await await ste.bus(ActTrm.CLOSE_TERMINAL, {})
            break;
    }

    updateMenu(cpy, bal, ste);

    return cpy;
};

export const testMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
    return cpy;
};

export const closeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

    //await ste.bus(ActTrm.CLOSE_TERMINAL, {})

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
