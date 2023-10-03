import {IAuthUser} from "./authUser";

export interface AuthUserState {
    data: IAuthUser | null,
    isLoggedIn: boolean,
    loginProcess: boolean
}

export enum AuthUserActionTypes  {
    REQUEST_AUTH_USER = "REQUEST_AUTH_USER",
    RECEIVE_AUTH_USER = "RECEIVE_AUTH_USER",
    REMOVE_AUTH_USER = "REMOVE_AUTH_USER"
}

interface RequestAuthUserAction {
    type: AuthUserActionTypes.REQUEST_AUTH_USER
}

interface ReceiveAuthUserAction {
    type: AuthUserActionTypes.RECEIVE_AUTH_USER
    payload: IAuthUser
}

interface RemoveAuthUserAction {
    type: AuthUserActionTypes.REMOVE_AUTH_USER
}

export type AuthUserAction = RequestAuthUserAction | ReceiveAuthUserAction | RemoveAuthUserAction