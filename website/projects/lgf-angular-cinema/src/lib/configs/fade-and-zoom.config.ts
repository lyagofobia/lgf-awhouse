import { AnimationsConfigs } from "./animations-config";
import { Defaults } from "../defaults.lib";

export class FadeAndZoom implements AnimationsConfigs.FadeAndZoomConfig {
    startOpacity: number = Defaults.START_OPACITY;
    startScale: number = Defaults.START_SCALE;
    startHeight: string = Defaults.START_HEIGHT;
    endOpacity: number = Defaults.END_OPACITY;
    endScale: number = Defaults.END_SCALE;
    endHeight: string = Defaults.END_HEIGHT;
    timings: string | number = Defaults.TIMING;

    constructor(obj: AnimationsConfigs.FadeAndZoomConfig) {
        Object.assign(this, obj);
    }
}
