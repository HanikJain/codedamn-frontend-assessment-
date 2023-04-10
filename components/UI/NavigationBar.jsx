import React from 'react'
import Link from 'next/link'

import styles from "./NavigationBar.module.css"


export default function NavigationBar(props) {
    const { navigationItems, activeURL } = props

    function renderList(item, i) {
        let className = `${styles.navigationLink}`
        if (item.url === activeURL) {
            className = `${styles.navigationLink} ${styles.active}`
        }

        return (
            <li key={i}>
                <Link href={item.url} className={className} key={i}>
                    <span>{item.name} </span>
                </Link>
            </li>
        );
    }
    return (
        <ul className={styles.container}>
            {navigationItems.map(renderList)}
        </ul>
    )
}
