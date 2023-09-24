import { Action } from "../99.core/interface/action.interface";
import  SpectrumBit  from "./fce/spectrum.bit";

// Spectrum actions

export const INIT_SPECTRUM = "[Spectrum action] Init Spectrum";
export class InitSpectrum implements Action {
 readonly type = INIT_SPECTRUM;
 constructor(public bale: SpectrumBit) {}
}

export const UPDATE_SPECTRUM = "[Spectrum action] Update Spectrum";
export class UpdateSpectrum implements Action {
 readonly type = UPDATE_SPECTRUM;
 constructor(public bale: SpectrumBit) {}
}

export const MIN_SPECTRUM = "[Min action] Min Spectrum";
 export class MinSpectrum implements Action {
 readonly type = MIN_SPECTRUM;
 constructor(public bale: SpectrumBit) {}
 }
 
export type Actions = | InitSpectrum | UpdateSpectrum 
| MinSpectrum