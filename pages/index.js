import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

import styles from "../styles/Home.module.css"

import Dashboard from '../components/Dashboard/Dashboard'
import GridLayout from '../components/UI/GridLayout'
import StatsComponent from '../components/UI/StatsComponent.jsx'

import Project from "../components/Projects/Project"
import Playground from "../components/Playgrounds/Playground"



export default function Home() {
  const stats = [
    {title: "2", description: "Longest streak", type: "streaks"},
    {title: "1200", description: "Experience points", type: "xp"},
    {title: "Novice", description: "Current Page", type: "achievements"},
    {title: "120", description: "Karma points", type: "karma"},
  ];
  const portfolio = useSelector(state => state.portfolio.portfolio);
  const settings = useSelector(state => state.profile.profile);
  const playgrounds = portfolio.PLAYGROUNDS;
  const projects = portfolio.PROJECTS;

  function checkStats(type, settings){
    const s = settings[type];
    if(s){
      if(s.show) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  
  }

  function renderStats(stat, i) {
    if(checkStats(stat.type, settings)) {
      return <StatsComponent key={i} id={i} title={stat.title} description={stat.description}/>
    }
  }

  function renderPlaygrounds(data) {
      return <Playground
      data={data}
      type="static"
      onClick={null}
      id={data.id}
      key={data.id}
      />
}

function renderProjects(data) {
  return <Project
      data={data}
      type="static"
      id={data.id}
      key={data.id}
  />
}


  return (
    <Dashboard activeLink="/">
        <div className={styles.container}>
          <div className={styles.boldFont}>Stats</div>
          <GridLayout columnSize="270px" >
              {stats.map(renderStats)}
          </GridLayout>
        </div>

        <div className={styles.container}>
          <div style={{marginBottom: "1rem"}} className={`${styles.boldFont} ${styles.colFlexBtw}`}>
            <span>Playgrounds</span>
            <span className={`${styles.lightFont}`}><Link href="/portfolio">Edit</Link></span>
          </div>
          <GridLayout columnSize="310px" >
              {playgrounds.map(renderPlaygrounds)}
          </GridLayout>
        </div>

        <div className={styles.container}>
          <div style={{marginBottom: "1rem"}} className={`${styles.boldFont} ${styles.colFlexBtw}`}>
            <span>Projects</span>
            <span className={`${styles.lightFont}`}><Link href="/portfolio">Edit</Link></span>
          </div>
          <GridLayout columnSize="310px" >
              {projects.map(renderProjects)}
          </GridLayout>
        </div>

    </Dashboard>
  )
}
