import * as ActTrm from "../terminal.action";
import * as ActBus from "../../99.bus.unit/bus.action";


var src, bit, lst, dat, idx;

export const initTerminal = async (cpy: TerminalModel, bal: TerminalBit, ste: State) => {
  

  if (bal == null) bal = { val: 0 };

  if (cpy.term != null) {
    if (bal.slv != null) bal.slv({ intBit: { idx: "error-terminal" } });
    return;
  }

 
  
  //connect the bus right here

  //if ( bal.lst != null ) ste.addBus( bal.lst, [ActTrm] )
  
  cpy.term = require("terminal-kit").terminal;

  // clearTerminal(cpy, bal, ste);

  if ( bal.lst == null ) bal.lst = []


  //here is where we closed down for the day
  // we wait till there there is a response on all the hunts
  // be for completing the terminal

  if ( bal.src != null ) src = bal.src;
  //bit = await ste.hunt( ActBus.INIT_BUS, {idx:cpy.idx, src, lst:[ActTrm] , dat: bal.dat} )
  


  
  //bal.lst.forEach( async (a)=>{
    
  //  bit = await ste.pivot.hunt(  a.src, a.dat)
    
  //})

  

  //if ( bal.lst)

  if (bal.slv != null) bal.slv({ intBit: { idx: "init-terminal" } });

  return cpy;
};

export const rootTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {
  cpy.rootIDX = bal.idx;
  cpy.rootDAT = bal.dat;

  if (bal.slv != null) bal.slv({ trmBit: { idx: "root-terminal" } });

  return cpy;
};

export const focusTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {
  //if (bal.val != null) cpy.clear = bal.dat;
  //if (cpy.clear == true) cpy.term.clear();

  cpy.term.grabInput(true);

  if (bal.slv != null) bal.slv({ trmBit: { idx: "focus-terminal" } });

  return cpy;
};

export const clearTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {
  //if (bal.val != null) cpy.clear = bal.dat;
  //if (cpy.clear == true) cpy.term.clear();

  cpy.term.clear();

  if (bal.slv != null) bal.slv({ trmBit: { idx: "clear-terminal" } });

  return cpy;
};

export const closeTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {
  cpy.term.processExit();
  if (bal.slv != null) bal.slv({ trmBit: { idx: "close-terminal" } });

  return cpy;
};

export const inputTerminal = async (cpy: TerminalModel, bal: TerminalBit, ste: State) => {
  if (bal == null) bal = {};
  if (bal.lst == null) bal.lst = [];

  bal.lst.forEach((a) => cpy.term(a + "\n"));

  var input = await cpy.term.inputField({ selectedIndex: bal.val }).promise;
  bal.slv({ trmBit: { idx: "input-terminal", src: input } });
  //cpy.term.green(input);

  return cpy;
};

export const tableTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {
  if (bal == null) bal = {};
  if (bal.lst == null)
    bal.lst = [
      ["h0", "h1", "h2", "h3"],
      ["00", "01", "02", "03"],
      ["000", "001", "002", "003"],
    ];

  if (bal.sze == null) bal.sze = 100;

  cpy.term.table(bal.lst, {
    hasBorder: false,
    contentHasMarkup: true,
    textAttr: { bgColor: "default" },
    firstCellTextAttr: { bgColor: "blue" },
    firstRowTextAttr: { bgColor: "yellow" },
    firstColumnTextAttr: { bgColor: "red" },
    checkerEvenCellTextAttr: { bgColor: "gray" },
    width: bal.sze,
    fit: true, // Activate all expand/shrink + wordWrap
  });

  return cpy;
};

export const openTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {
  if (bal == null) bal = { idx: "none", src: null, lst: null, dat: null };

  if (cpy.term == null) initTerminal(cpy, bal, ste);
  if (bal.lst == null) bal.lst = ["0 ", "1"];
  if (bal.dat == null) bal.dat = [() => console.log("Option 000"), () => console.log("Option 001")];

  var blessed = require("blessed");
  var contrib = require("blessed-contrib");

  if (cpy.screen == null) cpy.screen = blessed.screen();

  var tree = contrib.tree({ fg: "green" });
  setTimeout(() => tree.focus(), 5);

  var data = {};
  var main = {};
  bal.lst.forEach((a, b) => {
    var idx = String(b).padStart(3, "0");
    data[idx + "-" + a] = {};
    main[b] = bal.dat[b];
  });

  tree.on("select", (node) => {
    //if (node.myCustomProperty)  console.log(node.myCustomProperty);
    var key = node.name;
    var dex = Number(key.split("-")[0]);
    main[dex]();
    cpy.screen.lockKeys = true;
    setTimeout(() => cpy.screen.destroy(), 3);
  });

  cpy.screen.key(["escape", "q", "C-c"], function (ch, key) {
    return process.exit(0);
  });

  var box = blessed.box({
    content: "Hello {bold}world{/bold}!",
  });

  // Append our box to the screen.
  cpy.screen.append(box);
  cpy.screen.append(tree); //must append before setting data

  tree.setData({ extended: true, children: data });

  cpy.screen.render();

  return cpy;
};

export const writeTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {

  if (bal == null) bal = { src: "write-terminal" };

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

export const contentTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {
  if (bal == null) bal = {};
  if (bal.lst == null) bal.lst = ["000", "001"];
  if (bal.val == null) bal.val = 0;

  if (bal.dat == null) bal.dat = {};

  var add0, add1;

  if (bal.dat.idx != null) {
    add0 = true;

    bal.lst.forEach((a) => {
      if (a == bal.dat.idx) add0 = false;
    });
  }

  if (bal.dat.src != null) {
    add1 = true;

    bal.lst.forEach((a) => {
      if (a == bal.dat.src) add1 = false;
    });
  }

  if (add0 == true) bal.lst.unshift(bal.dat.idx);
  if (add1 == true) bal.lst.push(bal.dat.src);

  cpy.term.singleColumnMenu(bal.lst, { selectedIndex: bal.val }, (err, rsp) => {
    if (bal.slv != null) bal.slv({ trmBit: { idx: "content-terminal", lst: bal.lst, val: rsp.selectedIndex } });
  });

  return cpy;
};

export const updateTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {
  if (bal == null) bal = {};
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

export const addPort = async (cpy: TerminalModel, bal: TerminalBit, ste: State) => {

  if (bal.lst == null) bal.lst = []

  bal.lst.forEach(async (a) => {

    switch (a.idx) {
      case "bus":

        var lst = []
        for (var key in ActTrm) {

          var idx = ActTrm[key]
          if (idx == null) continue
          if (idx.includes == null) continue
          if (idx.includes('[') && idx.includes(']') == false) continue
          lst.push(idx)
        }

        cpy.port = a.dat;
        var bit = await cpy.port.hunt(bal.src, { src: 'terminal', lst, dat: ste.pivot })

        break;

      default:

        break;
    }
  })


  if (bal.slv != null) bal.slv({ clrBit: { idx: "add-port", src: bal.idx } });

  if (bal.slv != null) bal.slv({ trmBit: { idx: "add-port" } });

  return cpy;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { TerminalModel } from "../terminal.model";
import TerminalBit from "../fce/terminal.bit";
import State from "../../99.core/state";
