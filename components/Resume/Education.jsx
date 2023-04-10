import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resumeActions } from '../../store/resume'
import styles from "./WorkExperience.module.css"
import AddDataModal from "./AddDataModal.jsx"
import Card from "../UI/Card.jsx"

import GridLayout from "../UI/GridLayout";
import Modal from "../UI/Modal";


import { Add, Trashbin } from "../svgs/index";

export default function Education() {
    const resume = useSelector(state => state.resume);
    const eduData = resume.education;
    const dispatch = useDispatch();

    const [deleteItems, setDeleteItems] = useState([]);
    const [activeModal, setActiveModal] = useState(false);


    function removeItem(id) {
        return deleteItems.filter(i => i !== id);
    }


    function addHandler() {
        setActiveModal(true);
    }

    function selectHandler(e, selected) {
        const id = e.target.id.split('_')[1];

        if (selected) {
            setDeleteItems(state => [...state, id]);
        } else {
            const data = removeItem(id)
            setDeleteItems(data)
        }
    }


    function deleteHandler() {
        function idSorter(arr) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id !== i) {
                    arr[i].id = i;
                }
            }

            return arr;
        }

        function matchId(id, array) {
            for (let a of array) {
                if (id == a) return true;
            }
            return false;
        }

        function removeItem(arr, deleteItems) {
            let updateArray = [];

            for (let i = 0; i < arr.length; i++) {
                let matched = matchId(arr[i].id, deleteItems);

                if (!matched) {
                    updateArray.push(arr[i]);
                }
            }

            return updateArray;
        }
        const confirm = window.confirm("Are you sure you want to delete this?");
        if (confirm) {

            const updatedData = removeItem(eduData, deleteItems);

            const sortedData = idSorter(structuredClone(updatedData));

            dispatch(resumeActions.updateEducation(sortedData));
            setDeleteItems([]);
            console.log(sortedData);
        }
    }


    function renderData(data) {
        const id = "EDU_" + data.id;
        return <Card
            type={"checkbox"}
            id={id}
            key={id}
            title={data.title.value}
            location={data.location.value}
            title2={data.title2.value}
            startDate={data.startDate.value}
            curr={data.curr}
            endDate={data.endDate.value}
            about={data.about.value}
            onSelect={selectHandler}
        />
    }

    function saveHandler(data) {
        const id = eduData.length;
        let updateData = structuredClone({
            ...data,
            id: id,
        });

        dispatch(resumeActions.addEducation(updateData));
        window.confirm('Saved');

    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.header1}>
                    <span>Education</span>
                    <button className={styles.button} onClick={addHandler}><Add /></button>
                    {deleteItems.length > 0 && <button className={styles.button} onClick={deleteHandler}><Trashbin /></button>}
                </div>

            </div>

            <div className={styles.lightfont} >{eduData.length === 0 && "No Data"}</div>
            <GridLayout columnSize="1fr">
                {eduData.map(renderData)}
            </GridLayout>


            <Modal
                onClose={() => { setActiveModal(false) }}
                show={activeModal}
                title="Add Education"
            >
                <AddDataModal type="EDU" onSave={saveHandler} />
            </Modal>
        </div>
    )
}
