import React, {useState, useReducer} from 'react'
import { useDispatch, useSelector } from "react-redux";
import styles from '../styles/Socials.module.css'

import { useLeavePageConfirmation } from '../hooks/useLeavePageConfirmation';

import NavigationTab from '../components/UI/NavigationTab.jsx'
import MyButton from '../components/UI/MyButton.jsx'
import InputBox from '../components/UI/InputBox';
import NavigationBar from '../components/UI/NavigationBar';

import {socialActions} from "../store/socials"

const activeURL = "/socials"
const navigationItems = [
    { name: "Profile", url: "/profile" },
    { name: "Socials", url: "/socials" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Resume", url: "/resume/edit" }
]


function dataReducer(state, action) {
  switch (action.type) {
    case "GITHUB":
      return {
        ...state,
        github: action.value
    }
    case "LINKEDIN":
      return {
        ...state,
        linkedIn: action.value
    }
    case "FACEBOOK":
      return {
        ...state,
        facebook: action.value
    }
    case "INSTAGRAM":
      return {
        ...state,
        instagram: action.value
    }
    case "DRIBBLE":
      return {
        ...state,
        dribble: action.value
    }
    case "BEHANCE":
      return {
        ...state,
        behance: action.value
    }

    default:
      return state;
  }
}


export default function Social() {
  const socialData = useSelector(state => state.socials.socials);
  const dispatch = useDispatch();

  const [data, dataDispatch] = useReducer(dataReducer, socialData);
  const [changesOnPage, setChangesOnPage] = useState(false);
  useLeavePageConfirmation(changesOnPage);


  function validateURL(url){
    setChangesOnPage(true);
    const urlRegex =  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

    if(url.match(urlRegex)) {
      return {isValid: true, isEmpty: false};
    }else  {
      if(url.trim() === '') {
        return {isValid: true, isEmpty: true};
      }
      return {isValid: false, isEmpty: false};;
    } 
  }

  function githubChangeHandler(e){
    const url = e.target.value;
    const validatedURL = validateURL(url);
    if(validatedURL.isValid){
      if(validatedURL.isEmpty){
        dataDispatch({type:"GITHUB", value: {url, isValid: true, isEmpty: true}});
      } else {
        dataDispatch({type:"GITHUB", value: {url, isValid: true, isEmpty: false}});
      }
    }else {
      dataDispatch({type:"GITHUB", value: {url, isValid: false, isEmpty: false}});
    }
  }

  function linkedInChangeHandler(e){
    const url = e.target.value;
    const validatedURL = validateURL(url);
    if(validatedURL.isValid){
      if(validatedURL.isEmpty){
        dataDispatch({type:"LINKEDIN", value: {url, isValid: true, isEmpty: true}});
      } else {
        dataDispatch({type:"LINKEDIN", value: {url, isValid: true, isEmpty: false}});
      }
    }else {
      dataDispatch({type:"LINKEDIN", value: {url, isValid: false, isEmpty: false}});
    }
  }

  function facebookChangeHandler(e){
    const url = e.target.value;
    const validatedURL = validateURL(url);
    if(validatedURL.isValid){
      if(validatedURL.isEmpty){
        dataDispatch({type:"FACEBOOK", value: {url, isValid: true, isEmpty: true}});
      } else {
        dataDispatch({type:"FACEBOOK", value: {url, isValid: true, isEmpty: false}});
      }
    }else {
      dataDispatch({type:"FACEBOOK", value: {url, isValid: false, isEmpty: false}});
    }
  }

  function instagramChangeHandler(e){
    const url = e.target.value;
    const validatedURL = validateURL(url);
    if(validatedURL.isValid){
      if(validatedURL.isEmpty){
        dataDispatch({type:"INSTAGRAM", value: {url, isValid: true, isEmpty: true}});
      } else {
        dataDispatch({type:"INSTAGRAM", value: {url, isValid: true, isEmpty: false}});
      }
    }else {
      dataDispatch({type:"INSTAGRAM", value: {url, isValid: false, isEmpty: false}});
    }

  }

  function dribbleChangeHandler(e){
    const url = e.target.value;
    const validatedURL = validateURL(url);
    if(validatedURL.isValid){
      if(validatedURL.isEmpty){
        dataDispatch({type:"DRIBBLE", value: {url, isValid: true, isEmpty: true}});
      } else {
        dataDispatch({type:"DRIBBLE", value: {url, isValid: true, isEmpty: false}});
      }
    }else {
      dataDispatch({type:"DRIBBLE", value: {url, isValid: false, isEmpty: false}});
    }
  }
    
  function behanceChangeHandler(e){
    const url = e.target.value;
    const validatedURL = validateURL(url);
    if(validatedURL.isValid){
      if(validatedURL.isEmpty){
        dataDispatch({type:"BEHANCE", value: {url, isValid: true, isEmpty: true}});
      } else {
        dataDispatch({type:"BEHANCE", value: {url, isValid: true, isEmpty: false}});
      }
    }else {
      dataDispatch({type:"BEHANCE", value: {url, isValid: false, isEmpty: false}});
    }
  }


  function validatedSave(data) {
      const {github, linkedIn, facebook, instagram, dribble, behance} = data;
      if(github.isValid && linkedIn.isValid && instagram.isValid 
        && behance.isValid && facebook.isValid && dribble.isValid) {
          return true;
        }
        return false;
    }

  function saveHandler(){
      if(validatedSave(data)){
        dispatch(socialActions.updateSocial(data));
        setChangesOnPage(false);
        window.confirm("Saved");
      } else {
        window.confirm("Not Saved - Invalid URl");
      }
  }




  return (
    <div className={styles.container}>
    <div className={styles.navigationTabContainer}> 
        <NavigationTab navigationItems={navigationItems} activeURL={activeURL} />
    </div>

    <div class={styles.socialContainer}> 
          <div class={styles.navigationBarContainer}> 
              <NavigationBar navigationItems={navigationItems} activeURL={activeURL} />
          </div>

        <InputBox 
          onChange={githubChangeHandler}
          label="Github"
          type="text"
          value={data.github.url}
          placeholder="Your Github url"
          isValid ={data.github.isValid}
          errorMessage="Invalid url"
          id="1"
          autoFocus={false}
          required={false}
          key="1"
        />

        <InputBox 
          onChange={linkedInChangeHandler}
          label="LinkedIn"
          type="text"
          value={data.linkedIn.url}
          placeholder="Your LinkedIn url"
          isValid ={data.linkedIn.isValid}
          errorMessage="Invalid url"
          id="2"
          autoFocus={false}
          required={false}
          key="2"
        />
        

        <InputBox 
          onChange={facebookChangeHandler}
          label="Facebook"
          type="text"
          placeholder="Your facebook url"
          value={data.facebook.url}
          isValid ={data.facebook.isValid}
          errorMessage="Invalid url"
          id="3"
          autoFocus={false}
          required={false}
          key="3"
        />

        <InputBox 
          onChange={instagramChangeHandler}
          label="Instagram"
          type="text"
          value={data.instagram.url}
          placeholder="Your Instagram url"
          isValid ={data.instagram.isValid}
          errorMessage={`Invalid url`}
          id="4"
          autoFocus={false}
          required={false}
          key="4"
        /> 


        <InputBox 
          onChange={dribbleChangeHandler}
          label="Dribble"
          type="text"
          value={data.dribble.url}
          errorMessage="Invalid url"
          isValid ={data.dribble.isValid}
          placeholder="Your dribble url"
          id="5"
          autoFocus={false}
          required={false}
          key="5"
        />  

        <InputBox 
          onChange={behanceChangeHandler}
          label="Behance"
          type="text"
          value={data.behance.url}
          placeholder="Your behance url"
          isValid ={data.behance.isValid}
          errorMessage="Invalid url"
          id="6"
          autoFocus={false}
          required={false}
          key="6"
        /> 
        

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


    {/* <Modal
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

    </Modal> */}

</div>
  )
}
