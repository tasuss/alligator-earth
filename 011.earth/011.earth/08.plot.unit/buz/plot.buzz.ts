import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";
import * as ActErt from "../../00.earth.unit/earth.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActPlt from "../../08.plot.unit/plot.action";
import * as ActBei from "../../03.being.unit/being.action";

import * as ActDsk from "../../act/disk.action";
import * as ActTme from "../../act/time.action";


var bit, val, idx, dex, lst, dat;


export const initPlot = (cpy: PlotModel, bal: PlotBit, ste: State) => {
    debugger
    return cpy;
};

export const openPlot = async (cpy: PlotModel, bal: PlotBit, ste: State) => {

    if ( bal.idx == null ) bal.idx = 'plt00'

    bit = await ste.hunt(ActPlt.WRITE_PLOT, { idx:bal.idx })
    //get plot list 
    if (bal.slv != null) bal.slv({ pltBit: { idx: "open-plot", lst: [] } });

    return cpy;
};

export const updatePlot = (cpy: PlotModel, bal: PlotBit, ste: State) => {

    var dat = {}

    if (bal.idx == 'nom1') {

        var bit = dat[bal.idx]
        cpy[bal.idx]

        if (bal.src == 'house') bal.lst = ['trashing house']

    }

    return cpy;
};


export const pushPlot = (cpy: PlotModel, bal: PlotBit, ste: State) => {

    if (bal.slv != null) bal.slv({ pltBit: { idx: "push-plot", lst: [] } });

    return cpy;
};

export const readPlot = async (cpy: PlotModel, bal: PlotBit, ste: State) => {

    if (bal.idx == null) bal.idx = 'plt00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActPlt.CREATE_PLOT })
    if (bal.slv != null) bal.slv({ pltBit: { idx: "read-plot", dat: bit.clcBit.dat } });
    return cpy;
};
export const writePlot = async (cpy: PlotModel, bal: PlotBit, ste: State) => {

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat: bal.dat, bit: ActPlt.CREATE_PLOT })
    if (bal.slv != null) bal.slv({ pltBit: { idx: "read-plot", dat: bit.clcBit.dat } });

    return cpy;
};
export const createPlot = (cpy: PlotModel, bal: PlotBit, ste: State) => {
    
    const next = (lst) =>{

        if ( lst.length == 0 ){
            if (bal.slv != null) bal.slv({ pltBit: { idx: "create-plot", dat: {}} });
            return 
        }



    }

    lst = clone(cpy.plotBitList)    
    next( lst )
    
    return cpy;
};


import { PlotModel } from "../plot.model";
import PlotBit from "../fce/plot.bit";
import State from "../../99.core/state";
import * as clone from "clone-deep";