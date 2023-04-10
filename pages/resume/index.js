import React from 'react'
import { useSelector } from 'react-redux';
import Link from 'next/link'
import Dashboard from '../../components/Dashboard/Dashboard'
import styles from "../../styles/resume.module.css";
import GridLayout from "../../components/UI/GridLayout"
import Card from "../../components/UI/Card"
import Badge from "../../components/UI/Badge"


export default function Resume() {
  const aboutMe = useSelector(state => state.profile.profile.about);
  const resume = useSelector(state => state.resume);
  const wxData = resume.workExperience;
  const eduData = resume.education;
  const skills  = resume.skills;

  function renderWx(data) {
    const id = "WX_" + data.id;
    return <Card
        type={"static"}
        id={id}
        key={id}
        title={data.title.value}
        location={data.location.value}
        title2={data.title2.value}
        startDate={data.startDate.value}
        curr={data.curr}
        endDate={data.endDate.value}
        about={data.about.value}
    />
}
function renderEdu(data) {
  const id = "EDU_" + data.id;
  return <Card
      type={"static"}
      id={id}
      key={id}
      title={data.title.value}
      location={data.location.value}
      title2={data.title2.value}
      startDate={data.startDate.value}
      curr={data.curr}
      endDate={data.endDate.value}
      about={data.about.value}
  />
}

function renderSkills(data, i) {
  return <Badge 
            id={i}
            backgroundColor= "#FAFAFA"
            color="#000000"
            text={data}
            fontSize="1rem"
        /> 
}
  return (
    <Dashboard activeLink="/resume">
        {aboutMe.isValid && <div className={styles.container}>
          <div style={{marginBottom: "1rem"}} className={`${styles.boldFont} ${styles.colFlexBtw}`}>
              <span>About me</span>
              <span className={`${styles.lightFont}`}><Link href="/profile">Edit</Link></span>
          </div>
          <div className={styles.aboutMe}>
                {aboutMe.value}
          </div>
        </div>}

        <div style={{width: '100%', margin: '20px auto'}}>
          <div className={styles.header}>
                <div className={`${styles.header1} ${styles.colFlexBtw}`}>
                    <span>Work Experience</span>
                    <span className={styles.lightFont}><Link href="/resume/edit">Edit</Link></span>
                </div>

            </div>

          <div className={styles.lightfont} >{wxData.length === 0 && "No Data"}</div>
            <GridLayout columnSize="1fr">
                    {wxData.map(renderWx)}

            </GridLayout>
         </div>

         <div style={{width: '100%', margin: '20px auto'}}>
          <div className={styles.header}>
                <div className={`${styles.header1} ${styles.colFlexBtw}`}>
                    <span>Education</span>
                    <span className={styles.lightFont}><Link href="/resume/edit">Edit</Link></span>
                </div>

            </div>

          <div className={styles.lightfont} >{eduData.length === 0 && "No Data"}</div>
            <GridLayout columnSize="1fr">
                    {eduData.map(renderEdu)}

            </GridLayout>
         </div>

          <div style={{width: '100%', margin: '20px auto'}}>
          <div className={styles.header}>
                <div className={`${styles.header1} ${styles.colFlexBtw}`}>
                    <span>Skills</span>
                    {/* <span className={styles.lightFont}><Link href="/resume/edit">Edit</Link></span> */}
                </div>

            </div>
            <div className={styles.lightfont} >{skills.length === 0 && "No Data"}</div>
              <div className={styles.skills}>
                  {skills.map(renderSkills)}
              </div>
          </div>
    </Dashboard>
  )
}
