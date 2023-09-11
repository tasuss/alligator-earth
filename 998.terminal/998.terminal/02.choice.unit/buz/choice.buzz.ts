export const initChoice = (cpy: ChoiceModel, bal: ChoiceBit, ste: State) => {
    debugger
    return cpy;
};

export const updateChoice = (cpy: ChoiceModel, bal: ChoiceBit, ste: State) => {
    return cpy;
};


export const openChoice = (cpy: ChoiceModel, bal: ChoiceBit, ste: State) => {

    if ( bal.lst == null ){
        if (bal.slv != null) bal.slv({ chcBit: { idx: "open-choice-error" } });
        return
    }

    let blessed = ste.value.terminal.blessed;
    let screen = ste.value.terminal.screen;
    let height = 101 * bal.lst.length;
    
    var list = blessed.list({
        items: bal.lst,
        parent: bal.dat,
        border: 'line',
        label: "SELECT",
        keys: true,
        width: '50%',
        height: String(height),
        style: {
          selected: {
            bg: 'yellow',
            fg: 'black'
          }
        },
      })


     list.on('select', (item) => {
        

        let src = list.value;
        let val = list.selected;
        
        if (bal.slv != null) bal.slv({ chcBit: { idx: "open-choice", src, val } });

        

     })



      screen.render();


    return cpy;
};


import { ChoiceModel } from "../choice.model";
import ChoiceBit from "../fce/choice.bit";
import State from "../../99.core/state";