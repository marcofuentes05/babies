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

store.subscribe(() => console.log(store.getState()))

store.dispatch(actions.addBaby('Marco', 'Rendon'))
store.dispatch(actions.addBaby('Marco', 'Fuentes'))
// store.dispatch(actions.addEvent(0, 'pecho','nada mal', new Date() ))
// store.dispatch(actions.addEvent(0, 'pecho', 'nada mal', new Date()))

// store.dispatch(actions.addEvent(0, 'siesta', 'nada mal', new Date()))
// store.dispatch(actions.addEvent(0, 'popo', 'nada mal', new Date()))

// store.dispatch(actions.selectBaby(0))

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