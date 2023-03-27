import { POSTS_STATE_NAME } from "../posts/state/post.selector"
import { AuthState } from "../auth/state/auth.state"
import { SHARED_STATE_NAME } from "../shared/state/shared.selector"
import { SharedState } from "../shared/state/shared.state"
import { AUTH_STATE_NAME } from "../auth/state/state.selector"
import { sharedReducer } from "../shared/state/shared.reducer"
import { authReducer } from "../auth/state/state.reducer"
import { RouterState } from "@ngrx/router-store"
import { routerReducer } from "@ngrx/router-store"

export interface AppState {
    [SHARED_STATE_NAME]: SharedState
    [AUTH_STATE_NAME]: AuthState,
    router: RouterState
}


export const AppReducer = {
    [SHARED_STATE_NAME]: sharedReducer,
    [AUTH_STATE_NAME]: authReducer,
    router: routerReducer
}