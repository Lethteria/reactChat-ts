import React from "react";
import styles from "./preloader.module.scss";

export default function Preloader(){
    return (
        <div className={styles.wrap}>
            <div className={styles.loaderWrap}>
                <span className={styles.loader}></span>
            </div>
        </div>
    );
}