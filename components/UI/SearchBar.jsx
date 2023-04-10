import { useState, useEffect } from 'react'
import styles from './SearchBar.module.css'
import { Search } from '../svgs/index'

export function SearchBox(props) {
    const [searchValue, setSearchValue] = useState("")
    const [dropDownValue, setDropDownValue] = useState(props.items[0] ? props.items[0] : "")

    function searchHandler(e) {
        e.preventDefault();
        console.log(searchValue);
        console.log(dropDownValue);
        setSearchValue("")
        setDropDownValue(props.items[0])
    }

    function onChangeSearchValue(e) {
        setSearchValue(e.target.value);
    }

    function onChangedropdownValue(e) {
        setDropDownValue(e.target.value);
    }

    // useEffect(() => {
    //     let timer;

    //     if (changeHandler) {
    //         timer = setTimeout(() => {
    //             const value = changeHandler.target.value;
    //             setSearchValue(value);
    //         }, 400)

    //     }

    //     return () => {
    //         clearTimeout(timer)
    //     }
    // },
    //     [changeHandler, setSearchValue])

    function dropDownItems(item, i) {
        return (
            <option id={i} value={item}>{item}</option>
        )
    }

    return (
        <div className={styles.searchBox}>
            <button onClick={searchHandler} style={{ all: "unset" }}>
                <Search style={{ width: "24px", height: "24px", marginTop: "6px" }} />
            </button>
            <div>
                <input
                    style={{ border: "1px solid #fff" }}
                    type="text"
                    class={styles.searchInput}
                    onInput={onChangeSearchValue}
                    placeholder="Search"
                    value={searchValue}
                />
            </div>
            <div>
                <select
                    class={styles.dropdown}
                    name="dropdown"
                    onChange={onChangedropdownValue}
                    value={dropDownValue}
                >
                    {props.items.map(dropDownItems)}
                </select>
            </div>
        </div>);
}




export default function SearchBar(props) {
    const dropDownItems = ["Courses", "Blogs", "Discussions", "People", "Events"];
    const [showSearch, setShowSearch] = useState(false);

    function mobileSearchHandler(e) {
        e.preventDefault();
        props.setShowMobileSearch(prevState => !prevState)
        // setShowSearch(prevState => !prevState);

    }

    return (
        <div>
            <div className={styles.container}>
                <SearchBox items={dropDownItems} />
            </div>
            <div className={styles.mobileContainer}>
                <button onClick={mobileSearchHandler} className={styles.mobileSearchContainer}>
                    <Search style={{ width: "24px", height: "24px" }} />
                </button>
                {/* <div className={styles.mobileSearchBox}>
                    {showSearch && <SearchBox items={dropDownItems} />}
                </div> */}
            </div>
        </div>
    )
}
