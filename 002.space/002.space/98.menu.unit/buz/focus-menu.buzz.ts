import * as ActMnu from "../menu.action";
import * as ActSpc from "../../00.space.unit/space.action";
import * as ActFoc from "../../01.focus.unit/focus.action";
import * as ActMap from "../../03.hexmap.unit/hexmap.action";

import * as ActTrm from "../../act/terminal.action";

var bit, lst, dex, idx, dat, src;

export const focusMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  var focMod: FocusModel = ste.value.focus;

  bit = await ste.bus(ActTrm.CLEAR_TERMINAL, { src: "-----------" })

  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Focus PIVOT V0" })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" })

  var select: SpotBit = focMod.select;

  var nowIdx = 'None'
  var nowAwake = 'None'
  var nowX = 0
  var nowY = 0
  var nowFace = 'None'
  var nowMap = "None"
  var nowBnd = "NowBond"
  var nowViz = "NowViz;"

  if (select != null) {
    nowIdx = select.idx;
    nowX = select.x;
    nowY = select.y;
    nowFace = select.face
    nowMap = select.src
    nowBnd = select.bonds
    nowViz = JSON.stringify(select.viewList)
    nowAwake = String(select.awake)
  }

  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { val: 3, src: "Now---" + nowIdx })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { val: 4, src: "NowX--" + nowX })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { val: 4, src: "NowY--" + nowY })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { val: 5, src: "NowFace--" + nowFace })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { val: 5, src: "NowMap--" + nowMap })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { val: 6, src: "Bonds--" + JSON.stringify(nowBnd) })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { val: 6, src: "Vision--" + JSON.stringify(nowViz) })

  //var lst = [ActFoc.FORWARD_FOCUS, ActFoc.SPIN_RIGHT_FOCUS, ActFoc.SPIN_LEFT_FOCUS, ActFoc.BACKWARD_FOCUS, ActFoc.AWAKE_FOCUS]
  //if (select != null && select.awake == false) lst = [ActFoc.AWAKE_FOCUS, ActFoc.SPIN_RIGHT_FOCUS, ActFoc.SPIN_LEFT_FOCUS, ActMnu.UPDATE_MENU]
  lst = [ActFoc.WRITE_FOCUS, ActMap.FOCUSING_HEXMAP, ActFoc.SELECT_FOCUS, ActFoc.BOND_FOCUS, ActFoc.CORNER_FOCUS, ActFoc.READ_FOCUS, ActFoc.CREATE_FOCUS, ActMnu.UPDATE_MENU]
  lst.push( ActFoc.MODEL_FOCUS)
  lst.push( ActMnu.FOCUS_PLAY_MENU)

  bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

  bit = bit.trmBit;
  var idx = lst[bit.val];

  switch (idx) {

    
    case ActMnu.FOCUS_PLAY_MENU:
      bit = await ste.hunt(ActMnu.FOCUS_PLAY_MENU)
      break


    case ActFoc.AWAKE_FOCUS:

      lst = ['awake', 'close'];

      bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })
      bit = bit.trmBit;
      src = lst[bit.val];

      if ( src == 'awake') bit = await ste.hunt(ActFoc.AWAKE_FOCUS, { idx: nowIdx, val:1 })
      if ( src == 'close') bit = await ste.hunt(ActFoc.AWAKE_FOCUS, { idx: nowIdx, val:0 })

      bit = await ste.hunt(ActMnu.FOCUS_MENU)

      break

    case ActMap.FOCUSING_HEXMAP:


      bit = await ste.hunt(ActMap.LIST_HEXMAP, {})
      lst = bit.mapBit.lst;

      bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })
      bit = bit.trmBit;
      src = lst[bit.val];
      cpy.mapNomNow = src

      var hexmap = src;

      bit = await ste.hunt(ActFoc.LIST_FOCUS, {})
      lst = bit.focBit.lst;

      bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })
      bit = bit.trmBit;
      src = lst[bit.val];

      var focus = src;
      bit = await ste.hunt(ActMap.FOCUSING_HEXMAP, { idx: hexmap, src })
      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) })

      bit = await ste.hunt(ActMnu.FOCUS_MENU)
      break


      
    case ActFoc.MODEL_FOCUS:

      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Model Focus... " + src, bit: 'local' })

      bit = await ste.hunt(ActFoc.MODEL_FOCUS, {})
      
      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) })
      break;




    case ActFoc.BOND_FOCUS:

      src = select.idx;

      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Orbiting... " + src, bit: 'local' })

      bit = await ste.hunt(ActFoc.BOND_FOCUS, { idx: src })
      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) })
      break;

    case ActFoc.SELECT_FOCUS:

      bit = await ste.hunt(ActFoc.LIST_FOCUS, {}, 'local')
      if (bit.focBit == null) bit.focBit = { lst: [] }

      lst = bit.focBit.lst;

      if (lst.length == 0) {
        bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Focus present : 0", bit: 'local' })
        bit = await await ste.hunt(ActMnu.FOCUS_MENU, {})
        return
      }

      bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

      bit = bit.trmBit;
      src = lst[bit.val];

      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Selecting... " + src, bit: 'local' })

      bit = await ste.hunt(ActFoc.SELECT_FOCUS, { idx: src })
      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) })

      break

    case ActFoc.FORWARD_FOCUS:

      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Forwarding... " + src, bit: 'local' })

      bit = await ste.hunt(ActFoc.FORWARD_FOCUS, { idx: select.idx })
      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) })
      break;

    case ActFoc.BACKWARD_FOCUS:

      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Backwarding... " + src, bit: 'local' })

      bit = await ste.hunt(ActFoc.BACKWARD_FOCUS, { idx: select.idx })
      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) })
      break;


    case ActFoc.SPIN_LEFT_FOCUS:

      src = select.idx;

      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Turning Left " + src, bit: 'local' })

      bit = await ste.hunt(ActFoc.SPIN_LEFT_FOCUS, { idx: src })
      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) })
      break;

    case ActFoc.SPIN_RIGHT_FOCUS:

      src = select.idx;

      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Turning Right " + src, bit: 'local' })

      bit = await ste.hunt(ActFoc.SPIN_RIGHT_FOCUS, { idx: src })
      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) })
      break;

    case ActFoc.CORNER_FOCUS:


      bit = await ste.hunt(ActFoc.LIST_FOCUS, {}, 'local')
      if (bit.focBit == null) bit.focBit = { lst: [] }

      lst = bit.focBit.lst;

      if (lst.length == 0) {
        bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Focus present : 0", bit: 'local' })
        bit = await await ste.hunt(ActMnu.FOCUS_MENU, {})
        return
      }

      bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

      bit = bit.trmBit;
      src = lst[bit.val];

      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Cornering " + src, bit: 'local' })

      bit = await ste.hunt(ActFoc.CORNER_FOCUS, { idx: src }, 'local')


      //bit = await ste.hunt( ActFoc.READ_FOCUS , {})
      //  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) })
      break;


    case ActFoc.WRITE_FOCUS:

      bit = await ste.bus(ActTrm.INPUT_TERMINAL, { lst: ["", "id focus..."] });
      idx = bit.trmBit.src

      //now we need a list of maps
      bit = await ste.hunt(ActMap.LIST_HEXMAP, { idx })
      lst = bit.mapBit.lst

      if (lst.length == 0) {
        bit = await ste.hunt(ActMnu.FOCUS_MENU, {})
        return
      }

      bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

      bit = bit.trmBit;
      src = lst[bit.val];

      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: idx + " inside " + src, bit: 'local' })

      bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx, src })
      bit = await ste.hunt(ActFoc.SELECT_FOCUS, { idx })

      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) })
      break;

    case ActFoc.READ_FOCUS:
      bit = await ste.hunt(ActFoc.READ_FOCUS, {})
      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) })
      break;

    case ActFoc.CREATE_FOCUS:
      bit = await ste.hunt(ActFoc.CREATE_FOCUS, {})
      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) })
      break;

    case ActMnu.UPDATE_MENU:
      bit = await ste.hunt(ActMnu.UPDATE_MENU)
      break;

    default:
      bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {})
      break;
  }

  bit = await ste.hunt(ActMnu.FOCUS_MENU, {})

  //updateMenu(cpy, bal, ste);

  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });


import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state"; import { FocusModel } from "002.space/01.focus.unit/focus.model";
import SpotBit from "002.space/01.focus.unit/fce/spot.bit";

