import * as ActTrm from "../../00.terminal.unit/terminal.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActTxt from "../../14.text.unit/text.action";

import * as ActBlk from "../../06.block.unit/block.action";
import * as ActLcd from "../../08.lcd.unit/lcd.action";

let lst, bit, dat;


export const initLcd = (cpy: LcdModel, bal: LcdBit, ste: State) => {
    debugger
    return cpy;
};

export const updateLcd = async (cpy: LcdModel, bal: LcdBit, ste: State) => {

    bit = await ste.hunt(ActLcd.READ_LCD, { idx: bal.idx })
    let dat: DotBit = bit.lcdBit.dat

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }

    //dat.bit.setDisplay(bal.src)

    let terminal: TerminalModel = ste.value.terminal;
    let screen = terminal.screen
    screen.render()

    if (bal.slv != null) bal.slv({ lcdBit: { idx: "update-lcd", dat } });

    return cpy;
};

export const createLcd = (cpy: LcdModel, bal: LcdBit, ste: State) => {

    let contrib = ste.value.terminal.contrib

    var dat: DotBit = { idx: bal.idx, src: bal.src, bit: null, net: null }

    if (dat.clr == null) dat.clr = COLOR.YELLOW

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }

    dat

    let net: NetBit = dat.net;

    dat.bit = contrib.lcd(
        {
            label: "Live",
            strokeWidth: 5,
            elements: 5,
            display: "01.02",
            // left: net.left,
            // top: net.top,
            // bg: dat.clr,
            // width: net.width,
            // height: net.height
        })



    let terminal: TerminalModel = ste.value.terminal;
    let screen = terminal.screen
    screen.append(dat.bit)

    screen.render()

    if (bal.slv != null) bal.slv({ lcdBit: { idx: "create-lcd", dat } });

    return cpy;
};


export const readLcd = async (cpy: LcdModel, bal: LcdBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'lcd00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActLcd.CREATE_LCD })
    if (slv != null) slv({ lcdBit: { idx: "read-lcd", dat: bit.clcBit.dat } });


    return cpy;
};
export const writeLcd = async (cpy: LcdModel, bal: LcdBit, ste: State) => {

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActLcd.CREATE_LCD })

    ste.hunt(ActLcd.UPDATE_LCD, { idx: bal.idx, src: bal.src })

    if (bal.slv != null) bal.slv({ lcdBit: { idx: "write-lcd", dat: bit.clcBit.dat } });

    return cpy;
};
export const removeLcd = (cpy: LcdModel, bal: LcdBit, ste: State) => {
    debugger
    return cpy;
};
export const deleteLcd = (cpy: LcdModel, bal: LcdBit, ste: State) => {
    debugger
    return cpy;
};

import { LcdModel } from "../lcd.model";
import LcdBit from "../fce/lcd.bit";
import State from "../../99.core/state";
import DotBit from "../fce/dot.bit";

import { TerminalModel } from "998.terminal/00.terminal.unit/terminal.model";

import * as COLOR from '../../val/console-color'
import NetBit from "998.terminal/01.grid.unit/fce/net.bit";