import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLink } from '@fortawesome/free-brands-svg-icons'
import { Icon, InlineIcon } from '@iconify/react';
import linkIcon from '@iconify/icons-fa-solid/link';
import Project from './project.js'

const DescriptionContainer = styled.div`
    height: 525px;
    box-sizing: border-box;
    /* border-bottom: solid 1px gray; */
    display: flex;
    align-items: center;
    padding: 5%;
    background: #2A2A2A;
    justify-content: space-between;
`
const DescriptionContainer2 = styled.div`
    height: 525px;
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
width: 45%;
color: white;
font-size: 1em;
font-weight: 550;
flex-direction: column;
/* padding: 0 15%; */
font-family: "Lucida Console", Monaco, monospace;
line-height: 150%;`

const Resources = styled.div`
display: flex;
flex-direction: column;

`

const Links = styled.div`
display: flex;
width: 100px;
align-self: center;
justify-content: space-around;
margin-top: 1%
`

const Link = styled.a`
color: black
margin: 100px 0
`

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
                            <DescriptionContainer id={`${project.id}`}>
                                <Resources>
                                    <Project image={project.image} pName={project.name} url={project.url}/>
                                    <Links>
                                        <div><Link href={project.github} target="_blank"><FontAwesomeIcon icon={faGithub} size="2x"/></Link></div>
                                        <div><Link href={project.url} target="_blank"><Icon icon={linkIcon} width="42px" height="35px" /></Link></div>
                                    </Links>
                                </Resources>
                                <DescriptionInfo><h1>{project.name}</h1>{project.description}</DescriptionInfo>
                            </DescriptionContainer>
                        )
                    }   else {
                        return (
                            <DescriptionContainer2 id={`${project.id}`}>
                            <Resources>
                                <Project image={project.image} pName={project.name} url={project.url}/>
                                <Links>
                                    <div><Link href={project.github} target="_blank"><FontAwesomeIcon icon={faGithub} size="2x"/></Link></div>
                                    <div><Link href={project.url} target="_blank"><Icon icon={linkIcon} width="42px" height="35px" /></Link></div>
                                </Links>
                            </Resources>
                                <DescriptionInfo><h1>{project.name}</h1>{project.description}</DescriptionInfo>
                            </DescriptionContainer2>
                        )
                    }
                })}
            </div>
        )
    }
}

export default Description;
