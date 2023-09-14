
import * as ActPut from "../../04.input.unit/input.action";
import * as ActChc from "../../05.choice.unit/choice.action";
import * as ActCvs from "../../02.canvas.unit/canvas.action";
import * as ActTxt from "../../14.text.unit/text.action";

import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActTrm from "../terminal.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";

var bit, val, idx, dex, lst, dat;

export const initTerminal = async (cpy: TerminalModel, bal: TerminalBit, ste: State) => {

  if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActTrm], dat: bal.dat, src: bal.src })

  let blessed = cpy.blessed = require('blessed');
  let contrib = cpy.contrib = require('blessed-contrib');
  let screen = cpy.screen = cpy.blessed.screen();

  //var grid = new contrib.grid({rows: 12, cols: 12, screen: screen})

  bit = await ste.hunt(ActCvs.WRITE_CANVAS, { idx: 'cvs0', dat: { fill: Grid.TOP_FULL_IDX, clr: Color.CYAN }, })
  bit = await ste.hunt(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { fill: Grid.MID_FULL_IDX, clr: Color.CYAN }, })
  bit = await ste.hunt(ActCvs.WRITE_CANVAS, { idx: 'cvs2', dat: { fill: Grid.BOT_FULL_IDX, clr: Color.YELLOW }, })

  bit = await ste.hunt(ActTxt.WRITE_TEXT, { idx: 'txt0',  src:'cvs0', dat: { txt:"hello", clr: Color.BLACK, x:10 }, })

  bit = await ste.hunt(ActTxt.WRITE_TEXT, { idx: 'txt1',  src:'cvs2', dat: { txt:"world", clr: Color.BLACK, x:10 }, })
  
  let xPos = 0

  setInterval( async ()=>{

    xPos += 1
    bit = await ste.hunt(ActTxt.WRITE_TEXT, { idx: 'txt1',  src:'cvs2', dat: { txt:"world", clr: Color.BLACK, x:xPos }, })

  }, 11)


  //bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: screen, lst: ['alligator0', 'alligator1', 'alligator2', 'alligator3', 'alligator4', 'alligator5'] })
  //bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: screen })


  cpy.screen.key(['escape', 'q', 'C-c'], function (ch, key) {
    return process.exit(0);
  });

  cpy.screen.render()

  //if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);


  if (bal.slv != null) bal.slv({ intBit: { idx: "init-terminal" } });

  return cpy;
};

export const updateTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {
  return cpy;
};

export const openTerminal = async (cpy: TerminalModel, bal: TerminalBit, ste: State) => {
  return cpy;
};

export const runTerminal = async (cpy: TerminalModel, bal: TerminalBit, ste: State) => {
  return cpy;
};


export const editTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {
  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

export const printTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {

  if (bal == null) bal = { idx: "write-terminal" };

  if (bal.val == null) bal.val = 0;

  switch (bal.val) {
    case 9:
      cpy.term.italic.yellow(bal.src + "\n");
      break;

    case 8:
      cpy.term.yellow(bal.src + "\n");
      break;

    case 7:
      cpy.term.underline.yellow(bal.src + "\n");
      break;

    case 6:
      cpy.term.bold.white(bal.src + "\n");
      break;

    case 5:
      cpy.term.bold.magenta(bal.src + "\n");
      break;

    case 4:
      cpy.term.bold.blue(bal.src + "\n");
      break;

    case 3:
      cpy.term.bold.yellow(bal.src + "\n");
      break;

    case 2:
      cpy.term.bold.red(bal.src + "\n");
      break;

    case 1:
      cpy.term.bold.cyan(bal.src + "\n");
      break;

    default:
      cpy.term.bold.green(bal.src + "\n");
  }

  if (bal.slv != null) bal.slv({ trmBit: { idx: "write-terminal" } });

  return cpy;
};



export const closeTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {

  cpy.term.processExit();
  if (bal.slv != null) bal.slv({ trmBit: { idx: "close-terminal" } });

  return cpy;
};



export const optionTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {

  if (bal == null) bal = { idx: '' };
  if (bal.lst == null) bal.lst = ["000", "001"];
  if (bal.val == null) bal.val = 0;
  if (cpy.rootIDX != null) bal.lst.push(cpy.rootIDX);

  bal.lst.push(ActTrm.CLOSE_TERMINAL);

  var list = [];
  var options = {};

  bal.lst.forEach((a) => {
    if (a != "---") {
      if (options[a] != null) return;
    }

    options[a] = 1;
    list.push(a);
  });

  //here we have something special

  cpy.term.singleColumnMenu(list, { selectedIndex: bal.val }, (err, rsp) => {
    if (cpy.rootDAT != null) {
      if (rsp.selectedIndex == bal.lst.length - 2) {
        cpy.rootDAT();
        return;
      }
    }

    if (rsp.selectedIndex == bal.lst.length - 1) {
      closeTerminal(cpy, bal, ste);
      return;
    }

    if (bal.slv != null) bal.slv({ trmBit: { idx: "update-terminal", lst: list, val: rsp.selectedIndex } });
  });



  return cpy;
};



export const inputTerminal = async (cpy: TerminalModel, bal: TerminalBit, ste: State) => {


  if (bal == null) bal = { idx: null };
  if (bal.lst == null) bal.lst = [];

  bal.lst.forEach((a) => cpy.term(a + "\n"));

  var input = await cpy.term.inputField({ selectedIndex: bal.val }).promise;
  bal.slv({ trmBit: { idx: "input-terminal", src: input } });
  //cpy.term.green(input);


  return cpy;
};

export const layoutTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {

  let bit;

  switch (bal.src) {

    case Grid.BOT_FULL_IDX:
      bit = Grid.BOT_FULL_BIT
      break

    case Grid.MID_FULL_IDX:
      bit = Grid.MID_FULL_BIT
      break

    case Grid.TOP_FULL_IDX:
      bit = Grid.TOP_FULL_BIT
      break

  }

  bal.slv({ trmBit: { idx: "layout-terminal", dat: bit } });
  return cpy;
};


import { TerminalModel } from "../terminal.model";
import TerminalBit from "../fce/terminal.bit";
import State from "../../99.core/state";

import * as Grid from '../../val/grid';
import * as Color from '../../val/console-color';
