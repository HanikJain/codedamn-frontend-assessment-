'use client';

import { createSlice } from '@reduxjs/toolkit';


const  initialState = {
    portfolio: {
        PLAYGROUNDS: [
            {
                id: '0',
                title: 'Playground title 1',
                languages: ['HTML/CSS'],
                date: new Date(),
                contributers: [
                    {
                        id: '0',
                        name: 'John',
                        imageURL: "https://w7.pngwing.com/pngs/122/453/png-transparent-computer-icons-user-profile-avatar-female-profile-heroes-head-woman-thumbnail.png"
                    },
                    {
                        id: '1',
                        name: 'Dev',
                        imageURL: "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                    }
                ]
            },
            {
                id: '1',
                title: 'Playground title 2',
                languages: ['HTML/CSS'],
                date: new Date(),
                contributers: [
                    {
                        id: '0',
                        name: 'John Smith',
                        imageURL: "https://thumbs.dreamstime.com/z/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-46846328.jpg"
                    },
                    {
                        id: '1',
                        name: 'Dev Prasad',
                        imageURL: "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                    }
                ]
            },
            {
                id: '2',
                title: 'Playground title 3',
                languages: ['HTML/CSS'],
                date: new Date(),
                contributers: [
                    {
                        id: '0',
                        name: 'John Smith',
                        imageURL: "https://thumbs.dreamstime.com/z/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-46846328.jpg"
                    },
                    {
                        id: '1',
                        name: 'Dev Prasad',
                        imageURL: "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                    }
                ]
            },
            {
                id: '3',
                title: 'Playground title 4',
                languages: ['HTML/CSS'],
                date: new Date(),
                contributers: [
                    {
                        id: '0',
                        name: 'John Smith',
                        imageURL: "https://thumbs.dreamstime.com/z/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-46846328.jpg"
                    },
                    {
                        id: '1',
                        name: 'Dev Prasad',
                        imageURL: "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                    }
                ]
            }
        ],
        PROJECTS:[
            {
                id: '0',
                coverImage: "https://static-cse.canva.com/blob/651316/8HowtomakeaFacebookcoverCanva.e1755ff9.png",
                title: 'Project title 1',
                badges:  ["Badge 1", "Badge 2"],
                languages: ['HTML/CSS'],
                date: new Date(),
                contributers: [
                    {
                        id: '0',
                        name: 'John',
                        imageURL: "https://w7.pngwing.com/pngs/122/453/png-transparent-computer-icons-user-profile-avatar-female-profile-heroes-head-woman-thumbnail.png"
                    },
                    {
                        id: '1',
                        name: 'Dev',
                        imageURL: "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                    }
                ]
            },
            {
                id: '1',
                coverImage: "https://marketplace.canva.com/EAE6WTyrSQ0/2/0/1600w/canva-light-beige-sleek-and-simple-blogger-personal-website--7Q4-7tyJj4.jpg",
                title: 'Project title 2',
                badges:  ["Badge 3", "Badge 4"],
                languages: ['HTML/CSS'],
                date: new Date(),
                contributers: [
                    {
                        id: '0',
                        name: 'John Smith',
                        imageURL: "https://thumbs.dreamstime.com/z/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-46846328.jpg"
                    },
                    {
                        id: '1',
                        name: 'Dev Prasad',
                        imageURL: "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                    }
                ]
            },
            {
                id: '2',
                coverImage: "https://marketplace.canva.com/EAFC6Y3bMxs/1/0/1600w/canva-freelancing-promotion-facebook-cover-photo-t25jhMuGMZ0.jpg",
                title: 'Project title 3',
                badges:  ["Badge 5", "Badge 6"],
                languages: ['HTML/CSS'],
                date: new Date(),
                contributers: [
                    {
                        id: '0',
                        name: 'John Smith',
                        imageURL: "https://thumbs.dreamstime.com/z/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-46846328.jpg"
                    },
                    {
                        id: '1',
                        name: 'Dev Prasad',
                        imageURL: "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                    }
                ]
            },
            {
                id: '3',
                coverImage:"https://marketplace.canva.com/EAE72mJ4Q8E/2/0/1600w/canva-white-grey-black-light-classic-minimal-design---branding-portfolio-website-H_GKQGVlDz0.jpg",
                title: 'Project title 4',
                badges:  ["Badge 7", "Badge 8"],
                languages: ['HTML/CSS'],
                date: new Date(),
                contributers: [
                    {
                        id: '0',
                        name: 'John Smith',
                        imageURL: "https://thumbs.dreamstime.com/z/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-46846328.jpg"
                    },
                    {
                        id: '1',
                        name: 'Dev Prasad',
                        imageURL: "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                    }
                ]
            }
        ]
    },
    
}

  
const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        updatePortfolioPlaygrounds(state, action) {
            state.portfolio.PLAYGROUNDS = action.payload;
        },
        updatePortfolioProjects(state, action) {
            state.portfolio.PROJECTS = action.payload;
        },

    }

});

const portfolioActions = portfolioSlice.actions;

export default portfolioSlice;
export { portfolioActions };