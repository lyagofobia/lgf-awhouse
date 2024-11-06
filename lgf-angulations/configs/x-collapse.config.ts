import { AnimationsConfigs } from "./animations-config";
import { Defaults } from "../libs/defaults.lib";

export class XCollapse implements AnimationsConfigs.XCollapseConfig {
    startWidth: string = Defaults.START_WIDTH;
    endWidth: string = Defaults.END_WIDTH;;
    timings: string | number = Defaults.TIMING;

    constructor(obj: AnimationsConfigs.XCollapseConfig) {
        Object.assign(this, obj);
    }
}