import React from "react";
import Alert from 'react-bootstrap/Alert';

type ErrorAlertProps = {
    error: string
}

export default function ErrorAlert({error}: ErrorAlertProps){
    return (
        <Alert variant="danger">
            Something goes wrong! Error: {error}
        </Alert>
    )
}
