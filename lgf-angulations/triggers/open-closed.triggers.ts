import { trigger, style, transition, state, useAnimation } from "@angular/animations";
import { Animations } from "../libs/animations.lib";
import { XCollapse } from "../configs/x-collapse.config";

export namespace OpenClosedTriggers {
    export function xCollapseTrigger(
        selector: string
        , config: XCollapse
    ) {
        return trigger(
            selector
            , [
                state('open', style(
                    {
                        width: config.startWidth
                    }
                )
                ),
                state('closed', style(
                    {
                        width: config.endWidth
                    }
                )
                ),
                transition('open => closed', [
                    useAnimation(Animations.X_COLLAPSE_ANIMATION
                        , {
                            params: {
                                startWidth: config.startWidth
                                , endWidth: config.endWidth
                                , timings: config.timings
                            }
                        }
                    )
                ]),
                transition('closed => open', [
                    useAnimation(Animations.X_COLLAPSE_ANIMATION
                        , {
                            params: {
                                startWidth: config.endWidth
                                , endWidth: config.startWidth
                                , timings: config.timings
                            }
                        }
                    )
                ])
            ]
        )
    }
}