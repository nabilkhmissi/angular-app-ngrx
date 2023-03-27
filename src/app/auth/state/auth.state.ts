import { AuthResponse } from "src/app/models/authResponse.model";

export const InitialAuthState: AuthState = {
    user: null,
    errorMessage: null
}

export interface AuthState {
    user: AuthResponse | null;
    errorMessage: string | null
}