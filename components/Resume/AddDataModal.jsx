import React, { useState } from 'react'
import styles from "./AddDataModal.module.css"
import InputBox from '../UI/InputBox'
import MyButton from '../UI/MyButton'


export default function AddDataModal(props) {
    let id = "WX_"
    let header = {
        title: {
            name: "What was your role",
            caption: "",
            error: "Invalid role"
        },
        title2: {
            name: "Company name",
            caption: "",
            error: "Invaid company name"
        }
    }

    if (props.type === "EDU") {
        header = {
            title: {
                name: "University name",
                caption: "",
                error: "Invalid name"
            },
            title2: {
                name: "Course name",
                caption: "",
                error: "Invaid course name"
            }
        }
        id = "EDU_";
    }



    const [title, setTitle] = useState({ value: "", isValid: false });
    const [location, setLocation] = useState({ value: "", isValid: true });
    const [title2, setTitle2] = useState({ value: "", isValid: true });
    const [startDate, setStartDate] = useState({ value: "", isValid: true });
    const [curr, setCurr] = useState(false);
    const [endDate, setEndDate] = useState({ value: "", isValid: true });
    const [about, setAbout] = useState({ value: "", isValid: true });




    function titleChangeHandler(e) {
        const value = e.target.value;
        if (value.trim() === "") {
            setTitle({ value, isValid: false });
        } else {
            setTitle({ value, isValid: true });
        }
    }

    function locationChangeHandler(e) {
        const value = e.target.value;
        setLocation({ value, isValid: true })
    }

    function title2ChangeHandler(e) {
        const value = e.target.value;
        setTitle2({ value, isValid: true })
    }

    function startDateChangeHandler(e) {
        const value = e.target.value;
        setStartDate({ value, isValid: true })
    }
    function checkBoxHandler(e) {
        const checked = e.target.checked;
        setCurr(checked);
    }
    function endDateChangeHandler(e) {
        const value = e.target.value;
        setEndDate({ value, isValid: true })
    }
    function aboutHandler(e) {
        const value = e.target.value;
        setAbout({ value, isValid: true })
    }

    function saveHandler(e) {
        if (title.isValid) {
            const data = {
                title,
                location,
                title2,
                startDate,
                curr,
                endDate,
                about
            }

            props.onSave(data);
        } else {
            window.confirm("Not saved,  Invalid input")
        }
    }

    return (
        <div className={styles.container}>
            <InputBox
                onChange={titleChangeHandler}
                label={header.title.name}
                type="text"
                placeholder={header.title.name}
                caption={header.title.caption}
                errorMessage={header.title.error}
                isValid={title.isValid}
                id={id + "1"}
                autoFocus={false}
                required={true}
            />

            <InputBox
                onChange={locationChangeHandler}
                label={"Location"}
                type="text"
                placeholder={"London"}
                caption={""}
                errorMessage={"Invalid location"}
                isValid={location.isValid}
                id={id + "2"}
                autoFocus={false}
                required={false}
            />
            <InputBox
                onChange={title2ChangeHandler}
                label={header.title2.name}
                type="text"
                placeholder={header.title2.name}
                caption={header.title2.caption}
                errorMessage={header.title2.error}
                isValid={title2.isValid}
                id={id + "3"}
                autoFocus={false}
                required={false}
            />

            <InputBox
                onChange={startDateChangeHandler}
                label={"Start Date"}
                type="date"
                caption={""}
                errorMessage={"Invalid date"}
                isValid={startDate.isValid}
                id={id + "4"}
                autoFocus={false}
                required={false}
            />

            <label htmlFor={id + "5"} style={{ padding: "0 1rem" }}>
                <input style={{ cursor: "pointer" }} type="checkbox" onChange={checkBoxHandler} id={id + "5"} />
                {props.type === "EDU" ? "Still studing" : "Still working"}
            </label>

            {!curr && <InputBox
                onChange={endDateChangeHandler}
                label={"End Date"}
                type="date"
                caption={""}
                errorMessage={"Invalid date"}
                isValid={endDate.isValid}
                id={id + "6"}
                autoFocus={false}
                required={false}
            />}

            <InputBox
                onChange={aboutHandler}
                label={"About"}
                type="textarea"
                caption={""}
                errorMessage={"Invalid"}
                isValid={about.isValid}
                id={id + "7"}
                autoFocus={false}
                required={false}
            />

            <MyButton
                style={{ backgroundColor: "#4F46E5", color: "#FFFFFF", border: "1px solid #4F46E5", marginLeft: "16px" }}
                onClick={saveHandler}
                text={"Save"}

            />

        </div>
    )
}
