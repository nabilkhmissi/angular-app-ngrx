import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './home/home/home.component';
import { SharedModule } from './shared/shared.module';
import { AppReducer } from './store/state.app';
import { AuthEffects } from './auth/state/auth.effects';
import { JwtTokenInterceptor } from './interceptor/authToken.interceptor';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule.forRoot()


  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtTokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
