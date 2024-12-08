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
            startHeight: AnimationDefaults.MENU_COLLAPSE_START
            , endHeight: AnimationDefaults.MENU_COLLAPSE_END
            , startOpacity: AnimationDefaults.MENU_OPACITY_START
            , endOpacity: AnimationDefaults.MENU_OPACITY_END
            , translateX: AnimationDefaults.LEFT_TRANSLATE
            , timings: AnimationDefaults.MENU_TIMINGS
        }
) {
    let defaultConfig = {
        startHeight: AnimationDefaults.MENU_COLLAPSE_START
        , endHeight: AnimationDefaults.MENU_COLLAPSE_END
        , startOpacity: AnimationDefaults.MENU_OPACITY_START
        , endOpacity: AnimationDefaults.MENU_OPACITY_END
        , translateX: AnimationDefaults.LEFT_TRANSLATE
        , timings: AnimationDefaults.MENU_TIMINGS
    }

    return LgfTriggers.openClosedYCollapseAndFadeAway(selector, Object.assign(defaultConfig, config));
}