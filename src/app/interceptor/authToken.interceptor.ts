import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { exhaustMap, first, map, Observable, take, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state.app';
import { getToken } from '../auth/state/state.selector';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
    constructor(private store: Store<AppState>) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.store.select(getToken).pipe(
            take(1),
            exhaustMap(token => {
                if (!token) {
                    return next.handle(req)
                }
                let modifiedReq = req.clone({ headers: req.headers.append('Authorization', `Bearer ${token}`) });
                return next.handle(modifiedReq)
            })
        )
    }
}