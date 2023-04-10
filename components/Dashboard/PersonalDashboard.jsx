import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './PersonalDashboard.module.css'
import ProfilePic from '../UI/ProfilePic'
import Badge from '../UI/Badge'
import Link from "next/link"
import MyLink from '../UI/MyLink'

export default function PersonalDashboard() {
    const imageURL = useSelector(state => state.profile.image.value);
    const name = useSelector(state => state.profile.profile.name.value);
    const skills = useSelector(state => state.resume.skills);
    const socials = useSelector(state => state.socials.socials)

    const coverImage = "https://marketplace.canva.com/EAE6i81Zo60/1/0/1600w/canva-blue-minimalist-linktree-background-4jrZHAehe7I.jpg"
    const imageStyle = {
        backgroundImage: `url(${coverImage})`,
    }

    function renderSkills(skill, i) {
        return <Badge
            text={skill}
            backgroundColor="#F4F4F5"
            color="#18181B"
            id={i}
        />
    }

    return (
        <div className={styles.container}>
            <div style={imageStyle} className={styles.container1} >

            </div>
            <div className={styles.container2} >
                <div className={styles.container3} >
                    <div className={styles.logo} >
                        <ProfilePic
                            width="100px"
                            height="100px"
                            src={imageURL}
                            alt="Profile Pic"
                        />
                    </div>
                </div>
                <div className={styles.container4} >
                    <div className={styles.container5} >
                        <div style={{ flexWrap: "wrap", rowGap: "0.3rem" }} className={`${styles.colFlex} ${styles.boldFont}`}>
                            <div>
                                <span>{name}</span>
                            </div>

                            <div className={styles.badgeContainer} >
                                <span>
                                    <Badge
                                        text="PRO"
                                        backgroundColor="#BEF264"
                                        color="#18181B"
                                        id="1"
                                    />
                                </span>

                                <span>
                                    <Badge
                                        text="Looking for job"
                                        backgroundColor="#E0F2FE"
                                        color="#075985;"
                                        id="2"
                                    />
                                </span>

                            </div>

                        </div>
                        <div className={`${styles.rowFlex} ${styles.lightFont}`}>
                            <span>Full stack Developer</span>
                            <span> | </span>
                            <span>Harvard'22"</span>
                        </div>
                        <div className={`${styles.rowFlex} ${styles.lightFont}`}>
                            Mumbai, India
                        </div>
                    </div>
                    <div style={{ flexWrap: "wrap", rowGap: "0.5rem" }} className={`${styles.rowFlex}`}>
                        {skills.map(renderSkills)}
                    </div>
                    <div className={styles.line}></div>
                    <div style={{ width: "100%" }} className={styles.colFlexBtw}>
                        <div className={`${styles.rowFlex} `}>
                            {!socials.github.isEmpty &&
                                <MyLink href={socials.github.url}
                                    img="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png"
                                />}

                            {!socials.linkedIn.isEmpty &&
                                <MyLink href={socials.linkedIn.url}
                                    img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                                />}

                            {!socials.facebook.isEmpty &&
                                <MyLink href={socials.facebook.url}
                                    img="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png"
                                />}

                            {!socials.instagram.isEmpty &&
                                <MyLink href={socials.instagram.url}
                                    img="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=2000"
                                />}

                            {!socials.dribble.isEmpty &&
                                <MyLink href={socials.dribble.url}
                                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_kHiU2ZG4Jxrbvpj1pTNlKslXtZEUHHYpwhDvDx8Ll5cRfS90DAM4TjiVCXZ7fZuVtw&usqp=CAU"
                                />}

                            {!socials.behance.isEmpty &&
                                <MyLink href={socials.behance.url}
                                    img="https://cdn-icons-png.flaticon.com/512/145/145799.png"
                                />}

                        </div>
                        <div>
                            <MyLink backgroundColor="#4F46E5;" color="#ffffff" href={"/profile"} img="" text="Edit" />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
