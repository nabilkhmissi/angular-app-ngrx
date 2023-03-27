import { createReducer, on } from "@ngrx/store"
import { InitialAuthState } from "./auth.state"
import { autoLoginSucess, loginSuccess, logout, logout_success } from "./state.action"



export function authReducer(state: any, action: any) {
    return _authReducer(state, action)
}


const _authReducer = createReducer(
    InitialAuthState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),
    on(autoLoginSucess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),
    on(logout_success, (state) => {
        return {
            ...state,
            user: null
        }
    })

)

