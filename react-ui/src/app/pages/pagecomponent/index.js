import React, { Component } from 'react';

import MainLayout from '../../layouts/default';

import './index.css'

export default class PageComponent extends Component {
    render() {
        return (
            <MainLayout>
                <div className='content'>
                    Content
                </div>
            </MainLayout>
        )
    }
}
