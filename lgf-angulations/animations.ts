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
                }
            )
            , animate('{{ timings }}'
                , style(
                    {
                        scale: '{{ endScale }}'
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
}