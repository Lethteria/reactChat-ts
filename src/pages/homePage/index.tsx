import React from "react";
import styles from './loginFormPage.module.scss'
import LoginForm from "../../components/loginForm";
//import Preloader from "../../components/preloader";

export default function LoginFormPage(){
    return (
        <div className={styles.wrap}>
            {/*<Preloader/>*/}
            <LoginForm/>
        </div>
    )
}