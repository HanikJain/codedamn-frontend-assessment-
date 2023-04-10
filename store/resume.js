'use client';

import { createSlice } from '@reduxjs/toolkit';


const  initialState = {
    skills: ["HTML", "CSS", "Javascript", "React", "NextJS", "Nodejs", "MongoDB", "MySQL", "Docker"],
    workExperience:[],
    education:[],
}

  
const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        updateresume(state, action) {
            state.resume = action.payload;
        },
        addWorkExp(state, action) {
            state.workExperience.push(action.payload);
        },
        updateWorkExp(state, action) {
            state.workExperience = action.payload;
        },

        updateEducation(state, action) {
            state.education = action.payload;
        },

        addEducation(state, action) {
            state.education.push(action.payload);
        },

        updateSkills(state, action) {
            state.resume = {
                ...state,
                skills: action.payload
            };
        }
    }

});

const resumeActions = resumeSlice.actions;

export default resumeSlice;
export { resumeActions };