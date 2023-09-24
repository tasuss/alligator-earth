import ColorHexBit from "./fce/color-hext.bit";
import Color from "./fce/Color.interface";
import ColorBit from "./fce/color.interface";

export class ColorModel implements Color {
  idx:string = '006.color';
  
  seed: number = 92125;
  clrLst: string[];
  clrHexLst: ColorHexBit[];
  clrSrtLst:any;

  clrSrc: string = "./data/000.color.txt";
  clrDat: string = "./data/000.color.json";
  clrDatNom: string = "./data/000.color.nom.json";
  
  rskDat: string = "./data/000.risk.txt";
  
  clrRoot: string = '../color/'
  clrRootMax: string = this.clrRoot + 'max/'

  degreeClrLog:string = './data/log/degree-color-history'
  selectClrLog:string = './data/log/select-color-history'
  //colorBitList: ColorBit[] = [];
  //colorBits: any = {};
}

