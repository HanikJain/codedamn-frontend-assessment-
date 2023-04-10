import Link from 'next/link'


export default function MyLink(props) {
    const style = {
        // backgroundColor: props.backgroundColor ? props.backgroundColor : "#fff",
        border: "1px solid #F4F4F5",
        // color: props.color ? props.color : "#000",
        padding: "5px",
        borderRadius: "10px"
    }

    return (
        <div style={style} >
            <Link href={props.href}>
                {props.img && <div >
                    <img style={{ width: "30px", height: "30px" }} src={props.img} alt="Link image" />
                </div>}

                {props.text && <div>{props.text}</div>}
            </Link>

        </div>
    )
}
