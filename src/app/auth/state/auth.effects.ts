import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { setErrorMessage, setLoading } from "src/app/shared/state/shared.actions";
import { AppState } from "src/app/store/state.app";
import { autoLogin, autoLoginSucess, loginStart, loginSuccess, logout, logout_success, signupStart, signupSuccess } from "./state.action";

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private store: Store<AppState>
    ) { }


    signupStart$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(signupStart),
            mergeMap(action => {
                return this.authService.signup(action.user).pipe(
                    map((response) => {
                        return signupSuccess(response)
                    })
                )
            })
        )
    })

    loginStart$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            switchMap(action => {
                return this.authService.login(action.user).pipe(
                    map((user) => {
                        this.authService.saveUserToLocalStorage(user)
                        this.store.dispatch(setErrorMessage({ message: '' }))
                        this.store.dispatch(setLoading({ value: false }))
                        return loginSuccess({ user })
                    }),
                    catchError(errorMessage => {
                        this.store.dispatch(setLoading({ value: false }))
                        return of(setErrorMessage({ message: errorMessage.error.message }))
                    })
                )
            })
        )
    })

    autoLogin$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(autoLogin),
            mergeMap((action) => {
                const user = this.authService.getUserFromLocalStorage();
                return of(autoLoginSucess({ user: user }))
            })

        )
    })

    logout$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(logout),
            switchMap(action => {
                this.authService.deleteUserFromLocalStorage()
                return of(logout_success())
            })
        )
    })


    redirect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(...[logout_success, loginSuccess]),
            tap(() => this.router.navigate(['/']))
        )
    }, { dispatch: false })

}