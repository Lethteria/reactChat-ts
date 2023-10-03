import React from "react";
import styles from './userAvatar.module.scss'

type UserAvatarProps = {
    imgPath: string
    alt: string
}

export default function UserAvatar({imgPath, alt}: UserAvatarProps) {
    return (
        <img className={styles.img}
             src={imgPath}
             alt={alt}
        />
    );
}