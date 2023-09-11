import * as ActGeo from "../geojson.action";
import * as ActMap from "../../03.hexmap.unit/hexmap.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActDsk from "../../act/disk.action";

var bit, val, idx, dex, lst, dat, src;

export const initGeojson = (cpy: GeojsonModel, bal: GeojsonBit, ste: State) => {
    debugger
    return cpy;
};

export const updateGeojson = (cpy: GeojsonModel, bal: GeojsonBit, ste: State) => {
    return cpy;
};

export const loadGeojson = async (cpy: GeojsonModel, bal: GeojsonBit, ste: State) => {

    src = bal.src

    

    bit = await ste.bus(ActDsk.READ_DISK, { src: cpy.geoSrc + '/' + src, val: 1 })
    dat = bit.dskBit.dat;


    src = bal.src.split('.')[0] + '.' +  bal.src.split('.')[1] 

    if (bal.slv != null) bal.slv({ geoBit: { idx: "load-geojson", dat, src } });

    return cpy;
};


export const indexGeojson = async (cpy: GeojsonModel, bal: GeojsonBit, ste: State) => {

    dat = null

    bit = await ste.bus(ActDsk.INDEX_DISK, { src: cpy.geoSrc })
    lst = bit.dskBit.lst

    

    if (bal.slv != null) bal.slv({ geoBit: { idx: "list-geojson", lst } });

    return cpy;
};


import { GeojsonModel } from "../geojson.model";
import GeojsonBit from "../fce/geojson.bit";
import State from "../../99.core/state";
import { cp } from "fs";
