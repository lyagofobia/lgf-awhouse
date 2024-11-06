
import { LgfTriggers } from "../../../../../lgf-angulations/animation-triggers";
import { AnimationDefaults } from "../animation-defaults";

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