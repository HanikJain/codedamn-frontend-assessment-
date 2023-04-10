'use client';

import { createSlice } from '@reduxjs/toolkit';


const  initialState = {
    profile: {
        name: { value:"Hanik Jain", isValid: true},
        about: { value:null, isValid: null},
        profession: { value:"Student", isValid: true},
        dob: { value:null, isValid: null},
        gender: { value:"Male", isValid: true},
        streaks:{show: false},
        xp:{show: false},
        achievements:{show: false},
    },
    image: {
        value: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
        isValid: true
    },
}

  
const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateProfile(state, action) {
            state.profile = action.payload;
        },

        updateImage(state, action) {
            state.image = action.payload;
        },

        deleteImage(state, action) {
            state.image = {
                value: "https://htmlcolorcodes.com/assets/images/colors/neon-orange-color-solid-background-1920x1080.png",
                isValid: false
            }
        }
    }

});

const profileActions = profileSlice.actions;

export default profileSlice;
export { profileActions };