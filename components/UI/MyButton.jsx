import React from 'react'
import styles from './MyButton.module.css'
export default function MyButton(props) {

    function clickHandler(e) {
        props.onClick(e);
    }
    return (
        <button
            style={props.style}
            onClick={clickHandler}
            className={styles.myButton}
        >
            {props.text}
        </button>
    )
}
