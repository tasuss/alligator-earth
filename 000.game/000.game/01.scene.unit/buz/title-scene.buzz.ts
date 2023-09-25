import * as ActCvs from "../../act/canvas.action";
import * as ActChc from "../../act/choice.action";
import * as ActGrd from "../../act/grid.action";

import * as ActTxt from "../../act/text.action";
import * as ActPut from "../../act/input.action";
import * as ActCns from "../../act/console.action";

let bit, val, idx, dex, lst, dat, src;

export const titleScene = async (cpy: SceneModel, bal: SceneBit, ste: State) => {

    lst = [ 'continue',  'new', 'load', 'settings', 'quit']

    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 2, y: 0, xSpan: 12, ySpan: 12 })
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.BLACK, net: bit.grdBit.dat }, })

    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 2, ySpan: 12 })
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 3, y: 11, xSpan: 2, ySpan: 2 })
    bit = await ste.bus(ActChc.KEY_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })


    if (bal.slv != null) bal.slv({ scnBit: { idx: "title-scene" } });

    return cpy;
};


import { SceneModel } from "../scene.model";
import SceneBit from "../fce/scene.bit";
import State from "../../99.core/state";

import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';