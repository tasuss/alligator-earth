import * as ActTrm from "../../00.terminal.unit/terminal.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActTxt from "../../14.text.unit/text.action";

import * as ActBlk from "../../06.block.unit/block.action";

let lst, bit, dat;

export const initBlock = (cpy: BlockModel, bal: BlockBit, ste: State) => {
    debugger
    return cpy;
};

export const updateBlock = async (cpy: BlockModel, bal: BlockBit, ste: State) => {

    bit = await ste.hunt(ActBlk.READ_BLOCK, { idx: bal.idx })
    let dat: BoxBit = bit.blkBit.dat

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }

    dat.bit.setContent(bal.src) 

    let terminal: TerminalModel = ste.value.terminal;
    let screen = terminal.screen
    screen.render()

    if (bal.slv != null) bal.slv({ blkBit: { idx: "update-block", dat } });

    return cpy;
};

export const createBlock = (cpy: BlockModel, bal: BlockBit, ste: State) => {
    
 
    let blessed = ste.value.terminal.blessed

    var dat: BoxBit = { idx: bal.idx, src:bal.src, bit:null, net:null }

    if (dat.clr == null) dat.clr = COLOR.YELLOW

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }

    dat
    
    let net:NetBit = dat.net;

    dat.bit = blessed.box({
        left: net.left,
        top: net.top,
        bg: dat.clr,
        width: net.width,
        height: net.height,
        content: dat.src,
        input: false,
        tags: true,
        scrollable: true,
        alwaysScroll: true,
        style: {
          fg: COLOR.BLACK,
          bg: COLOR.YELLOW
        }
      })


    let terminal: TerminalModel = ste.value.terminal;
    let screen = terminal.screen
    screen.append(dat.bit)

    screen.render()

    if (bal.slv != null) bal.slv({ blkBit: { idx: "create-block", dat } });

    return cpy;
};


export const readBlock = async (cpy: BlockModel, bal: BlockBit, ste: State) => {
    
    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActBlk.CREATE_BLOCK })
    if (slv != null) slv({ blkBit: { idx: "read-block", dat: bit.clcBit.dat } });

    return cpy;
};
export const writeBlock = async (cpy: BlockModel, bal: BlockBit, ste: State) => {
    
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActBlk.CREATE_BLOCK })

    ste.hunt(ActBlk.UPDATE_BLOCK, { idx: bal.idx, src:bal.src })

    if (bal.slv != null) bal.slv({ blkBit: { idx: "write-block", dat: bit.clcBit.dat } });

    return cpy;
};
export const removeBlock = (cpy: BlockModel, bal: BlockBit, ste: State) => {
    debugger
    return cpy;
};
export const deleteBlock = (cpy: BlockModel, bal: BlockBit, ste: State) => {
    debugger
    return cpy;
};


import { BlockModel } from "../block.model";
import BlockBit from "../fce/block.bit";
import State from "../../99.core/state";

import { TerminalModel } from "998.terminal/00.terminal.unit/terminal.model";
import * as COLOR from '../../val/console-color'
import { GridFill } from "998.terminal/val/grid";
import * as GRID from '../../val/grid'
import * as SHADE from '../../val/shade'
import NetBit from "998.terminal/01.grid.unit/fce/net.bit";
import BoxBit from "../fce/box.bit";

