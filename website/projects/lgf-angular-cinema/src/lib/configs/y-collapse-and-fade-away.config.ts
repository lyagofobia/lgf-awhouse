import { AnimationsConfigs } from "./animations-config";
import { Defaults } from "../defaults.lib";

export class YCollapseAndFade implements AnimationsConfigs.YCollapseAndFade {
    startHeight: string = Defaults.START_HEIGHT;
    endHeight: string = Defaults.END_HEIGHT;
    startOpacity: number = Defaults.START_OPACITY;
    endOpacity: number = Defaults.END_OPACITY;
    translateX: string = Defaults.NO_TRANSLATE;
    translateY: string = Defaults.NO_TRANSLATE;
    timings: string | number = Defaults.TIMING;

    constructor(obj: AnimationsConfigs.YCollapseAndFade) {
        Object.assign(this, obj);
    }
}