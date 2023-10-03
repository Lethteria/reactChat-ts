import React from "react";
import styles from "./chatPage.module.scss";
//import Chat from "../../components/chart";

export default function ChatPage(){
    return (
        <div className={styles.wrap}>
            <div className={styles.fixed}>
                {/*<Chat/>*/}
                <p>Logged in</p>
            </div>
        </div>
    )
}
