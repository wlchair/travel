import decoupling from './decoupling'
import {
    recordActionBefore,
    recordActionAfter,
    recordMutationBefore,
    recordMutationAfter
} from './record'
import inspect from './inspect'
export default store => {
    store.subscribeBeforeAction((action, state) => {
        // filter all action
        inspect.call(store, action, state)
        // record start
        recordActionBefore.call(store, action, state)
        // set diff modules relationship
        // before, on the current modules execute
        decoupling.call(store, action, 'before')
    })
    store.subscribeAfterAction((action, state) => {
        // after, on the current modules execute
        decoupling.call(store, action, 'after')
        // record end
        recordActionAfter.call(store, action, state)
    })
    store.subscribeBeforeMutation((mutations, state) => {
        recordMutationBefore.call(store, mutations, state)
    })
    store.subscribeAfterMutation((mutations, state) => {
        recordMutationAfter.call(store, mutations, state)
    })
}