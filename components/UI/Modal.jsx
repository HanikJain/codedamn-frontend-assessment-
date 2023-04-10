import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import classes from "./Modal.module.css"

export function Backdrop(props) {
    return (
        <div className={classes.backdrop} >
            {props.children}
        </div>
    );
}

export function ModalOverlay(props) {

    return (
        <div className={classes.modal} >
            <div className={classes.content} >
                {props.children}
            </div>
        </div>
    );
}

const Modal = (props) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        props.onClose();
    };

    const modalContent1 = props.show ? (
        <Backdrop>
            <ModalOverlay>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        fontSize: "25px"
                    }}>
                    <a href="#" onClick={handleCloseClick}>
                        x
                    </a>
                </div>
                {props.children}
            </ModalOverlay>
        </Backdrop>
    ) : null;



    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent1,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
};




export default Modal;
