import Disk from "./fce/disk.interface";
import DiskBit from "./fce/disk.interface";

export class DiskModel implements Disk {
  local: number = 0;

  //imageData: any = require("../../../index/dat/image/00.src.json");
  //hexgridData: any = require("../../../index/dat/hexmap/00.src.json");

  imageSrc: string;
  hexgridSrc: string;
  //workData: any = require("../../../index/dat/work.json");
  promoInit: Promise<any>;
  promoOpen: Promise<any>;
  storeWork: any;
  storeHexmap: any;
}
