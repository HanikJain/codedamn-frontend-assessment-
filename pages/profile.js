import { useState, useReducer } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { useLeavePageConfirmation } from '../hooks/useLeavePageConfirmation';

import styles from '../styles/profile.module.css'
import NavigationTab from '../components/UI/NavigationTab.jsx'
import MyButton from '../components/UI/MyButton.jsx'
import ProfilePic from "../components/UI/ProfilePic";
import Modal from "../components/UI/Modal";
import InputBox from '../components/UI/InputBox';
import Toggle from '../components/UI/Toggle.jsx';
import NavigationBar from '../components/UI/NavigationBar';

import {profileActions} from "../store/profile"


function dataReducer(state, action) {
  switch (action.type) {
    case "IMAGE_URL":
      return {
        ...state,
        imageURL: action.value
    }
    case "NAME":
      return {
        ...state,
        name: action.value
    }
    case "ABOUT":
      return {
        ...state,
        about: action.value
    }
    case "PROFESSION":
      return {
        ...state,
        profession: action.value
    }
    case "DOB":
      return {
        ...state,
        dob: action.value
    }
    case "GENDER":
      return {
        ...state,
        gender: action.value
    }
    case "STREAKS":
      return {
        ...state,
        streaks: action.value
    }
    case "XP":
      return {
        ...state,
        xp: action.value
    }
    case "ACHIEVEMENTS":
      return {
        ...state,
        achievements: action.value
    }
    default:
      return {...state}
  }
  
}

