import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Header extends Component {
    render() {
        return (
            <div id='header'>
                <div id='title'>
                    <Link to='/'>
                        <h2>React JS Project</h2>
                    </Link>
                </div>
            </div>
        );
    }
}