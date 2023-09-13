import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActCvs from "../../02.canvas.unit/canvas.action";

var lst, bit, dat;

export const initCanvas = (cpy: CanvasModel, bal: CanvasBit, ste: State) => {
    debugger
    return cpy;
};

export const createCanvas = (cpy: CanvasModel, bal: CanvasBit, ste: State) => {

    let contrib = ste.value.terminal.contrib

    var dat: FrameBit = { idx: 'hmm' }

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }

    dat.canLst = [];
    dat.gphLst = [];
    dat.txtLst = [];
    dat.sprLst = [];

    var canvas = contrib.canvas({
        left: 'center',
        top: 'center',
        bg: COLOR.YELLOW,
        width: '720',
        height: '720'
    });

    for (var key in bal.dat) { dat[key] = bal.dat[key] }

    let terminal: TerminalModel = ste.value.terminal;
    let screen = terminal.screen
    screen.append(canvas)

    if (bal.slv != null) bal.slv({ cvsBit: { idx: "create-canvas", dat } });

    return cpy;
};


export const updateCanvas = async (cpy: CanvasModel, bal: CanvasBit, ste: State) => {

    bit = await ste.hunt(ActCvs.READ_CANVAS, { idx: bal.idx })
    dat = bit.cvsBit.dat
    //runtime type checking

    //var graphic: PIXI.Graphics = dat.bit;
    //graphic.clear();

    //switch (dat.frm) {
    //case GRAPHIC.CIRCLE:
    //  graphic.beginFill(dat.clr); // Red
    //  graphic.drawCircle(dat.x, dat.y, dat.w); //
    //  break;

    //case GRAPHIC.RECTANGLE:
    //  graphic.beginFill(dat.clr);
    //  graphic.lineStyle(3, dat.clr);
    //  graphic.drawRect(dat.x, dat.y, dat.w, dat.h);
    //  break;

    // case GRAPHIC.ROUNDED_RECTANGLE:
    //   graphic.beginFill(dat.clr);
    //   graphic.lineStyle(3, dat.clr);
    //  graphic.drawRoundedRect(dat.x, dat.y, dat.w, dat.h, dat.crv);
    //  break;
    // }

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
    ste.hunt(ActCvs.CREATE_CANVAS, { idx: bal.idx })
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



import { CanvasModel } from "../canvas.model";
import CanvasBit from "../fce/canvas.bit";
import State from "../../99.core/state";
import FrameBit from "../fce/frame.bit";
import { TerminalModel } from "998.terminal/00.terminal.unit/terminal.model";
import * as COLOR from '../../val/console-color'
