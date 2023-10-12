import {IUser} from "./usersTypes";

export interface IUsersState {
    data: IUser[]
    loading: boolean,
    error: string | null
}

export enum UsersActionTypes  {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
    REMOVE_USERS = "REMOVE_USERS"
}

export interface FetchUsersAction {
    type: UsersActionTypes.FETCH_USERS
}

export interface FetchUsersSuccessAction {
    type: UsersActionTypes.FETCH_USERS_SUCCESS
    payload: IUser[]
}

export interface FetchUsersErrorAction {
    type: UsersActionTypes.FETCH_USERS_ERROR
    payload: string
}

export interface RemoveUsersAction {
    type: UsersActionTypes.REMOVE_USERS
}

export type UsersAction = FetchUsersAction |
                             FetchUsersSuccessAction |
                             FetchUsersErrorAction |
                             RemoveUsersAction