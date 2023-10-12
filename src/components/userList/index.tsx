import React from "react";
import styles from "./userList.module.scss";
import ErrorAlert from "../errorAlert";
import Button from 'react-bootstrap/Button';

import {useSelector} from "react-redux";
import {selectUsers} from "../../app/reducers/usersReducer";
import {loadUsers} from "../../app/asyncActions";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";

export default function UserList(){
    const {data, loading, error} = useSelector(selectUsers)
    const dispatch = useTypedDispatch();

    function onLoadUsers(){
        dispatch(loadUsers());
    }

    const list = data.map(
        user => <li key={user.id}>{user.name}</li>
    )

    return (
        <div className={styles.wrap}>

            {error && <ErrorAlert error={error}/>}

            <div className={styles.list}>
                <ul>
                    {list}
                </ul>
            </div>

            <Button variant="success"
                    size="sm"
                    className="me-2 mt-2"
                    onClick={onLoadUsers}>
                {loading ? (
                    <span>
                            <span className="spinner-border spinner-border-sm"
                                  role="status"
                                  aria-hidden="true"
                            />
                            loading...
                        </span>
                ) : (
                    <span>
                        load users
                    </span>
                )
                }
            </Button>

        </div>
    )
}