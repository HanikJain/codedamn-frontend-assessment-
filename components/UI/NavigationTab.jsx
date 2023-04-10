import React from 'react'
import styles from "./NavigationTab.module.css"
import Link from 'next/link'
import { Chrome } from "../svgs/index"

export default function NavigationTab(props) {
    const { navigationItems, activeURL } = props

    function renderList(item, i) {
        let className = `${styles.navigationLink}`
        if (item.url === activeURL) {
            className = `${styles.navigationLink} ${styles.active}`
        }

        return (
            <li key={i}>
                <Link href={item.url} className={className} key={i}>
                    <span><Chrome /></span>
                    <span>{item.name} </span>
                </Link>
            </li>
        );
    }

    return (
        <ul className={styles.navigationTab}>

            {navigationItems.map(renderList)}

        </ul>
    )
}
