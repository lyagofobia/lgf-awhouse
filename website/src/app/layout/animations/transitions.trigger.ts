import { trigger, style, transition, animate, query, state } from "@angular/animations";

export function fadeIn(
    config: {
        startOpacity?: number
        , startScale?: number
        , endOpacity?: number
        , endScale?: number
        , timing?: string | number
    } = {
            startOpacity: 0
            , startScale: 0.9
            , endOpacity: 1
            , endScale: 1
            , timing: '1s'
        }
) {
    return trigger(
        'routeTransition'
        , [
            transition('* => *', [
                query(':enter', [
                    style(
                        {
                            opacity: config.startOpacity || 0
                            , scale: config.startScale || 0.9
                        }
                    )
                ]
                    , { optional: true })
                , query(':leave', [
                    animate(config.timing || '1s', style(
                        {
                            opacity: config.startOpacity || 0
                            , scale: config.startScale || 0.9
                        }
                    ))
                ]
                    , { optional: true })
                , query(':enter', [
                    animate(config.timing || '1s', style(
                        {
                            opacity: config.endOpacity || 1
                            , scale: config.endOpacity || 1
                        }
                    ))
                ]
                    , { optional: true })
            ])
        ]
    )
}
export function swapLeft(
    config: {
        startPosition?: string
        , endPosition?: string
        , timing?: string | number
    } = {
            startPosition: '100%'
            , endPosition: '0px'
            , timing: '1s'
        }
) {
    return trigger(
        'routeTransition'
        , [
            transition('* => *', [
                query(':self', style(
                    {
                        width: config.endPosition || '0px'
                    }
                ))
                , query(':self', animate(config.timing || '1s', style(
                    {
                        width: config.startPosition || '100%'
                    }
                )))
            ]
            )
        ]
    )
}