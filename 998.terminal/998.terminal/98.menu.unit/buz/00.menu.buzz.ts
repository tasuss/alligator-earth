import * as ActMnu from "../menu.action";
import * as ActTrm from "../../00.terminal.unit/terminal.action";
import * as ActGrd from "../../01.grid.unit/grid.action";
import * as ActCvs from "../../02.canvas.unit/canvas.action"
import * as ActCns from "../../03.console.unit/console.action"
import * as ActChc from "../../05.choice.unit/choice.action"
import * as ActBlk from "../../06.block.unit/block.action"
import * as ActLab from "../../07.label.unit/label.action"
import * as ActLcd from "../../08.lcd.unit/lcd.action"

import * as ActVrt from "../../act/vurt.action"

let bit, lst, dex, src

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

    if (bal == null) bal = { idx: null }

    bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 2, y: 2, xSpan: 2, ySpan: 1 })
    bit = await ste.hunt(ActLcd.WRITE_LCD, { idx: 'lcd0', src:'earth', dat: {  clr: Color.CYAN, net: bit.grdBit.dat }, })

    //bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 2, y: 2, xSpan: 2, ySpan: 1 })
    //bit = await ste.hunt(ActLab.WRITE_LABEL, { idx: 'lab0', src:'Terminal Menu...', dat: {  clr: Color.CYAN, net: bit.grdBit.dat }, })

    //bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 2, y: 3, xSpan: 2, ySpan: 1 })
    //bit = await ste.hunt(ActBlk.WRITE_BLOCK, { idx: 'blk0', src:'opening...', dat: {  clr: Color.CYAN, net: bit.grdBit.dat }, })

    //bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 8, y: 0, xSpan: 2, ySpan: 12 })
    //bit = await ste.hunt(ActCns.WRITE_CONSOLE, { idx:'cns00',  dat: { src:'init menu...', net:bit.grdBit.dat}  })

   // updateMenu(cpy, bal, ste);

    return cpy;
};

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

    lst = [ActTrm.INPUT_TERMINAL, ActTrm.UPDATE_TERMINAL, ActTrm.EDIT_TERMINAL]

    bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 2, y: 4, xSpan: 4, ySpan: 8 })
    bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

    src = bit.chcBit.src
    
    bit = await ste.hunt(ActBlk.WRITE_BLOCK, { idx: 'blk0', src })
    bit = await ste.hunt(ActLab.WRITE_LABEL, { idx: 'lab0', src })

    updateMenu( cpy, bal, ste)


    //bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "-----------", bit: 'local' })
    //bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "TERMINAL PIVOT V0", bit: 'local' })
    //bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "-----------", bit: "local" })

    //var lst = [ActTrm.INPUT_TERMINAL, ActTrm.UPDATE_TERMINAL, ActTrm.EDIT_TERMINAL]

    //bit = await ste.bus(ActTrm.OPTION_TERMINAL, { lst })

    //bit = bit.trmBit;
    //var idx = lst[bit.val];

    // switch (idx) {

    //   case ActTrm.UPDATE_TERMINAL:
    //     bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, {})
    //   break;



    //  case ActTrm.INPUT_TERMINAL:

    //    bit = await ste.hunt(ActTrm.INPUT_TERMINAL, { lst: ["", "", "Input..."] });
    //    idx = bit.trmBit.src;

    //    bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "" })
    //    bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "" })
    //    bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "-input-" + idx })

    //bit = await ste.hunt(ActTrm.EDIT_TERMINAL, {})
    // bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PATCHING...", bit: 'local' })
    // bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

    //lst = [ActTrm.PATCH_TERMINAL]

    //bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

    //bit = await ste.hunt( ActTrm.PATCH_TERMINAL, {})

    //    break;

    // default:
    //bit = await await ste.bus(ActTrm.CLOSE_TERMINAL, {})
    //   break;
    //}

    // updateMenu(cpy, bal, ste);

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


import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';