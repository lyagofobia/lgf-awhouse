import { trigger, state, style, transition, useAnimation } from "@angular/animations";
import { Animations } from "../libs/animations.lib";
import { XCollapse } from "../configs/x-collapse.config";

export namespace StartUpTriggers {
    export function xCollapseTrigger(
        selector: string
        , config: XCollapse
    ) {
        return trigger(
            selector
            , [
                state('*'
                    , style(
                        {
                            width: config.endWidth
                        }
                    )
                )
                , transition('* => *'
                    , [
                        style(
                            {
                                width: config.startWidth
                            }
                        )
                        , useAnimation(Animations.X_COLLAPSE_ANIMATION
                            , {
                                params: {
                                    startWidth: config.startWidth
                                    , endWidth: config.endWidth
                                    , timings: config.timings
                                }
                            }
                        )
                    ]
                )
            ]
        )
    }
}
