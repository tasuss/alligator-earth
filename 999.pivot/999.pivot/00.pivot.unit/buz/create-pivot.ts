import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActDsk from "../../96.disk.unit/disk.action";
import * as ActCol from "../../97.collect.unit/collect.action";

import * as ActPvt from "../pivot.action";

import * as ActVrt from "../../act/vurt.action";

var bit, val, idx, dex, lst, dat, src;

export const createPivot = async (cpy: PivotModel, bal: PivotBit, ste: State) => {

    var nom = bal.idx;
    var name = bal.src;
    var dex = String(bal.dex).padStart(3, '0')
  
    if (nom == null) nom = 'sed'
    if (name == null) name = 'seed'
    if (dex == null) dex = '000'
  
    var pivot = dex + '.' + name;
    var pivotUnit = pivot + '.unit';
  
    var pivotSrc = './data/redux/pivot/'
    var vueSrc = pivotSrc + 'vue';
    var dataSrc = pivotSrc + 'data';
  
    var unitIdx = '/000.pivot/'
  
    var unitPvt = '/00.' + name + '';
  
    var collectIdx = '97.collect.unit';
    var menuIdx = '98.menu.unit'
    var busIdx = '99.bus.unit'
    var coreIdx = '99.core'
  
    var collectSrc = pivotSrc + unitIdx + collectIdx;
    var menuSrc = pivotSrc + unitIdx + menuIdx;
    var busSrc = pivotSrc + unitIdx + busIdx;
    var coreSrc = pivotSrc + unitIdx + coreIdx;

  
    var actionSrc = pivotSrc + unitIdx + 'act';
    var valSrc = pivotSrc + unitIdx + 'val';
  
    var pivotFin = './data/' + pivot + '/';
    var pivotUnt = pivotFin + pivot + '/00.' + name + '/';
    
    bit = await ste.hunt(ActDsk.ENSURE_DISK, { src: './data/' + pivot })
    bit = await ste.hunt(ActDsk.DELETE_DISK, { src: './data/' + pivot })
  
    var itmSrc
    itmSrc = { src: vueSrc, idx: pivotFin + "/vue" }
    bit = await ste.hunt(ActDsk.COPY_DISK, itmSrc)
  
    itmSrc = { src: dataSrc, idx: pivotFin + "/data" }
    bit = await ste.hunt(ActDsk.COPY_DISK, itmSrc)
  
    itmSrc = { src: collectSrc, idx: pivotFin + '/' + pivot + '/' + collectIdx }
  
    bit = await ste.hunt(ActDsk.COPY_DISK, itmSrc)
  
    itmSrc = { src: menuSrc, idx: pivotFin + '/' + pivot + '/' + menuIdx }
  
    bit = await ste.hunt(ActDsk.COPY_DISK, itmSrc)
  
    itmSrc = { src: busSrc, idx: pivotFin + '/' + pivot + '/' + busIdx }
  
    bit = await ste.hunt(ActDsk.COPY_DISK, itmSrc)
  
    itmSrc = { src: coreSrc, idx: pivotFin + '/' + pivot + '/' + coreIdx }
  
    bit = await ste.hunt(ActDsk.COPY_DISK, itmSrc)
  
    itmSrc = { src: actionSrc, idx: pivotFin + '/' + pivot + '/act/' }
  
    bit = await ste.hunt(ActDsk.COPY_DISK, itmSrc)
  
    itmSrc = { src: valSrc, idx: pivotFin + '/' + pivot + '/val/' }
  
    bit = await ste.hunt(ActDsk.COPY_DISK, itmSrc)
  
    bit = await ste.hunt(ActDsk.INDEX_DISK, { src: './data/redux/pivot/' })
    lst = bit.dskBit.lst;
  
    var batLst = []
    lst.forEach((a) => {
      if (a.includes('.bat') == false) return
      var itmSrc = { src: pivotSrc + a, idx: pivotFin + '/' + a };
      batLst.push(itmSrc)
    })
  
    var htmlLst = []
    lst.forEach((a) => {
      if (a.includes('.html') == false) return
      var itmSrc = { src: pivotSrc + a, idx: pivotFin + '/' + a };
      htmlLst.push(itmSrc)
    })
  
    var jsLst = []
    lst.forEach((a) => {
  
      if (a.includes('.js') == false) return
  
      var itmSrc = { src: pivotSrc + a, idx: pivotFin + '/' + a };
      jsLst.push(itmSrc)
    })
  
    var cjsLst = []
    lst.forEach((a) => {
      if (a.includes('.cjs') == false) return
      var itmSrc = { src: pivotSrc + a, idx: pivotFin + '/' + a };
      cjsLst.push(itmSrc)
    })
  
    var jsonLst = []
    lst.forEach((a) => {
      if (a.includes('.json') == false) return
      var itmSrc = { src: pivotSrc + a, idx: pivotFin + '/' + a };
      jsonLst.push(itmSrc)
    })
  
    var output = []
    output = output.concat(batLst)
    output = output.concat(htmlLst)
    output = output.concat(jsLst)
    output = output.concat(cjsLst)
    output = output.concat(jsonLst)

    
  
    output;
  
    var pvt = '00.pivot.unit/'
  
    var buzzIdx = '/buz/' + name + '.buzz.ts';
    var buzzPvt = '/buz/pivot.buzz.ts';
    var buzzSrc = { src: pivotSrc + unitIdx + pvt + buzzPvt, idx: pivotFin + '/' + pivot + '/' + unitPvt + '.unit/' + buzzIdx };
    output.push(buzzSrc)
  
    var bitIdx = '/fce/' + name + '.bit.ts';
    var bitPvt = '/fce/pivot.bit.ts';
    var bitSrc = { src: pivotSrc + unitIdx + pvt + bitPvt, idx: pivotFin + '/' + pivot + '/' + unitPvt + '.unit/' + bitIdx };
    output.push(bitSrc)
  
    var fceIdx = '/fce/' + name + '.interface.ts';
    var fcePvt = '/fce/pivot.interface.ts';
    var fceSrc = { src: pivotSrc + unitIdx + pvt + fcePvt, idx: pivotFin + '/' + pivot + '/' + unitPvt + '.unit/' + fceIdx };
    output.push(fceSrc)
  
    var actIdx = '/' + name + '.action.ts';
    var actPvt = '/pivot.action.ts';
    var actSrc = { src: pivotSrc + unitIdx + pvt + actPvt, idx: pivotFin + '/' + pivot + '/' + unitPvt + '.unit/' + actIdx };
    output.push(actSrc)

    
  
  
    var buzIdx = '/' + name + '.buzzer.ts';
    var buzPvt = '/pivot.buzzer.ts';
    var buzSrc = { src: pivotSrc + unitIdx + pvt + buzPvt, idx: pivotFin + '/' + pivot + '/' + unitPvt + '.unit/' + buzIdx };
    output.push(buzSrc)
  
  
    var modIdx = '/' + name + '.model.ts';
    var modPvt = '/pivot.model.ts';
    var modSrc = { src: pivotSrc + unitIdx + pvt + modPvt, idx: pivotFin + '/' + pivot + '/' + unitPvt + '.unit/' + modIdx };
    output.push(modSrc)
  
    var rdcIdx = '/' + name + '.reduce.ts';
    var rdcPvt = '/pivot.reduce.ts';
    var rdcSrc = { src: pivotSrc + unitIdx + pvt + rdcPvt, idx: pivotFin + '/' + pivot + '/' + unitPvt + '.unit/' + rdcIdx };
    output.push(rdcSrc)
  
    var untIdx = '/' + name + '.unit.ts';
    var untPvt = '/pivot.unit.ts';
    var untSrc = { src: pivotSrc + unitIdx + pvt + untPvt, idx: pivotFin + '/' + pivot + '/' + unitPvt + '.unit/' + untIdx };
    output.push(untSrc)
  
    var qstIdx = '/000.quest.' + name + '.js';
    var qstSrc = { src: pivotSrc + unitIdx + '/000.quest.pivot.js', idx: pivotFin + '/' + pivot + '/' + qstIdx };
    output.push(qstSrc)
  
    var beeIdx = '/BEE.ts';
    var beeSrc = { src: pivotSrc + unitIdx + '/' + beeIdx, idx: pivotFin + '/' + pivot + '/' + beeIdx };
    output.push(beeSrc)
  
    var hntIdx = '/hunt.ts';
    var beeSrc = { src: pivotSrc + unitIdx + '/' + hntIdx, idx: pivotFin + '/' + pivot + '/' + hntIdx };
    output.push(beeSrc)
  
    var cfgIdx = '/tsconfig.json';
    var cfgSrc = { src: pivotSrc + unitIdx + '/' + cfgIdx, idx: pivotFin + '/' + pivot + '/' + cfgIdx };
    output.push(cfgSrc)
  
    var mnuIdx = '/00.menu.buzz.ts';
    var mnuSrc = { src: pivotSrc + unitIdx + '/98.menu.unit/buz/' + mnuIdx, idx: pivotFin + '/' + pivot + '/98.menu.unit/buz/' + mnuIdx };
    output.push(mnuSrc)
  
    var bitReadMain = await ste.hunt(ActDsk.READ_DISK, { src: pivotSrc + '/main.js' })
    var bitWriteMain = await ste.hunt(ActDsk.WRITE_DISK, { src: pivotFin + '/main.js', dat: bitReadMain.dskBit.dat })

    var gel: any = {}
    gel.nom = nom
    gel.name = name
    gel.pivot = dex + '.' + name
    gel.nameCaps = name.toUpperCase()
    gel.nomCaps = nom.toUpperCase()
    gel.nomTitle = nom.charAt(0).toUpperCase() + nom.slice(1);
    gel.nameTitle = name.charAt(0).toUpperCase() + name.slice(1);
  
    const next = async (lst) => {
  
      console.log(lst.length)
  
      if (lst.length == 0) {
  
        if (bal.slv != null) bal.slv({ vrtBit: { idx: "pivot-vurt", src: '' } });
        return
      }
  
      var itm = lst.shift()
  
      if (itm == null) return next(lst)
  
      itm.src
  
      var bitRed = await ste.hunt(ActDsk.READ_DISK, { src: itm.src })
      src = bitRed.dskBit.dat;
  
      var bitDot = await ste.hunt(ActCol.DOT_COLLECT, { src, dat: gel })
      var lstDot = bitDot.colBit.lst
  
      itm.idx
  
      var bitDsk = await ste.hunt(ActDsk.WRITE_DISK, { src: itm.idx, dat: lstDot.join('\n') })
  
  
  
      //console.log(JSON.stringify(itm))
      lst
  
      next(lst)
    }
  
    output
  
    next(output)
  
    return cpy;
  };
  

import { PivotModel } from "../pivot.model";
import PivotBit from "../fce/pivot.bit";
import State from "../../99.core/state";
import * as FS from 'fs-extra'
import * as S from 'string' 
import * as doT from "dot";

