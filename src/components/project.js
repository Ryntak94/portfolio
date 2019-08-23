import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const ProjectContainer = styled.div`
    width: 200px;
    height: 300px;
    color: black;
    z-index: 100;
    background: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1%;
    border: 1px solid #232b2b;
`

class Project extends Component {
    render()    {
        console.log(this.props)
        return  (
            <ProjectContainer>
                {this.props.pName}
            </ProjectContainer>
        )
    }
}

export default Project;
