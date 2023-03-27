import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { logout } from 'src/app/auth/state/state.action';
import { getUser, isAuthenticated } from 'src/app/auth/state/state.selector';
import { AppState } from 'src/app/store/state.app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  isAuthenticated$ = this.store.select(getUser)

  ngOnInit(): void {

  }


  logout() {
    this.store.dispatch(logout())
  }
}
