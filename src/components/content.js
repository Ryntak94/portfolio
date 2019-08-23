import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import Project from './project.js'

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FECACC;
    height: 600px;
`
const BackgroundTriangle = styled.div`
-webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 0);
clip-path: polygon(0% 0%, 0% 100%, 100% 0%);
height: 600px;
background: #DAF3EF;
width:100%;
/* width: 100px; */
/* background: blue; */
position: absolute;
/* z-index: 100; */
`
const Info = styled.div`
z-index: 1
display: flex;
width: 90%
justify-content: space-around;
`

class Content extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            projects: [
                {
                    name: "test 1"
                },
                {
                    name: "test 2"
                },
                {
                    name: "test 3"
                },
                {
                    name: "test 4"
                }
            ]
        }
    }
    render()    {
        return  (
            <ContentContainer>
                <Info>
                    {
                        this.state.projects.map(project =>  {
                            return <Project pName={project.name} />
                        })
                    }
                </Info>
            <BackgroundTriangle/>
            </ContentContainer>
        )
    }
}

export default Content;
