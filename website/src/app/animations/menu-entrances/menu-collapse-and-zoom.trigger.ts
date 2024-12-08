import { LgfTriggers } from "lgf-angular-cinema";
import { AnimationDefaults } from "../animation-defaults.lib";

/**
 * Describes an animation behaviour for the menus items when they're collapsed or uncollapsed.
 * The items are zoomed in and out when toggled.
 * @param selector Name of the selector used to invoke this animation.
 * @param config Configuration object wich properties can be used to customize the animation.
 * @returns Angular Animation Trigger ready to be used.
 */
export function menuCollapseAndZoom(
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