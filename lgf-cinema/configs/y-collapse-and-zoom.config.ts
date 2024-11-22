import { AnimationsConfigs } from "./animations-config";
import { Defaults } from "../libs/defaults.lib";

export class YCollapseAndZoom implements AnimationsConfigs.YCollapseAndZoom {
    startHeight: string = Defaults.START_HEIGHT;
    endHeight: string = Defaults.END_HEIGHT;
    startScale: number = Defaults.START_SCALE;
    endScale: number = Defaults.END_SCALE;;
    timings: string | number = Defaults.TIMING;

    constructor(obj: AnimationsConfigs.YCollapseAndZoom) {
        Object.assign(this, obj);
    }
}