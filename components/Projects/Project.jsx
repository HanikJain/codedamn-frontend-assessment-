import React, { useState } from 'react'
import styles from "./Project.module.css"
import ProfilePic from "../UI/ProfilePic"
import Badge from "../UI/Badge"

export default function Project(props) {
    const imageStyle = {
        backgroundImage: `url(${props.data.coverImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    function renderDate(date) {
        return "1 min ago"
    }

    const contributors = `${props.data.contributers.length} contributors`

    const id = "PROJECT_" + props.id;
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

    function renderBadge(badge, i) {
        return <Badge
            id={i}
            key={i}
            text={badge}
            backgroundColor="#BAE6FD"
            color="#0C4A6E"
        />
    }



    if (props.type === "checkbox") {
        return (
            <label className={className} htmlFor={id}>
                <div style={imageStyle} className={styles.container1} >
                    <div>
                        <input
                            style={{ visibility: "hidden" }}
                            onChange={selectHandler}
                            type="checkbox"
                            id={id}
                        />
                    </div>
                    <div className={styles.badgesConatiner}>
                        {props.data.badges.map(renderBadge)}
                    </div>
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
            </label>
        )
    } else if (props.type === "static") {
        return (
            <div className={className}>
                <div style={imageStyle} className={styles.container1} >
                    <div>
                    </div>
                    <div className={styles.badgesConatiner}>
                        {props.data.badges.map(renderBadge)}
                    </div>
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
            </div>
        )
    }
}
