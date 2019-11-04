import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const ProjectContainer = styled.img`
    width: 450px;
    height: 310px;
`

class Project extends Component {
    render()    {
        console.log(this.props.url)
        return  (
            <a href={this.props.url} target="_blank"><ProjectContainer src={this.props.image}/></a>
        )
    }
}

export default Project;
