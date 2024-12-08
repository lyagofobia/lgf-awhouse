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
            startHeight: AnimationDefaults.MENU_COLLAPSE_START
            , endHeight: AnimationDefaults.MENU_COLLAPSE_END
            , startScale: AnimationDefaults.MENU_ZOOM_START
            , endScale: AnimationDefaults.MENU_ZOOM_END
            , timings: AnimationDefaults.MENU_TIMINGS
        }
) {
    let defaultConfig = {
        startHeight: AnimationDefaults.MENU_COLLAPSE_START
        , endHeight: AnimationDefaults.MENU_COLLAPSE_END
        , startScale: AnimationDefaults.MENU_ZOOM_START
            , endScale: AnimationDefaults.MENU_ZOOM_END
        , timings: AnimationDefaults.MENU_TIMINGS
    }
    return LgfTriggers.openClosedYCollapseAndZoom(selector, Object.assign(defaultConfig, config));
}