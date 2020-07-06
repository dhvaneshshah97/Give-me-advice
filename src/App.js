import React, { Component } from 'react';
import './App.css'; 
import axios from 'axios';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            advice: '',
        }
    }

    componentDidMount() {
        console.log("hello");
    }

    render() {
        return (
            <div>
                <h1>APP</h1>
            </div>
        );
    }
}
