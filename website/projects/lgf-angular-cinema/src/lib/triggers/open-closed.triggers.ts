import { trigger, style, transition, state, useAnimation, group } from "@angular/animations";
import { Animations } from "../../lib/animations.lib";
import { XCollapse } from "../configs/x-collapse.config";
import { YCollapse } from "../configs/y-collapse.config";
import { Zoom } from "../configs/zoom.config";
import { YCollapseAndZoom } from "../configs/y-collapse-and-zoom.config";
import { YCollapseAndFade } from "../configs/y-collapse-and-fade-away.config";

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
    export function yCollapseTrigger(
        selector: string
        , config: YCollapse
    ) {
        return trigger(
            selector
            , [
                state('open', style(
                    {
                        height: config.startHeight
                    }
                )
                ),
                state('closed', style(
                    {
                        height: config.endHeight
                    }
                )
                ),
                transition('open => closed', [
                    useAnimation(Animations.Y_COLLAPSE_ANIMATION
                        , {
                            params: {
                                startHeight: config.startHeight
                                , endHeight: config.endHeight
                                , timings: config.timings
                            }
                        }
                    )
                ]),
                transition('closed => open', [
                    useAnimation(Animations.Y_COLLAPSE_ANIMATION
                        , {
                            params: {
                                startHeight: config.endHeight
                                , endHeight: config.startHeight
                                , timings: config.timings
                            }
                        }
                    )
                ])
            ]
        )
    }
    export function zoomTrigger(
        selector: string
        , config: Zoom
    ) {
        return trigger(
            selector
            , [
                state('open', style(
                    {
                        scale: config.startScale
                    }
                )
                ),
                state('closed', style(
                    {
                        scale: config.endScale
                    }
                )
                ),
                transition('open => closed', [
                    useAnimation(Animations.ZOOM_ANIMATION
                        , {
                            params: {
                                startScale: config.startScale
                                , endScale: config.endScale
                                , timings: config.timings
                            }
                        }
                    )
                ]),
                transition('closed => open', [
                    useAnimation(Animations.ZOOM_ANIMATION
                        , {
                            params: {
                                startScale: config.endScale
                                , endScale: config.startScale
                                , timings: config.timings
                            }
                        }
                    )
                ])
            ]
        )
    }
    export function yCollapseAndZoomTrigger(
        selector: string
        , config: YCollapseAndZoom
    ) {
        return trigger(
            selector
            , [
                state('open', style(
                    {
                        scale: config.startScale
                        , height: config.startHeight
                    }
                )
                ),
                state('closed', style(
                    {
                        scale: config.endScale
                        , height: config.endHeight
                    }
                )
                ),
                transition('open => closed', [
                    useAnimation(Animations.ZOOM_ANIMATION
                        , {
                            params: {
                                startScale: config.startScale
                                , endScale: config.endScale
                                , timings: config.timings
                            }
                        }
                    )
                    , useAnimation(Animations.Y_COLLAPSE_ANIMATION
                        , {
                            params: {
                                startHeight: config.startHeight
                                , endHeight: config.endHeight
                                , timings: config.timings
                            }
                        }
                    )
                ]),
                transition('closed => open', [
                    useAnimation(Animations.Y_COLLAPSE_ANIMATION
                        , {
                            params: {
                                startHeight: config.endHeight
                                , endHeight: config.startHeight
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

                ])
            ]
        )
    }
    export function yCollapseAndFadeAwayTrigger(
        selector: string
        , config: YCollapseAndFade
    ) {
        return trigger(
            selector
            , [
                state('open', style(
                    {
                        opacity: config.startOpacity
                        , height: config.startHeight
                    }
                )
                ),
                state('closed', style(
                    {
                        opacity: config.endOpacity
                        , height: config.endHeight
                        , transform: `translate(${config.translateX}, ${config.translateY})`
                    }
                )
                ),
                transition('open => closed', [
                    group([
                        useAnimation(Animations.FADE_ANIMATION
                            , {
                                params: {
                                    startOpacity: config.startOpacity
                                    , endOpacity: config.endOpacity
                                    , timings: config.timings
                                }
                            }
                        )
                        , useAnimation(Animations.TRANSLATE_ANIMATION
                            , {
                                params: {
                                    translateX: config.translateX
                                    , translateY: config.translateY
                                    , timings: config.timings
                                }
                            }
                        )
                    ])
                    , useAnimation(Animations.Y_COLLAPSE_ANIMATION
                        , {
                            params: {
                                startHeight: config.startHeight
                                , endHeight: config.endHeight
                                , timings: config.timings
                            }
                        }
                    )
                ]),
                transition('closed => open', [
                    useAnimation(Animations.Y_COLLAPSE_ANIMATION
                        , {
                            params: {
                                startHeight: config.endHeight
                                , endHeight: config.startHeight
                                , timings: config.timings
                            }
                        }
                    )
                    , group([
                         useAnimation(Animations.FADE_ANIMATION
                            , {
                                params: {
                                    startOpacity: config.endOpacity
                                    , endOpacity: config.startOpacity
                                    , timings: config.timings
                                }
                            }
                        )
                        , useAnimation(Animations.TRANSLATE_ANIMATION
                            , {
                                params: {
                                    translateX: 0
                                    , translateY: 0
                                    , timings: config.timings
                                }
                            }
                        )
                    ])
                ])
            ]
        )
    }
}