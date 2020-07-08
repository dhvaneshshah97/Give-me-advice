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

    fetchAdvice = async () => {
        const response = await axios.get('https://api.adviceslip.com/advice');
        if (response.data) {
            const { advice } = response.data.slip;
            this.setState({
                advice,
            });
        } else {
            console.log(response.error);
        }
    }

    componentDidMount() {
        this.fetchAdvice();
    }

    render() {
        const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>Give me advice!</span>
                    </button>
                </div>
            </div>
        );
    }
}
