import * as ActTrm from "../../00.terminal.unit/terminal.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActCvs from "../../02.canvas.unit/canvas.action";
import * as ActTxt from "../../14.text.unit/text.action";


var lst, bit, dat;

export const initCanvas = (cpy: CanvasModel, bal: CanvasBit, ste: State) => {
    debugger
    return cpy;
};

export const updateCanvas = async (cpy: CanvasModel, bal: CanvasBit, ste: State) => {

    bit = await ste.hunt(ActCvs.READ_CANVAS, { idx: bal.idx })
    let dat: FrameBit = bit.cvsBit.dat

    let canvas = dat.bit;
    let ctx = canvas.ctx;


    dat.txtLst.forEach((a) => {

        ste.hunt(ActTxt.UPDATE_TEXT, { idx: a })

    })



    if (bal.slv != null) bal.slv({ cvsBit: { idx: "update-canvas", dat } });

    return cpy;
};

export const createCanvas = async (cpy: CanvasModel, bal: CanvasBit, ste: State) => {

    let termMod: TerminalModel = ste.value.terminal;

    let contrib = ste.value.terminal.contrib

    var dat: FrameBit = { idx: 'hmm' }

    if (dat.clr == null) dat.clr = COLOR.YELLOW

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }

    dat.canLst = [];
    dat.gphLst = [];
    dat.txtLst = [];
    dat.sprLst = [];
    dat.hexLst = [];

    let net:NetBit = dat.net;

    dat.bit = contrib.canvas({
        left: net.left,
        top: net.top,
        bg: dat.clr,
        width: net.width,
        height: net.height
    });

    for (var key in bal.dat) { dat[key] = bal.dat[key] }

    let terminal: TerminalModel = ste.value.terminal;
    let screen = terminal.screen
    screen.append(dat.bit)

    screen.render()

    if (bal.slv != null) bal.slv({ cvsBit: { idx: "create-canvas", dat } });

    return cpy;
};



export const readCanvas = async (cpy: CanvasModel, bal: CanvasBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActCvs.CREATE_CANVAS })
    if (slv != null) slv({ cvsBit: { idx: "read-canvas", dat: bit.clcBit.dat } });

    return cpy;
};
export const writeCanvas = async (cpy: CanvasModel, bal: CanvasBit, ste: State) => {


    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActCvs.CREATE_CANVAS })

    ste.hunt(ActCvs.UPDATE_CANVAS, { idx: bal.idx })

    if (bal.slv != null) bal.slv({ cvsBit: { idx: "write-canvas", dat: bit.clcBit.dat } });

    return cpy;
};
export const deleteCanvas = async (cpy: CanvasModel, bal: CanvasBit, ste: State) => {

    //remove each type inside a visage
    //dat.canLst.forEach(async (a) => ste.hunt(ActCan.REMOVE_CONTAINER, { idx: a }))
    //dat.gphLst.forEach(async (a) => ste.hunt(ActGph.REMOVE_GRAPHIC, { idx: a }))
    //dat.txtLst.forEach(async (a) => ste.hunt(ActTxt.REMOVE_TEXT, { idx: a }))
    //dat.sprLst.forEach(async (a) => ste.hunt(ActSpr.REMOVE_SPRITE, { idx: a }))
    //dat.hexLst.forEach(async (a) => ste.hunt(ActHex.REMOVE_HEXAGON, { idx: a }))
    //dat.vidLst.forEach(async (a) => ste.hunt(ActVid.REMOVE_VIDEO, { idx: a }))
    //dat.lopLst.forEach(async (a) => ste.hunt(ActLop.REMOVE_LOOP, { idx: a }))

    //if (typeof window != "object") return bal.slv({ fceBit: { idx: "error-delete-container", dat: {} } });

    //bit = await ste.hunt(ActCan.READ_CONTAINER, { idx: bal.idx })
    //var dat: CanBit = bit.canBit.dat

    //var container = dat.bit;
    //container.destroy()
    //dat.bit = null

    //if (bal.slv != null) return bal.slv({ vsgBit: { idx: "delete-container", dat } });

    return cpy;
};

export const removeCanvas = async (cpy: CanvasModel, bal: CanvasBit, ste: State) => {

    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActCvs.DELETE_CANVAS })
    if (bal.slv != null) bal.slv({ cvsBit: { idx: "remove-canvas", dat: bit.clcBit } });

    return cpy;

};

export const nestCanvas = async (cpy: CanvasModel, bal: CanvasBit, ste: State) => {


    bit = await ste.hunt(ActCvs.READ_CANVAS, { idx: bal.src })
    var dat: FrameBit = bit.cvsBit.dat;



    switch (bal.dat.typ) {

        case SHADE.CONTAINER:
            dat.canLst.push(bal.dat.idx)
            break

        case SHADE.GRAPHIC:
            dat.gphLst.push(bal.dat.idx)
            break

        case SHADE.SPRITE:
            dat.sprLst.push(bal.dat.idx)
            break

        case SHADE.TEXT:

            dat.txtLst.push(bal.dat.idx)
            break


        case SHADE.HEXAGON:
            dat.hexLst.push(bal.dat.idx)
            break

    }


    bit = await ste.hunt(ActCvs.WRITE_CANVAS, { idx: bal.src, dat })

    if (bal.slv != null) bal.slv({ cvsBit: { idx: 'nest-canvas' } });

    return cpy;
};


import { CanvasModel } from "../canvas.model";
import CanvasBit from "../fce/canvas.bit";
import State from "../../99.core/state";
import FrameBit from "../fce/frame.bit";
import { TerminalModel } from "998.terminal/00.terminal.unit/terminal.model";
import * as COLOR from '../../val/console-color'
import { GridFill } from "998.terminal/val/grid";
import * as GRID from '../../val/grid'
import * as SHADE from '../../val/shade'
import NetBit from "998.terminal/01.grid.unit/fce/net.bit";

