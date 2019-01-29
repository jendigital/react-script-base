import React, { Component } from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'

import PageComponent from './pages/pagecomponent'
import NotFound from './pages/notfound'

import './app.css'

class App extends Component {
    render() {
        return (
            <div id="container">
                <Switch>
                    <Route exact path='/' render={() => <PageComponent store={this.props.store} history={this.props.history} />} />
                    <Route exact path='/pagecomponent' render={() => <PageComponent store={this.props.store} history={this.props.history} />} />
                    <Route path='*' render={() => <NotFound store={this.props.store} history={this.props.history} />} />
                </Switch >
            </div>
        )
    }
}

export default App
