import styles from "./ProfilePic.module.css"

export default function ProfilePic(props) {
    // const style = {
    //     width: props.width,
    //     height: props.height,
    //     '@media (max-width: 768px)': {
    //         width: props.mediaWidth ? props.mediaWidth : props.width,
    //         height: props.mediaHeight ? props.mediaHeight : props.height
    //     },
    // };
    return (
        <div >
            <img
                style={{ width: props.width, height: props.height }}
                className={styles.container}
                src={props.src}
                alt={props.alt} />
        </div>
    )
}
