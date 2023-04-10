import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styles from "./Skills.module.css"
import Badge from '../UI/Badge';

import { Add, Trashbin } from "../svgs/index";

export default function Skills() {
  const skillsData = useSelector(state => state.resume.skills);
  const [deleteItems, setDeleteItems] = useState(0);

  function deleteHandler() {

  }


  function renderData(data, i) {
    return <Badge
      id={i}
      backgroundColor="#FAFAFA"
      color="#000000"
      text={data}
      fontSize="1rem"
    />
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header1}>
          <span>Skills</span>
          {/* <button className={styles.button} onClick={addHandler}><Add /></button> */}
          {deleteItems.length > 0 && <button className={styles.button} onClick={deleteHandler}><Trashbin /></button>}
        </div>

      </div>

      <div className={styles.lightfont} >{skillsData.length === 0 && "No Data"}</div>
      <div className={styles.skills}>
        {skillsData.map(renderData)}
      </div>


    </div>
  )
}
