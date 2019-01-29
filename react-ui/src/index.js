import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'

import './index.css'

import 'bootstrap/dist/css/bootstrap.css'

import App from './app/app'

import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

import { IntlProvider, addLocaleData } from 'react-intl'
import fr from 'react-intl/locale-data/fr'
import messages from './app/translations/locales/fr'
const locale = 'fr'
addLocaleData(fr)

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

ReactDOM.render(
    <IntlProvider locale={ locale } messages={ messages } key={ locale }>
        <Provider >
            <Router history={history}>
                <App history={history} />
            </Router>
        </Provider>
    </IntlProvider>,
    document.getElementById('app')
);
