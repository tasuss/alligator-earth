import * as ActCol from "../../97.collect.unit/collect.action";

var bit, lst, dat, idx, val, src, dex

export const initCollect = (cpy: CollectModel, bal: CollectBit, ste: State) => {

      return cpy;
};

export const updateCollect = (cpy: CollectModel, bal: CollectBit, ste: State) => {
      return cpy;
};

//return the first item in a collection
export const fetchCollect = (cpy: CollectModel, bal: CollectBit, ste: State) => {

      if (bal.val == null) bal.val = 1;

      if ((bal.bit == null)) bal.slv({ clcBit: { idx: "fetch-collect-err", src: 'no-bit' } });
      var type = bal.bit.split(' ').slice(-1).pop().toLowerCase();
      var cabBit: CaboodleBit = cpy.caboodleBitList[cpy.caboodleBits[type]]

      if (bal.val == 1) bit = cabBit.bitList[0]
      else bit = cabBit

      if (bal.slv != null) bal.slv({ clcBit: { idx: "fetch-collect", dat: bit } });
      return cpy;
};

export const readCollect = async (cpy: CollectModel, bal: CollectBit, ste: State) => {

      if ((bal.bit == null)) bal.slv({ clcBit: { idx: "read-collect-err", src: 'no-bit' } });

      var type = bal.bit.split(' ').slice(-1).pop().toLowerCase();
      if (cpy.caboodleBits[type] == null) createCollect(cpy, { idx: type }, ste)

      var cabBit: CaboodleBit = cpy.caboodleBitList[cpy.caboodleBits[type]]


      if (cabBit.bits[bal.idx] == null) {
            bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, bit: bal.bit })
      } else {
            dat = cabBit.bitList[cabBit.bits[bal.idx]]
      }


      if (bal.slv != null) bal.slv({ clcBit: { idx: "read-collect", dat } });
      return cpy;
};


export const writeCollect = async (cpy: CollectModel, bal: CollectBit, ste: State) => {

      //let us check see if it exists 
      var type = bal.bit.split(' ').slice(-1).pop().toLowerCase();

      if (cpy.caboodleBits[type] == null) createCollect(cpy, { idx: type }, ste)

      if ((bal.bit == null)) bal.slv({ rskBit: { idx: "write-collect-err", src: 'no-bit' } });

      var cabBit: CaboodleBit = cpy.caboodleBitList[cpy.caboodleBits[type]]

      if (cabBit.bits[bal.idx] == null) {

            bit = await ste.hunt(bal.bit, { idx: bal.idx, src: bal.src, dat: bal.dat })
            var objDat = bit[Object.keys(bit)[0]];
            dat = objDat.dat

            dat.dex = cabBit.bitList.length;
            cabBit.bitList.push(dat)

            var idx = bal.idx;
            if (idx == null) idx = dat.idx

            if (idx == null) throw new Error("write collect has no idx")

            cabBit.bits[idx] = dat.dex

      } else {

            var cabDat = cabBit.bitList[cabBit.bits[bal.idx]]

            bal.dat

            for (var key in bal.dat) {
                  if (cabDat == null) cabDat = {}
                  cabDat[key] = bal.dat[key]
            }

            cabBit.bitList[cabBit.bits[bal.idx]] = cabDat
      }


      if ((dat == null) && (bal.slv != null)) bal.slv({ rskBit: { idx: "write-collect-err", src: 'no-dat' } });

      if (bal.slv != null) bal.slv({ clcBit: { idx: "write-collect", dat } });

      return cpy;
};



export const createCollect = (cpy: CollectModel, bal: CollectBit, ste: State) => {

      var cabBit: CaboodleBit = { idx: bal.idx, dex: 0, bits: {}, bitList: [] }
      cabBit.dex = cpy.caboodleBitList.length

      cpy.caboodleBitList.push(cabBit)
      cpy.caboodleBits[cabBit.idx] = cabBit.dex;

      if (bal.slv != null) bal.slv({ rskBit: { idx: "create-collect", dat: cabBit } });

      return cpy;
};

export const removeCollect = async (cpy: CollectModel, bal: CollectBit, ste: State) => {

      var type = bal.bit.split(' ').slice(-1).pop().toLowerCase();

      if (cpy.caboodleBits[type] == null) return bal.slv({ rskBit: { idx: "remove-collect-not-present" } });

      var cabBit: CaboodleBit = cpy.caboodleBitList[cpy.caboodleBits[type]]

      if (cabBit.bits[bal.idx] == null) return bal.slv({ rskBit: { idx: "remove-collect-idx-not-present" } });

      bit = await ste.hunt(bal.bit, { idx: bal.idx, src: bal.src, dat: bal.dat })
      var objDat = bit[Object.keys(bit)[0]];
      dat = objDat.dat

      dex = dat.dex

      for (var i = dex; i < cabBit.bitList.length - 1; i++) {
            var update = cabBit.bitList[i]
            update.dex -= 1
      }

      for (var key in dat) {
            dat[key] = null
      }

      delete cabBit.bits[bal.idx]
      var itm = cabBit.bitList.splice(dex, 1)

      cabBit.dex -= 1

      if (bal.slv != null) bal.slv({ rskBit: { idx: "remove-collect", dat: cabBit } });

      return cpy;
};

export const deleteCollect = (cpy: CollectModel, bal: CollectBit, ste: State) => {
      //debugger
      return cpy;
};


export const emptyCollect = (cpy: CollectModel, bal: CollectBit, ste: State) => {
      //debugger
      return cpy;
};


import { CollectModel } from "../collect.model";
import CollectBit from "../fce/collect.bit";
import State from "../../99.core/state";
import CaboodleBit from "../fce/caboodle.bit"; import { read } from "fs";

