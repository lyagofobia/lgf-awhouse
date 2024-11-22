import { animateChild, query, sequence, transition, trigger } from "@angular/animations"

export namespace SequenceTriggers {
    export function sequenceTrigger(
        selector: string
        , sequenceSelectors: string[]
    ) {
        return trigger(
            selector
            , [
                transition('* => *'
                    , [
                        sequence(
                            sequenceSelectors.map(sequenceSelector =>
                                query(
                                    sequenceSelector
                                    , [
                                        animateChild()
                                    ]
                                )
                            )
                        )
                    ]
                )
            ]
        )
    }
}
