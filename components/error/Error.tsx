import React from 'react';
import styles from "./Error.module.scss";

interface IError {
    message: string | undefined
}

const Error = ({message}: IError) => {
    return (
        <div className={styles.error}>
            {message}
        </div>
    );
};

export default Error;