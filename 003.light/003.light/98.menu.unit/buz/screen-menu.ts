import * as ActMnu from "../menu.action";
import * as ActLgt from "../../00.light.unit/light.action";
import * as ActScr from "../../02.screen.unit/screen.action";

import * as ActVrt from "../../act/vurt.action"

import * as ActTrm from "../../act/terminal.action";

var bit, lst, dex


export const screenMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: 'local' })

    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Screen Menu V0", bit: 'local' })
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

    var lst = [ActScr.INIT_SCREEN]

    bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

    bit = bit.trmBit;
    var idx = lst[bit.val];

    switch (idx) {

        case ActScr.INIT_SCREEN:
            bit = await ste.hunt(ActScr.INIT_SCREEN, {})
            break;

        default:
            bit = await await ste.bus(ActTrm.CLOSE_TERMINAL, {})
            break;
    }


    return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });



import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
