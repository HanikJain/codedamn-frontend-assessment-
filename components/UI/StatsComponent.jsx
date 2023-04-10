import styles from "./StatsComponent.module.css"
import { ThunderBolt } from '../svgs/index'

export default function StatsComponent(props) {
    return (
        <div id={props.id} className={`${styles.colFlex} ${styles.statsContainer}`}>
            <div style={{ width: '15%' }}>
                <ThunderBolt style={{ width: '32px', height: "32px" }} />
            </div>
            <div style={{ width: '85%' }} className={styles.statsFlex}>
                <div className={styles.boldFont}>{props.title}</div>
                <div className={styles.lightFont}>{props.description}</div>
            </div>
        </div>
    );
}