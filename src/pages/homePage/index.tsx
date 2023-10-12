import React from "react";
import styles from './loginFormPage.module.scss'
import LoginForm from "../../components/loginForm";
import Preloader from "../../components/preloader";
import {selectAuthUser} from "../../app/reducers/authUserReducer";
import {useTypedSelector} from "../../hooks/useTypedSelector";
//import Preloader from "../../components/preloader";

export default function LoginFormPage(){

    const user = useTypedSelector(selectAuthUser)

    return (
        <div className={styles.wrap}>
            {user.loginProcess && <Preloader/>}
            <LoginForm/>
        </div>
    )
}