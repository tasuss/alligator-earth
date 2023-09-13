import Terminal from "./fce/terminal.interface";
import TerminalBit from "./fce/terminal.interface";

export class TerminalModel implements Terminal {
    idx: string = '998.terminal';
    term: any;

    rootIDX: any;
    rootDAT: any;

    blessed: any;
    contrib: any;
    screen: any

    cols:number = 12;
    rows:number = 12;
}


