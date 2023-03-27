import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setLoading } from 'src/app/shared/state/shared.actions';
import { AuthState } from '../state/auth.state';
import { loginStart } from '../state/state.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AuthState>) { }

  ngOnInit(): void {
  }

  email = new FormControl()
  password = new FormControl()
  loginForm!: FormGroup

  onLogin() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    })
    this.store.dispatch(setLoading({ value: true }))
    this.store.dispatch(loginStart({ user: this.loginForm.value }))
  }

}
