import { LgfTriggers } from "lgf-angular-cinema";
import { AnimationDefaults } from "../animation-defaults.lib";

/**
 * Describes an animation behaviour for the menus items when they're collapsed or uncollapsed.
 * The items fade in and out to and from the left when toggled.
 * @param selector Name of the selector used to invoke this animation.
 * @param config Configuration object wich properties can be used to customize the animation.
 * @returns Angular Animation Trigger ready to be used.
 */
export function menuCollapseAndFadeLeft(
    selector: string
    , config:
        {
            startHeight?: string
            , endHeight?: string
            , startOpacity?: number
            , endOpacity?: number
            , translateX?: string
            , timings?: string | number
        } = {
            startHeight: AnimationDefaults.START_HEIGHT
            , endHeight: AnimationDefaults.END_HEIGHT
            , startOpacity: AnimationDefaults.START_SCALE
            , endOpacity: AnimationDefaults.END_SCALE
            , translateX: AnimationDefaults.LEFT_TRANSLATE
            , timings: AnimationDefaults.TIMING
        }
) {
    return LgfTriggers.openClosedYCollapseAndFadeAway(selector, config);
}