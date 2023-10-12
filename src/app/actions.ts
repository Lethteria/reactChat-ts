import {
    AuthUserActionTypes,
    RemoveAuthUserAction,
    RequestAuthUserAction,
    RequestAuthUserErrorAction,
    RequestAuthUserSuccessAction
} from "../types/reducerAuthUserTypes";
import {IUser} from "../types/usersTypes";
import {
    FetchUsersAction,
    FetchUsersErrorAction,
    FetchUsersSuccessAction, RemoveUsersAction,
    UsersActionTypes
} from "../types/reducerUsersTypes";

const requestAuthUser =():RequestAuthUserAction => ({
    type: AuthUserActionTypes.REQUEST_AUTH_USER
})

const requestAuthUserSuccess =(user:IUser):RequestAuthUserSuccessAction => ({
    type: AuthUserActionTypes.REQUEST_AUTH_USER_SUCCESS,
    payload: user
})

const requestAuthUserError =(error:string):RequestAuthUserErrorAction => ({
    type: AuthUserActionTypes.REQUEST_AUTH_USER_ERROR,
    payload: error
})

const removeAuthUser =():RemoveAuthUserAction => ({
    type: AuthUserActionTypes.REMOVE_AUTH_USER
})

const fetchUsers = ():FetchUsersAction => ({
    type: UsersActionTypes.FETCH_USERS
})

const fetchUsersSuccess = (users: IUser[]):FetchUsersSuccessAction => ({
    type: UsersActionTypes.FETCH_USERS_SUCCESS,
    payload: users
})

const fetchUsersError = (error: string):FetchUsersErrorAction => ({
    type: UsersActionTypes.FETCH_USERS_ERROR,
    payload: error
})

const removeUsers = ():RemoveUsersAction => ({
    type: UsersActionTypes.REMOVE_USERS
})

export {
    requestAuthUser, requestAuthUserSuccess, requestAuthUserError, removeAuthUser,
    fetchUsers, fetchUsersSuccess, fetchUsersError, removeUsers
}