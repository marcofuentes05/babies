import React from 'react';
import { Provider } from 'react-redux';
import {configureState} from './store.js';
import Babies from './components/babyForm';
import EventsPage  from './components/EventsPage';
import * as actions from './actions/index.js'
import filter from 'lodash/filter'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const store = configureState();

const App = () => (
    <Provider store = {store}>
        <Router>
            <button><Link to='/home'> {'Agrega un nuevo bebé'} </Link></button>
            <button><Link to= '/list'> {'Ve la lista de acciones de tus bebés'} </Link></button>

            <Switch>
                <Route path="/home">
                    <Babies />
                </Route>
                <Route path="/list">
                    <EventsPage />
                </Route>
            </Switch>

        </Router>
    </Provider>
)

export default App