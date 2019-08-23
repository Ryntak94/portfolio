import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import Project from './project.js'

const DescriptionContainer = styled.div`
    height: 500px;
    box-sizing: border-box;
    /* border-bottom: solid 1px gray; */
    display: flex;
    align-items: center;
    padding: 5%;
    background: #2A2A2A;
    justify-content: space-between;
`
const DescriptionContainer2 = styled.div`
    height: 500px;
    box-sizing: border-box;
    /* border-bottom: solid 1px gray; */
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 5%;
    background: #2A2A2A;
    justify-content: space-between;
`
const DescriptionInfo = styled.div`
width: 50%;
color: white;
font-size: 1em;
font-weight: bold;
flex-direction: column;
padding: 0 15%;
font-family: "Lucida Console", Monaco, monospace;
line-height: 125%;`

class Description extends Component {
    constructor(props)  {
        super(props);
    }

    render()    {
        return  (
            <div>
                {this.props.projects.map((project, index)    =>  {
                    if(index % 2 == 0)  {
                        return (
                            <DescriptionContainer>
                                <Project pName={project.name} />
                                <DescriptionInfo>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</DescriptionInfo>
                            </DescriptionContainer>
                        )
                    }   else {
                        return (
                            <DescriptionContainer2>
                                <Project pName={project.name} />
                                <DescriptionInfo>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</DescriptionInfo>
                            </DescriptionContainer2>
                        )
                    }
                })}
            </div>
        )
    }
}

export default Description;
