import { createAction, props } from "@ngrx/store"



const SET_ERROR_MESSAGE = "[shared satete] set error message"
const SET_LOADING = "[shared satete] set loading"

export const setErrorMessage = createAction(SET_ERROR_MESSAGE, props<{ message: string }>())
export const setLoading = createAction(SET_LOADING, props<{ value: boolean }>())