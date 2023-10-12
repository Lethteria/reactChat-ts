import React from "react";
import styles from "./loginUserInfo.module.scss"
import UserAvatar from "../userAvatar";
import {selectAuthUser} from "../../app/reducers/authUserReducer";
import {IUser} from "../../types/usersTypes";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export default function LoginUserInfo(){
    const user = useTypedSelector(selectAuthUser).data;


    return (
        <div className={styles.wrap}>
            <div>
                <UserAvatar imgPath={(user as IUser).imgPath}
                            alt={(user as IUser).name}
                />
            </div>
            <div>
                <span className={styles.name}>
                    {(user as IUser).name}
                </span>
            </div>

        </div>
    )
}