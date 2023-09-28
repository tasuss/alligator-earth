export const initConsole = (cpy: ConsoleModel, bal: ConsoleBit, ste: State) => {
    debugger
    return cpy;
};

export const updateConsole = (cpy: ConsoleModel, bal: ConsoleBit, ste: State) => {

    if ( bal.src == null ) bal.src = 'Hello from \x1B[1;3;31mxterm.js\x1B[0m $ '

   cpy.term.write( bal.src )

    return cpy;
};


export const openConsole = (cpy: ConsoleModel, bal: ConsoleBit, ste: State) => {
    

  



    if ( cpy.term == null ) cpy.term = process.stdout

    // var term = new Terminal();
    // term.open(document.getElementById('terminal'));
   

    return cpy;
};


//import { Terminal } from 'xterm';

import { ConsoleModel } from "../console.model";
import ConsoleBit from "../fce/console.bit";
import State from "../../99.core/state";