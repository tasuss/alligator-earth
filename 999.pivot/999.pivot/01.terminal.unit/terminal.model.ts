import Terminal from "./fce/terminal.interface";
import TerminalBit from "./fce/terminal.interface";

export class TerminalModel implements Terminal {

  idx:string = '998.terminal'
  
  port: any = {};

  clear: boolean = false;
  term: any;
  screen: any;

  rootIDX: any;
  rootDAT: any;

  game: any;
}
