var bit;

import * as ActCns from "../console.action";

import * as ActCol from "../../97.collect.unit/collect.action";

export const initConsole = (cpy: ConsoleModel, bal: ConsoleBit, ste: State) => {
    debugger
    return cpy;
};

export const updateConsole = async (cpy: ConsoleModel, bal: ConsoleBit, ste: State) => {

    bit = await ste.hunt(ActCns.READ_CONSOLE, { idx: bal.idx })
    let dat: TermBit = bit.cnsBit.dat

    
    let console = dat.bit;
   
    if ( bal.src == null ) bal.src = ''

    bal.src
    debugger
    
    dat.bit.log(bal.src)

    if (bal.slv != null) bal.slv({ cnsBit: { idx: "update-console" } });

    return cpy;
};

export const createConsole = (cpy: ConsoleModel, bal: ConsoleBit, ste: State) => {

    let termMod: TerminalModel = ste.value.terminal;

    let contrib = ste.value.terminal.contrib

    var dat: TermBit = { idx: 'hmm', bit: null, clr:null, net:null }

    if (dat.clr == null) dat.clr = COLOR.GREEN

    for (var key in bal.dat) { dat[key] = bal.dat[key] }

    dat.bit = contrib.log(
        {
            fg: dat.clr, 
            selectedFg: dat.clr, 
            label: 'Server Log',
            left: dat.net.left,
            top: dat.net.top,
            width: dat.net.width,
            height: dat.net.height
        })


        

   

    dat.bit.log("new log line")
    dat.bit.log("new log line")
    dat.bit.log("sixteenth-century natural magic was indistinguishable from true experimental science in its investigation of effects of mysterious forces by means of observation and experiment. natural magic and experimental science finally parted company when the later was allied to that particular form of natural philosophy known as the mechanical which endeavored to understand both the effects of such mysterious forces and their cause in truly rational terms. natural magic lost its importance and became conjuring. but they did not part until well into the middle of the seventeenth century")

  

    let terminal: TerminalModel = ste.value.terminal;
    let screen = terminal.screen;
    screen.append(dat.bit)

    screen.render()

    if (bal.slv != null) bal.slv({ cnsBit: { idx: "create-console", dat } });

    return cpy;
};

export const readConsole = async (cpy: ConsoleModel, bal: ConsoleBit, ste: State) => {
   
    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActCns.CREATE_CONSOLE })
    if (slv != null) slv({ cnsBit: { idx: "read-console", dat: bit.clcBit.dat } });

    
    return cpy;
};
export const writeConsole = async (cpy: ConsoleModel, bal: ConsoleBit, ste: State) => {
    
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActCns.CREATE_CONSOLE })
    ste.hunt(ActCns.UPDATE_CONSOLE, { idx: bal.idx })
 
    if (bal.slv != null) bal.slv({ cnsBit: { idx: "write-console", dat: bit.clcBit.dat } });
    return cpy;
};
export const removeConsole = (cpy: ConsoleModel, bal: ConsoleBit, ste: State) => {
    debugger
    return cpy;
};
export const deleteConsole = (cpy: ConsoleModel, bal: ConsoleBit, ste: State) => {
    debugger
    return cpy;
};




import { ConsoleModel } from "../console.model";
import ConsoleBit from "../fce/console.bit";
import State from "../../99.core/state";

import TermBit from "../fce/term.bit";
import { TerminalModel } from "998.terminal/00.terminal.unit/terminal.model";

import * as COLOR from '../../val/console-color'
