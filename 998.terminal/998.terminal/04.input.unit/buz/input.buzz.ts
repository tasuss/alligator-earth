export const initInput = (cpy: InputModel, bal: InputBit, ste: State) => {
    debugger
    return cpy;
};

export const updateInput = (cpy: InputModel, bal: InputBit, ste: State) => {
    return cpy;
};


export const openInput = (cpy: InputModel, bal: InputBit, ste: State) => {

    let blessed = ste.value.terminal.blessed;
    let screen = ste.value.terminal.screen

    var input = blessed.textbox({
        parent:screen,
        name: 'input',
        input: true,
        keys: true,
        top: 0,
        left: 0,
        height: 1,
        width: '100%',
        inputOnFocus: true,
        style: {
            fg: 'white',
            bg: 'black',
            focus: {
                bg: 'yellow',
                fg: 'white'
            }
        }
    });

    input.focus();

    input.on("submit", (src) => {
        if (bal.slv != null) bal.slv({ putBit: { idx: "open-input", src } });
    })

    return cpy;
};


import { InputModel } from "../input.model";
import InputBit from "../fce/input.bit";
import State from "../../99.core/state";