import { animate, animateChild, group, query, sequence, state, style, transition, trigger } from "@angular/animations"
const DEFAULT_START_WIDTH = '0px';
const DEFAULT_END_WIDTH = '100%';
const DEFAULT_TIMING = '1s';
export function swap(
    selector: string
    , config: {
        startWidth?: string
        , endWidth?: string
        , timing?: string | number
    } = {
            startWidth: DEFAULT_START_WIDTH
            , endWidth: DEFAULT_END_WIDTH
            , timing: DEFAULT_TIMING
        }
) {
    return trigger(
        selector
        , [
            transition('* => *'
                , [
                    sequence(
                        [
                            query('@slideOut'
                                , [
                                    animateChild()
                                ]
                            )
                            , query('@slideIn'
                                , [
                                    animateChild()
                                ]
                            )
                        ]
                    )
                ]
            )
        ]
    )
}
export function slide(
    selector: string
    , config: {
        startWidth?: string
        , endWidth?: string
        , timing?: string | number
    } = {
            startWidth: DEFAULT_START_WIDTH
            , endWidth: DEFAULT_END_WIDTH
            , timing: DEFAULT_TIMING
        }
) {
    return trigger(
        selector
        , [
            state('*'
                , style(
                    {
                        width: config.endWidth || DEFAULT_END_WIDTH
                    }
                )
            )
            , transition('* => *'
                , [
                    style(
                        {
                            width: config.startWidth || DEFAULT_START_WIDTH
                        }
                    )
                    , animate(config.timing || DEFAULT_TIMING
                        , style(
                            {
                                width: config.endWidth || DEFAULT_END_WIDTH
                            }
                        )
                    )
                ]
            )
        ]
    )
}