import {IUsersState, UsersAction, UsersActionTypes} from "../../types/reducerUsersTypes";
import {initialUsers} from "../../data/initialData";
import {RootState} from "../store";

const initialState: IUsersState = {
    data: initialUsers,
    loading: false,
    error: null
}

export default function usersReducer(state = initialState,action: UsersAction): IUsersState {
    switch (action.type){
        case UsersActionTypes.FETCH_USERS:
            return state =  {...state,
                             loading: true
                            }
        case UsersActionTypes.FETCH_USERS_SUCCESS:
            return state  = {
                             data: action.payload,
                             loading: false,
                             error: null
                            }
        case UsersActionTypes.FETCH_USERS_ERROR:
            return state = {...state,
                            loading: false,
                            error: action.payload
                           }
        case UsersActionTypes.REMOVE_USERS:
            return state = {...initialState}
        default:
            return state;
    }
}

export const selectUsers = ( state: RootState ) => state.users;