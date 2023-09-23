import * as ActTrm from "../../00.terminal.unit/terminal.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActCvs from "../../02.canvas.unit/canvas.action";
import * as ActTxt from "../../14.text.unit/text.action";

var lst, bit, dat;

export const initHexagon = (cpy: HexagonModel, bal: HexagonBit, ste: State) => {
    debugger
    return cpy;
};

export const updateHexagon = async (cpy: HexagonModel, bal: HexagonBit, ste: State) => {

    let hexmap = bal.bit

    bit = await ste.hunt(ActCvs.READ_CANVAS, { idx: bal.idx })
    let dat: FrameBit = bit.cvsBit.dat
    let canvas = dat.bit;

    debugger

    //graphic.clear()

    const Hex: Honeycomb.HexFactory = Honeycomb.extendHex({
        size: Number(33), // default: 1
        orientation: 'pointy', // default: 'pointy'
    });

    const Grid: Honeycomb.GridFactory<any> = Honeycomb.defineGrid(Hex);
    const grid: Honeycomb.Grid = Grid(hexmap.dat);

    var pct = .333;
    var scl = 3;

    //here is where you need the canvas
    var ctx;
    if (canvas.ctx) ctx = canvas.ctx;

    ctx.strokeStyle = [255, 0, 0];

    //graphic.lineStyle(3, 0x0000000, 1);

    grid.forEach((hex) => {
        const point = hex.toPoint();
        const corners = hex.corners().map((corner) => corner.add(point));
        const [firstCorner, ...otherCorners] = corners;
        ctx.moveTo(firstCorner.x * scl, firstCorner.y * scl * pct);
        otherCorners.forEach(({ x, y }) => ctx.lineTo(x * scl, y * scl * pct));
        ctx.lineTo(firstCorner.x * scl, firstCorner.y * scl * pct);
    });


    return cpy;
};

export const createHexagon = (cpy: HexagonModel, bal: HexagonBit, ste: State) => {
    debugger
    return cpy;
};


export const readHexagon = (cpy: HexagonModel, bal: HexagonBit, ste: State) => {
    debugger
    return cpy;
};
export const writeHexagon = (cpy: HexagonModel, bal: HexagonBit, ste: State) => {
    debugger
    return cpy;
};
export const removeHexagon = (cpy: HexagonModel, bal: HexagonBit, ste: State) => {
    debugger
    return cpy;
};
export const deleteHexagon = (cpy: HexagonModel, bal: HexagonBit, ste: State) => {
    debugger
    return cpy;
};

import { HexagonModel } from "../hexagon.model";
import HexagonBit from "../fce/hexagon.bit";
import State from "../../99.core/state";

import FrameBit from "../../02.canvas.unit/fce/frame.bit";
import * as Honeycomb from "honeycomb-grid";