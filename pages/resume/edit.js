import React, {useState, useReducer} from 'react'
import { useDispatch, useSelector } from "react-redux";
import styles from '../../styles/resumeEdit.module.css'



import NavigationTab from '../../components/UI/NavigationTab.jsx'
import MyButton from '../../components/UI/MyButton.jsx'
import InputBox from '../../components/UI/InputBox';
import NavigationBar from '../../components/UI/NavigationBar';
import WorkExperience from "../../components/Resume/WorkExperience.jsx";
import Education from "../../components/Resume/Education.jsx";
import Skills from "../../components/Resume/Skills.jsx";



import {resumeActions} from "../../store/resume"

const activeURL = "/resume/edit"
const navigationItems = [
    { name: "Profile", url: "/profile" },
    { name: "Socials", url: "/socials" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Resume", url: "/resume/edit" }
]


export default function editResume() {
  return (
    <div className={styles.container}>
        <div className={styles.navigationTabContainer}> 
            <NavigationTab navigationItems={navigationItems} activeURL={activeURL} />
        </div>

        <div class={styles.container2}>  
          <div class={styles.navigationBarContainer}> 
              <NavigationBar navigationItems={navigationItems} activeURL={activeURL} />
          </div>
          <WorkExperience />
          <Education />
          <Skills />
        </div>
    </div>
  );
}



