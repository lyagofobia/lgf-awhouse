export namespace AnimationsConfigs {
    /**
     * Defines a base configuration for all animations.
     */
    export interface BaseConfig {
        /**
         * Sets `AnimateTimings` for the animation.
         * A string in the format "duration [delay] [easing]".
         * The default value is '1s'.
         *  - Duration and delay are expressed as a number and optional time unit,
         * such as "1s" or "10ms" for one second and 10 milliseconds, respectively.
         * The default unit is milliseconds
         *  - The easing value controls how the animation accelerates and decelerates
         * during its runtime. Value is one of  `ease`, `ease-in`, `ease-out`,
         * `ease-in-out`, or a `cubic-bezier()` function call.
         * If not supplied, no easing is applied.
         *
         * For example, the string "1s 100ms ease-out" specifies a duration of
         * 1000 milliseconds, and delay of 100 ms, and the "ease-out" easing style,
         * which decelerates near the end of the duration.
         */
        timings?: string | number;
    }
    /**
     * Defines a set of configuration params for the Fade and Zoom effect.
     * Use the defined params to customize the effect.
     * 
     * Default values set a behaviour of total fade and total zoom between animated elements.
     */
    export interface FadeAndZoomConfig extends BaseConfig {
        /**
         * Opacity, as in the CSS property `opacity`, on animation start.
         * The default value is 0.
         */
        startOpacity?: number;
        /**
         * Scale, as in the CSS property `scale`, on animation start.
         * The default value is 0.
         */
        startScale?: number;
        /**
         * Opacity, as in the CSS property `opacity`, on animation end.
         * The default value is 1.
         */
        endOpacity?: number;
        /**
         * Scale, as in the CSS property `scale`, on animation end.
         * The default value is 1.
         */
        endScale?: number;
    }
    /**
     * Defines a set of configuration params for the X-Axis Collapse effect.
     * Use the defined params to customize the effect.
     * 
     */
    export interface XCollapseConfig extends BaseConfig {
        /**
         * Width, as in the CSS property `width`, on animation start.
         * The default value is '0%'.
         */
        startWidth?: string
        /**
         * Width, as in the CSS property `width`, on animation end.
         * The default value is '100%'.
         */
        endWidth?: string
    }
    /**
     * Defines a set of configuration params for the Y-Axis Collapse effect.
     * Use the defined params to customize the effect.
     * 
     */
    export interface YCollapseConfig extends BaseConfig {
        /**
         * Height, as in the CSS property `height`, on animation start.
         * The default value is '0%'.
         */
        startHeight?: string
        /**
         * Height, as in the CSS property `height`, on animation end.
         * The default value is '100%'.
         */
        endHeight?: string
    }
    /**
     * Defines a set of configuration params for the Zoom effect.
     * Use the defined params to customize the effect.
     * 
     */
    export interface ZommConfig extends BaseConfig {
        /**
         * Scale, as in the CSS property `scale`, on animation start.
         * The default value is 1.
         */
        startScale?: number
        /**
         * Scale, as in the CSS property `scale`, on animation end.
         * The default value is 0.
         */
        endScale?: number
    }
    /**
     * Defines a set of configuration params for the Y-Axis Collapse and Zoom effect.
     * Use the defined params to customize the effect.
     */
    export interface YCollapseAndZoom extends YCollapseConfig {
        /**
         * Scale, as in the CSS property `scale`, on animation start.
         * The default value is 1.
         */
        startScale?: number
        /**
         * Scale, as in the CSS property `scale`, on animation end.
         * The default value is 0.
         */
        endScale?: number
    }
}
