import { AnimationsConfigs } from "../animations-config";
import { Defaults } from "../defaults";

export class FadeAndZoom implements AnimationsConfigs.FadeAndZoomConfig {
    startOpacity: number = Defaults.START_OPACITY;
    startScale: number = Defaults.START_SCALE;
    endOpacity: number = Defaults.END_OPACITY;
    endScale: number = Defaults.END_SCALE;
    timings: string | number = Defaults.TIMING;

    constructor(obj: AnimationsConfigs.FadeAndZoomConfig) {
        Object.assign(this, obj);
    }
}
