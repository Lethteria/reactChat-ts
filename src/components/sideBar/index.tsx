import React from "react";
import styles from "./sideBar.module.scss"
import UserList from "../userList";
import {useState} from "react";
import Icon from "../icon";

import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from "react-bootstrap/Button";
import CloseButton from 'react-bootstrap/CloseButton';


export default function SideBar(){
    const [show, setShow] = useState(false);

    function handleClose(e: React.MouseEvent){
        setShow(false);
    }

    function handleShow(e: React.MouseEvent){
        setShow(true);
    }

    return (
        <div className={styles.wrap}>
            <Button variant="light"
                    className="d-md-none"
                    onClick={handleShow}
            >
                <Icon iconType="list"
                      className={styles.list}
                />
            </Button>

            <Offcanvas show={show}
                       onHide={handleClose}
                       responsive="md"
                       className="h-100">

                {show && <CloseButton className={styles.closeBtn}
                                      onClick={handleClose} />
                }

                <Offcanvas.Body className={styles.body}>
                    <h3>online users</h3>
                    <UserList/>
                </Offcanvas.Body>

            </Offcanvas>
        </div>
    )
}