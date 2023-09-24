import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActClr from "../../04.color.unit/color.action";
import * as ActBus from "../../99.bus.unit/bus.action";
import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActFte from "../../act/fate.action";

var bit, lst

export const initSpectrum = (cpy: SpectrumModel, bal:SpectrumBit, ste: State) => {
 debugger
 return cpy;
};

export const updateSpectrum = (cpy: SpectrumModel, bal:SpectrumBit, ste: State) => {

 var clrMod:ColorModel = ste.value.color
  
 var list = FS.readFileSync( clrMod.clrSrc).toString().split("\n");

  var colors = [];
  list.forEach((a) => {
    if (a.includes(":") == false) return;
    var idx = S(a).slugify().s;
    colors.push(idx);
  });

  var out = []

  FS.ensureDirSync( clrMod.clrRoot)
  FS.ensureDirSync( clrMod.clrRootMax)

  var colorNameData = {}

  colors.forEach((a, b) => {

    var sub = a.split('-')[0]
    var dom = a.split('-')[1]

    var letterA = sub[0].toUpperCase()
    var letterB = dom[0].toUpperCase()
    var idx = letterA + letterB
    var dex = String(b).padStart(2, "0")
    var loc = dex + '.' + idx
    out.push(loc + ':')
    FS.ensureDirSync( clrMod.clrRootMax + loc + '.' + a)

    var swatches = FS.readdirSync( clrMod.clrRootMax + loc + '.' + a)
    var swatchList = []
    swatches.forEach((a) => {
      swatchList.push(a.split('.')[0])
    })

    colorNameData[loc + '.' + a] = swatchList

  })

  var bale = { clrBit: { idx: "update-color", lst: colors } };
  FS.writeJsonSync( clrMod.clrDat, bale);
  FS.writeJsonSync( clrMod.clrDatNom, colorNameData);

  FS.writeFileSync( clrMod.rskDat, out.join('\n'));

  console.log("writing... " + clrMod.clrDat)
  setTimeout(() => { if (bal.slv != null) bal.slv(bale) }, 1333)
 
return cpy;
};


export const minSpectrum = (cpy: SpectrumModel, bal:SpectrumBit, ste: State) => {

  lst = []

  var clrMod:ColorModel = ste.value.color;
  clrMod.clrLst.forEach( (a)=>{

    var alpha = a.split('-')[0][0]
    var beta = a.split('-')[1][0]
    lst.push( alpha + beta)
  })
 
  if (bal.slv != null) bal.slv({spkBit:{idx:"min-spectrum" , lst}})

 return cpy;
 };


import * as FS from "fs-extra";
import * as S from "string";
import { SpectrumModel } from "../spectrum.model";
import SpectrumBit from "../fce/spectrum.bit";
import State from "../../99.core/state";
import { ColorModel } from "../../04.color.unit/color.model";
