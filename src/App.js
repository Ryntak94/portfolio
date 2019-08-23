import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/banner.js'
import Content from './components/content.js'
import Description from  './components/description.js'

class App extends Component {
    constructor(props)  {
        super(props)
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
        return (
            <div className="App">
            <Banner/>
            <Content projects={this.state.projects}/>
            <Description projects={this.state.projects}/>
            </div>
        );
    }
}

export default App;
