import styles from '../styles/portfolio.module.css'

import PlaygroundsLayout from '../components/Playgrounds/PlaygroundsLayout.jsx'
import ProjectsLayout from '../components/Projects/ProjectsLayout.jsx'

import NavigationTab from '../components/UI/NavigationTab.jsx'
import NavigationBar from '../components/UI/NavigationBar';


const activeURL = "/portfolio"
const navigationItems = [
    { name: "Profile", url: "/profile" },
    { name: "Socials", url: "/socials" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Resume", url: "/resume/edit" }
]

export default function Portfolio() {
  return (
    <div className={styles.container}>
    <div className={styles.navigationTabContainer}> 
        <NavigationTab navigationItems={navigationItems} activeURL={activeURL} />
    </div>
    <div className={styles.container2}>
          <div class={styles.navigationBarContainer}> 
              <NavigationBar navigationItems={navigationItems} activeURL={activeURL} />
          </div>
          <div style={{width: '100%', height:'auto'}}>
            <PlaygroundsLayout/>
          </div>
          <div style={{width: '100%', height:'auto'}}>
            <ProjectsLayout/>
          </div>

    </div>
    </div>
  )
}
