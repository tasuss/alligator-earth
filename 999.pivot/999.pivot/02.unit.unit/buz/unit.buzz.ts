import * as ActPvt from "../../00.pivot.unit/pivot.action";
import * as ActDsk from "../../96.disk.unit/disk.action";

export const initUnit = (cpy: UnitModel, bal: UnitBit, ste: State) => {
  debugger
  return cpy;
};

export const updateUnit = async (cpy: UnitModel, bal: UnitBit, ste: State) => {

  var bit;

  var root = bal.idx.split('.')[1]
  var rootUpper = root.charAt(0).toUpperCase() + root.slice(1)

  var nom = bal.dat
  var nomUpper = nom.charAt(0).toUpperCase() + nom.slice(1)

  var buzzFile = '../' + bal.src + '/' + bal.src + '/' + bal.idx + '/buz/' + root + '.buzz.ts';
  var buzzerFile = '../' + bal.src + '/' + bal.src + '/' + bal.idx + '/' + root + '.buzzer.ts';
  var actionFile = '../' + bal.src + '/' + bal.src + '/' + bal.idx + '/' + root + '.action.ts';
  var reduceFile = '../' + bal.src + '/' + bal.src + '/' + bal.idx + '/' + root + '.reduce.ts';

  var existBuzz = FS.existsSync(buzzFile)
  var existBuzzer = FS.existsSync(buzzerFile)
  var existAction = FS.existsSync(actionFile)
  var existReduce = FS.existsSync(reduceFile)

  if (existBuzz == false || existAction == false || existReduce == false || existBuzzer == false) {
    if (bal.slv != null) bal.slv({ untBit: { idx: "update-unit-error", src: 'no exist on source file' } });
    return
  }

  var listBuzz = FS.readFileSync(buzzFile).toString().split('\n')
  var listBuzzer = FS.readFileSync(buzzerFile).toString().split('\n')
  var listAction = FS.readFileSync(actionFile).toString().split('\n')
  var listReduce = FS.readFileSync(reduceFile).toString().split('\n')

  var doT = require("dot");

  const updateBuzz = (lst) => {

    var hold = []
    var out = []

    lst.forEach((a, b) => { if (a.includes('import')) hold.push(b) })

    var dex = 0;
    hold = hold.reverse()
    var flag = false
    hold.forEach((a, b) => {
      if (flag == true) return
      var now = a - 1
      var nxt = hold[b + 1]
      if (nxt == now) {
        dex = nxt
      } else flag = true
    })

    var buzNom = nom + rootUpper;
    var cpyNom = rootUpper + 'Model';
    var balNom = rootUpper + "Bit";

    var lineList = cpy.buzzTemplate.toString().split("\n");

    var gel = { buzNom, cpyNom, balNom }

    lineList.forEach((a, b) => {
      var doTCompiled = doT.template(a);
      var outLine = doTCompiled(gel);
      out.push(outLine)
    });

    return { lst: out, val: dex }
  }


  const updateActionUpper = (lst) => {

    var out = [];

    var dex = 0;
    lst.forEach((a, b) => {
      if (a.includes('export type Actions') == true) dex = b
    })

    var actUpr = nom + '_' + rootUpper
    actUpr = actUpr.toUpperCase()
    var actMsg = '[' + nomUpper + ' action] ' + nomUpper + ' ' + rootUpper;
    var actTle = nomUpper + rootUpper;
    var bitNom = rootUpper + "Bit"

    var lineList = cpy.actTemplate.toString().split("\n");

    var gel = { actUpr, actMsg, actTle, bitNom }

    lineList.forEach((a, b) => {
      var doTCompiled = doT.template(a);
      var outLine = doTCompiled(gel);
      out.push(outLine);
    });

    return { lst: out, val: dex }
  }

  const updateActionLower = (lst) => {

    var out = [];

    var dex = 0;
    lst.forEach((a, b) => {
      if (a.includes('export type Actions =') == true) dex = b
    })

    var actTle = nomUpper + rootUpper;

    var lineList = cpy.actTemplateLower.toString().split("\n");

    var gel = { actTle }

    lineList.forEach((a, b) => {
      var doTCompiled = doT.template(a);
      var outLine = doTCompiled(gel);
      out.push(outLine);
    });

    return { lst: out, val: dex }

  }

  const updateReduce = (lst) => {

    var out = []

    var dex = 0;
    lst.forEach((a, b) => {
      if (a.includes('default') == true) dex = b
    })

    var actUpr = nom + '_' + rootUpper
    actUpr = actUpr.toUpperCase()

    var actTle = nom + rootUpper;

    var lineList = cpy.reduceTemplate.toString().split("\n");

    var gel = { actUpr, actTle }

    lineList.forEach((a, b) => {
      var doTCompiled = doT.template(a);
      var outLine = doTCompiled(gel);
      out.push(outLine)
    });

    return { lst: out, val: dex }
  }

  const updateBuzzer = (lst) => {

    var out = []

    var actTle = nom + rootUpper;

    var lineList = cpy.buzzerTemplate.toString().split("\n");

    var gel = { actTle, root }

    lineList.forEach((a, b) => {
      var doTCompiled = doT.template(a);
      var outLine = doTCompiled(gel);
      lst.push(outLine)
    });

    return { lst }

  }

  var buzzBit = updateBuzz(listBuzz)
  var buzzerBit = updateBuzzer(listBuzzer)


  var actionUpperBit = updateActionUpper(listAction)
  var actionLowerBit = updateActionLower(listAction)
  var reduceBit = updateReduce(listReduce)

  // merge 'b' with 'a' at index 'i'
  const merge = (a, b, i = 0) => {
    return a.slice(0, i).concat(b, a.slice(i));
  }

  var resultBuzz = merge(listBuzz, buzzBit.lst, buzzBit.val);
  var resultBuzzer = buzzerBit.lst.filter((e) => { return e.length > 2 })

  var resultReduce = merge(listReduce, reduceBit.lst, reduceBit.val);
  var resultActionUpper = merge(listAction, actionUpperBit.lst, actionUpperBit.val);

  var upperActionDex = updateActionUpper(resultActionUpper).val

  var lowerDex = actionLowerBit.val
  var lowerActionList = listAction.slice(lowerDex, listAction.length)
  lowerActionList.forEach((a, b) => {
    lowerActionList[b] = a.replace(';', '')
  })

  lowerActionList = lowerActionList.filter((e) => { if (e.length >= 2) return e })

  lowerActionList.push('| ' + nomUpper + rootUpper)
  lowerActionList.unshift(' ')

  resultActionUpper = resultActionUpper.slice(0, upperActionDex)

  var resultAction = resultActionUpper.concat(lowerActionList)

  bit = await FS.writeFile(buzzFile, resultBuzz.join('\n'))
  console.log('writing...' + buzzFile);
  bit = await FS.writeFile(buzzerFile, resultBuzzer.join('\n'))
  console.log('writing...' + buzzerFile);
  bit = await FS.writeFile(reduceFile, resultReduce.join('\n'))
  console.log('writing...' + reduceFile);
  bit = await FS.writeFile(actionFile, resultAction.join('\n'))
  console.log('writing...' + actionFile);

  setTimeout(() => {
    if (bal.slv != null) bal.slv({ untBit: { idx: "update-unit", dat: bal } });
  }, 2111)


  return cpy;
};

