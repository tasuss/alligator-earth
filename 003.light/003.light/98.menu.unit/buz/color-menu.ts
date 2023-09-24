import * as ActMnu from "../menu.action";
import * as ActLgt from "../../00.light.unit/light.action";
import * as ActClr from "../../01.color.unit/color.action";
import * as ActScr from "../../02.screen.unit/screen.action";

import * as ActVrt from "../../act/vurt.action"

import * as ActTrm from "../../act/terminal.action";
import * as ActDsk from "../../act/disk.action";

var bit, lst, dex


export const colorMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {


    //init the color folder
    
    bit = await ste.bus(ActDsk.ENSURE_DISK, { src: "../../color/", bit: 'local' })

    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: 'local' })

    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Color Menu V0", bit: 'local' })
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

    var lst = [ ActClr.INIT_COLOR]

    bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

    bit = bit.trmBit;
    var idx = lst[bit.val];

    switch (idx) {

        case ActClr.INIT_COLOR:
            bit = await ste.hunt( ActClr.INIT_COLOR, {})
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
