import { Action } from "../99.core/interface/action.interface";
import  BitmapBit  from "./fce/bitmap.bit";

// Bitmap actions

export const INIT_BITMAP = "[Bitmap action] Init Bitmap";
export class InitBitmap implements Action {
 readonly type = INIT_BITMAP;
 constructor(public bale: BitmapBit) {}
}

export const UPDATE_BITMAP = "[Bitmap action] Update Bitmap";
export class UpdateBitmap implements Action {
 readonly type = UPDATE_BITMAP;
 constructor(public bale: BitmapBit) {}
}

export type Actions = | InitBitmap | UpdateBitmap ;
