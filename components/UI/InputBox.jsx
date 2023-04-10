import React from 'react'
import styles from './InputBox.module.css'

export default function InputBox(props) {
    const fallBackID = new Date().toISOString();
    function changeHandler(e) {
        props.onChange(e);
    }

    function dropDownItems(item, i) {
        return (
            <option id={i} value={item}>{item}</option>
        )
    }

    if (props.type === "textarea") {
        return (
            <div className={styles.inputBox}>
                <label htmlFor={`inputBox_${props.id ? props.id : fallBackID}`} className={styles.inputBoxLabel} >{props.label}</label>
                <textarea rows={4}
                    onChange={changeHandler}
                    type={props.type}
                    value={props.value}
                    className={styles.input}
                    placeholder={props.placeholder}
                    id={`inputBox_${props.id ? props.id : fallBackID}`}
                    autoFocus={props.autoFocus}
                    required={props.required}
                />

                {(props.isValid || props.isValid === null) && <p className={styles.caption} >{props.caption}</p>}
                {(!props.isValid && props.isValid !== null) && <p className={styles.error}>{props.errorMessage}</p>}
            </div>
        );
    } else if (props.type === "dropdown") {
        return (
            <div className={styles.inputBox}>
                <label htmlFor={`inputBox_${props.id ? props.id : fallBackID}`} className={styles.inputBoxLabel} >{props.label}</label>
                <select
                    onChange={changeHandler}
                    placeholder='Whats your gender'
                    className={styles.input}
                    id={`inputBox_${props.id ? props.id : fallBackID}`}
                    required={props.required}
                    value={props.value}
                >
                    {props.items.map(dropDownItems)}
                </select>

                {(props.isValid || props.isValid === null) && <p className={styles.caption} >{props.caption}</p>}
                {((!props.isValid && props.isValid !== null)) && <p className={styles.error}>{props.errorMessage}</p>}
            </div>
        )

    } else {
        return (
            <div className={styles.inputBox}>
                <label htmlFor={`inputBox_${props.id ? props.id : fallBackID}`} className={styles.inputBoxLabel} >{props.label}</label>
                <input
                    onChange={changeHandler}
                    type={props.type}
                    value={props.value}
                    className={styles.input}
                    placeholder={props.placeholder}
                    id={`inputBox_${props.id ? props.id : fallBackID}`}
                    autoFocus={props.autoFocus}
                    required={props.required}
                />

                {(props.isValid || props.isValid === null) && <p className={styles.caption} >{props.caption}</p>}
                {(!props.isValid && props.isValid !== null) && <p className={styles.error}>{props.errorMessage}</p>}
            </div>
        )
    }

}
