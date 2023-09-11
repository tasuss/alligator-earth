import * as ActMnu from "../menu.action";
import * as ActSpc from "../../00.space.unit/space.action";
import * as ActFoc from "../../01.focus.unit/focus.action";
import * as ActTrm from "../../act/terminal.action";
import * as ActVsg from "../../act/visage.action";
import * as ActGph from "../../act/graphic.action";
import * as ActHex from "../../act/hexagon.action";


var bit, lst, dex, idx, dat;


export const renderMenu = async (cpy: MenuModel, bal:MenuBit, ste: State) => {

  bit = await ste.bus(ActTrm.CLEAR_TERMINAL, { src: "-----------" })
 

  
  bit = await ste.bus( ActVsg.SIZE_VISAGE, { dat: { w: 520, h: 520 } } , 'remote' );
  //bit = await ste.bus( ActVsg.FULLSCREEN_VISAGE, {idx:"fce00"}, 'remote')
  
  //bit = await ste.bus( ActGph.WRITE_GRAPHIC, { idx: 'gph00' }, 'remote')
  
  var mapMod: HexmapModel = ste.value.hexmap;
  lst = mapMod.atlasNow
  
  bit = await ste.bus( ActHex.WRITE_HEXAGON, { idx: 'hex00', src:'gph00', dat:{lst} }, 'remote')

  bal.slv({ intBit: { idx: "render-menu" } });
  return cpy;
  };


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
import { HexmapModel } from "../../03.hexmap.unit/hexmap.model";

