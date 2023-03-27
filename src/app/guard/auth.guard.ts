import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { isAuthenticated } from '../auth/state/state.selector';
import { AppState } from '../store/state.app';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private store: Store<AppState>, private router: Router) { }

    canActivate(): Observable<boolean> {
        return this.store.select(isAuthenticated).pipe(
            map(user => {
                if (!user) {
                    this.router.navigate(['/auth/login'])
                }
                return true
            })
        )

    }
}