var bit, dat, val, lst

export const initColor = (cpy: ColorModel, bal: ColorBit, ste: State) => {
    debugger
    return cpy;
};

export const updateColor = (cpy: ColorModel, bal: ColorBit, ste: State) => {
    return cpy;
};




export const loadColor = async (cpy: ColorModel, bal: ColorBit, ste: State) => {

    //val = cpy.dataSource.length
    val = 1;
    lst = []

    if (cpy.dataSource.length != null) {

        val = cpy.dataSource.length

    }


    if (bal.slv != null) bal.slv({ clrBit: { idx: "load-color", val, lst } });
    return cpy;

};



export const fetchColor = (cpy: ColorModel, bal: ColorBit, ste: State) => {

    console.log("fetch color ")

    val = bal.val;
    lst = []

    var itm = cpy.dataSource[val]
    val = 0;
    
    if (bal.slv != null) bal.slv({ clrBit: { idx: "fetch-color", dat:itm, val } });

    return cpy;
};



import { ColorModel } from "../color.model";
import ColorBit from "../fce/color.bit";
import State from "../../99.core/state";