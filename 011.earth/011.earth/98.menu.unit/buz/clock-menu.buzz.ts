import * as ActMnu from "../menu.action";
import * as ActClk from "../../01.clock.unit/clock.action";
import * as ActVrt from "../../act/vurt.action"
import * as ActTrm from "../../act/terminal.action";

var bit, lst, dex

export const clockMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: 'local' })

    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "CLOCK PIVOT V0", bit: 'local' })
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

    var lst = [ ActClk.UPDATE_CLOCK, ActClk.WRITE_CLOCK, ActClk.BLOCK_CLOCK]

    bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

    bit = bit.trmBit;
    var idx = lst[bit.val];

    switch (idx) {

        
        case ActClk.UPDATE_CLOCK:
            
            bit = await ste.hunt(ActClk.LIST_CLOCK, {})
            lst = bit.clkBit.lst;

            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { val: 4, src: JSON.stringify(bit), bit: 'local' })
            
            if ( lst.length == 0 ){

                bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "NO CLOCKS DISCOVERED...", bit: 'local' })

                setTimeout( ()=> { clockMenu(cpy, bal, ste) }, 1333)
                return 
            }

            
            bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

            bit = bit.trmBit;
            var idx = lst[bit.val];

            bit = await ste.hunt(ActClk.WRITE_CLOCK, {idx, clk:{min:33}})
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { val: 4, src: JSON.stringify(bit), bit: 'local' })
            clockMenu(cpy, bal, ste)
            break;

        case ActClk.WRITE_CLOCK:
            
            bit = await ste.bus(ActTrm.INPUT_TERMINAL, { lst: ["", "", "idx clock..."] });
            idx = bit.trmBit.src;

            bit = await ste.hunt(ActClk.WRITE_CLOCK, {idx})
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { val: 4, src: JSON.stringify(bit), bit: 'local' })
            clockMenu(cpy, bal, ste)
            break;


        case ActClk.BLOCK_CLOCK:

            bit = await ste.hunt(ActClk.BLOCK_CLOCK, {})
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { val: 4, src: JSON.stringify(bit), bit: 'local' })
            clockMenu(cpy, bal, ste)
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
