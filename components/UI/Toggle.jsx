import React from 'react'
import styles from './Toggle.module.css'

export default function Toggle(props) {
    const backupId = new Date().toISOString();

    return (
        <div className={styles.container}>
            <div className={styles.container1}>
                <div class={styles.title2}>{props.title}</div>
                <div class={styles.desc2}>{props.description}</div>
            </div>
            <div className={styles.container2}>
                <label className={styles.switch} >
                    <input
                        type="checkbox"
                        name=""
                        id={props.id ? props.id : backupId}
                        onChange={props.onChange}
                        checked={props.checked}
                    />
                    <span className={`${styles.slider}`}></span>
                </label>
            </div>
        </div>
    )
}
