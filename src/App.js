import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/banner.js'
import Content from './components/content.js'
import Description from  './components/description.js'
import TechStack from './components/techStack.js'
import PersonalProjects from './components/personalProjects.js'
import TeamLeadProjects from './components/teamLeadProjects.js'


class App extends Component {
    constructor(props)  {
        super(props)
        this.state = {
            projects: [
                {
                    image: require("./images/scratchAndMap.jpg"),
                    name: "Scratch And Map",
                    id: "scratchAndMap",
                    url: "https://scratchandmap.club",
                    github: "https://github.com/Lambda-School-Labs/labspt2-scratch-and-map",
                    description: `Scratch and map is an application that allows users to track travel destinations. This includes
                    Where they haven't been, where they have travelled through, where they have stopped to visit, and where they have lived.
                    The Tech Stack includes React, Redux, SCSS, React Router, Auth0, leaflet, Python, Flask, and PostGresQL. For deployment,
                    the backend is deployed on Heroku and the frontend is deployed on netlify. I primarily worked on the backend here learning python.`
                },
                {
                    image: require("./images/smithAndJones.jpg"),
                    name: "Smith And Jones",
                    id: "smithAndJones",
                    url: "http://sandj-ryntak94.surge.sh/",
                    github: "https://github.com/Ryntak94/User-Interface-Project-Week",
                    description: `This is a project for a fake architecture firm. This showcases my ability to follow designs and build a response web
                    application. I used HTML, LESS, and Flexbox.`
                },
                {
                    image: require("./images/lambdaNotes.png"),
                    name: "Lambda Notes",
                    id: "lambdaNotes",
                    url: "http://notes-app-ryntak94.surge.sh",
                    github: "https://github.com/Ryntak94/front-end-project-week",
                    description: `The Lambda Notes app is a basic note app that shows crud operations and some basic styling. I used React, Redux,
                    Styled Components, React Router, and axios.`
                },
                {
                    image: require("./images/recruiterRule.png"),
                    name: "Recruiter Rules",
                    id: "recruiterRules",
                    url: "https://recruiterrules.com/",
                    github: "https://github.com/labs13-recruiter-rule",
                    description: `Recruiter rules is a rule engine for recruiters. In the app, a user can log in and create a set of rules or conditions
                    under which a candidate's information can be sent to the contacts of their choice. Then, that user can input a candidate's
                    information and it will automatically be emailed to the correct person according to that person's own rules as specified in their
                    rule engine. We used React and Semantic UI on the frontend, Node and Express on the backend, Postgres for our database, and Firebase
                    OAuth for our authentication. We also implemented nodemailer and json-rules-engine. Notes: When creating a new contact for an engine,
                    Heroku might take some time to wake up. Give it up to 5 minutes. Also, check your spam folder if you don't find it in your inbox.
                    `
                },
                {
                    image: require("./images/roamly.jpg"),
                    name: "Roamly",
                    id: "roamly",
                    url: "https://roamly.app",
                    github: "https://github.com/labs14-travel-website",
                    description: `Roamly is a travel application that lets you `
                },
                {
                    image: require("./images/buildMyApp.png"),
                    name: "Build My App",
                    id: "buildMyApp",
                    url: "https://build-my-app-fe.onrender.com/",
                    github: "https://github.com/labs13-build-my-app",
                    description: `Build My App is a web app designed to connect people with ideas, and developers, so they can partner together and create
                    awesome projects. Users can create an account as either a developer or a stakeholder, and they can search through users to find the
                    perfect match. Stakeholders can post their project ideas, and developers can browse these and find one that's suitable for their
                    skills and expectations. We used React, Redux, React Router, Material UI, styled components, node, express, PostGresQL, Auth0, 
                    render.io for deploying the front end, and Heroku for deploying the back end.`
                }

            ]
        }
    }
    render()    {
        return (
            <div className="App">
            <Banner/>
            <PersonalProjects/>
            <Content projects={this.state.projects.slice(0,3)}/>
            <Description projects={this.state.projects.slice(0,3)}/>
            <TeamLeadProjects/>
            <Content flipped={true} projects={this.state.projects.slice(3)}/>
            <Description projects={this.state.projects.slice(3)}/>
            <TechStack/>
            </div>
        );
    }
}

export default App;
