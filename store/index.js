'use client';

import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profile";
import socialSlice from "./socials";
import portfolioSlice from "./portfolio";
import resumeSlice from "./resume";


const store = new configureStore({
    reducer: {
        profile: profileSlice.reducer,
        socials: socialSlice.reducer,
        portfolio: portfolioSlice.reducer,
        resume: resumeSlice.reducer,

    }
})

export default store;