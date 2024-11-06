import { AnimationDefaults } from "../animation-defaults";
import { LgfTriggers } from "../../../../../lgf-angulations/animation-triggers"


export function layoutViewFadeAndZoomTrigger(
    selector: string
    , config: {
        startOpacity?: number
        , startScale?: number
        , endOpacity?: number
        , endScale?: number
        , timings?: string | number
    } = {
            startOpacity: AnimationDefaults.START_OPACITY
            , startScale: AnimationDefaults.START_SCALE
            , endOpacity: AnimationDefaults.END_OPACITY
            , endScale: AnimationDefaults.END_SCALE
            , timings: AnimationDefaults.TIMING
        }
) {
    return LgfTriggers.enterLeaveFadeAndZoom(selector, config);
}

export function layoutViewSequenceCollapse(
    selector: string
    , collapseOut: {
        selector: string
        , config?: {
            startWidth?: string
            , endWidth?: string
            , timings?: string | number
        }
    }
    , collapseIn: {
        selector: string
        , config?: {
            startWidth?: string
            , endWidth?: string
            , timings?: string | number
        }
    }
) {
    return [
        LgfTriggers.sequence(selector, ['@' + collapseOut.selector, '@' + collapseIn.selector])
        , LgfTriggers.startUpXCollapse(collapseOut.selector, collapseOut.config)
        , LgfTriggers.startUpXCollapse(collapseIn.selector, collapseIn.config)
    ]
}