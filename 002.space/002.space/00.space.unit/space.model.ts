import Space from "./fce/Space.interface";
import SpaceBit from "./fce/space.interface";

export class SpaceModel implements Space {
 idx:string = '002.space';
 readyBit:string;
 //spaceBitList: SpaceBit[] = [];
 //spaceBits: any = {};
 copyGridLinks: string[] = ["https://geoman.io/geojson-editor", "https://www.keene.edu/campus/maps/tool/"];
}

