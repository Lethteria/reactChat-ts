import {IUser} from "../types/usersTypes";
import {Dispatch} from "redux";
import {AuthUserAction} from "../types/reducerAuthUserTypes";
import {CreateUser, getUsers} from "./chatAPI";
import {MapAuthUser, MapLoadedUsers} from "./mapingDataHelper";
import {
    fetchUsers,
    fetchUsersError,
    fetchUsersSuccess,
    requestAuthUser,
    requestAuthUserError,
    requestAuthUserSuccess
} from "./actions";
import {UsersAction} from "../types/reducerUsersTypes";

const loginUser = (user: IUser) => {

    return async (dispatch: Dispatch<AuthUserAction>) => {

        try {
            dispatch( requestAuthUser() )

            const response = await CreateUser(user);
            const authUser = MapAuthUser(response);

            setTimeout( () =>
                dispatch( requestAuthUserSuccess(authUser) ),
            1000)
        }
        catch (e) {
            dispatch( requestAuthUserError((e as Error).message) )
        }

    }
}

function loadUsers(){

    return async (dispatch: Dispatch<UsersAction>)=> {

        try {
            dispatch(fetchUsers())
            const response = await getUsers();
            const loadedUsers = MapLoadedUsers(response.data);
            setTimeout(() =>
                dispatch( fetchUsersSuccess(loadedUsers) ),
            500)
        }
        catch (e){
            dispatch( fetchUsersError((e as Error).message) )
        }
    }
}

export {loginUser, loadUsers}