import React from 'react'
import styles from "./GridLayout.module.css"

export default function GridLayout(props) {
    const columnSize = props.columnSize ? props.columnSize : "240px";
    let containerStyle = { gridTemplateColumns: `repeat(auto-fit, minmax(${columnSize}, 1fr))` }

    if (props.columnSize === "1fr") {
        containerStyle = { gridTemplateColumns: "1fr" }
    }

    return (
        <div style={containerStyle} className={styles.container}>
            {props.children}
        </div>
    )
}
