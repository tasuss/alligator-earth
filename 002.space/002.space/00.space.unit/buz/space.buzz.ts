import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActFoc from "../../01.focus.unit/focus.action";
import * as ActMap from "../../03.hexmap.unit/hexmap.action";

import * as ActSpc from "../../00.space.unit/space.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"

var SHADE = global.shade;

var bit, val, idx, dex, lst, dat, src;

export const initSpace = async (cpy: SpaceModel, bal: SpaceBit, ste: State) => {

    if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActFoc, ActSpc, ActMap], dat: bal.dat, src: bal.src })

    if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null) bal.slv({ intBit: { idx: "init-space" } });

    return cpy;
};


export const openSpace = async (cpy: SpaceModel, bal: SpaceBit, ste: State) => {
    return cpy;
};

export const runSpace = async (cpy: SpaceModel, bal: SpaceBit, ste: State) => {
    return cpy;
};


export const updateSpace = async (cpy: SpaceModel, bal: SpaceBit, ste: State) => {
    return cpy;
};

export const editSpace = (cpy: SpaceModel, bal: SpaceBit, ste: State) => {
    return cpy;
};

export const readySpace = async (cpy: SpaceModel, bal: SpaceBit, ste: State) => {

    if (bal.src != null) {
        cpy.readyBit = bal.src;
        if (bal.slv != null) bal.slv({ spcBit: { idx: "replace-ready-space" } });
        return
    }

    bit = await ste.hunt(cpy.readyBit, {})

    if (bal.slv != null) bal.slv({ spcBit: { idx: "ready-space" } });
    return cpy;
};

export const patchSpace = async (cpy: SpaceModel, bal: SpaceBit, ste: State) => {

    bit = await ste.bus(ActDsk.COPY_DISK, { src: '../gillisse/src', idx: './source' })
    if (bal.slv != null) bal.slv({ symBit: { idx: "edit-symbol", dat: {} } });

    return cpy;
};

export const mergeSpace = async (cpy: SpaceModel, bal: SpaceBit, ste: State) => {

    bit = await ste.bus(ActDsk.INDEX_DISK, { src: './data/hexmap' })
    lst = bit.dskBit.lst

    lst.forEach((a, b) => {
        lst[b] = '../gillisse/public/dat/hexmap/' + a
    })

    bit = await ste.bus(ActDsk.COPY_DISK, { src: './data/hexmap', idx: '../gillisse/public/dat/hexmap' })

    if (bal.slv != null) bal.slv({ spcBit: { idx: "merge-space", lst } });

    return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });


export const testSpace = async (cpy: SpaceModel, bal: SpaceBit, ste: State) => {

    //bit = await ste.hunt( ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.fmeBit.dat });
    bit = await SHADE.hunt(SHADE.ActGph.WRITE_GRAPHIC, { idx: 'gph00', src: 'vsg00' });
    bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.gphBit.dat });
    //bit = await ste.hunt(ActGph.WRITE_GRAPHIC, { idx: 'gph01', src: 'vsg00' });
    //bit = await ste.hunt(ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.gphBit.dat });

    const response = await fetch("./dat/hexmap/000.swamp.json");
    const jsonData = await response.json();

    bit = await ste.hunt(ActMap.ADD_HEXMAP, { idx: 'map00', dat: { gph: 'gph00', dat: jsonData } });
    dat = bit.mapBit.dat;


    bit = await SHADE.hunt(SHADE.ActHex.WRITE_HEXAGON, { idx: 'hex00', src: 'vsg00', dat });


    //bit = await SHADE.hunt(SHADE.ActFme.WRITE_FRAME, { idx: 'fme00', src: 'vsg00' });

    //bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.fmeBit.dat });

    //bit = await SHADE.hunt(SHADE.ActGph.WRITE_GRAPHIC, { idx: 'gph00', src: 'vsg00' });
    //bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.gphBit.dat });

    //bit = await SHADE.hunt(SHADE.ActGph.WRITE_GRAPHIC, { idx: 'gph01', src: 'vsg00' });
    //bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.gphBit.dat });

    //bit = await ste.hunt(ActMap.WRITE_HEXMAP, { idx: 'map00', dat: { gph: 'gph00' } });
    //var hexmap = bit.mapBit.dat;
    //bit = await SHADE.hunt(SHADE.ActHex.WRITE_HEXAGON, { idx: 'hex00', src: 'vsg00', dat: { dat: hexmap } });

    //bit = await ste.hunt( ActFoc.WRITE_FOCUS, { idx: 'foc00', dat: { gph: 'gph01' } });
    //var focus = bit.focBit.dat;

    //bit = await SHADE.hunt(SHADE.ActHex.WRITE_HEXAGON, { idx: 'hex01', src: 'vsg00', dat: {dat:focus}   });

    return cpy;
};


export const cloudSpace = async (cpy: SpaceModel, bal: SpaceBit, ste: State) => {

    return cpy;
};

export const batchSpace = async (cpy: SpaceModel, bal: SpaceBit, ste: State) => {

         
    var bit;

    const next = async (lst) => {

        console.log( 'batch size : ' + lst.length )
    
        if (lst.length == 0) {
          if (bal.slv != null) bal.slv({ spcBit: { idx: "batch-space", bit } });
          return
        }
    
        var itm = lst.shift()
        itm = S(itm).collapseWhitespace().s
        console.log( itm + ' idx : ' + bal.idx + ' src: '+ bal.src )        
        if ( itm == null ) return next(lst)

        bit = await ste.hunt( itm, { idx:bal.idx, src:bal.src})
        next(lst)
      }

      
      next( bal.lst)
       
    return cpy;
};


import { SpaceModel } from "../space.model";
import SpaceBit from "../fce/space.bit";
import State from "../../99.core/state";
import * as S from 'string'