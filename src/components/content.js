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
    position: absolute;
`

const ContentContainer2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FECACC;
    height: 600px;
`
const BackgroundTriangle2 = styled.div`
    -webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 0);
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
    height: 600px;
    background: #DAF3EF;
    width:100%;
    position: absolute;
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
    }

    render()    {
        return  (
            <>
            {this.props.flipped ? (
                <ContentContainer2>
                    <Info>
                        {
                            this.props.projects.map(project =>  {
                                return <Project pName={project.name} />
                            })
                        }
                    </Info>
                    <BackgroundTriangle2/>
                </ContentContainer2>
            )   : (
                <ContentContainer>
                    <Info>
                        {
                            this.props.projects.map(project =>  {
                                return <Project pName={project.name} />
                            })
                        }
                    </Info>
                    <BackgroundTriangle/>
                </ContentContainer>
            )
        }
            </>
        )
    }
}

export default Content;
