import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthResponse } from "../models/authResponse.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }

    baseUrl = 'http://localhost:3000/api/auth'

    signup(user: { name: string, email: string, password: string }): Observable<{ message: string }> {
        return this.http.post<{ message: string }>(`${this.baseUrl}/signup`, user)
    }

    login(user: any): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.baseUrl}/login`, user)
    }


    saveUserToLocalStorage(user: AuthResponse) {
        localStorage.setItem("userData", JSON.stringify(user))
    }


    getUserFromLocalStorage() {
        let user = localStorage.getItem("userData");
        if (user) {
            let parsedUser = JSON.parse(user);
            return parsedUser
        }
        return null
    }

    deleteUserFromLocalStorage() {
        localStorage.removeItem("userData")
    }





}