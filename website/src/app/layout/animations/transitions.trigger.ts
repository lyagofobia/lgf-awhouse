import { trigger, style, transition, animate, query } from "@angular/animations";

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
                            , scale: config.startOpacity || 0.9
                        }
                    )
                ]
                    , { optional: true })
                , query(':leave', [
                    animate(config.timing || '1s', style(
                        {
                            opacity: config.startOpacity || 0
                            , scale: config.startOpacity || 0.9
                        }
                    ))
                ]
                    , { optional: true })
                , query(':enter', [
                    animate(config.timing || '1s', style(
                        {
                            opacity: config.startOpacity || 1
                            , scale: config.startOpacity || 1
                        }
                    ))
                ]
                    , { optional: true })
            ])
        ]
    )
}