import { trigger, style, transition, query, useAnimation } from "@angular/animations";
import { Defaults } from "../../lib/defaults.lib";
import { Animations } from "../../lib/animations.lib";
import { FadeAndZoom } from "../configs/fade-and-zoom.config";

export namespace EnterLeaveTriggers {
    export function fadeAndZoomTrigger(
        selector: string
        , config: FadeAndZoom = {
            startOpacity: Defaults.START_OPACITY
            , startScale: Defaults.START_SCALE
            , startHeight: Defaults.START_HEIGHT
            , endOpacity: Defaults.END_OPACITY
            , endScale: Defaults.END_SCALE
            , endHeight: Defaults.END_HEIGHT
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
                                , height: config.startHeight
                            }
                        )
                    ]
                        , { optional: true })
                    , query(':leave', [
                        style(
                            {
                                opacity: config.startOpacity
                                , scale: config.startScale
                                , height: config.startHeight
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
                                    , startHeight: config.startHeight
                                    , endHeight: config.endHeight
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
                                    , startHeight: config.startHeight
                                    , endHeight: config.endHeight
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