const activeURL = "/profile"
const navigationItems = [
    { name: "Profile", url: "/profile" },
    { name: "Socials", url: "/socials" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Resume", url: "/resume/edit" }
]


export default function Profile() {

  const profile = useSelector(state => state.profile.profile);
  const image = useSelector(state => state.profile.image);
  const dispatch = useDispatch();
  

  const [data, dispatchData] = useReducer(dataReducer, profile);
  const [imageView, setImageView] = useState(image)
  const [showImageModal, setShowImageModal] = useState(false);


  const [changesOnPage, setChangesOnPage] = useState(false);
  useLeavePageConfirmation(changesOnPage);


  function uploadImageHandler(e) {
    setShowImageModal(true)
  }

  function deleteImageHandler(e) {
    dispatch(profileActions.deleteImage())
  }

 
  function imageUrlChangeHandler(e){
    setChangesOnPage(true);
    const url = e.target.value;
    const urlRegex =  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

    if(url.match(urlRegex)) {
      setImageView({value: url, isValid: true});
    }else {
      setImageView({value: url, isValid: false});
    } 
  }

  function saveImageHandler(){
    if(imageView.isValid) {
      dispatch(profileActions.updateImage(imageView));
      setShowImageModal(false);
    } else {
      window.confirm("Not Saved - Invalid URl");
    }
  }


  function validate(type, value){
    setChangesOnPage(true);
    if(value.trim() === '') {
      dispatchData({type: type, value: {value: value, isValid: false}})
    } else {
      dispatchData({type: type, value: {value: value, isValid: true}})
    }
  }

  function nameChangeHandler(e) {
    validate("NAME", e.target.value)
  }

  function aboutChangeHandler(e){
    validate("ABOUT", e.target.value)
  }

  function professionChangeHandler(e){
    validate("PROFESSION", e.target.value)
  }

  function dateChangeHandler(e) {
    setChangesOnPage(true);
    const date = e.target.value;
    let year = date.split('-')[0];
    year = parseInt(year)
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    if(age < 13) {
      dispatchData({type: "DOB", value: {value: date, isValid: false}})
      } else {
        dispatchData({type: "DOB", value: {value: date, isValid: true}})
    }
  }

  function genderChangeHandler(e){
    validate("GENDER", e.target.value)
  }

  function streaksToggleHandler(e){
    setChangesOnPage(true);
    dispatchData({type: "STREAKS", value: {show: e.target.checked}});
  }

  function xpToggleHandler(e){
    setChangesOnPage(true);
    dispatchData({type: "XP", value: {show: e.target.checked}});
  }

  function achievementsToggleHandler(e){
    setChangesOnPage(true);
    dispatchData({type: "ACHIEVEMENTS", value: {show: e.target.checked}});
  }

  function validateSubmitHandler(){
    const {name, about, profession, dob, gender } = data;
    if(((name.isValid) && (about.isValid && profession.isValid ))
      && (dob.isValid && gender.isValid)) {
        return true;
      }
      return false

  }

  function saveHandler(){
    if(validateSubmitHandler()){
      dispatch(profileActions.updateProfile(data));
      setChangesOnPage(state => {return state = false});
      window.confirm("Saved");
    }  else {
      window.confirm("Not Saved - Fill all details");
    }
  }
  
  function resetHandler(e){
      const data = profile;
      dispatch(profileActions.updateProfile(data));
      setChangesOnPage(state => {return state = false});
      window.confirm("Reset successful");
  }



  return (
    <div className={styles.container}>
        <div className={styles.navigationTabContainer}> 
            <NavigationTab navigationItems={navigationItems} activeURL={activeURL} />
        </div>

        <div class={styles.profileContainer}> 
            <div class={styles.navigationBarContainer}> 
                <NavigationBar navigationItems={navigationItems} activeURL={activeURL} />
            </div>

            <div class={styles.profileImageContainer}>
              <ProfilePic
                src={image.value}
                alt="Profile Picture"
                width="72px"
                height="72px"
                />
              <MyButton
                style={{backgroundColor: "#4F46E5", color: "#FFFFFF", border: "1px solid #4F46E5"}} 
                onClick={uploadImageHandler}
                text={"Upload a new Image"}
                key="2"
               />
               <MyButton
                style={{backgroundColor: "#F4F4F5", color: "#000", border: "1px solid #F4F4F5"}} 
                onClick={deleteImageHandler}
                text={"Delete"}
                key="3"
               />
            </div>

            <InputBox 
              onChange={nameChangeHandler}
              label="Display name"
              type="text"
              placeholder="Enter your display name"
              caption="This is the name that will be displayed on your profile"
              value= {data.name.value}
              isValid={data.name.isValid}
              errorMessage="Invalid Input"
              id="1"
              autoFocus={false}
              required={false}
              key="1"
            />

            <InputBox 
              onChange={aboutChangeHandler}
              label="About"
              type="textarea"
              placeholder="With a few words, tell us about yourself"
              caption=""
              value= {data.about.value}
              isValid={data.about.isValid}
              errorMessage="Invalid description"
              id="2"
              autoFocus={false}
              required={false}
              key="2"
            />
            

            <InputBox 
              onChange={professionChangeHandler}
              label="Profession"
              type="dropdown"
              caption="Choose your profession"
              value={data.profession.value}
              isValid={data.profession.isValid}
              errorMessage="Invalid Input"
              id="3"
              items={["Student", "Teacher", "Working professional"]}
              autoFocus={false}
              required={false}
              key="3"
            />

            <InputBox 
              onChange={dateChangeHandler}
              label="Date of Birth"
              type="Date"
              caption="Your age must be atleast 13 years old to use this service."
              value= {data.dob.value}
              isValid={data.dob.isValid}
              errorMessage={`Your age must be atleast 13 years old to use this service.`}
              id="4"
              autoFocus={false}
              required={false}
              key="4"
            /> 


            <InputBox 
              onChange={genderChangeHandler}
              label="Gender"
              type="dropdown"
              caption=""
              value= {data.gender.value}
              isValid={data.gender.isValid}
              errorMessage="Invalid Input"
              id="5"
              items={["Male", "Female", "Other"]}
              autoFocus={false}
              required={false}
              key="5"
            />  
            
            <div className={styles.container2}>
              <div class={styles.title2}>Section visibility</div>
              <div class={styles.desc2}>Select which sections and content should show on your profile page.</div>
              <div className={styles.toggleContainer}>
                <Toggle
                  id={1}
                  title={"Streaks"}
                  description={"Shows your streaks to other users"}
                  onChange={streaksToggleHandler}
                  checked={data.streaks.show}
                  key="1"
                />

                <Toggle
                  id={2}
                  title={"XP"}
                  description={"Shows the XP you have earned"}
                  onChange={xpToggleHandler}
                  checked={data.xp.show}
                  key="2"
                />

                <Toggle
                  id={3}
                  title={"Achievement badges"}
                  description={"Shows your relative percentile and proficiency"}
                  onChange={achievementsToggleHandler}
                  checked={data.achievements.show}
                  key="3"
                />
              </div>
            </div>


            <div className={styles.btnContainer}>

                {/* <MyButton
                style={{backgroundColor: "#F4F4F5", color: "#000", border: "1px solid #F4F4F5"}} 
                onClick={resetHandler}
                text={"Reset"}
               /> */}


              <MyButton
                style={{backgroundColor: "#4F46E5", color: "#FFFFFF", border: "1px solid #4F46E5"}} 
                onClick={saveHandler}
                text={"Save changes"}
               />

            </div>
            
        </div>


        <Modal
          onClose={() => setShowImageModal(false)}
          show={showImageModal}
          title="Modal Title"
        >
          <InputBox 
              onChange={imageUrlChangeHandler}
              label="Enter Image URL"
              type="text"
              placeholder="Enter Image URL"
              caption="This image will be displayed on your profile"
              isValid={image.isValid}
              errorMessage="Invalid URL"
              id="1"
              autoFocus={true}
              required={true}
            />
              <MyButton
                style={{backgroundColor: "#4F46E5", color: "#FFFFFF", border: "1px solid #4F46E5", marginLeft: "16px"}} 
                onClick={saveImageHandler}
                text={"Upload Image"}
                
               />

        </Modal>

    </div>
  )
}
