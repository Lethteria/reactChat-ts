import React from "react";
import styles from "./chatNavbar.module.scss"
import LoginUserInfo from "../loginUserInfo";

import Container from 'react-bootstrap/Container';
import {Navbar} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {removeAuthUser, removeUsers} from "../../app/actions";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";

export default function ChatNavbar(){

    const dispatch = useTypedDispatch();

    function onClick(){
        //dispatch(removeMessages())
        dispatch(removeUsers())
        dispatch( removeAuthUser())
    }
    return (
        <Navbar bg="primary"
                variant="dark"
                className={styles.wrap}>
            <Container className={styles.userInfo}>
                <LoginUserInfo/>
                <Button variant="light"
                        size="sm"
                        onClick={onClick}>
                    sign out
                </Button>
            </Container>
        </Navbar>
    )
}