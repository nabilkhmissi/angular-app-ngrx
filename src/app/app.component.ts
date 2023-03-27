import { Component, OnInit } from '@angular/core';
import { props, Store } from '@ngrx/store';
import { autoLogin } from './auth/state/state.action';
import { getErrorMessage, getLoadingSpinner } from './shared/state/shared.selector';
import { AppState } from './store/state.app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  title = "angular_tests"
  loading$ = this.store.select(getLoadingSpinner)

  errorMessage$ = this.store.select(getErrorMessage)
  ngOnInit() {
    this.store.dispatch(autoLogin())
  }



}
