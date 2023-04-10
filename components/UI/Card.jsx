import React, { useState } from 'react'
import styles from "./Card.module.css"
import ProfilePic from "../UI/ProfilePic"

export default function Card(props) {
    const id = props.id;
    const [selected, setSelected] = useState(false);

    function selectHandler(e) {
        const checked = e.target.checked;
        props.onSelect(e, checked);
        setSelected(checked);
    }

    let className = `${styles.container}`;
    if (selected) {
        className = `${styles.container} ${styles.selected}`
    }



    if (props.type === 'checkbox') {
        return (
            <label style={{ cursor: 'pointer' }} className={className} htmlFor={id} >
                <div className={styles.container1}>
                    <ProfilePic
                        width="35px"
                        height="35px"
                        src="https://codedamn.com/assets/images/blacklogo.jpg"
                        alt="logo"
                    />
                    <span >
                        <input
                            style={{ visibility: "hidden", width: "1px", height: "1px" }}
                            onChange={selectHandler}
                            type="checkbox"
                            id={id}
                        />
                    </span>
                </div>
                <div className={styles.container2}>
                    <div className={`${styles.boldFont} ${styles.bigFont} `}>{props.title.length > 25 ? props.title.slice(0, 22) + "..." : props.title}</div>
                    <div style={{ width: '100%', marginBottom: '2rem' }} className={`${styles.colFlexBtw}`}>
                        <div className={`${styles.lightFont} ${styles.smallFont}`}>
                            <span>{props.location > 15 ? props.location.slice(0, 12) + "..." : props.location}</span>
                            <span> . </span>
                            <span>{props.title2.length > 15 ? props.title.slice(0, 12) + "..." : props.title2}</span>
                        </div>
                        <div className={`${styles.boldFont} ${styles.smallFont}`}>
                            {`${props.startDate} - ${props.curr ? 'Present' : props.endDate}`}
                        </div>
                    </div>
                    <div style={{ width: '100%' }} className={`${styles.lightFont}`}>
                        {props.about.length > 50 ? props.about.slice(0, 47) + "..." : props.about}

                    </div>

                </div>

            </label>
        )
    } else if (props.type === 'static') {
        return (
            <div className={className} id={id} >
                <div className={styles.container1}>
                    <ProfilePic
                        width="35px"
                        height="35px"
                        src="https://codedamn.com/assets/images/blacklogo.jpg"
                        alt="logo"
                    />

                </div>
                <div className={styles.container2}>
                    <div className={`${styles.boldFont} ${styles.bigFont} `}>{props.title.length > 25 ? props.title.slice(0, 22) + "..." : props.title}</div>
                    <div style={{ width: '100%', marginBottom: '2rem' }} className={`${styles.colFlexBtw}`}>
                        <div className={`${styles.lightFont} ${styles.smallFont}`}>
                            <span>{props.location > 15 ? props.location.slice(0, 13) + "..." : props.location}</span>
                            <span> . </span>
                            <span>{props.title2.length > 15 ? props.title.slice(0, 13) + "..." : props.title2}</span>
                        </div>
                        <div className={`${styles.boldFont} ${styles.smallFont}`}>
                            {`${props.startDate} - ${props.curr ? 'Present' : props.endDate}`}
                        </div>
                    </div>
                    <div style={{ width: '100%' }} className={`${styles.lightFont}`}>
                        {props.about.length > 50 ? props.about.slice(0, 47) + "..." : props.about}

                    </div>

                </div>

            </div>
        )
    }



}
