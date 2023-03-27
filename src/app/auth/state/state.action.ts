import { createAction, props } from "@ngrx/store"
import { AuthResponse } from "src/app/models/authResponse.model"
import { User } from "src/app/models/user.model"



const LOGIN_START = "[auth state] login start"
const LOGIN_SUCCESS = "[auth state] login success"
const SIGN_UP_START = "[auth state] signup start"
const SIGN_UP_SUCCESS = "[auth state] signup success"
const AUTO_LOGIN = "[auth state] auto login"
const AUTO_LOGIN_SUCCESS = "[auth state] auto login success"
const LOGOUT = "[auth state] logout"
const LOGOUT_SUCCESS = "[auth state] logout success"



export const loginStart = createAction(LOGIN_START, props<{ user: { email: string, password: string } }>())
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ user: AuthResponse }>())
export const autoLogin = createAction(AUTO_LOGIN)
export const autoLoginSucess = createAction(AUTO_LOGIN_SUCCESS, props<{ user: AuthResponse }>())

export const signupStart = createAction(SIGN_UP_START, props<{ user: any }>())
export const signupSuccess = createAction(SIGN_UP_SUCCESS, props<{ message: string }>())
export const logout = createAction(LOGOUT)
export const logout_success = createAction(LOGOUT_SUCCESS)
