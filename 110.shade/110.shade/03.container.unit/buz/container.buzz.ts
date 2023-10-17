import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActFce from "../../02.surface.unit/surface.action";
import * as ActCan from "../../03.container.unit/container.action";
import * as ActVsg from "../../01.visage.unit/visage.action";

var bit, val, idx, dex, lst, dat;

export const initContainer = (cpy: ContainerModel, bal: ContainerBit, ste: State) => {

    return cpy;
};

export const updateContainer = async (cpy: ContainerModel, bal: ContainerBit, ste: State) => {

    bit = await ste.hunt(ActCan.READ_CONTAINER, { idx: bal.idx })
    dat = bit.canBit.dat

    var can: PIXI.Container = dat.bit;

    can.x = dat.x;
    can.y = dat.y;

    if (bal.slv != null) return bal.slv({ canBit: { idx: "update-container", dat } });
    return cpy;
};

export const readContainer = async (cpy: ContainerModel, bal: ContainerBit, ste: State) => {
    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActCan.CREATE_CONTAINER })
    if (slv != null) slv({ canBit: { idx: "read-container", dat: bit.clcBit.dat } });
    return cpy;
};

export const writeContainer = async (cpy: ContainerModel, bal: ContainerBit, ste: State) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActCan.CREATE_CONTAINER })
    ste.hunt(ActCan.UPDATE_CONTAINER, { idx: bal.idx })

    if (bal.slv != null) bal.slv({ canBit: { idx: "write-container", dat: bit.clcBit.dat } });
    return cpy;
};

export const removeContainer = async (cpy: ContainerModel, bal: ContainerBit, ste: State) => {
    
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActCan.DELETE_CONTAINER })
    if (bal.slv != null) bal.slv({ vsgBit: { idx: "remove-container", dat: bit.clcBit } });

    return cpy;
};

export const createContainer = async (cpy: ContainerModel, bal: ContainerBit, ste: State) => {

    //you have a source visage
    //now you wish to update a bit of the source visage 
    var dat: CanBit = { idx: bal.idx, src: bal.src, typ: SHADE.CONTAINER, x: 0, y: 0 };

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }

    try {
        dat.bit = new PIXI.Container();
    } catch (e) {
        dat.dat = {};
    }

    console.log("nesting " + JSON.stringify(dat.typ))

    if (bal.src != null) bit = await ste.hunt(ActVsg.NEST_VISAGE, { src: bal.src, dat })
    
    if (bal.slv != null) return bal.slv({ canBit: { idx: "create-container", dat } });

    return cpy;
};

export const deleteContainer = async (cpy: ContainerModel, bal: ContainerBit, ste: State) => {

    if (typeof window != "object") return bal.slv({ fceBit: { idx: "error-delete-container", dat: {} } });

    bit = await ste.hunt(ActCan.READ_CONTAINER, { idx: bal.idx })
    var dat: CanBit = bit.canBit.dat

    var container = dat.bit;
    container.destroy()
    dat.bit = null
    
    if (bal.slv != null) return bal.slv({ vsgBit: { idx: "delete-container", dat } });
    return cpy;
};



export const surfaceContainer = async (cpy: ContainerModel, bal: ContainerBit, ste: State) => {

    bit = await ste.hunt(ActFce.READ_SURFACE, { idx: bal.src })
    var app = bit.fceBit.dat.bit;
    var stage = app.stage;
    
    bit = await ste.hunt(ActCan.READ_CONTAINER, { idx: bal.idx })
    var can = bit.canBit.dat.bit;
    stage.addChild(can)

    //var graphic = new PIXI.Graphics();
    //graphic.lineStyle(3, dat.clr);
    //graphic.drawRect(0, 0, 25, 1080);
    //can.addChild( graphic)
    
    if (bal.slv != null) return bal.slv({ canBit: { idx: "surface-container", dat: bal } });

    return cpy;
};


export const addContainer = async (cpy: ContainerModel, bal: ContainerBit, ste: State) => {

    var content = bal.dat.bit;
    if (bit == null) return bal.slv({ canBit: { idx: "add-container-error", dat: bal } });

    bit = await ste.hunt(ActCan.READ_CONTAINER, { idx: bal.idx })
    var can = bit.canBit.dat.bit;
    
    can.addChild(content)

    //var graphic = new PIXI.Graphics();
    //graphic.lineStyle(3, 0x00FF00);
    //graphic.drawRect(0, 720, 720, 1080);
    //content.addChild( graphic)

    if (bal.slv != null) return bal.slv({ canBit: { idx: "add-container", dat: bal } });
    return cpy;
};

import { ContainerModel } from "../container.model";
import ContainerBit from "../fce/container.bit";
import State from "../../99.core/state";
import CanBit from "../fce/can.bit";
import * as SHADE from '../../val/shade'
import * as PIXI from "pixi.js-legacy";
