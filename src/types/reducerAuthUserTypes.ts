import {IUser} from "./usersTypes";

export interface AuthUserState {
    data: IUser | null,
    isLoggedIn: boolean,
    loginProcess: boolean,  ////////////////////??????????????
    error: string | null
}

export enum AuthUserActionTypes  {
    REQUEST_AUTH_USER = "REQUEST_AUTH_USER",
    REQUEST_AUTH_USER_SUCCESS = "REQUEST_AUTH_USER_SUCCESS",
    REQUEST_AUTH_USER_ERROR = "REQUEST_AUTH_USER_ERROR",
    REMOVE_AUTH_USER = "REMOVE_AUTH_USER"
}

export interface RequestAuthUserAction {
    type: AuthUserActionTypes.REQUEST_AUTH_USER
}

export interface RequestAuthUserSuccessAction {
    type: AuthUserActionTypes.REQUEST_AUTH_USER_SUCCESS
    payload: IUser
}

export interface RequestAuthUserErrorAction {
    type: AuthUserActionTypes.REQUEST_AUTH_USER_ERROR
    payload: string
}

export interface RemoveAuthUserAction {
    type: AuthUserActionTypes.REMOVE_AUTH_USER
}

export type AuthUserAction = RequestAuthUserAction |
                             RequestAuthUserSuccessAction |
                             RequestAuthUserErrorAction |
                             RemoveAuthUserAction
