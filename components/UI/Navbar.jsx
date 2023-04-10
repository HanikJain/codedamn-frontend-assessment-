import { useState } from "react"
import { useSelector } from "react-redux";

import styles from './Navbar.module.css'
import SearchBar from './SearchBar'
import ProfilePic from './ProfilePic'
import { ThunderBolt, Bell } from '../svgs/index'
import { SearchBox } from './SearchBar'
import Link from "next/link"

export default function Navbar() {
    const image = useSelector(state => state.profile.image)
    const dropDownItems = ["Courses", "Blogs", "Discussions", "People", "Events"];
    const [showMobileSearch, setShowMobileSearch] = useState(false);

    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.title}>
                    <Link href="/"> Codedamn </Link>
                </div>
                <div className={styles.navbarItems}>
                    <div>
                        <SearchBar setShowMobileSearch={setShowMobileSearch} />
                    </div>
                    <div className={styles.dflex}>
                        <ThunderBolt style={{ fill: "#6366F1", width: "24px", height: "24px" }} />
                        <span>2</span>
                    </div>
                    <div className={styles.dflex}>
                        <Bell style={{ width: "24px", height: "24px" }} />
                    </div>
                    <div>
                        <ProfilePic
                            src={image.value}
                            alt="Profile Picture"
                            width="32px"
                            height="32px"
                        />
                    </div>
                </div>
            </nav>
            <div className={styles.searchContainerstyles}>
                {showMobileSearch && <SearchBox items={dropDownItems} />}
            </div>

        </div >
    )
}
