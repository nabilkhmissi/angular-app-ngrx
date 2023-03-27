import { createReducer, on } from "@ngrx/store"
import { setErrorMessage, setLoading } from "./shared.actions"
import { InitialState } from "./shared.state"


export function sharedReducer(state: any, action: any) {
    return _sharedReducer(state, action)
}

const _sharedReducer = createReducer(
    InitialState,
    on(setErrorMessage, (state, action) => {
        return {
            ...state,
            errorMessage: action.message
        }
    }),
    on(setLoading, (state, action) => {
        return {
            ...state,
            loading: action.value
        }
    })

)
