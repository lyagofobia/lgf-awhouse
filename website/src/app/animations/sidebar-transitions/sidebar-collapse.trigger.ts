
import { AnimationDefaults } from "../animation-defaults.lib";
import { LgfTriggers } from 'lgf-angular-cinema'

/**
 * Describes an animation behaviour for the sidebar when it's collapsed or uncollapsed horizontally.
 * @param selector Name of the selector used to invoke this animation.
 * @param config Configuration object wich properties can be used to customize the animation.
 * @returns Angular Animation Trigger ready to be used.
 */
export function sideBarXCollapse(
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