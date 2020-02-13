import { Middleware, MiddlewareAPI, Dispatch, Action } from "redux"

const logger: Middleware = store => next => action => {
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    next(action)
    console.log('next state', store.getState())
    console.groupEnd()
}

export default logger