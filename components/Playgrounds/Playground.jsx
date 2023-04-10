import React, { useState } from 'react'
import styles from "./Playground.module.css"
import ProfilePic from "../UI/ProfilePic"

function renderContributors(list) {

    let text = "Shared with ";
    let currLen = 0;
    let maxLen = 10;
    let count = 0;
    for (let c of list) {
        let len = c.name.length + currLen;
        if (len < maxLen) {
            if (count === 0) {
                text = text + c.name;
            } else {
                text = text + ", " + c.name;
            }
            count++;
        } else {
            text = text + `... + ${list.length - count} others`
        }
    }
    console.log(text)
    return text;
}

export default function Playground(props) {


    function renderDate(date) {
        return "1 min ago"
    }

    // const contributors = renderContributors(props.data.contributers);
    const contributors = "Shared with Adam, Anna.. +7 more"


    const id = "PLAYGROUND_" + props.id;
    const [selected, setSelected] = useState(false);

    function selectHandler(e) {
        const checked = e.target.checked;
        props.onClick(e, checked);
        setSelected(checked);
    }

    let className = `${styles.container}`;
    if (selected) {
        className = `${styles.container} ${styles.selected}`
    }

    if (props.type === 'checkbox') {
        return (
            <label className={className} htmlFor={id}>
                <div className={styles.logo}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png" alt="Project Image" />
                </div>
                <div className={styles.container2}>
                    <div className={styles.title} >
                        <span>{props.data.title}</span>
                        <span>
                            <input
                                style={{ visibility: "hidden" }}
                                onChange={selectHandler}
                                type="checkbox"
                                id={id}
                            />
                        </span>
                    </div>
                    <div className={styles.container3}>
                        <span>{props.data.languages[0]}</span>
                        <span className={styles.dot}>.</span>
                        <span>{renderDate(props.data.date)}</span>
                    </div>
                    <div className={styles.profileContainer}>
                        <div className={styles.profiles}>
                            <span>
                                <ProfilePic
                                    width="24px"
                                    height="24px"
                                    src={props.data.contributers[0].imageURL}
                                    alt="Profile picture"
                                />
                            </span>
                            <span style={{ position: "absolute", left: "17px" }}>
                                <ProfilePic
                                    width="24px"
                                    height="24px"
                                    src={props.data.contributers[1].imageURL}
                                    alt="Profile picture"
                                />
                            </span>
                        </div>
                        <div className={styles.lightfont}>{contributors}</div>
                    </div>
                </div>
            </label >
        )
    } else if (props.type === 'static') {
        return (
            <div className={className}>
                <div className={styles.logo}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png" alt="Project Image" />
                </div>
                <div className={styles.container2}>
                    <div className={styles.title} >
                        <span>{props.data.title}</span>
                        <span>
                        </span>
                    </div>
                    <div className={styles.container3}>
                        <span>{props.data.languages[0]}</span>
                        <span className={styles.dot}>.</span>
                        <span>{renderDate(props.data.date)}</span>
                    </div>
                    <div className={styles.profileContainer}>
                        <div className={styles.profiles}>
                            <span>
                                <ProfilePic
                                    width="24px"
                                    height="24px"
                                    src={props.data.contributers[0].imageURL}
                                    alt="Profile picture"
                                />
                            </span>
                            <span style={{ position: "absolute", left: "17px" }}>
                                <ProfilePic
                                    width="24px"
                                    height="24px"
                                    src={props.data.contributers[1].imageURL}
                                    alt="Profile picture"
                                />
                            </span>
                        </div>
                        <div className={styles.lightfont}>{contributors}</div>
                    </div>
                </div>
            </div >
        );
    }


}
