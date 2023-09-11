import Menu from "./fce/menu.interface";
import MenuBit from "./fce/menu.interface";

export class MenuModel implements Menu {
    lst: string[] = []

    geoJsonNow:any;
    atlasNow:any;
    sizeNow:any = 0;
    mapShape:string= 'none'
    mapNomNow:string= 'none'
    mapDimensions:string ='none'

    shapeBit:any;
}
