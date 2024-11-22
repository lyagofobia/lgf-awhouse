import { AnimationsConfigs } from "./animations-config";
import { Defaults } from "../libs/defaults.lib";

export class YCollapse implements AnimationsConfigs.YCollapseConfig {
    startHeight: string = Defaults.START_HEIGHT;
    endHeight: string = Defaults.END_HEIGHT;;
    timings: string | number = Defaults.TIMING;

    constructor(obj: AnimationsConfigs.YCollapseConfig) {
        Object.assign(this, obj);
    }
}