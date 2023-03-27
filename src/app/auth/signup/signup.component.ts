import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { AuthState } from '../state/auth.state';
import { signupStart } from '../state/state.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private store: Store<AuthState>) { }

  email = new FormControl()
  password = new FormControl()
  name = new FormControl()
  
  ngOnInit(): void {
  }

  onSignup() {
    let user = { name: this.name.value, email: this.email.value, password: this.password.value }
    this.store.dispatch(signupStart({ user: user }))
  }

}
