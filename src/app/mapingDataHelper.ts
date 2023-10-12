import {IUser, IAuthUserSuccess, ILoadUserSuccess} from "../types/usersTypes";
import avatarPathWoman from "../assets/img/avatarForWoman.jpg";
import avatarPathMan from "../assets/img/avatarForMan.jpg";

export function MapAuthUser(user: IAuthUserSuccess): IUser {

    return {
        id: user.id,
        name: user.name,
        gender: user.job,
        imgPath: (user.job === "man") ? avatarPathMan : avatarPathWoman
    }
}

export function MapLoadedUsers(users: ILoadUserSuccess[]): IUser[] {

    let data = users.map((user): IUser =>
        ( {
            id: user.id,
            name: user.first_name + user.last_name,
            gender: "unknown",
            imgPath: user.avatar
        })
    )
    return data
}