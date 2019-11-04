import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const BannerComponent = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background: lightgray;
    color: #2A2A2A;
    font-size: 1.3em;
    font-weight: bold;
    flex-direction: column;
    padding: 0 15%;
    font-family: "Lucida Console", Monaco, monospace;
    line-height: 125%;
`

class TeamLeadProjects extends Component {
    render()    {
        return  (
            <BannerComponent>
                The projects you are about to see are ones where I primarily worked as a Team Lead. In this process I assisted the team
                in the development process and helped them learn to work as a team. I did help with technical issues, but the majority of
                my focus was on meeting deadlines, ensuring team members were contributing, and facilitating communications between the
                team and management.
            </BannerComponent>
        )
    }
}

export default TeamLeadProjects;
