import * as ActTrm from "../../00.terminal.unit/terminal.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActTxt from "../../14.text.unit/text.action";
import * as ActLab from "../../07.label.unit/label.action";

import * as ActBlk from "../../06.block.unit/block.action";

let lst, bit, dat;

export const initLabel = (cpy: LabelModel, bal: LabelBit, ste: State) => {
    debugger
    return cpy;
};

export const updateLabel = async (cpy: LabelModel, bal: LabelBit, ste: State) => {

    bit = await ste.hunt(ActLab.READ_LABEL, { idx: bal.idx })
    let dat: BelBit = bit.labBit.dat

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }

    dat.bit.setContent( '{bold}' + dat.src + '{/bold}', )

    let terminal: TerminalModel = ste.value.terminal;
    let screen = terminal.screen
    screen.render()

    if (bal.slv != null) bal.slv({ blkBit: { idx: "update-block", dat } });

    return cpy;
};

export const createLabel = (cpy: LabelModel, bal: LabelBit, ste: State) => {

    let blessed = ste.value.terminal.blessed

    var dat: BelBit = { idx: bal.idx, src: bal.src, bit: null, net: null }

    if (dat.clr == null) dat.clr = COLOR.YELLOW

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }

    dat

    let net: NetBit = dat.net;

    var count = 0

    dat.bit = blessed.text({
        // eslint-disable-next-line max-len
        content: '{bold}' + dat.src + '{/bold}',
        valign: 'middle',
        align: 'left',
        tags: true,
        fill :true,
        left: net.left,
        top: net.top,
        width: net.width,
        height: net.height,
    });

    let terminal: TerminalModel = ste.value.terminal;
    let screen = terminal.screen
    screen.append(dat.bit)

    screen.render()

    if (bal.slv != null) bal.slv({ labBit: { idx: "create-label", dat } });

    return cpy;
};


export const readLabel = async (cpy: LabelModel, bal: LabelBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'lab00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActLab.CREATE_LABEL })
    if (slv != null) slv({ labBit: { idx: "read-label", dat: bit.clcBit.dat } });


    return cpy;
};
export const writeLabel = async (cpy: LabelModel, bal: LabelBit, ste: State) => {

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActLab.CREATE_LABEL })

    ste.hunt(ActLab.UPDATE_LABEL, { idx: bal.idx, src: bal.src })

    if (bal.slv != null) bal.slv({ labBit: { idx: "write-label", dat: bit.clcBit.dat } });


    return cpy;
};
export const removeLabel = (cpy: LabelModel, bal: LabelBit, ste: State) => {
    debugger
    return cpy;
};
export const deleteLabel = (cpy: LabelModel, bal: LabelBit, ste: State) => {
    debugger
    return cpy;
};



import { LabelModel } from "../label.model";
import LabelBit from "../fce/label.bit";
import State from "../../99.core/state";
import BelBit from "../fce/bel.bit";

import NetBit from "998.terminal/01.grid.unit/fce/net.bit";

import { TerminalModel } from "998.terminal/00.terminal.unit/terminal.model";

import * as COLOR from '../../val/console-color'