import * as ActMnu from "../menu.action";
import * as ActTme from "../../00.time.unit/time.action";
import * as ActVrt from "../../act/vurt.action"

import * as ActTrm from "../../act/terminal.action";

var bit, lst, dex


export const clockMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

    debugger

    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: 'local' })

    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "CLOCK PIVOT V0", bit: 'local' })
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

    var lst = [ActTme.UPDATE_TIME, ActTme.OPEN_TIME, ActTme.EDIT_TIME]

    bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

    bit = bit.trmBit;
    var idx = lst[bit.val];

    bit = await await ste.bus(ActTrm.CLOSE_TERMINAL, {})

    return cpy;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
