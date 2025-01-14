import { AnimationDefaults } from "../animation-defaults.lib";
import { LgfTriggers } from 'lgf-angular-cinema'
/**
 * Describes an animation for the layout on route transition.
 * Old content shrinks and fade-out as new content fade-in and expand.
 * @param selector Name of the selector used to invoke this animation.
 * @param config Configuration object wich properties can be used to customize the animation.
 * @returns Angular Animation Trigger ready to be used.
 */
export function layoutViewFadeAndZoomTrigger(
    selector: string
    , config: {
        startOpacity?: number
        , startScale?: number
        , startHeight?: string
        , endOpacity?: number
        , endScale?: number
        , endHeight?: string
        , timings?: string | number
    } = {
            startOpacity: AnimationDefaults.LAYOUT_VIEW_OPACITY_START
            , startScale: AnimationDefaults.LAYOUT_VIEW_SCALE_START
            , startHeight: AnimationDefaults.LAYOUT_VIEW_HEIGHT_START
            , endOpacity: AnimationDefaults.LAYOUT_VIEW_OPACITY_END
            , endScale: AnimationDefaults.LAYOUT_VIEW_SCALE_END
            , endHeight: AnimationDefaults.LAYOUT_VIEW_HEIGHT_END
            , timings: AnimationDefaults.LAYOUT_VIEW_TIMINGS
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