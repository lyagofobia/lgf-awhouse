import { trigger, style, transition, animate, query } from "@angular/animations";
const DEFAULT_START_OPACITY = 0;
const DEFAULT_END_OPACITY = 1;
const DEFAULT_START_WIDTH = '0px';
const DEFAULT_END_WIDTH = '100%';
const DEFAULT_START_SCALE = 1;
const DEFAULT_END_SCALE = 1;
const DEFAULT_TIMING = '1s';
export function fadeIn(
    selector: string
    , config: {
        startOpacity?: number
        , startScale?: number
        , endOpacity?: number
        , endScale?: number
        , timing?: string | number
    } = {
            startOpacity: DEFAULT_START_OPACITY
            , startScale: DEFAULT_START_SCALE
            , endOpacity: DEFAULT_END_OPACITY
            , endScale: DEFAULT_END_SCALE
            , timing: DEFAULT_TIMING
        }
) {
    return trigger(
        selector
        , [
            transition('* => *', [
                query(':enter', [
                    style(
                        {
                            opacity: config.startOpacity || DEFAULT_START_OPACITY
                            , scale: config.startScale || DEFAULT_START_SCALE
                        }
                    )
                ]
                    , { optional: true })
                , query(':leave', [
                    animate(config.timing || DEFAULT_TIMING, style(
                        {
                            opacity: config.startOpacity || DEFAULT_START_OPACITY
                            , scale: config.startScale || DEFAULT_START_SCALE
                        }
                    ))
                ]
                    , { optional: true })
                , query(':enter', [
                    animate(config.timing || DEFAULT_TIMING, style(
                        {
                            opacity: config.endOpacity || DEFAULT_END_OPACITY
                            , scale: config.endScale || DEFAULT_END_SCALE
                        }
                    ))
                ]
                    , { optional: true })
            ])
        ]
    )
}