export const createUnit = (cpy: UnitModel, bal: UnitBit, ste: State) => {

  if (bal.src == null) bal.src = "alligator";

  const { fork } = require("child_process");

  bal.src = S(bal.src).replaceAll(' ', '_').s;

  const child = fork("./data/hand/001.create-unit.js", [bal.src]);

  child.on("close", (cde) => {
    console.log("creating unit " + bal.src);
    setTimeout(() => { if (bal.slv != null) bal.slv({ untBit: { idx: "create-unit" } }); }, 3333)
  });

  return cpy;
};


export const codeUnit = (cpy: UnitModel, bal: UnitBit, ste: State) => {

  if (bal.src == null) bal.src = '111.symbol'

  const { exec } = require('child_process');

  console.log("now " + process.cwd())

  process.chdir("../../studio/");

  exec('start Code.exe ../packages/' + bal.src, async (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
    }

    process.chdir("../packages/999.vurt");
    if (bal.slv != null) bal.slv({ cdeBit: { idx: "code-pivot", dat: {} } });
  });


  return cpy;
};

export const listUnit = (cpy: UnitModel, bal: UnitBit, ste: State) => {

  var list = FS.readdirSync('../' + bal.src + '/' + bal.src)
  var lst = list.filter((e) => { return e.includes('.unit') == true })

  bal.slv({ untBit: { idx: "list-unit", lst } });

  return cpy;
};


export const replaceUnit = async (cpy: UnitModel, bal: UnitBit, ste: State) => {

  debugger

  var bit;

  bit = await ste.hunt(ActPvt.LIST_PIVOT)
  var list = bit.pvtBit.lst;

  let filter = list.filter((e) => { return e != cpy.idx });

  var fin = ''

  if (bal.idx == 'pivot') {

    bit = await ste.bus(ActDsk.READ_DISK, { src: './work/999.pivot.js' })
    var vurt = bit.dskBit.dat;

    bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../998.work/work/999.pivot.js', dat: vurt })

    setTimeout(() => {
      if (bal.slv != null) bal.slv({ untBit: { idx: "replace-unit" } });
    }, 3333)

    return
  }

  if (bal.idx == 'collect') {

    debugger

    bit = await ste.hunt(ActPvt.CONTAINS_PIVOT, { lst: filter, src: 'collect' })
    let filterB = bit.pvtBit.lst.filter((e) => { return e[0] != '999.pivot' })

    debugger

    filterB.forEach(async (a) => {

      var sigh = '999.pivot'
      var remove = '../' + a[0] + '/' + a[0] + '/' + a[1]
      var copy = '../' + sigh + '/' + sigh + '/' + a[1]

      debugger

      bit = await FS.ensureDir(remove)

      console.log("ensuring..." + remove)
      bit = await FS.remove(remove)
      bit = await FS.copy(copy, remove)
      console.log("copying..." + copy)
    })

    setTimeout(() => {
      if (bal.slv != null) bal.slv({ untBit: { idx: "replace-unit", lst: filterB } });
    }, 1333)
    return
  }

  switch (bal.idx) {

    case "bus":

      fin = '99.bus.unit'
      break

    case "core":
      fin = '99.core'
      break

    case "hunt":
      fin = 'hunt.ts'
      break

  }

  filter.forEach((a) => {

    var src, out;

    if (fin.includes('.') == true) {

      src = '../' + a + '/' + a + '/' + fin;
      out = './' + cpy.idx + '/' + fin;

    } else {

      src = '../' + a + '/' + a + '/' + fin;
      out = './' + cpy.idx + '/' + fin;

    }

    FS.ensureDirSync(src)

    FS.removeSync(src)

    FS.copySync(out, src)
    console.log('copying ' + out + ' -> ' + src)

  })

  if (bal.slv != null) bal.slv({ untBit: { idx: "replace-unit", lst: filter } });


  return cpy;
};




import { UnitModel } from "../unit.model";
import UnitBit from "../fce/unit.bit";
import State from "../../99.core/state";
import * as FS from 'fs-extra'
import * as S from 'string' 