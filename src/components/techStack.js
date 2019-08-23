import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faHtml5, faCss3Alt, faNode, faLess, faJsSquare, faJs, faGithub, faGit } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Icon, InlineIcon } from '@iconify/react';
import reduxIcon from '@iconify/icons-logos/redux';
import jqueryIcon from '@iconify/icons-logos/jquery'
import expressIcon from '@iconify/icons-logos/express'
import knexIcon from '@iconify/icons-logos/knex'
import sqliteIcon from '@iconify/icons-logos/sqlite'
import postgresqlIcon from '@iconify/icons-logos/postgresql'
import graphqlIcon from '@iconify/icons-logos/graphql'
import pythonIcon from '@iconify/icons-logos/python'
import djangoIcon from '@iconify/icons-logos/django'
import flaskIcon from '@iconify/icons-logos/flask'

const Container = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

class TechStack extends Component {
    onHoverHandler = (e) =>  {
        console.log(e.target)
    }
    render()    {
        return  (
            <Container>
                <FontAwesomeIcon icon={faHtml5} size="2x"/>
                <FontAwesomeIcon icon={faCss3Alt} size="2x"/>
                <FontAwesomeIcon icon={faLess} size="2x"/>
                <FontAwesomeIcon icon={faJs} size="2x"/>
                <Icon icon={jqueryIcon} width="56px" height="49px" />
                <FontAwesomeIcon icon={faReact} size="2x"/>
                <Icon icon={reduxIcon} width="32px" height="28px" />
                <FontAwesomeIcon icon={faNode} size="2x"/>
                <Icon icon={expressIcon} width="56px" height="48px" />
                <Icon icon={knexIcon} width="40px" height="35px"/>
                <Icon icon={graphqlIcon} width="40px" height="35px"/>
                <Icon icon={pythonIcon} width="40px" height="35px"/>
                <Icon icon={djangoIcon} width="40px" height="35px"/>
                <Icon icon={flaskIcon} width="40px" height="35px"/>
                <Icon icon={sqliteIcon} width="56px" height="48px"/>
                <Icon icon={postgresqlIcon} width="40px" height="35px"/>
                <FontAwesomeIcon icon={faGit} size="2x"/>
                <FontAwesomeIcon icon={faGithub} size="2x"/>
            </Container>
        )
    }
}

export default TechStack;
