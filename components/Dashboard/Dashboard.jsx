import React from 'react'
import styles from './Dashboard.module.css'

import PersonalDashboard from './PersonalDashboard'
import NavigationBar from '../../components/UI/NavigationBar';

const navigationItems = [
    { name: "Portfolio", url: "/" },
    { name: "Resume", url: "/resume" }
]

export default function Dashboard(props) {
    const activeURL = props.activeLink
    return (
        <div className={styles.container}>
            <PersonalDashboard />
            <NavigationBar navigationItems={navigationItems} activeURL={activeURL} />
            <div className={styles.heroContainer}>
                {props.children}
            </div>
        </div>
    )
}
