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

class PersonalProjects extends Component {
    render()    {
        return  (
            <BannerComponent>
                The following projects are ones that I worked on directly as a developer. I was either practicing and honing my skills or learning to
                to work on a team of developers.
            </BannerComponent>
        )
    }
}

export default PersonalProjects;
