import Model from "./99.core/interface/model.interface";

import TerminalUnit from "./00.terminal.unit/terminal.unit";
import GridUnit from "./01.grid.unit/grid.unit";
import CanvasUnit from "./02.canvas.unit/canvas.unit";
import InputUnit from "./04.input.unit/input.unit";
import ChoiceUnit from "./05.choice.unit/choice.unit";
import ContainerUnit from "./10.container.unit/container.unit";
import GraphicUnit from "./11.graphic.unit/graphic.unit";
import HexagonUnit from "./12.hexagon.unit/hexagon.unit";
import SpriteUnit from "./13.sprite.unit/sprite.unit";
import TextUnit from "./14.text.unit/text.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Terminal from "./00.terminal.unit/fce/terminal.interface";
import { TerminalModel } from "./00.terminal.unit/terminal.model";
import Grid from "./01.grid.unit/fce/grid.interface";
import { GridModel } from "./01.grid.unit/grid.model";
import Canvas from "./02.canvas.unit/fce/canvas.interface";
import { CanvasModel } from "./02.canvas.unit/canvas.model";
import Input from "./04.input.unit/fce/input.interface";
import { InputModel } from "./04.input.unit/input.model";
import Choice from "./05.choice.unit/fce/choice.interface";
import { ChoiceModel } from "./05.choice.unit/choice.model";
import Container from "./10.container.unit/fce/container.interface";
import { ContainerModel } from "./10.container.unit/container.model";
import Graphic from "./11.graphic.unit/fce/graphic.interface";
import { GraphicModel } from "./11.graphic.unit/graphic.model";
import Hexagon from "./12.hexagon.unit/fce/hexagon.interface";
import { HexagonModel } from "./12.hexagon.unit/hexagon.model";
import Sprite from "./13.sprite.unit/fce/sprite.interface";
import { SpriteModel } from "./13.sprite.unit/sprite.model";
import Text from "./14.text.unit/fce/text.interface";
import { TextModel } from "./14.text.unit/text.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [TerminalUnit,GridUnit,CanvasUnit,InputUnit,ChoiceUnit,ContainerUnit,GraphicUnit,HexagonUnit,SpriteUnit,TextUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromTerminal from "./00.terminal.unit/terminal.reduce";
import * as reduceFromGrid from "./01.grid.unit/grid.reduce";
import * as reduceFromCanvas from "./02.canvas.unit/canvas.reduce";
import * as reduceFromInput from "./04.input.unit/input.reduce";
import * as reduceFromChoice from "./05.choice.unit/choice.reduce";
import * as reduceFromContainer from "./10.container.unit/container.reduce";
import * as reduceFromGraphic from "./11.graphic.unit/graphic.reduce";
import * as reduceFromHexagon from "./12.hexagon.unit/hexagon.reduce";
import * as reduceFromSprite from "./13.sprite.unit/sprite.reduce";
import * as reduceFromText from "./14.text.unit/text.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 terminal : reduceFromTerminal.reducer, 
grid : reduceFromGrid.reducer, 
canvas : reduceFromCanvas.reducer, 
input : reduceFromInput.reducer, 
choice : reduceFromChoice.reducer, 
container : reduceFromContainer.reducer, 
graphic : reduceFromGraphic.reducer, 
hexagon : reduceFromHexagon.reducer, 
sprite : reduceFromSprite.reducer, 
text : reduceFromText.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 terminal : Terminal = new TerminalModel();
grid : Grid = new GridModel();
canvas : Canvas = new CanvasModel();
input : Input = new InputModel();
choice : Choice = new ChoiceModel();
container : Container = new ContainerModel();
graphic : Graphic = new GraphicModel();
hexagon : Hexagon = new HexagonModel();
sprite : Sprite = new SpriteModel();
text : Text = new TextModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
