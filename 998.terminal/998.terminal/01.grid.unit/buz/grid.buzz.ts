export const initGrid = (cpy: GridModel, bal:GridBit, ste: State) => {
 debugger
 return cpy;
};

export const updateGrid = (cpy: GridModel, bal:GridBit, ste: State) => {
 
    let termMod: TerminalModel = ste.value.terminal;

    let margin = 0;
    let cols = termMod.cols;
    let rows = termMod.rows;
  
    var colNow = bal.x;
    var rowNow = bal.y;

    let colSpan = bal.xSpan;
    let rowSpan = bal.ySpan;

    let spacing = 0;

    let cellWidth = ((100 - margin * 2) / cols);
    let cellHeight = ((100 - margin * 2) / rows);

    let top: any = rowNow * cellHeight + margin;
    let left: any = colNow * cellWidth + margin;

    top = top + '%';
    left = left + '%';

    let width = (cellWidth * colSpan - spacing) + '%';
    let height = (cellHeight * rowSpan - spacing) + '%';

    let bit:NetBit = {left, top, width, height}

    if (bal.slv != null) bal.slv({ grdBit: { idx: "update-grid", dat:bit }} );

    return cpy;
};


import { GridModel } from "../grid.model";
import GridBit from "../fce/grid.bit";
import State from "../../99.core/state";
import { TerminalModel } from "998.terminal/00.terminal.unit/terminal.model";
import NetBit from "../fce/net.bit";
