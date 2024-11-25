import { AnimationsConfigs } from "./animations-config";
import { Defaults } from "../defaults.lib";

export class Zoom implements AnimationsConfigs.ZommConfig {
    startScale: number = Defaults.START_SCALE;
    endScale: number = Defaults.END_SCALE;;
    timings: string | number = Defaults.TIMING;

    constructor(obj: AnimationsConfigs.ZommConfig) {
        Object.assign(this, obj);
    }
}