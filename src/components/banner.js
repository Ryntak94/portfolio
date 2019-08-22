import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const BannerComponent = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background: #2A2A2A;
    color: white;
    font-size: 1.7em;
    font-weight: bold;
    flex-direction: column;
    padding: 0 15%;
    font-family: "Lucida Console", Monaco, monospace;
    line-height: 125%;
`

class Banner extends Component {
    render()    {
        return  (
            <BannerComponent>
                My name is Ryan Matthews and I'm a Full Stack Web Developer, born in Houston and based in Atlanta. I'm currently a Team Lead for Lambda School, with a focus on growth for myself and others.
            </BannerComponent>
        )
    }
}

export default Banner;
