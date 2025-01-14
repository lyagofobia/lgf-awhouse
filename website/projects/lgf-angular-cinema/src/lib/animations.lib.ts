import { animate, animation, style } from "@angular/animations";
export namespace Animations {
    export const FADE_ANIMATION = animation(
        [
            style(
                {
                    opacity: '{{ startOpacity }}'
                }
            )
            , animate('{{ timings }}'
                , style(
                    {
                        opacity: '{{ endOpacity }}'
                    }
                ))
        ]
    )
    export const ZOOM_ANIMATION = animation(
        [
            style(
                {
                    scale: '{{ startScale }}'
                    , height: '{{ startHeight }}'
                }
            )
            , animate('{{ timings }}'
                , style(
                    {
                        scale: '{{ endScale }}'
                        , height: '{{ endHeight }}'
                    }
                ))
        ]
    )
    export const X_COLLAPSE_ANIMATION = animation(
        [
            style(
                {
                    width: '{{ startWidth }}'
                }
            )
            , animate('{{ timings }}', style(
                {
                    width: '{{ endWidth }}'
                }
            ))
        ]
    )
    export const Y_COLLAPSE_ANIMATION = animation(
        [
            style(
                {
                    height: '{{ startHeight }}'
                }
            )
            , animate('{{ timings }}', style(
                {
                    height: '{{ endHeight }}'
                }
            ))
        ]
    )
    export const TRANSLATE_ANIMATION = animation(
        [
            animate('{{ timings }}', style(
                {
                    transform: 'translate({{ translateX }}, {{ translateY }})'
                }
            ))
        ]
    )
}