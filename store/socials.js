'use client';

import { createSlice } from '@reduxjs/toolkit';


const  initialState = {
    socials: {
        github: {url:"https://github.com/HanikJain", isValid:true, isEmpty: false},
        linkedIn: {url:"https://www.linkedin.com/in/hanik-jain-19a211144/", isValid:true, isEmpty: false},
        facebook: {url:"", isValid:true, isEmpty: true},
        instagram: {url:"", isValid:true, isEmpty: true},
        dribble: {url:"", isValid:true, isEmpty: true},
        behance: {url:"", isValid:true, isEmpty: true},
      }
}

  
const socialSlice = createSlice({
    name: 'social',
    initialState,
    reducers: {
        updateSocial(state, action) {
            state.socials = action.payload;
        },
    }

});

const socialActions = socialSlice.actions;

export default socialSlice;
export { socialActions };