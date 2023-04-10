import React, { useState } from 'react'
import styles from './ProjectsLayout.module.css'
import Link from "next/link"
import GridLayout from "../UI/GridLayout.jsx"
import { Add, Trashbin } from "../svgs/index"
import { useDispatch, useSelector } from 'react-redux'

import Project from "./Project.jsx"
import { portfolioActions } from "../../store/portfolio";


export default function ProjectsLayout() {
    const portfolioData = useSelector(state => state.portfolio.portfolio.PROJECTS);
    const dispatch = useDispatch();

    const [deleteItems, setDeleteItems] = useState([]);

    function removeItem(id) {
        return deleteItems.filter(i => i !== id);
    }

    function clickHandler(e, selected) {
        const id = e.target.id.split('_')[1];

        if (selected) {
            setDeleteItems(state => [...state, id]);
        } else {
            const data = removeItem(id)
            setDeleteItems(data)
        }

    }


    function deleteHandler() {
        const confirm = window.confirm("Are you sure you want to delete this project?");
        function matchId(id, array) {
            for (let a of array) {
                if (id === a) return true;
            }
            return false;
        }

        function removeItem(arr, deleteItems) {
            let updateArray = [];

            for (let i = 0; i < arr.length; i++) {
                let check = matchId(arr[i].id, deleteItems);
                if (!check) {
                    updateArray.push(arr[i]);
                }
            }

            return updateArray;
        }

        if (confirm) {
            const updatedData = removeItem(portfolioData, deleteItems);
            dispatch(portfolioActions.updatePortfolioProjects(updatedData));
            setDeleteItems([]);
            // console.log(updatedData);
        }
    }

    function renderData(data) {
        return <Project
            data={data}
            type="checkbox"
            onClick={clickHandler}
            id={data.id}
            key={data.id}
        />
    }




    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.header1}>
                    <span>Projects</span>
                    {/* <button className={styles.button}><Add /></button> */}
                    {deleteItems.length > 0 && <button className={styles.button} onClick={deleteHandler}><Trashbin /></button>}
                </div>
                <div className={styles.header2}>
                    <span >{portfolioData.length > 0 && <Link href="#">See all</Link>}</span>
                </div>

            </div>
            <div className={styles.lightfont} >{portfolioData.length === 0 && "No Projects"}</div>
            <GridLayout columnSize="310px">
                {portfolioData.map(renderData)}
            </GridLayout>
        </div>
    )
}
