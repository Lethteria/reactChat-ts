import {AuthUserAction, AuthUserActionTypes, AuthUserState} from "../../types/reducerAuthUser";
import {RootState} from "../store";

const value = localStorage.getItem("user");
const user = value ? JSON.parse(value) : null;
const initialState: AuthUserState = {
    data: user,
    isLoggedIn: !!user,
    loginProcess: false
}

export default function authUserReducer(state = initialState, action: AuthUserAction): AuthUserState{
    switch (action.type){
        case AuthUserActionTypes.REQUEST_AUTH_USER:
            return state = {...state,
                            loginProcess: true
                           };
        case AuthUserActionTypes.RECEIVE_AUTH_USER:
            return state = {...{data: action.payload,
                                isLoggedIn: true,
                                loginProcess: false}
                           };
        case AuthUserActionTypes.REMOVE_AUTH_USER:
            return state = {...state,
                            data: null,
                            isLoggedIn: false
                           }
        default:
            return state;
    }
}

export const selectAuthUser = (state: RootState) => state.authUser;