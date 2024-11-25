
import { AnimationDefaults } from "../animation-defaults.lib";
import { LgfTriggers } from 'lgf-angular-cinema'

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
            , startScale?: number
            , endScale?: number
            , timings?: string | number
        } = {
            startHeight: AnimationDefaults.START_HEIGHT
            , endHeight: AnimationDefaults.END_HEIGHT
            , startScale: AnimationDefaults.START_SCALE
            , endScale: AnimationDefaults.END_SCALE
            , timings: AnimationDefaults.TIMING
        }
) {
    return LgfTriggers.openClosedYCollapseAndZoom(selector, config);
}