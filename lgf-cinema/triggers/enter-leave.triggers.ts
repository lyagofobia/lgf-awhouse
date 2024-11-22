import { trigger, style, transition, query, useAnimation } from "@angular/animations";
import { Defaults } from "../libs/defaults.lib";
import { Animations } from "../libs/animations.lib";
import { FadeAndZoom } from "../configs/fade-and-zoom.config";

export namespace EnterLeaveTriggers {
    export function fadeAndZoomTrigger(
        selector: string
        , config: FadeAndZoom = {
            startOpacity: Defaults.START_OPACITY
            , startScale: Defaults.START_SCALE
            , endOpacity: Defaults.END_OPACITY
            , endScale: Defaults.END_SCALE
            , timings: Defaults.TIMING
        }
    ) {
        return trigger(
            selector
            , [
                transition('* => *', [
                    query(':enter', [
                        style(
                            {
                                opacity: config.startOpacity
                                , scale: config.startScale
                            }
                        )
                    ]
                        , { optional: true })
                    , query(':leave', [
                        useAnimation(Animations.FADE_ANIMATION
                            , {
                                params: {
                                    startOpacity: config.endOpacity
                                    , endOpacity: config.startOpacity
                                    , timings: config.timings
                                }
                            }
                        )
                        , useAnimation(Animations.ZOOM_ANIMATION
                            , {
                                params: {
                                    startScale: config.endScale
                                    , endScale: config.startScale
                                    , timings: config.timings
                                }
                            }
                        )
                    ]
                        , { optional: true })
                    , query(':enter', [
                        useAnimation(Animations.FADE_ANIMATION
                            , {
                                params: {
                                    startOpacity: config.startOpacity
                                    , endOpacity: config.endOpacity
                                    , timings: config.timings
                                }
                            }
                        )
                        , useAnimation(Animations.ZOOM_ANIMATION
                            , {
                                params: {
                                    startScale: config.startScale
                                    , endScale: config.endScale
                                    , timings: config.timings
                                }
                            }
                        )
                    ]
                        , { optional: true })
                ])
            ]
        )
    }
}

