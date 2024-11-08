import { Defaults } from "./defaults.lib";
import { AnimationsConfigs } from "../configs/animations-config";
import { StartUpTriggers } from "../triggers/startup.triggers";
import { SequenceTriggers } from "../triggers/sequence.triggers";
import { EnterLeaveTriggers } from "../triggers/enter-leave.triggers";
import { OpenClosedTriggers } from "../triggers/open-closed.triggers";
import { XCollapse } from "../configs/x-collapse.config";
import { YCollapse } from "../configs/y-collapse.config";
import { FadeAndZoom } from "../configs/fade-and-zoom.config";

export namespace LgfTriggers {
    /**
     * Retrieves an implementation of Fade and Zoom animation on `:enter` and `:leave` elements.
     * @param selector Trigger name on the animated parent element.
     * @param config Animation configuration defined by [`FadeAndZoomConfig`](./animations-config.d.ts).
     * Use it to customize the animation.
     * @returns Animation Trigger ready to be declared on an Angular Component.
     * 
     * @usageNotes
     * Call this animation trigger in the `animations` section of `@Component` metadata.
     * You can customize it via `config`, by setting new values to the defined config params.
     * In the template, reference the trigger by name and bind it to a trigger expression that
     * evaluates to a defined animation state, using the following format:
     *
     * `[@triggerName]="expression"`
     * ### Usage Example
     *
     * The following example calls the animation trigger reference by accessing the
     * `LgfTriggers` namespace and assigning a trigger name and a timing configuration of
     * 200 miliseconds.
     *
     * ```typescript
     * @Component({
     *   selector: "my-component",
     *   templateUrl: "my-component-tpl.html",
     *   animations: [
     *     LgfTriggers.enterLeaveFadeAndZoom('myAnimationTrigger', {timings:'200ms'})
     *   ]
     * })
     * class MyComponent {
     *   myTriggerExpression = "something";
     * }
     * ```
     * The template associated with this component makes use of the defined trigger
     * by binding to an element within its template code.
     *
     * ```html
     * <!-- Parent div setted with `myAnimationTrigger` -->
     * <div [@myAnimationTrigger]="myTriggerExpression">
     *      @if(showFirstDiv){
     *      <div>...</div>
     *      }
     * ```
     * Whenever `showFirstDiv` is set to `true` this div will be added to the DOM, becoming queriable by `:enter`.
     * When set to false this div will be removed from the DOM, becoming queriable by `:leave`.
     * ```html
     *      @if(!showFirstDiv){
     *      <div>...</div>
     *      }
     * </div>
     * <!-- End of parent div -->
     * ```
     * This next div is then setted in a way that whenever the first div is `:enter` this will be `:leave` and vice-versa.
     * The transition between `:enter` and `:leave` elements will then be animated as defined in `myAnimationTrigger` 
     * whenever `myTriggerExpression` is updated.
     * 
     * This is most useful to set route transitions using `router-outlet`, where the `:enter` and `:leave` elements are
     * handled by routing and `myTriggerExpression` can be bond to a routing event.
     */
    export function enterLeaveFadeAndZoom(
        selector: string
        , config: AnimationsConfigs.FadeAndZoomConfig = {
            startOpacity: Defaults.START_OPACITY
            , startScale: Defaults.START_SCALE
            , endOpacity: Defaults.END_OPACITY
            , endScale: Defaults.END_SCALE
            , timings: Defaults.TIMING
        }
    ) {
        const fadeAndZoom = new FadeAndZoom(config);
        return EnterLeaveTriggers.fadeAndZoomTrigger(selector, fadeAndZoom);
    }
    /**
     * Retrieves an implementation of X-Axis Collapse animation on start up.
     * @param selector Trigger name on the animated parent element.
     * @param config Animation configuration defined by [`XCollapseConfig`](./animations-config.d.ts).
     * Use it to customize the animation.
     * @returns Animation Trigger ready to be declared on an Angular Component.
     * 
     * @usageNotes
     * Call this animation trigger in the `animations` section of `@Component` metadata.
     * You can customize it via `config`, by setting new values to the defined config params.
     * In the template, reference the trigger by name and bind it to a trigger expression that
     * evaluates to a defined animation state, using the following format:
     *
     * `[@triggerName]="expression"`
     * ### Usage Example
     *
     * The following example calls the animation trigger reference by accessing the
     * `LgfTriggers` namespace and assigning a trigger name and a timing configuration of
     * 200 miliseconds.
     *
     * ```typescript
     * @Component({
     *   selector: "my-component",
     *   templateUrl: "my-component-tpl.html",
     *   animations: [
     *     LgfTriggers.startUpXCollapse('myAnimationTrigger', {timings:'200ms'})
     *   ]
     * })
     * class MyComponent {
     *   myTriggerExpression = "something";
     * }
     * ```
     * The template associated with this component makes use of the defined trigger
     * by binding to an element within its template code.
     *
     * ```html
     * <!-- Parent div setted with `myAnimationTrigger` -->
     * <div [@myAnimationTrigger]="myTriggerExpression">...</div>
     * <!-- End of parent div -->
     * ```
     * Once the view defined by the template is initialized, the animation will run once
     * 
     * This is most useful to create entrance effects. You can also combine multiple start up animations
     * to produce more complex entrance effects.
     * Try using `LgfTriggers.sequence()` to create sequencial animations.
     */
    export function startUpXCollapse(
        selector: string
        , config: AnimationsConfigs.XCollapseConfig = {
            startWidth: Defaults.START_WIDTH
            , endWidth: Defaults.END_WIDTH
            , timings: Defaults.TIMING
        }
    ) {
        const xCollapse = new XCollapse(config);
        return StartUpTriggers.xCollapseTrigger(selector, xCollapse);
    }
    /**
     * Retrieves an implementation of X-Axis Collapse animation on open-close state changes.
     * @param selector Trigger name on the animated parent element.
     * @param config Animation configuration defined by [`XCollapseConfig`](./animations-config.d.ts).
     * Use it to customize the animation.
     * @returns Animation Trigger ready to be declared on an Angular Component.
     * 
     * @usageNotes
     * Call this animation trigger in the `animations` section of `@Component` metadata.
     * You can customize it via `config`, by setting new values to the defined config params.
     * In the template, reference the trigger by name and bind it to a trigger expression that
     * evaluates to a defined animation state, using the following format:
     *
     * `[@triggerName]="expression"`
     * ### Usage Example
     *
     * The following example calls the animation trigger reference by accessing the
     * `LgfTriggers` namespace and assigning a trigger name, a timing configuration of
     * 200 miliseconds and a start and ending configuration to width of '180px' and
     * '60px'.
     *
     * ```typescript
     * @Component({
     *   selector: "my-component",
     *   templateUrl: "my-component-tpl.html",
     *   animations: [
     *     LgfTriggers.openCloseXCollapse('myAnimationTrigger', {timings:'200ms', startWidth:'180px', endWidth:'60px'})
     *   ]
     * })
     * class MyComponent {
     *   myTriggerExpression = "something";
     * }
     * ```
     * The template associated with this component makes use of the defined trigger
     * by binding to an element within its template code. The expression sets the two
     * base states to this animation: 'open' and 'closed'.
     *
     * ```html
     * <!-- Parent div setted with `myAnimationTrigger` -->
     * <div [@myAnimationTrigger]="myTriggerExpression ? 'open' : 'closed'">...</div>
     * <!-- End of parent div -->
     * ```
     * Whenever there is a change in the defined state, the animation will toggle between the defined `start` and `end`
     * parameters.
     * 
     * This is most useful to create toggle effects.
     */
    export function openClosedXCollapse(
        selector: string
        , config: AnimationsConfigs.XCollapseConfig = {
            startWidth: Defaults.START_WIDTH
            , endWidth: Defaults.END_WIDTH
            , timings: Defaults.TIMING
        }
    ) {
        const xCollapse = new XCollapse(config);
        return OpenClosedTriggers.xCollapseTrigger(selector, xCollapse);
    }
    /**
     * Retrieves an implementation of Y-Axis Collapse animation on open-close state changes.
     * @param selector Trigger name on the animated parent element.
     * @param config Animation configuration defined by [`YCollapseConfig`](./animations-config.d.ts).
     * Use it to customize the animation.
     * @returns Animation Trigger ready to be declared on an Angular Component.
     * 
     * @usageNotes
     * Call this animation trigger in the `animations` section of `@Component` metadata.
     * You can customize it via `config`, by setting new values to the defined config params.
     * In the template, reference the trigger by name and bind it to a trigger expression that
     * evaluates to a defined animation state, using the following format:
     *
     * `[@triggerName]="expression"`
     * ### Usage Example
     *
     * The following example calls the animation trigger reference by accessing the
     * `LgfTriggers` namespace and assigning a trigger name, a timing configuration of
     * 200 miliseconds.
     *
     * ```typescript
     * @Component({
     *   selector: "my-component",
     *   templateUrl: "my-component-tpl.html",
     *   animations: [
     *     LgfTriggers.openCloseYCollapse('myAnimationTrigger', {timings:'200ms'})
     *   ]
     * })
     * class MyComponent {
     *   myTriggerExpression = "something";
     * }
     * ```
     * The template associated with this component makes use of the defined trigger
     * by binding to an element within its template code. The expression sets the two
     * base states to this animation: 'open' and 'closed'.
     *
     * ```html
     * <!-- Parent div setted with `myAnimationTrigger` -->
     * <div [@myAnimationTrigger]="myTriggerExpression ? 'open' : 'closed'">...</div>
     * <!-- End of parent div -->
     * ```
     * Whenever there is a change in the defined state, the animation will toggle between the defined `start` and `end`
     * parameters.
     * 
     * This is most useful to create toggle effects.
     */
    export function openClosedYCollapse(
        selector: string
        , config: AnimationsConfigs.YCollapseConfig = {
            startHeight: Defaults.START_HEIGHT
            , endHeight: Defaults.END_HEIGHT
            , timings: Defaults.TIMING
        }
    ) {
        const yCollapse = new YCollapse(config);
        return OpenClosedTriggers.yCollapseTrigger(selector, yCollapse);
    }
    /**
     * Retrieves an implementation of a sequential animation given the selectors 
     * of the animations to be serialized.
     * @param selector Trigger name on the animated parent element.
     * @param sequenceSelectors Array of animation trigger names or other queryable properties of
     * the animated elements. 
     * - `query(":enter")` or `query(":leave")` : Query for newly inserted/removed elements (not
 *     all elements can be queried via these tokens, see
 *     [Entering and Leaving Elements](#entering-and-leaving-elements))
 *  - `query(":animating")` : Query all currently animating elements.
 *  - `query("@triggerName")` : Query elements that contain an animation trigger.
 *  - `query("@*")` : Query all elements that contain an animation LgfTriggers.
 *  - `query(":self")` : Include the current element into the animation sequence.
     * @returns Animation Trigger ready to be declared on an Angular Component.
     * 
     * @usageNotes
     * Call this animation trigger in the `animations` section of `@Component` metadata.
     * You must also declare the animations you wish to played in sequence and matche their trigger
     * names with the `sequenceSelectors` array.
     * In the template, reference the trigger by name and bind it to a trigger expression that
     * evaluates to a defined animation state, using the following format. You must also bind any of the
     * child animations being serialized:
     *
     * `[@triggerName]="expression"`
     * ### Usage Example
     *
     * The following example calls the animation trigger reference by accessing the
     * `LgfTriggers` namespace and assigning a trigger name, a timing configuration of
     * 200 miliseconds and a start and ending configuration to width of '180px' and
     * '60px'.
     *
     * ```typescript
     * @Component({
     *   selector: "my-component",
     *   templateUrl: "my-component-tpl.html",
     *   animations: [
     *     LgfTriggers.sequence('myAnimationTrigger', ['@collapseOut', '@collapseIn'])
     *     LgfTriggers.startUpXCollapse('collapseOut', {timings:'200ms'})
     *     LgfTriggers.startUpXCollapse('collapseIn', {timings:'200ms', startWidth: '*', endWidth: '0px' })
     *   ]
     * })
     * class MyComponent {
     *   myTriggerExpression = "something";
     * }
     * ```
     * The template associated with this component makes use of the defined trigger
     * by binding to an element within its template code. The expression is synced 
     * across the serialized animations
     *
     * ```html
     * <!-- Parent div setted with `myAnimationTrigger` -->
     * <div [@myAnimationTrigger]="myTriggerExpression">
     *      <div [@collapseOut]="myTriggerExpression">
     *      
     *      </div>
     *      <div [@collapseIn]="myTriggerExpression">
     * 
     *      </div>
     * </div>
     * <!-- End of parent div -->
     * ```
     * Whenever there is a change in `myTriggerExpression` both animations `@collapseOut` and `@collapseIn` will 
      play in sequence, given the `sequenceSelectors` order.
     * 
     * This is most useful to streamline sequences using `LgfTriggers`.
     */
    export function sequence(
        selector: string
        , sequenceSelectors: string[]
    ) {
        return SequenceTriggers.sequenceTrigger(selector, sequenceSelectors);
    }

}


