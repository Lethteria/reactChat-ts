import {IUser} from "../types/usersTypes";
import avatarPath1 from "../assets/img/avatar1.jpg";
import avatarPath2 from "../assets/img/avatar2.jpg";

export let initialUsers: Array<IUser> = [
    {name: 'Ann',
     id: 125,
     imgPath: avatarPath1,
     gender: 'female'
    },
    {name: 'Alex',
     id: 105,
     imgPath: avatarPath2,
     gender: 'male'
    }
]