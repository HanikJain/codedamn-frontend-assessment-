import React from 'react'
import styles from "./Badge.module.css"

export default function Badge(props) {
    const style = {
        backgroundColor: props.backgroundColor,
        color: props.color,
        fontSize: props.fontSize ? props.fontSize : "12px"
    }
    return (
        <span id={props.id} style={style} className={styles.badge}>
            {props.text}
        </span>
    )
}
