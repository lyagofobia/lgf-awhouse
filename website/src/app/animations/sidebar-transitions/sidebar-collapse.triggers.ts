
import { LgfTriggers } from "../../../../../lgf-angulations/libs/animation-triggers.lib";
import { AnimationDefaults } from "../animation-defaults.lib";

export function sideBarCollapse(
    selector: string
    , config:
        {
            startWidth?: string
            , endWidth?: string
            , timings?: string | number
        } = {
            startWidth: AnimationDefaults.START_WIDTH
            , endWidth: AnimationDefaults.END_WIDTH
            , timings: AnimationDefaults.TIMING
        }
) {
    return LgfTriggers.openClosedXCollapse(selector, config);
}

export function sideBarSectionCollapse(
    selector: string
    , config:
        {
            startHeight?: string
            , endHeight?: string
            , timings?: string | number
        } = {
            startHeight: AnimationDefaults.START_HEIGHT
            , endHeight: AnimationDefaults.END_HEIGHT
            , timings: AnimationDefaults.TIMING
        }
) {
    return [
        LgfTriggers.openClosedYCollapse(selector, config)
    ];
}