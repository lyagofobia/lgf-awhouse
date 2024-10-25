import { trigger, transition, style, animate, state } from "@angular/animations"

export function slide(
    config: {
        openWidth?: string
        , closedWidth?: string
        , timing?: string | number
    } = {
            openWidth: '280px'
            , closedWidth: '60px'
            , timing: 200
        }
) {
    return trigger(
        'collapse'
        , [
            state('open', style(
                {
                    width: config.openWidth || '280px'
                }
            )
            ),
            state('closed', style(
                {
                    width: config.closedWidth || '60px'
                }
            )
            ),
            transition('open => closed', [animate(config.timing || 200)]),
            transition('closed => open', [animate(config.timing || 200)])
        ]
    )
}

export function shift(
    config: {
        openPosition?: string
        , closedPosition?: string
        , timing?: string | number
    } = {
            openPosition: '10px'
            , closedPosition: '12px'
            , timing: 200
        }
) {
    return trigger(
        'shift'
        , [
            state('open', style(
                {
                    position: 'relative'
                    , right: config.openPosition || '10px'
                }
            )
            ),
            state('closed', style(
                {
                    position: 'relative'
                    , right: config.closedPosition || '13px'
                }
            )
            ),
            transition('open => closed', [animate(config.timing || 200)]),
            transition('closed => open', [animate(config.timing || 200)])
        ]
    )
}
