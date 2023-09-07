
import * as ActCol from "../../97.collect.unit/collect.action";

import * as ActBuf from "../../01.buffer.unit/buffer.action";

var termkit = require('terminal-kit');
var ScreenBuffer = termkit.ScreenBuffer;

var bit;

export const initBuffer = (cpy: BufferModel, bal: BufferBit, ste: State) => {

    var trmMod: TerminalModel = ste.value.terminal
    var term = trmMod.term

    cpy.view = new ScreenBuffer({
        dst: term,
        width: Math.min(term.width),
        height: Math.min(term.height - 1),
        y: 2
    });


    if (bal.slv != null) bal.slv({ idxBit: { idx: "init-buffer" } });
    return cpy;
};

export const updateBuffer = (cpy: BufferModel, bal: BufferBit, ste: State) => {
    return cpy;
};


export const drawBuffer = (cpy: BufferModel, bal: BufferBit, ste: State) => {

    cpy.bg.draw({ dst: cpy.view, tile: true });

    //sprites.spaceship.draw( { dst: cpy.view , blending: true , wrap: 'both' } ) ;
    cpy.view.draw({ delta: true });

    return cpy;
};


export const backgroundBuffer = (cpy: BufferModel, bal: BufferBit, ste: State) => {

    cpy.bg = new ScreenBuffer({
        width: cpy.view.width * 4,
        height: cpy.view.height,
        noFill: true
    });

    cpy.bg.fill({ attr: { color: 'white', bgColor: 'black' } });

    if (bal.slv != null) bal.slv({ bufBit: { idx: "background-buffer" } });
    return cpy;
};



export const readBuffer = async (cpy: BufferModel, bal: BufferBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActBuf.CREATE_BUFFER })
    if (slv != null) slv({ canBit: { idx: "read-container", dat: bit.clcBit.dat } });

    return cpy;
};


export const writeBuffer = async (cpy: BufferModel, bal: BufferBit, ste: State) => {

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActBuf.CREATE_BUFFER })

    if (bal.slv != null) bal.slv({ canBit: { idx: "write-container", dat: bit.clcBit.dat } });

    return cpy;
};

export const createBuffer = async (cpy: BufferModel, bal: BufferBit, ste: State) => {

    var dat: BufBit = { idx: bal.idx, src: bal.src };

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }

    try {
        // dat.bit = new PIXI.Container();
    } catch (e) {
        // dat.dat = {};
    }

    if (bal.slv != null) return bal.slv({ bufBit: { idx: "create-buffer", dat } });

    return cpy;
};

export const deleteBuffer = async (cpy: BufferModel, bal: BufferBit, ste: State) => {
    debugger
    return cpy;
};

export const removeBuffer = async (cpy: BufferModel, bal: BufferBit, ste: State) => {

    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActBuf.DELETE_BUFFER })
    if (bal.slv != null) bal.slv({ vsgBit: { idx: "remove-container", dat: bit.clcBit } });

    return cpy;
};
export const listBuffer = async (cpy: BufferModel, bal: BufferBit, ste: State) => {
    debugger
    return cpy;
};


import { BufferModel } from "../buffer.model";
import BufferBit from "../fce/buffer.bit";
import State from "../../99.core/state";
import { TerminalModel } from "998.terminal/00.terminal.unit/terminal.model";
import BufBit from "../fce/bufBit";

