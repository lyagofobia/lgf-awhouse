import { trigger, style, transition, state, useAnimation } from "@angular/animations";
import { Animations } from "../libs/animations.lib";
import { XCollapse } from "../configs/x-collapse.config";
import { YCollapse } from "../configs/y-collapse.config";
import { Zoom } from "../configs/zoom.config";
import { YCollapseAndZoom } from "../configs/y-collapse-and-zoom.config";

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
                    useAnimation(Animations.Y_COLLAPSE_ANIMATION
                        , {
                            params: {
                                startHeight: config.startHeight
                                , endHeight: config.endHeight
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
                    , useAnimation(Animations.Y_COLLAPSE_ANIMATION
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
}